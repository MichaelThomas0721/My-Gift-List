<script lang="ts">
    export let data;
    import ItemList from "$components/lists/itemList.svelte";
    import FollowButton from "$components/profile/FollowButton.svelte";
    import SettingsButton from "$components/profile/SettingsButton.svelte";
    import ApiFetcher from "$services/ApiFetcher";
    let { profileId, uid, username, wishlistItems, follow } = data as any;

    async function Follow() {
        if (follow) {
            await ApiFetcher("/api/delete-mongo", {
                params: { _id: follow?._id },
                collection: "friends",
            });
            follow = undefined;
        } else {
            let rData = await ApiFetcher("/api/add-mongo", {
                params: { following: profileId, follower: uid },
                collection: "friends",
            });
            follow = rData;
        }
    }

    function OpenItem() {

    }
    
</script>

<div class="w-full max-w-3xl flex flex-col gap-2">
    <span class="flex flex-row gap-3 overflow-hidden text-ellipsis">
        <div class="w-32 aspect-square rounded-md bg-gray-500 flex-shrink-0" />
        <div class="flex-grow flex flex-col min-w-0">
            <p>@{data.username}</p>
        </div></span
    >
    {#if profileId == uid}
        <SettingsButton />
    {:else}
        <FollowButton Action={Follow} {follow} />
    {/if}
    <span class="flex flex-row justify-between text-2xl"
        ><button>Wish List:</button><button>All Lists</button></span
    >
    <ItemList items={wishlistItems} Action={OpenItem} />
</div>

<slot />
