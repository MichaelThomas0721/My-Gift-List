<script>
    import { enhance } from "$app/forms";
    import FrostedTextInput from "$components/reusable/FrostedTextInput.svelte";
    import Head from "$components/reusable/Head.svelte";
    import PageHeading from "$components/reusable/PageHeading.svelte";
    import SubmitButton from "$components/reusable/SubmitButton.svelte";

    let bind = "";
    let message = "";

    function SentCode() {
        return async ({ result }) => {
            if (result.type == 'success') {
                message = result.data;
            }
        };
    }
</script>

<Head title="Forgot Password" />
<PageHeading title="Forgot Password" />
{#if message == ""}
<form
    use:enhance={SentCode}
    class="flex flex-col gap-3"
    method="POST"
    action={bind == "" ? null : "?/sendcode"}
>
    <FrostedTextInput placeholder={"Email"} bind:bind required={true} />
    <SubmitButton disabled={bind == ""} title="Submit" type="submit" />
</form>
{:else}
    <p class="text-xl text-center">{message}</p>
{/if}