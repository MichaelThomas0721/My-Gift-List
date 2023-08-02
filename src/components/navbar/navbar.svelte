<script lang="ts">
    import Button from "./button.svelte";

    // The nav button functionality changes based on the page so I store it in a store and then call that
    // This way it is easy to set from any page
    import navaction from "$lib/navaction";
    import { page } from "$app/stores";
    function DoAction() {
        $navaction ? $navaction() : null;
    }
    $: $page.route.id, UpdateSelectedPage();
    let selectedPage = "/";
    function UpdateSelectedPage() {
        const pages = [["friends", "/friends"], ["profile", "/profile"], ["list", "/lists"]]
        for (let i in pages){
            if ($page.route.id.includes(pages[i][0])){
                selectedPage = pages[i][1]
                return;
            }
        }
        selectedPage = "/";
    }
</script>

<nav
    class="w-full bg-black h-14 mt-auto flex flex-row justify-between items-center"
>
    <span
        class={`flex flex-row justify-around ${
            $navaction ? "w-5/12" : "w-1/2"
        } items-center`}
    >
    <!-- Icon buttons in the nav bar, I wil probably make these into components for the next version -->
        <Button icon="material-symbols:home-outline" href="/" bind:selected={selectedPage} />
        <Button icon="gg:list" href="/lists" bind:selected={selectedPage} />
    </span>
    <!-- Don't render the nav button if there isn't an action for it to do -->
    {#if $navaction}<button
            on:click={DoAction}
            class="rounded-full h-full bg-lightPurple aspect-square self-start -translate-y-1/3 flex justify-center items-center"
        >
            <iconify-icon
                icon="material-symbols:add"
                class="text-5xl text-white"
            />
        </button>{/if}
    <span
        class={`flex flex-row justify-around ${
            $navaction ? "w-5/12" : "w-1/2"
        } items-center`}
    >
        <Button icon="fluent:people-32-regular" href="/friends" bind:selected={selectedPage}  />
        <Button icon="iconamoon:profile" href="/profile" bind:selected={selectedPage}  />
    </span>
</nav>
