import { writable } from 'svelte/store';

export default writable(() => console.log("Default"))