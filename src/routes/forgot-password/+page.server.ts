import AddMongo from "$services/AddMongo.js";
import AddObjectId from "$services/AddObjectId.js";
import CreateIndexMongo from "$services/CreateIndexMongo.js";
import DeleteMongo from "$services/DeleteMongo.js";
import FetchMongo from "$services/FetchMongo.js";
import { redirect } from "@sveltejs/kit"
import crypto from "crypto";
import { SendCode } from "$services/SendEmail.js";

export const load = async ({ cookies }) => {
    if (cookies.get('user')) {
        throw redirect(302, '/profile')
    }
}

export const actions = {
    sendcode: async ({ cookies, request }) => {
        console.log("SENDING EMAIL")
        const data = await request.formData();
        const email = data.get('EmailInput');
        let user = await FetchMongo({ email }, "users");
        if (!user[0]) return;
        user = user[0]
        let uid = user._id;
        let code = uid + crypto.randomBytes(254).toString('hex');
        uid = AddObjectId(uid);
        console.log("BRUV")
        let prevCode = await FetchMongo({ uid }, "codes", true);
        while (prevCode) {
            await DeleteMongo({ uid }, "codes");
            prevCode = await FetchMongo({ uid }, "codes", true);
        }
        console.log("DELETED)")
        await AddMongo({ uid, code, createdAt: new Date()}, "codes");
        console.log("WTFFFFF")
        await CreateIndexMongo({ "createdAt": 1 }, { expireAfterSeconds: 900 }, "codes");
        SendCode(email, code);
        console.log("WTF")
        return "Password reset link has been sent to your email";
    }
}