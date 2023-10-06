import FetchMongo from "./FetchMongo";

export default async function BackendVerify(params) {
    if (params.user != null) {
        if (typeof params.user == 'string') {
            params.user = JSON.parse(params.user);
        }
        const upUser = await FetchMongo({ username: params.user.username }, "users", true);
        if (!upUser) return false;
        if (upUser.password != params.user.password) return false;
    } else {
        return false;
    }
    return true;
}