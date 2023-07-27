<script>
    import Head from "$components/reusable/Head.svelte";
import navaction from "$root/lib/navaction";
    $navaction = null;
</script>

<Head title="Settings" />
<div>
    <form action="?/logout" method="POST">
        <button>Log Out</button>
    </form>
</div>
