<script>
    import Frame from "$components/loginsignup/frame.svelte";
    let fields = ["Email", "Username", "Password", "Confirm Password"];
    let fieldBinds = {};
    import navaction from "$root/lib/navaction";
    $navaction = null;
</script>

<Frame
    title="Sign Up"
    {fields}
    bind:fieldBinds
    btmText="Already have an account?"
    btmLink={["Login", "/login"]}
    action={"?/signup"}
/>
