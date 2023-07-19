import FetchMongo from '$services/FetchMongo.js';
import { ObjectId } from 'mongodb';

export const load = async ({ params }) => {
    let list = await FetchMongo({ _id: new ObjectId(params?.slug) }, "lists")
    let items = await FetchMongo({ listId: params?.slug }, "items")
    return { list, items }
}