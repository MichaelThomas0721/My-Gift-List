// Function for easily updated documents in the mongo db

import clientPromise from "$lib/mongodb";
import FetchMongo from "./FetchMongo";

export default async function UpdateMongo(params, newValues, collection, user = null) {
    // Connect to mongodb
    const client = await clientPromise;
    const db = client.db();

    if (user != null) {
        if (typeof user == 'string') {
            user = JSON.parse(user);
        }
        const upUser = await FetchMongo({ username: user.username }, "users", true);
        if (!upUser) return false;
        if (upUser.password != user.password) return false;
    } else if (collection != "items") {
        return false;
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