<script>
    export let follow,
        redirect = null;
</script>

{#if redirect}
    <a
        href={redirect}
        class="w-full rounded-full bg-lightPurple hover:bg-opacity-80"
        ><p class="text-center text-lg font-bold">Follow</p></a
    >
{:else}
    <button
        type="submit"
        class="w-full rounded-full bg-lightPurple hover:bg-opacity-80"
        ><p class="text-center text-lg font-bold">
            {follow ? "Unfollow" : "Follow"}
        </p></button
    >
{/if}
