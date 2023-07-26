<!-- Main Layout (Used for every page) -->

<script>
  import Navbar from "$components/navbar/navbar.svelte";
  import "../app.css";
  // The current font I am using
  import "@fontsource/nunito";
  // Import iconify here so I don't need to on every page it is used
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
