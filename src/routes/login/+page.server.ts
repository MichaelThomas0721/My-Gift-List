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
        const username = data.get('UsernameInput');
        const password = data.get('PasswordInput');
        if (!username || !password) return fail(400, { credentials: true })
        let params = { "email": username, "password": password }
        let user = await FetchMongo(params, "users")
        user = user[0]
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