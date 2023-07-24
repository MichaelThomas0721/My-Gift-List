<script>
    export let data;
    console.log(data)
    let user = data.user;
</script>

<div class="w-full max-w-3xl flex flex-col gap-2">
    <span class="flex flex-row gap-3 overflow-hidden text-ellipsis">
        <div class="w-32 aspect-square rounded-md bg-gray-500 flex-shrink-0" />
        <div class="flex-grow flex flex-col min-w-0">
            <p>@{user.email}</p>
            <p>tags and stuff</p>
            <p>8 Followers</p>
        </div></span
    >
    <a href="/settings" class="w-full rounded-full bg-lightPurple hover:bg-opacity-80"><p class="text-center text-lg font-bold">Settings</p></a>
    <span class="flex flex-row justify-between text-2xl"><button>Wish List:</button><button>All Lists</button></span>
</div>
