<script>
    export let data;
    import Item from "$components/lists/item.svelte";
    import ItemList from "$components/lists/itemList.svelte";
    import Popup from "$components/lists/popup.svelte";
    import ApiFetcher from "$services/ApiFetcher";
    let { list, items } = data;
    const popupItemTemplate = {
        Name: "",
        Price: "",
        Notes: "",
        Link: "",
        listId: list._id,
        taken: false,
    };
    let popupItem = popupItemTemplate;
    let showPopup = false;

    function Update() {
        ApiFetcher("/api/update-mongo", {
            params: { _id: items[0]._id },
            newValues: { name: "Charge yuh Phone" },
            collection: "items",
        });
    }

    function Delete() {
        ApiFetcher("/api/delete-mongo", {
            params: { _id: items[items.length - 1]._id },
            collection: "items",
        });
    }

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
</script>

<div>
    {#if showPopup}
        <Popup bind:item={popupItem} Action={SubmitItem} />
    {/if}
    <ItemList {items} Action={ShowPopup} />
    <button on:click={() => ShowPopup(false)}>ShowPopup</button>
    <button on:click={Delete}>Delete</button>
</div>
