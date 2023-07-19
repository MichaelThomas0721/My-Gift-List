<script>
    import TextInput from "$components/loginsignup/textInput.svelte";


</script>

<div class="flex flex-col max-w-2xl w-full mx-auto mt-44 gap-3 bg-blue-400 bg-opacity-10 rounded-md p-6">
    <h1 class="text-center text-4xl font-semi-bold">Sign Up</h1>
    <TextInput placeholder="Email"/>
    <TextInput placeholder="Username"/>
    <TextInput placeholder="Password"/>
    <TextInput placeholder="Confirm Password"/>
    <p class="text-gray-300">Already have an account? <a href="/login" class="text-blue-400 hover:text-blue-600 underline font-semibold">Login</a></p>
</div>