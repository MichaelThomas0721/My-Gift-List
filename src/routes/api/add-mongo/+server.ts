import AddObjectId from '$services/AddObjectId.js';
import AddMongo from '$services/AddMongo.js';

export const POST = async ({ params, request }) => {
    const data = await request.json();
    data.params = AddObjectId(data.params);
    let rData = await AddMongo(data?.params, data?.collection);

    return new Response(JSON.stringify(rData), { status: 200 });
};