import { fail, redirect } from '@sveltejs/kit';
import AddMongo from '$services/AddMongo.js';

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
        let user = await AddMongo(params, "users")
        if (!user) return fail(400, { credentials: true })

        cookies.set('user', user, {
            path: '/',

            httpOnly: true,

            sameSite: 'strict',

            maxAge: 60 * 60 * 24 * 30
        })

        throw redirect(302, '/profile')
    }
}