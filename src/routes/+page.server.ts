import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {

};


export const actions: Actions = {
    loginAction: async ({ locals: { supabase }, cookies }) => {
        console.log("PING FROM LOGIN SERVER")
    }
};