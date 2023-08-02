<script lang="ts">
    // import FrostedCheckBox from "$components/reusable/FrostedCheckBox.svelte";
    import FrostedTextInput from "$components/reusable/FrostedTextInput.svelte";
    import SubmitButton from "$components/reusable/SubmitButton.svelte";
    import { enhance } from "$app/forms";
    import { goto } from "$app/navigation";
    import ErrorMessage from "./ErrorMessage.svelte";
    export let title, fields, btmText, btmLink, action, fieldBinds, fieldErrors;
    // export let staySingedInCheckBox = false;
    // export let staySignedIn = false;
    export let unfocus = null as any;
    export let ontype = null as any;
    export let disableForm = true;
    let error = "";

    function ManageForm() {
        return async ({ result }) => {
            if (result.type == "redirect") {
                goto(result.location);
            } else if (result.type == "failure") {
                error = result.data.errorMsg;
            }
        };
    }
</script>

<form
    action={disableForm ? null : action}
    method={"POST"}
    class="flex flex-col max-w-2xl w-full mx-auto mt-[6vh] gap-3 bg-blue-400 bg-opacity-10 rounded-md p-6"
    use:enhance={ManageForm}
>
    <ErrorMessage {error} show={error != ""} />
    <h1 class="text-center text-4xl font-semi-bold">{title}</h1>
    {#each Object.keys(fields) as field}
        <FrostedTextInput
            placeholder={field}
            bind:bind={fieldBinds[field]}
            required={true}
            {unfocus}
            {ontype}
        />
        <p class={`${fieldErrors[field] ? '' : 'hidden'}`}>{fieldErrors[field]}</p>
    {/each}
    <p class="text-gray-300">
        {btmText}
        <a
            href={btmLink[1]}
            class="text-blue-400 hover:text-blue-600 underline font-semibold"
            >{btmLink[0]}</a
        >
    </p>
    <slot />
    <SubmitButton bind:disabled={disableForm} {title} type="submit" />
</form>
