import { fail, redirect } from '@sveltejs/kit';
import FetchMongo from '$services/FetchMongo';
import AddMongo from '$services/AddMongo.js';
import DeleteMongo from '$services/DeleteMongo.js';

export const load = async ({ cookies, params }) => {
  if (!cookies.get('user') && !params?.slug) {
    throw redirect(302, '/login')
  }
  let user = cookies.get('user') ? JSON.parse(cookies.get('user')) : null;
  let profileUser = user;
  if (params?.slug) {
    profileUser = await FetchMongo({ username: params.slug }, "users", true);
    if (profileUser?._id == user?._id) {
      throw redirect(302, '/profile')
    }
  }
  let wishlistItems = await FetchMongo({ listId: profileUser._id }, "items")
  let follow = "self"
  if (params?.slug) {
    follow = await FetchMongo({ following: profileUser?._id, follower: user?._id }, "friends", true)
  }
  return ({ profileId: profileUser?._id, uid: user?._id, follow, username: profileUser.username, wishlistItems, owner: profileUser?._id == user?._id })
}

export const actions = {
  follow: async ({ cookies, request }) => {
    if (!cookies.get('user')) {
      throw redirect(302, '/login');
    }
    const data = await request.formData();
    const following = data.get('following');
    let user = cookies.get('user') ? JSON.parse(cookies.get('user')) : null;
    let rData = await AddMongo(
      { following: following, follower: user._id, user: user },
      "friends"
    )
    return JSON.stringify(rData);
  },
  unfollow: async ({ cookies, request }) => {
    if (!cookies.get('user')) {
      throw redirect(302, '/login');
    }
    const data = await request.formData();
    const following = data.get('following');
    let user = cookies.get('user') ? JSON.parse(cookies.get('user')) : null;
    let rData = await DeleteMongo({ following: following, follower: user._id, user: user },
      "friends"
    )
    return rData;
  }
}