<script>
    import Button from "./button.svelte";
</script>

<nav
    class="w-full bg-black h-14 left-0 top-0 mt-auto flex flex-row justify-between items-center"
>
    <span class="flex flex-row justify-around w-5/12 items-center">
        <Button icon="iconamoon:profile" fill={false} />
        <Button icon="iconamoon:profile" fill={false} />
    </span>
    <button
        class="rounded-full h-full bg-lightPurple aspect-square self-start -translate-y-1/3 flex justify-center items-center"
    >
        <iconify-icon icon="material-symbols:add" class="text-5xl text-white" />
    </button>
    <span class="flex flex-row justify-around w-5/12 items-center">
        <Button icon="fluent:people-32-regular" fill={false} />
        <Button icon="iconamoon:profile" fill={false} />
    </span>
</nav>
