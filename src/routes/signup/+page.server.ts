import { fail, redirect } from '@sveltejs/kit';
import AddMongo from '$services/AddMongo.js';
import AddObjectId from '$services/AddObjectId.js';
import FetchMongo from '$services/FetchMongo.js';

export const load = async ({ cookies }) => {
    if (cookies.get('user')) {
        throw redirect(302, '/profile')
    }
}

export const actions = {
    signup: async ({ cookies, request }) => {
        const data = await request.formData()
        const email = data.get('Email');
        const username = data.get('Username');
        const password = data.get('Password');
        let params = { "email": email, "username": username, "password": password }
        let rData = await AddMongo(params, "users");
        let user = await FetchMongo({ _id: rData.insertedId }, "users")
        user = user[0];
        let _id = await AddObjectId(user._id)
        console.log(_id)
        await AddMongo({ _id, name: `${user.username}'s Wishlist`, userId: user._id }, "lists");
        if (!user) return fail(400, { credentials: true })
        cookies.set('user', JSON.stringify(user), {
            path: '/',

            httpOnly: true,

            sameSite: 'strict',

            maxAge: 60 * 60 * 24 * 30
        })

        throw redirect(302, '/profile')
    }
}