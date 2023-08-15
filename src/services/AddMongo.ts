// This is to make adding documents to the mongo database less painfull
import clientPromise from "$lib/mongodb";

export default async function AddMongo(params, collection, verification = true) {
    // Connect to mongodb
    const client = await clientPromise;
    const db = client.db();
    if (verification) {
        // Verify by checking if the passed hashed password matches the stored
        // Password of the id they are trying to post as
    }

    // Add the data to the database or catch the error
    try {
        return await db.collection(collection).insertOne(params)
    } catch (e) {
        console.log(e)
        return false;
    }
}