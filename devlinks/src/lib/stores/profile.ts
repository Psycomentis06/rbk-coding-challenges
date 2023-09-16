import { writable } from "svelte/store";
import type { UserProfile } from "../services/user-profile";

export const userProfileStore = writable<UserProfile>()
