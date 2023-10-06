// A function to make deleting documents from the mongo db quick and easy

import clientPromise from "$lib/mongodb";
import BackendVerify from "./BackendVerify";

export default async function DeleteMongo(params, collection) {
    // Connect to mongodb
    const client = await clientPromise;
    const db = client.db();
    if (! await BackendVerify(params)) return false;
    delete params.user;

    // Try to delete the document(s)
    try {
        await db.collection(collection).deleteMany(params)
        return true;
    } catch (e) {
        console.log(e)
        return false;
    }
}