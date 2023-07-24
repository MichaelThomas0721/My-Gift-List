<script lang="ts">
    import FrostedTextInput from "$components/reusable/FrostedTextInput.svelte";
    import SubmitButton from "$components/reusable/SubmitButton.svelte";

    export let item, Action;
</script>

<div class="w-full h-full top-0 left-0 flex flex-col gap-6 p-3 absolute bg-white bg-opacity-5 backdrop-blur-xl">
    {#each Object.keys(item) as field}
    {#if field != "_id" && field != "listId"}
        <FrostedTextInput placeholder={field} bind:bind={item[field]} />
        {/if}
    {/each}
    <SubmitButton Action={Action} title="Submit"/>
</div>