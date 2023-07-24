<script>
    export let Action, follow;
</script>

<button on:click={Action} class="w-full rounded-full bg-lightPurple hover:bg-opacity-80"><p class="text-center text-lg font-bold">{follow ? "Unfollow" : "Follow"}</p></button>