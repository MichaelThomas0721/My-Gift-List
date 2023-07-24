<script lang="ts">
    import DisplayText from "$components/reusable/DisplayText.svelte";
    import FrostedTextInput from "$components/reusable/FrostedTextInput.svelte";
    import SubmitButton from "$components/reusable/SubmitButton.svelte";

    export let item,
        Action,
        ClosePopup,
        ToggleTaken,
        DeleteItem,
        owner = false;
</script>

<div
    class="w-full h-full top-0 left-0 flex flex-col gap-6 p-3 absolute bg-white bg-opacity-5 backdrop-blur-xl"
>
    {#each Object.keys(item) as field}
        {#if field != "_id" && field != "listId"}
            {#if owner}
                {#if field != "taken"}
                    <FrostedTextInput
                        placeholder={field}
                        bind:bind={item[field]}
                    />
                {/if}
            {:else}
                <DisplayText title={field} text={item[field]} />
            {/if}
        {/if}
    {/each}
    {#if owner}
        <SubmitButton {Action} title="Submit" />
        {#if item._id}
        <SubmitButton Action={DeleteItem} title="Delete" className="bg-red-500" />
        {/if}
    {:else}
        <SubmitButton
            Action={ToggleTaken}
            title={item.taken ? "Mark Not Taken" : "Mark Taken"}
        />
    {/if}
    <button on:click={ClosePopup} class="self-center text-4xl mt-auto w-fit"
        ><iconify-icon icon="carbon:close-outline" /></button
    >
</div>
