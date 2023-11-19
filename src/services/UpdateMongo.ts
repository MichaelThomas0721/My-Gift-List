// Function for easily updated documents in the mongo db

import clientPromise from "$lib/mongodb";
import AddObjectId from "./AddObjectId";
import BackendVerify from "./BackendVerify";

export default async function UpdateMongo(params, newValues, collection) {
    // Connect to mongodb
    const client = await clientPromise;
    const db = client.db();
    if (!(Object.keys(newValues).length == 1 && newValues.taken != null) && ! await BackendVerify(params)) return false;
    delete params.user;
    if (params._id && typeof params._id == "string"){
        params._id = await AddObjectId(params._id)
    }
    // Try to update the document in the database using the params, new values and collection
    try {
        await db.collection(collection).updateOne(params, { $set: newValues })
        return true;
    } catch (e) {
        console.log(e)
        return false;
    }
}