<script>
    export let data;
    import ApiFetcher from "$services/ApiFetcher";
    let { list, items } = data;

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
    
</script>

<div>
    {#each items as item}
        <p>{item.name}</p>
    {/each}
    <button on:click={Update}>Update</button>
    <button on:click={Delete}>Delete</button>
</div>
