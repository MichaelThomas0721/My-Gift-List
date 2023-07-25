<script>
    import Frame from "$components/loginsignup/frame.svelte";
    let fields = ["Email", "Username", "Password", "Confirm Password"];
    let fieldBinds = {};
    import navaction from "$root/lib/navaction";
    $navaction = null;
    let form = null;
    function Signup() {
        console.log("LMAO")
    }
</script>

<Frame
    title="Sign Up"
    {fields}
    bind:fieldBinds
    bind:form
    btmText="Already have an account?"
    btmLink={["Login", "/login"]}
    action={"?/signup"}
    Action={Signup}
/>
