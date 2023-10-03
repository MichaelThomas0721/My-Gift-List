// This is to make adding documents to the mongo database less painfull
import clientPromise from "$lib/mongodb";
import ComparePasswords from "./ComparePasswords";
import FetchMongo from "./FetchMongo";

export default async function AddMongo(params, collection) {
    // Connect to mongodb
    const client = await clientPromise;
    const db = client.db();
    if (params.user != null) {
        if (typeof params.user == 'string') {
            params.user = JSON.parse(params.user);
        }
        const upUser = await FetchMongo({ username: params.user.username }, "users", true);
        if (!upUser) return false;
        if (upUser.password != params.user.password) return false;
    } else if (collection != "users") {
        return false;
    }
    delete params.user;
    // Add the data to the database or catch the error
    try {
        return await db.collection(collection).insertOne(params)
    } catch (e) {
        console.log(e)
        return false;
    }
}