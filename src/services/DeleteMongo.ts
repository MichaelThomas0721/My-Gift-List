// A function to make deleting documents from the mongo db quick and easy

import clientPromise from "$lib/mongodb";
import AddObjectId from "./AddObjectId";
import BackendVerify from "./BackendVerify";

export default async function DeleteMongo(params, collection) {
    // Connect to mongodb
    const client = await clientPromise;
    const db = client.db();
    if (collection != "codes" && ! await BackendVerify(params)) return false;
    delete params.user;
    if (params._id){
        params._id = await AddObjectId(params._id)
    }

    // Try to delete the document(s)
    try {
        await db.collection(collection).deleteMany(params)
        return true;
    } catch (e) {
        console.log(e)
        return false;
    }
}