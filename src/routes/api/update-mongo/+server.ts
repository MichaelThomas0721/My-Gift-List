import AddObjectId from '$services/AddObjectId.js';
import UpdateMongo from '$services/UpdateMongo.js';

export const POST = async ({ params, request, cookies }) => {
    const data = await request.json();
    data.params = AddObjectId(data.params);
    const user = cookies.get('user');
    UpdateMongo(data?.params, data?.newValues, data?.collection, user);
    return new Response(JSON.stringify("Updated Mongo"), { status: 200 });
};