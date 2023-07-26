// This is to make adding documents to the mongo database less painfull
import clientPromise from "$lib/mongodb";

export default async function AddMongo(params, collection) {
    // Connect to mongodb
    const client = await clientPromise;
    const db = client.db();

    // Add the data to the database or catch the error
    try {
        return await db.collection(collection).insertOne(params)
    } catch (e) {
        console.log(e)
        return false;
    }
}