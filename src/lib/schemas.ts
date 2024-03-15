import { z } from "zod";


export const loginSchema = z.object({
    email: z.string().email({ message: "Email is required." }),
    password: z.string().min(1, { message: "Must enter a password." })
});

export const registerSchema = z.object({
    firstName: z.string().min(1, { message: "Must enter your first name." }),
    lastName: z.string().min(1, { message: "Must enter your last name." }),
    studentId: z.string().min(1, { message: "Must enter your student id." }),
    email: z.string().email({ message: "Your email must be valid." }),
    password: z.string().min(6, { message: "Must choose a strong password." }),
    confirmPassword: z.string().min(1, { message: "Must confirm your password." }),
}).superRefine(({ password, confirmPassword }, ctx) => {

    if (password !== confirmPassword) {
        ctx.addIssue({
            code: "custom",
            message: "Password and Confirm New Password must match",
            path: ["password"]
        });

        ctx.addIssue({
            code: "custom",
            message: "Password and Confirm New Password must match",
            path: ["confirmPassword"]
        })
    }

});