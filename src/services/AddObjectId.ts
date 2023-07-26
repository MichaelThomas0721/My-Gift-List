// A simple function for converting _id strings to the new ObjectId form that mongo used
// I can't leave it as the new ObjectId form because it can't be stringified since it isn't POJO

import { ObjectId } from "mongodb";

export default function AddObjectId(param) {
    // Check if param is an array, string or object
    if (Array.isArray(param)) {
        // Loop through all of them and add the ObjectId if it has an _id
        param = param.map(el => el._id ? { ...el, _id: new ObjectId(el._id) } : el)
    } else if (typeof param == "string") {
        // This is if the param is the _id basically
        param = new ObjectId(param)
    }
    else {
        // This is for objects, does the same as the array version but only once
        param = param._id ? { ...param, _id: new ObjectId(param._id) } : param
    }
    return param
}