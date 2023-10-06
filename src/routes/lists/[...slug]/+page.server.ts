import AddMongo from '$services/AddMongo.js';
import FetchMongo from '$services/FetchMongo.js';
import { redirect } from '@sveltejs/kit'

export const load = async ({ cookies, params }) => {
    if (!cookies.get('user')) {
        throw redirect(302, '/login')
    }
    let user = JSON.parse(cookies.get('user'));
    if (user.username == params?.slug) {
        throw redirect(302, '/lists')
    }
    let profileUser = user;
    if (params?.slug) {
        profileUser = await FetchMongo({ username: params.slug }, "users", true);
    }
    let lists = await FetchMongo({ userId: profileUser._id }, "lists")
    return ({ lists, userId: user._id, owner: profileUser._id == user._id })
}

export const actions = {
    createlist: async ({ cookies, request }) => {
        const data = await request.formData()
        const name = data.get("List NameInput");
        let user = cookies.get('user') ? JSON.parse(cookies.get('user')) : null;
        let params = { name, userId: user._id, user }
        let rData = await AddMongo(params, "lists")

        throw redirect(302, `/list/${rData.insertedId}`)
    }
}