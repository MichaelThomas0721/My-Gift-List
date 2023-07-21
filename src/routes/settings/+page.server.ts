import { fail, redirect } from '@sveltejs/kit';
import FetchMongo from '$services/FetchMongo';

// export const load = async ({ cookies }) => {
//     if (cookies.get('user')) {
//         throw redirect(302, '/login')
//     }
// }

export const actions = {
    logout: async ({ cookies, request }) => {

        cookies.delete('user')

        throw redirect(302, '/login')
    }
}