<script lang="ts">
    export let title;
    export let Action = null;
    export let type = "button" as "button" | "submit" | "reset";
</script>

<button
    class="rounded-md w-full text-center bg-lightPurple mx-auto text-xl font-bold py-2"
    {type}
    on:click={Action}>{title}</button
>
