<script>
    export let data;
    import ItemList from "$components/list/itemList.svelte";
    import Popup from "$components/list/popup.svelte";
    import navaction from "$lib/navaction";
    import Head from "$components/reusable/Head.svelte";
    let { list, items, owner, ownerName } = data;
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
    $navaction = owner ? () => ShowPopup(false) : null;

    async function FormReturnHandler() {
        return async ({ result }) => {
            const data = JSON.parse(result.data);
            if (data?.type == "submit") await SubmitItem(data);
            else if (data?.type == "delete") await DeleteItem(data);
            else if (data?.type == "taken") await ToggleTaken(data);
            ClosePopup();
            ClearPopup();
        };
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

    function ClearPopup() {
        popupItem = popupItemTemplate;
    }

    async function SubmitItem(data) {
        if (data.new) {
            items = [
                ...items,
                {
                    ...data.newItem,
                },
            ];
        } else {
            let idx = items.findIndex((x) => x._id == data.newItem._id);
            items[idx] = data.newItem;
        }
    }

    async function DeleteItem(data) {
        let idx = items.findIndex((x) => x._id == data._id);
        items.splice(idx, 1);
        items = [...items];
    }

    async function ToggleTaken(data) {
        let idx = items.findIndex((x) => x._id == data._id);
        items[idx].taken = data.taken;
    }
</script>

<Head title={list.name} />

<div class="w-full max-h-full h-fit flex flex-col relative">
    <div class={`${showPopup ? "hidden" : ""} max-h-full flex flex-col flex-grow relative min-h-0`}>
        <h1 class="text-3xl font-bold text-center py-3">List Items</h1>
        <a class="text-xl font-bold underline text-center pb-2" href={`/profile/${ownerName}`}>{ownerName}</a>
        <ItemList {items} Action={ShowPopup} {owner} />
    </div>
    <Popup
        bind:item={popupItem}
        Action={FormReturnHandler}
        Post={"?/submitItem"}
        {ClosePopup}
        {ToggleTaken}
        {owner}
        listId={list._id}
        className={showPopup ? "" : "hidden"}
    />
</div>
