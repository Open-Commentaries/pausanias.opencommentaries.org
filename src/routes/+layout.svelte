<script lang="ts">
  import "../app.css";
  import Header from "$lib/components/Header.svelte";

  let { children } = $props();
</script>

<svelte:head>
  <title>A Pausanias Reader in Progress</title>
</svelte:head>

<Header />

{@render children?.()}
