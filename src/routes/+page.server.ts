import type { Actions, PageServerLoad } from "./$types";
import { loginSchema, registerSchema } from "$lib/schemas";
import type { ZodError } from "zod";
import { fail } from "@sveltejs/kit";

export const load: PageServerLoad = async () => {

};


export const actions: Actions = {
    loginAction: async ({ locals: { supabase }, cookies, request }) => {

        const formData = Object.fromEntries(await request.formData());

        try {
            const result = loginSchema.parse(formData);

            const { data: loginData, error: loginError } = await supabase.auth.signInWithPassword({
                email: result.email,
                password: result.password
            });

            if (loginError) return fail(401, { msg: loginError.message });
            else if (loginData) return fail(200, { msg: "Login Success", session: loginData.session });

        } catch (error) {
            const zodError = error as ZodError;
            const { fieldErrors } = zodError.flatten();

            return fail(400, { errors: fieldErrors });
        }

    },

    registerAction: async ({ locals: { supabase }, cookies, request }) => {
        const formData = Object.fromEntries(await request.formData());

        try {
            const result = registerSchema.parse(formData);

            const { data: registerData, error: registerError } = await supabase.auth.signUp({
                email: result.email,
                password: result.password,
                options: {
                    data: {
                        firstName: result.firstName,
                        lastName: result.lastName,
                        studentId: result.studentId
                    }
                }
            });

            if (registerError) return fail(401, { msg: registerError.message });
            else if (registerData) return fail(200, { msg: "Account Created.", session: registerData.session });

        } catch (error) {
            const zodError = error as ZodError;
            const { fieldErrors } = zodError.flatten();
            return fail(400, { errors: fieldErrors })
        }
    }
};