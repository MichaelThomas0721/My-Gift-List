<script>
    import FriendItem from "$components/friends/friendItem.svelte";
    import FrostedTextInput from "$components/reusable/FrostedTextInput.svelte";
    import ApiFetcher from "$services/ApiFetcher";
    import navaction from "$root/lib/navaction";
    import Head from "$components/reusable/Head.svelte";
    $navaction = null;
    export let data;
    let { friends, username } = data;
    let search = "";
    let results = [];
    let localResults = friends ? friends : [];

    async function SearchFriends() {
        localResults = [];
        let found = friends.find((f) => f.username == search);
        if (found) {
            localResults = [found];
        } else if (search != username) {
            results = await ApiFetcher("/api/fetch-mongo", {
                params: { username: search },
                collection: "users",
            });
        }

        for (let i = 0; i < results.length; i++) {
            if (friends.some((item) => item.username == results[i].username)) {
                results.splice(i, i);
                i--;
            }
        }
    }
</script>

<Head title="Friends" />
<div class="w-full flex flex-col gap-2">
    <h1 class="text-3xl">Friends</h1>
    <form on:submit={SearchFriends}>
        <FrostedTextInput
            placeholder="Find Friends"
            label={false}
            fullRound={true}
            bind:bind={search}
            icon={"material-symbols:search"}
            IconAction={SearchFriends}
            iconClass="-scale-x-100 text-gray-400"
        />
    </form>
    {#each localResults as friend}
        <FriendItem {friend} />
    {/each}
    {#each results as friend}
        <FriendItem {friend} />
    {/each}
</div>
