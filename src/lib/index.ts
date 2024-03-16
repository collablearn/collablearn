import { writable } from "svelte/store";

export const staticComponent = writable({
    showSuccessCreateAccount: false,
    showCreateAccount: false,
    showForgotPassword: false,
    showResetCodeUI: false,
    showUpdatePassUI: false,
    showSuccessUpdatePassModal: false,

})

export const authComponent = writable({
    activeItem: ""
})