// This is to make adding documents to the mongo database less painfull
import clientPromise from "$lib/mongodb";
import BackendVerify from "./BackendVerify";

export default async function AddMongo(params, collection) {
    // Connect to mongodb
    const client = await clientPromise;
    const db = client.db();
    if (collection != "users" && collection != "codes" && ! await BackendVerify(params)) return false;
    delete params.user;
    // Add the data to the database or catch the error
    try {
        console.log("WTTWTWTW")
        return await db.collection(collection).insertOne(params)
    } catch (e) {
        console.log(e)
        console.log("EREROEROREOREO")
        return false;
    }
}