import { fail, redirect } from '@sveltejs/kit';
import AddMongo from '$services/AddMongo.js';
import AddObjectId from '$services/AddObjectId.js';
import FetchMongo from '$services/FetchMongo.js';
import CreateIndexMongo from '$services/CreateIndexMongo.js';
import { SECRET_SETUP } from '$env/static/private';
import Hash from '$services/Hash.js';
import type { PageLoad } from '../$types.js';

export const load: PageLoad = async ({ cookies }: any) => {
    if (cookies.get('user')) {
        throw redirect(302, '/profile')
    }
}

export const actions = {
    signup: async ({ cookies, request }: any) => {
        const data = await request.formData()
        const email: String = data.get('EmailInput');
        const username: String = data.get('UsernameInput');
        const password: String = data.get('PasswordInput');
        if (!email || !username || !password) return fail(400, { credentials: true })
        let hashedPassword: String = await Hash(String(password));
        let params: Object = { "email": email, "username": username, "password": hashedPassword }
        if (SECRET_SETUP) {
            await CreateIndexMongo({ "username": 1 }, { "unique": true }, "users");
            await CreateIndexMongo({ "email": 1 }, { "unique": true }, "users");
        }
        if ((await FetchMongo({ username }, "users"))[0]) return fail(403, { errorMsg: 'Username Taken' })
        if ((await FetchMongo({ email }, "users"))[0]) return fail(403, { errorMsg: 'Email already in use' })
        let rData: any = await AddMongo(params, "users");
        if (!rData) return fail(403, { errorMsg: 'Error adding to data, please try again later' });

        let user: any = await FetchMongo({ _id: rData.insertedId }, "users")
        user = user[0];
        let _id = await AddObjectId(user._id)
        await AddMongo({ _id, name: `${user.username}'s Wishlist`, userId: user._id, user: user }, "lists");
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