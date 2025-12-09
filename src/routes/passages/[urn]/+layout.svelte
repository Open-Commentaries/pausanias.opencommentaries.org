<script lang="ts">
  import type { LayoutData } from "./$types";
  import Header from "$lib/components/Header.svelte";

  interface Props {
    data: LayoutData;
    children?: import("svelte").Snippet;
  }

  let { data: _data, children }: Props = $props();
</script>

<Header />

<main class="p-8">
  {@render children?.()}
</main>
