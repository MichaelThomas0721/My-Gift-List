import clientPromise from "$lib/mongodb";

export default async function FetchMongo(params, collection, one = false) {
    // Connect to mongodb
    const client = await clientPromise;
    const db = client.db();

    // Get the data from mongodb using the params and collection
    try {
        let objects;
        if (one) {
            objects = await db.collection(collection).findOne(params);
            // Convert the new ObjectId(id) _id format to a string so that it can be passed as an object
            objects = objects?._id ? { ...objects, _id: objects._id.toString() } : objects
        } else {
            objects = await db.collection(collection).find(params).toArray();
            // Convert the new ObjectId(id) _id format to a string so that it can be passed as an object
            objects = objects?.map(el => el._id ? { ...el, _id: el._id.toString() } : el)
        }
        // Return the objects
        return objects
    } catch (e) {
        console.log(e)
        return false;
    }
}