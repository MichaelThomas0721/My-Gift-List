<script>
    import FrostedTextInput from "$components/reusable/FrostedTextInput.svelte";
    import ApiFetcher from "$services/ApiFetcher";
    let search = "";
    let results = [];

    async function SearchFriends() {
        results = await ApiFetcher("/api/fetch-mongo", {
            params: { email: search },
            collection: "users",
        });
    }
</script>

<div>
    <h1>Friends</h1>
    <form on:submit={SearchFriends}>
        <FrostedTextInput
            placeholder="Find Friends"
            label={false}
            fullRound={true}
            bind:bind={search}
            icon={"material-symbols:search"}
            iconClass="-scale-x-100 text-gray-400"
        />
    </form>
</div>
