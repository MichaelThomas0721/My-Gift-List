<!-- A homepage isn't high in my priority list currently so this is what it is -->

<script>
  import RandomConfetti from "$components/index/RandomConfetti.svelte";
  import Head from "$components/reusable/Head.svelte";
  import navaction from "$root/lib/navaction";
  $navaction = null;
</script>

<Head title="Home" />
<div class="flex flex-col items-center justify-around gap-10 h-full">
  <h1
    class="text-3xl md:text-5xl lg:text-8xl font-bold text-white text-center bg-gradient-to-b from-darkGreen to-darkGreen"
  >
    My Gift List
  </h1>
  <div class="flex flex-col items-center">
    <img src="/GiftTop.png" alt="Gift Top" class="rotate-[15deg] z-10" />
    <RandomConfetti />
    <img src="/GiftBottom.png" alt="Gift Bottom" />
  </div>
</div>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>
