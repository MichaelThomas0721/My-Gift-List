<script lang="ts">
    import Frame from "$components/loginsignup/frame.svelte";
    import { required, minLength, email, maxLength } from "svelte-use-form";
    import ValidateString from "$lib/validateString";
    import {
        required as requiredM,
        email as emailM,
        username,
        password,
    } from "$lib/validatorMessages";
    let fields = {
        Email: {
            name: "Email",
            validators: {
                validators: ["required", "email"],
                messages: [requiredM, emailM],
                params: ["", ""],
            },
        },
        Username: {
            name: "Username",
            validators: {
                validators: ["required", "min", "max"],
                messages: [requiredM, username, username],
                params: ["", 3, 20],
            },
        },
        Password: {
            name: "Password",
            validators: {
                validators: ["required", "min", "max", "match"],
                messages: [
                    requiredM,
                    password,
                    password,
                    "Passwords do not match",
                ],
                params: ["", 8, 50, "otherPassword"],
            },
        },
        "Confirm Password": {
            name: "Confirm Password",
            validators: {
                validators: ["required", "match"],
                messages: [requiredM, "Passwords do not match"],
                params: ["", "otherPassword"],
            },
        },
    };
    let fieldBinds = {} as any;
    let fieldErrors = {} as any;

    import navaction from "$root/lib/navaction";
    import Head from "$components/reusable/Head.svelte";
    import ValidateForm from "$services/ValidateForm";
    $navaction = null;
    let disableForm = true;

    function Validate(e) {
        fieldErrors = ValidateForm(e, fields, fieldBinds, fieldErrors);
        if (
            Object.keys(fieldErrors).length == Object.keys(fields).length &&
            Object.values(fieldErrors).every((fe) => fe == "")
        ) {
            disableForm = false;
        } else {
            disableForm = true;
        }
    }

    function Touch(e) {
        e.target.setAttribute("touched", true);
        Validate(e);
    }
</script>

<Head title="Sign Up" />
<Frame
    title="Sign Up"
    {fields}
    bind:fieldBinds
    {fieldErrors}
    btmText="Already have an account?"
    btmLink={["Login", "/login"]}
    action={"?/signup"}
    unfocus={Touch}
    ontype={Validate}
    bind:disableForm
/>
