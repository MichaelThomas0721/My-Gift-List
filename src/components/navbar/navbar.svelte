<script>
    import Button from "./button.svelte";
    import navaction from "$lib/navaction";

    function DoAction() {
        if ($navaction) {
            $navaction();
        }
    }
</script>

<nav
    class="w-full bg-black h-14 left-0 top-0 mt-auto flex flex-row justify-between items-center"
>
    <span class={`flex flex-row justify-around ${$navaction ? 'w-5/12' : 'w-1/2'} items-center`}>
        <Button icon="iconamoon:profile" fill={false} href="/" />
        <Button icon="iconamoon:profile" fill={false} href="/lists" />
    </span>
    {#if $navaction}<button
        on:click={DoAction}
        class="rounded-full h-full bg-lightPurple aspect-square self-start -translate-y-1/3 flex justify-center items-center"
    >
        <iconify-icon icon="material-symbols:add" class="text-5xl text-white" />
    </button>{/if}
    <span class={`flex flex-row justify-around ${$navaction ? 'w-5/12' : 'w-1/2'} items-center`}>
        <Button icon="fluent:people-32-regular" fill={false} href="/friends" />
        <Button icon="iconamoon:profile" fill={false} href="/profile" />
    </span>
</nav>
