<script>
  import Navbar from "$components/navbar/navbar.svelte";
  import "../app.css";
  import "@fontsource/nunito";
  import "iconify-icon";
  import navaction from "$lib/navaction";
  $navaction = null;
</script>

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
