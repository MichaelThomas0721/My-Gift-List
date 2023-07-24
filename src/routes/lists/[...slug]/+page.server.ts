import FetchMongo from '$services/FetchMongo.js';
import { ObjectId } from 'mongodb';

export const load = async ({ params }) => {
    let listId = new ObjectId(params?.slug)
    let list = await FetchMongo({ _id: listId }, "lists", true)
    let items = await FetchMongo({ listId: params?.slug }, "items")
    return { list, items }
}