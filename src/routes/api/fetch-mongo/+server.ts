import AddObjectId from '$services/AddObjectId.js';
import FetchMongo from '$services/FetchMongo.js';

export const POST = async ({ params, request }) => {
    const data = await request.json();
    console.log("BRBEBR", data);
    data.params = AddObjectId(data.params);
    console.log("WHY");
    let rData = await FetchMongo(data?.params, data?.collection);
    console.log("BRUUVUV", rData);
    return new Response(JSON.stringify(rData), { status: 200 });
};