<script>
    import Item from "./item.svelte"
    export let items, Action, owner
</script>

<div class="flex flex-col gap-3">
    {#each items as item}
        <Item {item} {Action} {owner} />
    {/each}
</div>