<script lang="ts">
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
                messages: [requiredM, password, password],
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
    let fieldBinds = {} as any;
    import navaction from "$root/lib/navaction";
    import Head from "$components/reusable/Head.svelte";
    $navaction = null;

    // Good idea but didn't work
    // $: fieldBinds?.Password, MatchPassword();
    // $: fieldBinds?.["Confirm Password"], MatchPassword();
    // function MatchPassword() {
    //     console.log(fields[3])
    //     let index = fields[3]?.validators?.validators?.indexOf(passwordMatch);
    //     if (fieldBinds?.Password == fieldBinds?.["Confirm Password"]) {
    //         index != -1
    //             ? fields[3]?.validators?.validators?.splice(index, 1)
    //             : null;
    //     } else {
    //         index != -1
    //             ? null
    //             : fields[3]?.validators?.validators?.push(passwordMatch);
    //     }
    // }
</script>

<Head title="Sign Up" />
<Frame
    title="Sign Up"
    {fields}
    bind:fieldBinds
    btmText="Already have an account?"
    btmLink={["Login", "/login"]}
    action={"?/signup"}
/>
