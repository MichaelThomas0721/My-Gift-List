<script>
    import ListItem from "./listItem.svelte";

    export let lists;
</script>

<div class="flex flex-col gap-2">
    {#each lists as list}
        <ListItem {list} />
    {/each}
</div>
