<script lang="ts">
  import { resolve } from "$app/paths";
</script>

<div class="navbar shadow-sm">
  <div class="flex-1">
    <a class="font-bold text-xl hover:underline" href={resolve("/")}>A Pausanias Reader in Progress</a>
  </div>
  <div class="flex-none">
    <a href={resolve("/about")} class="font-semibold text-lg hover:underline">About</a>
  </div>
</div>
