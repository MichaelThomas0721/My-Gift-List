<script>
    export let friend;
</script>

<a href={`/profile/${friend.username}`} class="w-full p-3 bg-lightPurple rounded-lg">
    <p>{friend.username}</p>
</a>