import AddObjectId from '$services/AddObjectId.js';
import DeleteMongo from '$services/DeleteMongo.js';

export const POST = async ({ params, request }) => {
    const data = await request.json();
    data.params = AddObjectId(data.params);
    DeleteMongo(data?.params, data?.collection);
    return new Response(JSON.stringify("Deleted Mongo"), { status: 200 });
};