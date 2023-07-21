import { PUBLIC_ABS_URL } from "$env/static/public";

export default async function ApiFetcher(path, params) {
    try {
        let res = await fetch(PUBLIC_ABS_URL + path, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        });
        return res.json()
    } catch (e) {
        console.log(e)
    }
}