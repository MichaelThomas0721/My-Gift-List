<script>
    import Popup from "$components/lists/popup.svelte";
    import Listlist from "$components/lists/listlist.svelte";
    import navaction from "$lib/navaction";
    import ApiFetcher from "$services/ApiFetcher";
    import { redirect } from "@sveltejs/kit";
    import Head from "$components/reusable/Head.svelte";

    export let data;
    let { lists, userId, owner } = data;
    let showPopup = false;
    let bind = "";
    $navaction = owner ? () => (showPopup = true) : null;

    function ClosePopup() {
        showPopup = false;
        bind = "";
    }

</script>

<Head title="Lists" />
{#if showPopup}
    <Popup bind:bind {ClosePopup} />
{:else}<h1 class="text-3xl font-bold text-center py-3">Lists</h1>
    <Listlist {lists} />
{/if}
