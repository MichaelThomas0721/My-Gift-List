import DeleteMongo from "$services/DeleteMongo.js";
import FetchMongo from "$services/FetchMongo.js";
import Hash from "$services/Hash";
import UpdateMongo from "$services/UpdateMongo.js";
import { error, fail, redirect } from "@sveltejs/kit"

export const load = async ({ cookies, params }) => {
    if (cookies.get('user')) {
        throw redirect(302, '/profile')
    }
    let reset = await FetchMongo({ code: params?.slug }, "codes");
    if (!reset[0]) throw error(404)
}

export const actions = {
    resetpassword: async ({ request, params }) => {
        let reset = await FetchMongo({ code: params?.slug }, "codes");
        if (!reset[0]) throw fail(400, { errorMsg: "Code Expired" });
        const data = await request.formData();
        const password = data.get('New PasswordInput');
        let hashedPassword = await Hash(String(password));
        reset = reset[0]
        await UpdateMongo({ _id: reset.uid }, { password: hashedPassword }, "users")
        await DeleteMongo({_id: reset._id }, "codes");
        throw redirect(302, '/login');
    }
}