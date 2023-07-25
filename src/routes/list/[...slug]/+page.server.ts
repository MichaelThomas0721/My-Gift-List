import FetchMongo from '$services/FetchMongo.js';
import { ObjectId } from 'mongodb';

export const load = async ({ cookies, params }) => {
    let listId = new ObjectId(params?.slug)
    let list = await FetchMongo({ _id: listId }, "lists", true)
    let items = await FetchMongo({ listId: params?.slug }, "items")
    let owner = false;
    if (cookies.get('user')) {
        if (JSON.parse(cookies.get('user'))._id == list.userId) {
            owner = true;
        }
    }
    return { list, items, owner }
}