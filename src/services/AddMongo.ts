import clientPromise from "$lib/mongodb";

export default async function AddMongo(params, collection) {
    // Connect to mongodb
    const client = await clientPromise;
    const db = client.db();

    // Get the data from mongodb using the params and collection
    try {
        return await db.collection(collection).insertOne(params)
    } catch (e) {
        console.log(e)
        return false;
    }
}