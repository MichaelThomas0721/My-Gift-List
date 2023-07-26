<script>
    import { useForm } from "svelte-use-form";
    import FrostedCheckBox from "$components/reusable/FrostedCheckBox.svelte";
    import FrostedTextInput from "$components/reusable/FrostedTextInput.svelte";
    import SubmitButton from "$components/reusable/SubmitButton.svelte";
    export let title, fields, btmText, btmLink, action, fieldBinds;
    export let staySingedInCheckBox = false;
    export let staySignedIn = false;
    const form = useForm();
</script>

<form
    {action}
    method="POST"
    class="flex flex-col max-w-2xl w-full mx-auto mt-[6vh] gap-3 bg-blue-400 bg-opacity-10 rounded-md p-6"
    use:form
>
    <h1 class="text-center text-4xl font-semi-bold">{title}</h1>
    {#each fields as field}
        <FrostedTextInput
            placeholder={field.name}
            bind:bind={fieldBinds[field.name]}
            required={true}
            formValidators={field.validators}
        />
    {/each}
    {#if staySingedInCheckBox}<FrostedCheckBox bind:bind={staySignedIn} />{/if}
    <p class="text-gray-300">
        {btmText}
        <a
            href={btmLink[1]}
            class="text-blue-400 hover:text-blue-600 underline font-semibold"
            >{btmLink[0]}</a
        >
    </p>
    <SubmitButton disabled={!$form.valid} {title} type="submit" />
</form>
