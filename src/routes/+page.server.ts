import type { Actions, PageServerLoad } from "./$types";
import { loginSchema, registerSchema, resetPassSchema } from "$lib/schemas";
import type { ZodError } from "zod";
import { error, fail, redirect } from "@sveltejs/kit";

export const load: PageServerLoad = async ({ locals: { isLogged }, cookies }) => {

    const whoareyou = isLogged();
    if (whoareyou === "has auth") throw redirect(302, "/dashboard");

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
            else if (registerData) {
                const { error: logoutError } = await supabase.auth.signOut();
                if (logoutError) return fail(401, { msg: logoutError.message });
                else return fail(200, { msg: "Account Created.", session: registerData.session });
            }

        } catch (error) {
            const zodError = error as ZodError;
            const { fieldErrors } = zodError.flatten();
            return fail(400, { errors: fieldErrors });
        }
    },

    resetPassAction: async ({ locals: { supabase }, request }) => {
        const formData = Object.fromEntries(await request.formData());

        try {
            const result = resetPassSchema.parse(formData);
            const { error: resetPassError } = await supabase.auth.resetPasswordForEmail(result.email);
            if (resetPassError) return fail(401, { msg: resetPassError.message });
            else return fail(200, { msg: `An email containing reset password link has been sent to ${result.email}` });

        } catch (error) {
            const zodError = error as ZodError;
            const { fieldErrors } = zodError.flatten();
            return fail(400, { errors: fieldErrors });
        }
    },

    logoutAction: async ({ locals: { supabase } }) => {

        const { error: logoutError } = await supabase.auth.signOut();

        if (logoutError) return fail(402, { msg: logoutError.message });
        else return fail(200, { msg: "Logout success." });
    }
};