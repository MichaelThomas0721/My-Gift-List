<script>
    import Frame from "$components/loginsignup/frame.svelte";
    import { required, minLength, email, maxLength } from "svelte-use-form";
    import { passwordMatch } from "$root/lib/customValidators";
    import {
        required as requiredM,
        email as emailM,
        username,
        password,
    } from "$lib/validatorMessages";
    let fields = [
        {
            name: "Email",
            validators: {
                validators: [required, email],
                names: ["required", "email"],
                messages: [requiredM, emailM],
            },
        },
        {
            name: "Username",
            validators: {
                validators: [required, minLength(3), maxLength(20)],
                names: ["required", "minLength", "maxLength"],
                messages: [requiredM, username, username],
            },
        },
        {
            name: "Password",
            validators: {
                validators: [required, minLength(8), maxLength(50)],
                names: ["required", "minLength", "maxLength"],
                messages: [requiredM, password, passwordMatch],
            },
        },
        {
            name: "Confirm Password",
            validators: {
                validators: [required, passwordMatch],
                names: ["required", "passwordMatch"],
                messages: [requiredM, "Passwords do not match"],
            },
        },
    ];
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
