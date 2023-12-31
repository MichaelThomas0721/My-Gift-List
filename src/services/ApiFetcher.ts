// Does a lot of the api fetching leg work.
// Basically turns 10is lines of code into 1

// ABS URL so that I can automatically add it to my path for
// fetching the api
import { PUBLIC_ABS_URL } from "$env/static/public";

export default async function ApiFetcher(path, params) {
    // Try to fetch
    try {
        // Conduct the fetch, have to use JSON.stringify to be able to res.json()
        let res = await fetch(PUBLIC_ABS_URL + path, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params)
        });
        return res.json()
    } catch (e) {
        console.log(e)
    }
}