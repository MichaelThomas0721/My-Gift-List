<script>
    import Frame from "$components/loginsignup/frame.svelte";
    import ApiFetcher from "$services/ApiFetcher";
    let fields = ["Email", "Password"];
    let fieldBinds = {};
    let staySignedIn = false;
    async function Login() {
        // let user = await ApiFetcher("/api/fetch-mongo", {
        //     params: {
        //         email: fieldBinds.Email,
        //         password: fieldBinds.Password,
        //     },
        //     collection: "users"
        // });
        // console.log(user);
    }
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
