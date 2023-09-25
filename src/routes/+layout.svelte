<!-- Main Layout (Used for every page) -->

<script lang="ts">
  import Navbar from "$components/navbar/navbar.svelte";
  import "../app.css";
  // The current font I am using
  import "@fontsource/nunito";
  // Import iconify here so I can use it everywhere
  import "iconify-icon";
</script>

<!-- Default text white since most of the site is darker colors, box-border to help with mobile device sizing -->
<div
  class="h-full min-h-full w-full bg-background text-white flex flex-col overflow-hidden box-border"
>
  <div class="p-3 w-full overflow-hidden">
    <slot />
  </div>
  <Navbar />
</div>

<style>
  * {
    font-family: "Nunito", sans-serif;
  }
</style>
