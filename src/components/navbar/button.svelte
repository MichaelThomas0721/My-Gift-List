<script>
    export let icon,
        href = "/",
        selected = "";
</script>

<a
    {href}
    class={`flex justify-center items-center h-full aspect-square ${
        selected == href ? "bg-white rounded-full p-1" : ""
    }`}
>
    <iconify-icon
        {icon}
        class={`text-4xl ${selected == href ? "text-black" : "text-white"}`}
    />
</a>
