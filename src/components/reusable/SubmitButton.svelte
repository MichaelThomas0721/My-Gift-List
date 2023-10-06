<script lang="ts">
    export let title;
    export let Action = null;
    export let className = "";
    export let type = "button" as "button" | "submit" | "reset";
    export let disabled = false;
    export let formaction = "";
</script>

{#if formaction}
    <button
        class={`rounded-md w-full text-center ${
            disabled ? "bg-gray-800 text-gray-500" : "bg-lightPurple"
        } mx-auto text-xl font-bold py-2 ${className}`}
        {type}
        on:click={Action}
        {disabled}
        {formaction}>{title}</button
    >
{:else}
    <button
        class={`rounded-md w-full text-center ${
            disabled ? "bg-gray-800 text-gray-500" : "bg-lightPurple"
        } mx-auto text-xl font-bold py-2 ${className}`}
        {type}
        on:click={Action}
        {disabled}>{title}</button
    >
{/if}
