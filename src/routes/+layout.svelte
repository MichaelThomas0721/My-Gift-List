<script>
  import Navbar from "$components/navbar/navbar.svelte";
  import "../app.css";
  import "@fontsource/nunito";
  import "iconify-icon";
</script>

<div class="min-h-screen w-full bg-background text-white flex flex-col">
  <div class="p-3 h-full overflow-hidden">
    <slot />
  </div>
  <Navbar />
</div>

<style>
  * {
    font-family: "Nunito", sans-serif;
  }
</style>
