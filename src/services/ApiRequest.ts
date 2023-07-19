export default async function ApiRequest(url, request, fetch) {
    try {
        const res = await fetch(url, {
            method: request.method,
            headers: {
                'Accept': "application/json",
                'Content-Type': "application/json",
            },
            body: JSON.stringify(request.body),
        }).then((res) => {
            return res.json();
        });
        return res;
    } catch (error) {
        console.log("Error: ", error);
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}