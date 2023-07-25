<script>
    export let data;
    import ItemList from "$components/list/itemList.svelte";
    import Popup from "$components/list/popup.svelte";
    import ApiFetcher from "$services/ApiFetcher";
    import navaction from "$lib/navaction";
    let { list, items, owner } = data;
    const popupItemTemplate = {
        _id: null,
        Name: "",
        Price: "",
        Notes: "",
        Link: "",
        listId: list._id,
        taken: false,
    };
    let popupItem = popupItemTemplate;
    let showPopup = false;
    $navaction = () => ShowPopup(false);

    async function SubmitItem() {
        if (popupItem._id) {
            let _id = popupItem._id;
            delete popupItem._id;
            let rData = await ApiFetcher("/api/update-mongo", {
                params: { _id },
                newValues: { ...popupItem },
                collection: "items",
            });
            popupItem._id = _id;
            let idx = items.findIndex((x) => x._id == popupItem._id);
            items[idx] = popupItem;
        } else {
            let rData = await ApiFetcher("/api/add-mongo", {
                params: { ...popupItem, listId: list._id },
                collection: "items",
            });
            items = [
                ...items,
                {
                    ...popupItem,
                    _id: rData.insertedId,
                    listId: list._id,
                },
            ];
        }
        showPopup = false;
    }

    function ShowPopup(item) {
        if (item) {
            popupItem = item;
        } else {
            popupItem = popupItemTemplate;
        }
        showPopup = true;
    }

    function ClosePopup() {
        showPopup = false;
    }

    async function ToggleTaken() {
        await ApiFetcher("/api/update-mongo", {
            params: { _id: popupItem._id },
            newValues: { taken: !popupItem.taken },
            collection: "items",
        });
        popupItem.taken = !popupItem.taken;
        let idx = items.findIndex((x) => x._id == popupItem._id);
        items[idx] = popupItem;
    }

    async function DeleteItem() {
        await ApiFetcher("/api/delete-mongo", {
            params: { _id: popupItem._id },
            collection: "items",
        });
        let idx = items.findIndex((x) => x._id == popupItem._id);
        items = [...items.splice(idx, idx)];
        showPopup = false;
    }
</script>

<div class="w-full h-full flex-grow">
    {#if showPopup}
        <Popup
            bind:item={popupItem}
            Action={SubmitItem}
            {ClosePopup}
            {ToggleTaken}
            {DeleteItem}
            {owner}
        />
    {:else}
        <ItemList {items} Action={ShowPopup} {owner} />
    {/if}
</div>
