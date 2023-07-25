<script>
    export let list;
</script>

<a
    href={`/list/${list._id}`}
    class="w-full rounded-md flex items-center justify-start bg-lightPurple p-3"
>
    <p>{list.name}</p>
</a>
