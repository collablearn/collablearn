import { writable } from "svelte/store";

export const authComponent = writable({
    activeItem: ""
})