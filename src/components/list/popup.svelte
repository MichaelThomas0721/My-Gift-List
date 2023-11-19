<script lang="ts">
    import { enhance } from "$app/forms";
    import DisplayText from "$components/reusable/DisplayText.svelte";
    import FrostedTextInput from "$components/reusable/FrostedTextInput.svelte";
    import SubmitButton from "$components/reusable/SubmitButton.svelte";

    export let item,
        Action,
        Post,
        ClosePopup,
        ToggleTaken,
        className = "",
        owner = false,
        listId;
</script>

<form
    action={Post}
    use:enhance={Action}
    method="post"
    class={`w-full h-full top-0 left-0 flex flex-col gap-6 p-3 bg-white bg-opacity-5 backdrop-blur-xl ${className}`}
>
    {#each Object.keys(item) as field}
        {#if field != "_id" && field != "listId" && field != "taken"}
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
        {:else}
            <input value={item[field]} name={field} class="hidden" />
        {/if}
    {/each}
    {#if owner}
        <SubmitButton title="Submit" type="submit" />
        {#if item._id}
            <SubmitButton
                title="Delete"
                className="bg-red-500"
                type="submit"
                formaction="?/deleteItem"
            />
        {/if}
    {:else}
        <SubmitButton
            type="submit"
            formaction="?/toggleTaken"
            title={item.taken ? "Mark Not Taken" : "Mark Taken"}
        />
    {/if}
    <input value={listId} name="listId" class="hidden" />
    <button
        on:click={ClosePopup}
        type="button"
        class="self-center text-4xl mt-auto w-fit"
        ><iconify-icon icon="carbon:close-outline" /></button
    >
</form>
