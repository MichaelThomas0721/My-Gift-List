// This is to make adding documents to the mongo database less painfull
import clientPromise from "$lib/mongodb";
import ComparePasswords from "./ComparePasswords";
import FetchMongo from "./FetchMongo";

export default async function AddMongo(params, collection, user: any) {
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
    } else if (collection != "users") {
        return false;
    }

    // Add the data to the database or catch the error
    try {
        return await db.collection(collection).insertOne(params)
    } catch (e) {
        console.log(e)
        return false;
    }
}