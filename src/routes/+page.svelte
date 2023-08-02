<!-- A homepage isn't high in my priority list currently so this is what it is -->

<script>
  import Head from "$components/reusable/Head.svelte";
  import navaction from "$root/lib/navaction";
  $navaction = null;
</script>

<Head title="Home" />
<div class="flex flex-col gap-3 items-center">
  <h1
    class="text-3xl md:text-5xl lg:text-8xl font-bold text-white text-center bg-gradient-to-b from-darkGreen to-darkGreen"
  >
    Create an interactive gift list to prevent duplicate gifts!
  </h1>
  <a
    href="/signup"
    class="bg-lightPurple rounded-md px-3 py-2 text-xl text-center mx-auto"
    >Signup</a
  >
</div>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>
