import { redirect } from "@sveltejs/kit"

export const load = async ({ cookies }) => {
    if (cookies.get('user')) {
        throw redirect(302, '/profile')
    }
}

export const actions = {
    sendcode: async ({}) => {
        
    }
}