import AddObjectId from '$services/AddObjectId.js';
import UpdateMongo from '$services/UpdateMongo.js';

export const POST = async ({ params, request }) => {
    const data = await request.json();
    data.params = AddObjectId(data.params);
    UpdateMongo(data?.params, data?.newValues, data?.collection);
    return new Response(JSON.stringify("Updated Mongo"), { status: 200 });
};