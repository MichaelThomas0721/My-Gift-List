<script>
    import FrostedTextInput from "$components/reusable/FrostedTextInput.svelte";
import Head from "$components/reusable/Head.svelte";
    import PageHeading from "$components/reusable/PageHeading.svelte";
</script>

<Head title="Reset Password" />
<PageHeading title="Reset Password" />
<form>
    <FrostedTextInput placeholder="New Password" />
    <FrostedTextInput placeholder="Confirm Password" />
</form>
