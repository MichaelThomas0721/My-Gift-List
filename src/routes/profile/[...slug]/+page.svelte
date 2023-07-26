<script lang="ts">
    export let data;
    import ItemList from "$components/list/itemList.svelte";
    import FollowButton from "$components/profile/FollowButton.svelte";
    import SettingsButton from "$components/profile/SettingsButton.svelte";
    import ApiFetcher from "$services/ApiFetcher";
    let { profileId, uid, username, wishlistItems, follow, owner } =
        data as any;
    import navaction from "$root/lib/navaction";
    import { goto } from "$app/navigation";
    $navaction = owner ? () => goto(`/list/${uid}`) : null;

    async function Follow() {
        if (uid == null) {
            goto("/login");
            return;
        }
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

    function OpenItem(item) {
        goto(`/list/${profileId}`)
    }
</script>

<div class="w-full max-w-3xl flex flex-col gap-2">
    <span class="flex flex-row gap-3 overflow-hidden text-ellipsis">
        <div
            class="w-32 aspect-square rounded-md bg-gray-500 flex-shrink-0 flex justify-center items-center"
        >
            Coming Soon
        </div>
        <div class="flex-grow flex flex-col min-w-0">
            <p>@{username}</p>
        </div></span
    >
    {#if profileId == uid}
        <SettingsButton />
    {:else}
        <FollowButton Action={Follow} {follow} />
    {/if}
    <span class="flex flex-row justify-between text-2xl"
        ><a href={`/list/${profileId}`}>Wish List:</a><a
            href={`/lists/${username}`}>All Lists</a
        ></span
    >
    <ItemList items={wishlistItems} Action={OpenItem} {owner} />
</div>

<slot />
