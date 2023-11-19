import AddMongo from '$services/AddMongo.js';
import AddObjectId from '$services/AddObjectId.js';
import DeleteMongo from '$services/DeleteMongo.js';
import FetchMongo from '$services/FetchMongo.js';
import UpdateMongo from '$services/UpdateMongo.js';
import { redirect } from '@sveltejs/kit';
import { ObjectId } from 'mongodb';

export const load = async ({ cookies, params }) => {
  let listId = new ObjectId(params?.slug)
  let list = await FetchMongo({ _id: listId }, "lists", true)
  let items = await FetchMongo({ listId: params?.slug }, "items")
  let owner = false;
  if (cookies.get('user')) {
    if (JSON.parse(cookies.get('user'))._id == list.userId) {
      owner = true;
    }
  }
  return { list, items, owner }
}

export const actions = {
  submitItem: async ({ cookies, request }) => {
    if (!cookies.get('user')) {
      throw redirect(302, '/login');
    }
    const data = await request.formData();
    let user = cookies.get('user') ? JSON.parse(cookies.get('user')) : null;
    let _id = data.get("_id");
    _id ? _id = AddObjectId(_id) : null;
    const listId = data.get("listId");
    const Name = data.get("NameInput");
    const Price = data.get("PriceInput");
    const Link = data.get("LinkInput");
    const Notes = data.get("NotesInput");


    if (_id) {
      await UpdateMongo(
        { _id, user },
        { Name, Price, Link, Notes },
        "items",
      );
      const newItem = { _id: _id, Name, Price, Notes, Link };
      return JSON.stringify({ newItem, new: false, type: "submit" });
    } else {
      const rData = await AddMongo({ Name, Price, Link, Notes, listId, user, taken: false }, "items");
      const newItem = { _id: rData.insertedId, Name, Price, Notes, Link };
      return JSON.stringify({ newItem, new: true, type: "submit" });
    }
  },
  deleteItem: async ({ cookies, request }) => {
    if (!cookies.get('user')) {
      throw redirect(302, '/login');
    }

    const data = await request.formData();
    let user = cookies.get('user') ? JSON.parse(cookies.get('user')) : null;
    let _id = data.get("_id");
    _id ? _id = AddObjectId(_id) : null;
    if (!_id) return false;

    await DeleteMongo({ _id, user }, "items");
    return JSON.stringify({ _id: _id.toString(), type: "delete" });
  },
  toggleTaken: async ({ cookies, request }) => {
    const data = await request.formData();
    let _id = data.get("_id");
    _id ? _id = await AddObjectId(_id) : null;
    if (!_id) return false;
    let taken = data.get("taken") as any;
    if (taken == "false") taken = false
    else taken = true
    return JSON.stringify({ _id: _id.toString(), type: "taken", taken: !taken })
  }
}