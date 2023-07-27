<script>
    import Frame from "$components/loginsignup/frame.svelte";
    import Head from "$components/reusable/Head.svelte";
    import { required as requiredM } from "$lib/validatorMessages";
    let fields = [
        {
            name: "Username",
            validators: {
                validators: [required],
                names: ["required"],
                messages: [requiredM],
            },
        },
        {
            name: "Password",
            validators: {
                validators: [required],
                names: ["required"],
                messages: [requiredM],
            },
        },
    ];
    let fieldBinds = {};
    let staySignedIn = false;
    import navaction from "$root/lib/navaction";
    import { required } from "svelte-use-form";
    $navaction = null;
</script>


<Head title="Login" />
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
