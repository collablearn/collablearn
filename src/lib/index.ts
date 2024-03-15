import { writable } from "svelte/store";

export const loginComponent = writable({
    showForgotPass: false,
    showCreateAccount: false
})

export const authComponent = writable({
    activeItem: ""
})