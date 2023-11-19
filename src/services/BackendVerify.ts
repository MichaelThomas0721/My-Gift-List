import FetchMongo from "./FetchMongo";

export default async function BackendVerify(params) {
    console.log(params)
    if (params.user != null) {
        if (typeof params.user == 'string') {
            params.user = JSON.parse(params.user);
        } else if (typeof params.user == "object" && params.user.code) {
            console.log("rekjrejrkj")
            let reset = await FetchMongo({ code: params?.user?.code }, "codes")
            console.log(reset)
            if (!reset[0]) return false
            return true
        }
        const upUser = await FetchMongo({ username: params.user.username }, "users", true);
        if (!upUser) return false;
        if (upUser.password != params.user.password) return false;
    } else {
        return false;
    }
    return true;
}