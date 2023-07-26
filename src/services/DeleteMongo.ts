// A function to make deleting documents from the mongo db quick and easy

import clientPromise from "$lib/mongodb";

export default async function DeleteMongo(params, collection) {
    // Connect to mongodb
    const client = await clientPromise;
    const db = client.db();

    // Try to delete the document(s)
    try {
        await db.collection(collection).deleteMany(params)
        return true;
    } catch (e) {
        console.log(e)
        return false;
    }
}