export const POST = async ({ params, request }) => {
    const data = await request.json();
    console.log("Api request made to /api/hello with data: ", data);
    return new Response(JSON.stringify("Hello World! from server"), { status: 200 });
};