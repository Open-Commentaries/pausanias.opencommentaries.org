<script lang="ts">
  import { resolve } from "$app/paths";
</script>

<div class="navbar bg-base-100 shadow-sm">
  <div class="flex-1">
    <a class="btn btn-ghost text-xl" href={resolve("/")}>A Pausanias Reader in Progress</a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
      <li><a href={resolve("/about")}>About</a></li>
    </ul>
  </div>
</div>
