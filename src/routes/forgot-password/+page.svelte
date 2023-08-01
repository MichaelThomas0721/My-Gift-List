<script>
    import FrostedTextInput from "$components/reusable/FrostedTextInput.svelte";
    import Head from "$components/reusable/Head.svelte";
    import PageHeading from "$components/reusable/PageHeading.svelte";
    import SubmitButton from "$components/reusable/SubmitButton.svelte";

    let bind = "";
</script>

<Head title="Forgot Password" />
<PageHeading title="Forgot Password" />
<form class="flex flex-col gap-3" action={bind == "" ? null : "?/sendcode"}>
    <FrostedTextInput
        placeholder={"Email or Username"}
        bind:bind
        required={true}
    />
    <SubmitButton disabled={bind == ""} title="Submit" />
</form>
