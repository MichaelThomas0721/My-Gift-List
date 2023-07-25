import FetchMongo from '$services/FetchMongo.js';
import { redirect } from '@sveltejs/kit';
import { ObjectId } from 'mongodb';

export const load = async ({ cookies, params }) => {
    if (!cookies.get('user')) {
        throw redirect(302, '/login')
    }
    let user = JSON.parse(cookies.get('user'))
    let friendsLink = await FetchMongo({ follower: user._id }, "friends");
    let friendIds = friendsLink.map(f => new ObjectId(f.following));
    let friends = await FetchMongo({_id: {$in: friendIds}}, "users")
    return { friends, username: user.username }
}