<script>
    import FrostedTextInput from "$components/reusable/FrostedTextInput.svelte";
    import Head from "$components/reusable/Head.svelte";
    import PageHeading from "$components/reusable/PageHeading.svelte";
    import SubmitButton from "$components/reusable/SubmitButton.svelte";
</script>

<Head title="Reset Password" />
<PageHeading title="Reset Password" />
<form action="?/resetpassword" method="POST" class="flex flex-col gap-3">
    <FrostedTextInput placeholder="New Password" />
    <FrostedTextInput placeholder="Confirm Password" />
    <SubmitButton type="submit" title="Submit" />
</form>
