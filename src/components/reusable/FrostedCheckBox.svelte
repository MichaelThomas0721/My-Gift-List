<script>
    export let title = "Stay signed in?";
    export let bind;
</script>

<span class="flex flex-row gap-1 justify-start"
    ><input
        class="rounded-full hidden"
        type="checkbox"
        id={title + "Checkbox"}
        bind:checked={bind}
    /><label
        for={title + "Checkbox"}
        class="flex flex-row flex-grow items-center gap-1"
        ><div
            class={`h-3/4 ${
                bind ? "bg-lightPurple" : "bg-gray-300"
            } rounded-full aspect-square flex justify-center items-center`}
        >
            <iconify-icon
                icon="fluent:checkmark-12-filled"
                class={`${bind ? "w-fit" : "w-0"} overflow-hidden`}
            />
        </div>
        {title}</label
    ></span
>
