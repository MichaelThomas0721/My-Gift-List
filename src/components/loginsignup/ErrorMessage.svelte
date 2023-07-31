<script>
    export let error = "ERROR", show = false;
</script>

<span class={`w-full text-center text-red-600 font-bold text-xl ${show ? "" : "hidden"}`}><p>{error}</p></span>