<script>
    export let item, Action;
</script>

<button class="w-full bg-lightPurple h-fit" on:click={() => Action(item)}>
    <p>{item.Name}</p>
</button>
