import { ObjectId } from "mongodb";

export default function AddObjectId(arr) {
    // Check if arr is an array or object
    if (Array.isArray(arr)) {
        arr = arr.map(el => el._id ? { ...el, _id: new ObjectId(el._id) } : el)
    } else {
        arr = arr._id ? { ...arr, _id: new ObjectId(arr._id) } : arr
    }
    return arr
}