<script>
    export let placeholder;
</script>

<span class="flex flex-col">
    <label for={placeholder + "Input"} class="text-xl pl-1">{placeholder}</label
    >
    <input
        id={placeholder + "Input"}
        class="w-full h-12 rounded-md bg-white bg-opacity-10 shadow-xl text-lg outline-none p-3"
        {placeholder}
    />
</span>
