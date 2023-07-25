<script>
    import FrostedTextInput from "$components/reusable/FrostedTextInput.svelte";
    import SubmitButton from "$components/reusable/SubmitButton.svelte";
    export let bind, ClosePopup;
</script>

<form
    class="h-full w-full flex flex-col gap-4"
    action="?/createlist"
    method="post"
>
    <p class="text-3xl font-bold pb-5 text-center">Create New List</p>
    <FrostedTextInput placeholder="List Name" bind:bind />
    <SubmitButton title="Create" type="submit" />
    <SubmitButton title="Close" className="bg-red-500" Action={ClosePopup} />
</form>
