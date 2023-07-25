<script>
    import Frame from "$components/loginsignup/frame.svelte";
    import ApiFetcher from "$services/ApiFetcher";
    let fields = ["Email", "Password"];
    let fieldBinds = {};
    let staySignedIn = false;
    import navaction from "$root/lib/navaction";
    $navaction = null;
</script>

<Frame
    title="Login"
    {fields}
    bind:fieldBinds
    staySingedInCheckBox={true}
    bind:staySignedIn
    btmText="Don't have an account?"
    btmLink={["Sign Up", "/signup"]}
    action={"?/login"}
/>
