<script>
  export let data;
  const { text } = data;
</script>

<div class="">
  <div />
  <h1
    class="text-[11vw] font-bold text-white text-center bg-gradient-to-b from-darkGreen to-darkGreen"
  >
    {text}
  </h1>
</div>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>
