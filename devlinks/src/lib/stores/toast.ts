import { writable } from "svelte/store";
import type{ToastInternal} from '../services/toast'

export const toastStore = writable<ToastInternal[]>([])
