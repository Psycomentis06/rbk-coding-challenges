<script lang="ts">
  import {
    getSocialMedia,
    type SocialMediaNames,
  } from "../services/social-links";

  export let socialMediaName: SocialMediaNames;
  export let username: string;

  $: socialMedia = getSocialMedia(socialMediaName);
  $: socialMediaBrandColor = socialMedia?.color || "#000000";
  $: borderTextHoverColor = 'white'

  $:userSocialUrl = socialMedia?.url.replace("${username}", username);

  </script>
<a
  href={userSocialUrl}
  style="background-color: {socialMediaBrandColor}; color: {borderTextHoverColor};"
  target="_blank"
  class="social-link w-full flex justify-between btn capitalize shadow"
>
  <div class="flex items-center">
    {@html socialMedia.icon}
    <p class="mx-2">
      {username}
    </p>
  </div>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
    </svg>
  </div>
</a>
