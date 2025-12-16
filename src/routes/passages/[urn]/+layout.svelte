<script lang="ts">
  import type { LayoutData } from "./$types";

  interface Props {
    data: LayoutData;
    children?: import("svelte").Snippet;
  }

  let { data: _data, children }: Props = $props();
</script>

<main class="p-8">
  {@render children?.()}
</main>
