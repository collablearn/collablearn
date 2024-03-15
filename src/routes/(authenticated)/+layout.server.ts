import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "../$types";

export const load: PageServerLoad = async ({ locals: { isLogged } }) => {

    const whoareyou = isLogged();

    if (whoareyou !== "has auth") throw redirect(302, "/?authError=You-have-to-login");

};