<script lang="ts">
    export let placeholder = "";
    export let fullRound = false;
    export let icon = "";
    export let iconClass = "";
    export let IconAction = null;
    export let bind = "";
    export let label = true;
    export let required = false;
    export let unfocus = null;
    export let ontype = null;
    let type = "text";
    if (placeholder == "Password" || placeholder == "Confirm Password") {
        type = "password";
        IconAction = () => ToggleShowPassword();
        icon = "mdi:eye";
    }

    function ToggleShowPassword() {
        if (type == "text") {
            type = "password";
            icon = "mdi:eye";
        } else {
            type = "text";
            icon = "mdi:eye-outline";
        }
    }

    const handleInput = (e) => {
        bind = e.target.value;
        ontype ? ontype(e) : null;
    };
</script>

<span class="flex flex-col">
    {#if label}<label for={placeholder + "Input"} class="text-xl pl-1"
            >{placeholder}</label
        >{/if}
    <span
        class={`w-full h-12 ${
            fullRound ? "rounded-full" : "rounded-md"
        } bg-white bg-opacity-10 shadow-xl text-lg outline-none p-3 px-5 flex flex-row items-center`}
    >
        <input
            {type}
            id={placeholder + "Input"}
            name={placeholder + "Input"}
            class={`bg-transparent flex-grow outline-none`}
            {placeholder}
            value={bind}
            on:input={handleInput}
            {required}
            on:focusout={(e) => unfocus ? unfocus(e) : null}
        />
        {#if icon}<button
                type="button"
                on:click={IconAction}
                class={`overflow-hidden flex justify-center items-center ${iconClass}`}
                ><iconify-icon {icon} /></button
            >
        {/if}
    </span>
</span>
