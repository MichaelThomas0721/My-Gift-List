import { fail, redirect } from '@sveltejs/kit';
import FetchMongo from '$services/FetchMongo';

export const load = async ({ cookies }) => {
    if (cookies.get('user')) {
        throw redirect(302, '/profile')
    }
}

export const actions = {
    login: async ({ cookies, request }) => {
        const data = await request.formData()
        const email = data.get('Email');
        const password = data.get('Password');
        let params = { "email": email, "password": password }
        let user = await FetchMongo(params, "users")
        if (!user) return fail(400, { credentials: true })

        cookies.set('user', JSON.stringify(user[0]), {
            path: '/',

            httpOnly: true,

            sameSite: 'strict',

            maxAge: 60 * 60 * 24 * 30
        })

        throw redirect(302, '/profile')
    }
}