// Function for easily updated documents in the mongo db

import clientPromise from "$lib/mongodb";

export default async function UpdateMongo(params, newValues, collection) {
    // Connect to mongodb
    const client = await clientPromise;
    const db = client.db();

    // Try to update the document in the database using the params, new values and collection
    try {
        await db.collection(collection).updateOne(params, { $set: newValues })
        return true;
    } catch (e) {
        console.log(e)
        return false;
    }
}