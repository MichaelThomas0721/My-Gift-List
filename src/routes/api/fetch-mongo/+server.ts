import AddObjectId from '$services/AddObjectId.js';
import FetchMongo from '$services/FetchMongo.js';

export const POST = async ({ params, request }) => {
    const data = await request.json();
    console.log(data);
    data.params = AddObjectId(data.params);
    let rData = await FetchMongo(data?.params, data?.collection);
    return new Response(JSON.stringify(rData), { status: 200 });
};