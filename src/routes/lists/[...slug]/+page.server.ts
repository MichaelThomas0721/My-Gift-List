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
    createlist: async ({ cookies, request } ) => {
        const data = await request.formData()
        const name = data.get("List NameInput");
        console.log(data)
        const user = JSON.parse(cookies.get('user'))
        let params = {name, userId: user._id}
        const u = cookies.get('user')
        let rData = await AddMongo(params, "lists", u)

        throw redirect(302, `/list/${rData.insertedId}`)
    }
}