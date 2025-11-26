import type { EntryGenerator, PageServerLoad } from './$types';
import type { PassageConfig } from '$lib/types';

import { getNamedEntitiesForPassage, getPassage } from '$lib/functions';

function getPassageURNs(toc: PassageConfig[]): Array<{ urn: string }> {
	if (!toc) {
		return [];
	}

	return toc.flatMap((passage) => {
		let subpassages: Array<{ urn: string }> = [];

		if (passage?.subpassages) {
			subpassages = getPassageURNs(passage.subpassages);
		}

		return [{ urn: passage.urn }, ...subpassages];
	});
}

export const entries: EntryGenerator = async () => {
	const { toc } = await getPassage('urn:cts:greekLit:tlg0525.tlg001:1.1');

	return getPassageURNs(toc);
};

export const load: PageServerLoad = async ({ params: params }) => {
	const { criticalText, comments, toc } = await getPassage(params.urn);
	const namedEntities = getNamedEntitiesForPassage(params.urn);

	return {
		criticalText,
		comments,
		namedEntities,
		toc
	};
};

export const prerender = true;
