<script>
    export let item, Action;
</script>

<button
    class="w-full bg-lightPurple h-fit flex flex-row justify-between rounded-md p-1 px-3 items-center"
    on:click={() => Action(item)}
>
    <div class="flex flex-col items-start">
        <p class="text-lg font-bold">{item.Name}</p>
        <p class="">{item.Notes}</p>
    </div>
    <p class="">${item.Price}</p>
</button>
