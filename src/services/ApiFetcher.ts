import { PUBLIC_ABS_URL } from "$env/static/public";

export default async function ApiFetcher(path, params) {
    try {
        return await fetch(PUBLIC_ABS_URL + path, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        });
    } catch (e) {
        console.log(e)
    }
}