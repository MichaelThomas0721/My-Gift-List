import { fail, redirect } from '@sveltejs/kit';
import AddMongo from '$services/AddMongo.js';
import AddObjectId from '$services/AddObjectId.js';
import FetchMongo from '$services/FetchMongo.js';
import CreateIndexMongo from '$services/CreateIndexMongo.js';
import { SECRET_SETUP } from '$env/static/private';
import EncryptString from '$services/EncryptString.js';
import Hash from '$services/Hash.js';

export const load = async ({ cookies }) => {
    if (cookies.get('user')) {
        throw redirect(302, '/profile')
    }
}

export const actions = {
    signup: async ({ cookies, request }) => {
        const data = await request.formData()
        const email = data.get('EmailInput');
        const username = data.get('UsernameInput');
        const password = data.get('PasswordInput');
        if (!email || !username || !password) return fail(400, { credentials: true })
        let hashedPassword = await Hash(String(password));
        let params = { "email": EncryptString(String(email)), "username": username, "password": hashedPassword }
        if (SECRET_SETUP) {
            await CreateIndexMongo({ "username": 1 }, { "unique": true }, "users");
            await CreateIndexMongo({ "email": 1 }, { "unique": true }, "users");
        }
        let rData = await AddMongo(params, "users");
        if (!rData) {
            return fail(403, { data: 'Invalid username or password' });
        }

        let user = await FetchMongo({ _id: rData.insertedId }, "users")
        user = user[0];
        let _id = await AddObjectId(user._id)
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