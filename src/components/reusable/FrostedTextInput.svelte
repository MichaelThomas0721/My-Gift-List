<script>
    export let placeholder;
    export let fullRound = false;
    export let icon = "";
    export let iconClass = "";
    export let bind = "";
    export let label = true;
</script>

<span class="flex flex-col">
    {#if label}<label for={placeholder + "Input"} class="text-xl pl-1"
            >{placeholder}</label
        >{/if}
    <span
        class={`w-full h-12 ${
            fullRound ? "rounded-full" : "rounded-md"
        } bg-white bg-opacity-10 shadow-xl text-lg outline-none p-3 px-5 flex flex-row items-center`}
    >
        <input
            id={placeholder + "Input"}
            name={placeholder}
            bind:value={bind}
            class={`bg-transparent flex-grow outline-none`}
            {placeholder}
        />
        {#if icon}<iconify-icon {icon} class={`overflow-hidden ${iconClass}`} />
        {/if}
    </span>
</span>
