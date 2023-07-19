import clientPromise from "$lib/mongodb";

export default async function FetchMongo(params, collection) {
    // Connect to mongodb
    const client = await clientPromise;
    const db = client.db();

    // Get the data from mongodb using the params and collection
    try {
        let objects = await db.collection(collection).find(params).toArray();
        // Convert the new ObjectId(id) _id format to a string so that it can be passed as an object
        objects = objects.map(el => el._id ? { ...el, _id: el._id.toString() } : el)
        // Return the objects
        return objects
    } catch (e) {
        console.log(e)
        return false;
    }
}