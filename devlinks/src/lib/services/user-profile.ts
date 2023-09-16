import type { SocialMediaNames } from "./social-links"

export interface UserProfile {
  name?: string
  email?: string
  avatar?: string
  links: UserLink[]
}

export interface UserLink {
  socialId: SocialMediaNames
  username: string
}

const USER_PROFILE_LOCALSTORAGE_KEY = "devlinks:user:profile"

export function saveUser(userProfile: UserProfile) {
  const userDataStr = JSON.stringify(userProfile)
  localStorage.setItem(USER_PROFILE_LOCALSTORAGE_KEY, userDataStr)
}

export function getUser() {
  const userProfile = JSON.parse(localStorage.getItem(USER_PROFILE_LOCALSTORAGE_KEY))
  return userProfile
}
