import clientPromise from "$lib/mongodb";

export default async function UpdateMongo(params, newValues, collection) {
    // Connect to mongodb
    const client = await clientPromise;
    const db = client.db();

    // Get the data from mongodb using the params and collection
    try {
        await db.collection(collection).updateOne(params, { $set: newValues })
        return true;
    } catch (e) {
        console.log(e)
        return false;
    }
}