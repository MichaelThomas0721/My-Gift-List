<script>
    export let icon, fill = false;
</script>

<button class="flex justify-center items-center h-full aspect-square">
    <iconify-icon icon={`${icon}${fill ? "-fill" : ""}`} class="text-4xl"/>
</button>