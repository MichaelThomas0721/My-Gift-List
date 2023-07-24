import { fail, redirect } from '@sveltejs/kit';
import FetchMongo from '$services/FetchMongo';

export const load = async ({ cookies, params }) => {
  if (!cookies.get('user') && !params?.slug) {
    throw redirect(302, '/login')
  }
  let user = JSON.parse(cookies.get('user'));
  let profileUser = user;
  if (params?.slug) {
    profileUser = await FetchMongo({ username: params.slug }, "users", true);
    if (profileUser._id == user._id) {
      throw redirect(302, '/profile')
    }
  }
  let wishlistItems = await FetchMongo({ listId: profileUser._id }, "items")
  let follow = "self"
  if (params?.slug) {
    follow = await FetchMongo({ following: profileUser._id, follower: user._id }, "friends", true)
  }
  return ({ profileId: profileUser._id, uid: user._id, follow, username: profileUser.username, wishlistItems })
}