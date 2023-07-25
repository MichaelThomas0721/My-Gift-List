<script>
    import Listlist from "$components/lists/listlist.svelte";

    export let data;
    let { lists, owner } = data;
</script>

<h1 class="text-3xl font-bold text-center py-3">Lists</h1>
<Listlist {lists} />
