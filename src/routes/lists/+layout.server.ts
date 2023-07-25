import FetchMongo from '$services/FetchMongo.js';
import { redirect } from '@sveltejs/kit'

export const load = async ({ cookies, params }) => {
    if (!cookies.get('user')) {
        throw redirect(302, '/login')
    }
    let user = JSON.parse(cookies.get('user'));
    if (user._id == params?.slug) {
        throw redirect(302, '/lists')
    }
    let profileUser = user;
    console.log(params?.slug)
    if (params?.slug) {
        profileUser = await FetchMongo({ username: params.slug }, "users", true);
        if (profileUser._id == user._id) {
            throw redirect(302, '/profile')
        }
    }
    let lists = await FetchMongo({ userId: profileUser._id }, "lists")
    return ({ lists, owner: profileUser._id == user._id })
}