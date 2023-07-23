import AddObjectId from '$services/AddObjectId.js';
import FetchMongo from '$services/FetchMongo.js';

export const POST = async ({ params, request }) => {
    const data = await request.json();
    data.params = AddObjectId(data.params);
    console.log(data)
    let rData = await FetchMongo(data?.params, data?.collection);
    return new Response(JSON.stringify(rData), { status: 200 });
};