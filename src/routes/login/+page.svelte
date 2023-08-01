<script lang="ts">
    import Frame from "$components/loginsignup/frame.svelte";
    import Head from "$components/reusable/Head.svelte";
    import { required as requiredM } from "$lib/validatorMessages";
    let fields = {
        Username: {
            name: "Username",
            validators: {
                validators: ["required"],
                messages: [requiredM],
                params: [""],
            },
        },
        Password: {
            name: "Password",
            validators: {
                validators: ["required"],
                messages: [requiredM],
                params: [""],
            },
        },
    };
    let fieldBinds = {} as any;
    let fieldErrors = {} as any;
    let staySignedIn = false;
    import navaction from "$root/lib/navaction";
    import ValidateForm from "$services/ValidateForm";
    import { required } from "svelte-use-form";
    $navaction = null;
    let disableForm = true;

    function Validate(e) {
        fieldErrors = ValidateForm(e, fields, fieldBinds, fieldErrors);
        if (
            Object.keys(fieldErrors).length == Object.keys(fields).length &&
            Object.values(fieldErrors).every((fe) => fe == "")
        ) {
            disableForm = false;
            console.log("VALID", disableForm);
        } else {
            disableForm = true;
        }
    }

    function Touch(e) {
        e.target.setAttribute("touched", true);
        Validate(e);
    }
</script>

<Head title="Login" />
<Frame
    title="Login"
    {fields}
    bind:fieldBinds
    {fieldErrors}
    btmText="Don't have an account?"
    btmLink={["Sign Up", "/signup"]}
    action={"?/login"}
    unfocus={Touch}
    ontype={Validate}
    bind:disableForm
/>
