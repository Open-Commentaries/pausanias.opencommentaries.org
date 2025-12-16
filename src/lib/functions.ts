import fs from 'node:fs';
import frontMatter from 'front-matter';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
// @ts-expect-error Typing isn't available for rehype-urls
import rehypeUrls from 'rehype-urls';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

import CTS_URN from './cts_urn';
import { default as namedEntities } from '../../static/named-entity-annotations/tlg0525.tlg001.perseus-grc2.entities.json' with { type: 'json' };

import type { PassageConfig } from './types';

const CITABLE_PROPERTY_REGEX = /^:(?<name>[^:\n]+):\s+(?<value>.*)(?:\n|$)/;
const URN_REGEX = /@(?<urn>[^\n]+)(?:\n|$)/u;
const WORK_URN = 'urn:cts:greekLit:tlg0525.tlg001';

const MARKDOWN_PIPELINE = unified()
	.use(remarkParse)
	.use(remarkGfm)
	.use(remarkRehype, { allowDangerousHtml: true })
	.use(rehypeRaw)
	.use(rehypeStringify);

let tableOfContents: PassageConfig[] | null = null;

/**
 * We need to rewrite image paths in the commentaries markdown
 * for remote deployment.
 */
function addBasePath(url: URL) {
	if (url.pathname?.startsWith('/commentaries/img/media') && !process.argv.includes('dev')) {
		return `${process.env.BASE_PATH || ''}${url.pathname}`;
	}
}

function createTableOfContents(paragraphUrns: CTS_URN[]) {
	if (tableOfContents) {
		return tableOfContents;
	}

	const toc = paragraphUrns.reduce((acc: PassageConfig[], curr) => {
		if (!curr.passageComponent) {
			console.warn('No passage component on ', curr);
			return acc;
		}

		const [scroll, chapter, _paragraph] = curr.passageComponent.split('.');

		if (acc.length === 0) {
			acc = [
				{
					label: 'Scroll',
					subpassages: [],
					ref: scroll,
					urn: `${WORK_URN}:${scroll}`
				}
			];
		}

		let currentTopLevelPassage = acc.pop() as unknown as PassageConfig;

		if (scroll !== currentTopLevelPassage.ref) {
			const previousTopLevelPassage = currentTopLevelPassage;

			currentTopLevelPassage = {
				label: 'Scroll',
				subpassages: [],
				ref: scroll,
				urn: `${WORK_URN}:${scroll}`
			};

			acc = [...acc, previousTopLevelPassage];
		}

		const thisPassage = {
			label: 'Chapter',
			ref: chapter,
			urn: `${WORK_URN}:${scroll}.${chapter}`
		};

		if (currentTopLevelPassage.subpassages?.at(-1)?.ref !== thisPassage.ref) {
			currentTopLevelPassage.subpassages?.push(thisPassage);
		}

		return [...acc, currentTopLevelPassage];
	}, []);

	tableOfContents = toc;

	return tableOfContents;
}

/**
 * TODO:
 * - [ ] add heading using closest section label ("Scroll 1: Attica", etc.)
 * - [ ] separate bibliography, glossary, and abbreviations into their own pages
 */

async function getNodesForURN(filename: string, passageUrn: CTS_URN) {
	const aprip = fs.readFileSync(filename).toString('utf-8');
	const asBlocks = parseText(aprip);
	const passageRef = passageUrn.passageComponent?.split('.').slice(0, 2).join('.');
	let blocks = asBlocks.filter(Boolean);

	const toc = createTableOfContents(blocks.map((b) => new CTS_URN(b?.urn as string)));

	blocks = blocks.filter((block) => {
		const blockUrn = new CTS_URN(block?.urn as string);
		const blockPassage = blockUrn?.passageComponent?.split('.').slice(0, 2).join('.');

		return blockPassage === passageRef;
	});

	// @ts-expect-error TODO: fix typescript thinking blocks can be undefined[]
	blocks = await Promise.all(
		blocks.map(async (block) => ({
			...block,
			body: String(await MARKDOWN_PIPELINE.process(block?.body))
		}))
	);

	return { blocks, toc };
}

export async function getPassage(urn: string) {
	const passageUrn = new CTS_URN(urn);
	const { blocks: criticalText, toc } = await getNodesForURN(
		'static/editions/tlg0525.tlg001.aprip-nagy.md',
		passageUrn
	);
	const { blocks: comments } = await getNodesForURN(
		'static/commentaries/tlg0525.tlg001.apcip-nagy.md',
		passageUrn
	);

	return { criticalText, comments, toc };
}

export function getNamedEntitiesForPassage(urn: string) {
	const keys = Object.keys(namedEntities);
	const passageUrn = new CTS_URN(urn);
	const relevantKeys = keys.filter((k) =>
		passageUrn.citations[0].startsWith(k.split('@')[0].split('.').slice(0, 2).join('.'))
	);

	// @ts-expect-error Not sure why namedEntities[k] is complaining
	return relevantKeys.map((k) => namedEntities[k]);
}

/** TODO: We also need to filter out some of the end-matter sections */

export function parseText(markdownString: string) {
	const { attributes, body } = frontMatter(markdownString);
	const citables = body
		.split('\n---\n')
		.map((g: string) => g.trim())
		.filter((g: string) => g !== '');

	return citables.map((citable: string) => parseCitable(attributes as object, citable));
}

export function parseCitable(attributes: object, citable: string) {
	const match = citable.match(URN_REGEX);

	if (match?.groups?.urn) {
		const urn = match.groups.urn;
		let withProperties = citable.replace(URN_REGEX, '').trim();
		const citableProperties = {};

		let propMatch = withProperties.match(CITABLE_PROPERTY_REGEX);

		while (propMatch?.groups?.name) {
			// @ts-expect-error citableProperties are deliberately open-ended
			citableProperties[propMatch.groups.name] = propMatch.groups.value;

			withProperties = withProperties.replace(CITABLE_PROPERTY_REGEX, '').trim();
			propMatch = withProperties.match(CITABLE_PROPERTY_REGEX);
		}

		return {
			commentaryAttributes: attributes,
			...citableProperties,
			body: withProperties,
			urn
		};
	}
}
