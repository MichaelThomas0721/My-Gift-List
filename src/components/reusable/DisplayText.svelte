<script>
    export let title = "";
    export let text;
    export let label = true;
</script>

<span class="flex flex-col">
    {#if label}<p class="text-xl pl-1 capitalize">{title}:</p>{/if}
    <span
        class={`w-full h-12 text-lg outline-none p-1 flex flex-row items-center`}
    >
        <p>{text}</p>
    </span>
</span>
