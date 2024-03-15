import { writable } from "svelte/store";

export const staticComponent = writable({
    showSuccessCreateAccount: false
})

export const authComponent = writable({
    activeItem: ""
})