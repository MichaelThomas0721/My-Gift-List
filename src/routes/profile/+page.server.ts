import { fail, redirect } from '@sveltejs/kit';
import FetchMongo from '$services/FetchMongo';

export const load = async ({ cookies }) => {
    if (!cookies.get('user')) {
        throw redirect(302, '/login')
    }
    let user = JSON.parse(cookies.get('user'));
    let lists = FetchMongo({userId: user._id}, "lists");
    return ({ user, lists })
}