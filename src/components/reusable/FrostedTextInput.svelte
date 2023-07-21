<script>
    export let placeholder;
    export let bind = "";
</script>

<span class="flex flex-col">
    <label for={placeholder + "Input"} class="text-xl pl-1">{placeholder}</label
    >
    <input
        id={placeholder + "Input"}
        name={placeholder}
        bind:value={bind}
        class="w-full h-12 rounded-md bg-white bg-opacity-10 shadow-xl text-lg outline-none p-3"
        {placeholder}
    />
</span>
