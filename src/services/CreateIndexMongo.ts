// Easily create mongo indexes
// (Indexes let you make fields unique)

import clientPromise from "$lib/mongodb";

export default async function CreateIndexMongo(params, values, collection) {
    // Connect to mongodb
    const client = await clientPromise;
    const db = client.db();

    // Try to make an index
    try {
        return await db.collection(collection).createIndex(params, values)
    } catch (e) {
        console.log(e)
        return false;
    }
}