<script lang="ts">
	import CollapsibleComment from '$lib/components/CollapsibleComment.svelte';
	import Navigation from '$lib/components/Navigation/Navigation.svelte';

	import { page } from '$app/state';
	import CTS_URN from '$lib/cts_urn.js';

	import { type Comment } from '$lib/types.js';

	const { data } = $props();
	const { criticalText, comments, namedEntities, toc } = $derived(data);

	const stringifyCommentCitation = (comment: Comment) => {
		const { integerCitations } = new CTS_URN(comment.urn);

		return `Nagy (2025) on ${integerCitations[0].join('.')}`;
	};

	$effect(() => {
		const urn = new CTS_URN(page.params.urn as string);

		for (const entity of namedEntities) {
			const spanLocation = entity.aligned_translation_location;
			const spanId = `@urn:cts:${urn.collection}:${urn.workComponent}.aprip-nagy:${urn.citations[0]}.${spanLocation.split('.').slice(2)}`;
			const el = document.getElementById(spanId);

			if (el && entity.entity_link) {
				const a = document.createElement('a');

				a.href = entity.entity_link;
				a.className = 'link entity';
				a.dataset['entitytype'] = entity.entity_type;
				el.replaceWith(a);
				a.appendChild(el);
			}
		}
	});
</script>

<div class="flex m-0">
	<div class="h-40 max-h-40">
		<Navigation passages={toc} currentPassageUrn={page.params.urn as string} />
	</div>

	<section class="mx-4 flex-2">
		{#each criticalText as textBlock (textBlock?.urn)}
			<div
				class="critical-text pt-2 text-justify"
				id={textBlock?.urn}
				data-location={new CTS_URN(textBlock?.urn as string).passageComponent}
			>
				{@html textBlock?.body}
			</div>
		{/each}
	</section>

	<section class="mx-4 flex-1">
		{#each comments as comment (comment?.urn)}
			<CollapsibleComment comment={comment as Comment} {stringifyCommentCitation} />
		{/each}
	</section>
</div>

<style lang="postcss">
	.critical-text::before {
		color: var(--color-neutral-500);
		content: attr(data-location);
		float: left;
		margin-right: 0.5rem;
		font-size: smaller;
		font-weight: bold;
	}

	:global {
		/* Style the footnotes section. */
		.footnotes {
			font-size: smaller;
			color: var(--color-neutral-500);
			border-top: 1px solid var(--color-neutral-800);
		}

		/* Hide the section label for visual users. */
		.sr-only {
			position: absolute;
			width: 1px;
			height: 1px;
			padding: 0;
			overflow: hidden;
			clip: rect(0, 0, 0, 0);
			word-wrap: normal;
			border: 0;
		}

		.footnotes li {
			display: flex;
			padding-top: 0.5rem;
		}

		.footnotes li a:not(.entity) {
			align-items: center;
			display: flex;
			flex-direction: column;
			justify-content: center;
			margin-left: 0.5rem;
		}

		/* Place `[` and `]` around footnote references. */
		[data-footnote-ref]::before {
			content: '[';
		}

		[data-footnote-ref]::after {
			content: ']';
		}
	}
</style>
