<script lang="ts">
  import {
    getSocialMedia,
    type SocialMediaNames,
  } from "../services/social-links";

  export let socialMediaName: SocialMediaNames;
  export let username: string;

  const socialMedia = getSocialMedia(socialMediaName);
  $: socialMediaBrandColor = socialMedia?.color || "#000000";
  $: borderTextHoverColor = 'white'

  if (!socialMedia) {
    throw new Error(`Social media ${socialMediaName} not found`);
  }

  function getUrl() {
    return socialMedia?.url.replace("${username}", username);
  }

  </script>
<a
  href={getUrl()}
  style="color: {socialMediaBrandColor}; --social-media-hover-bg: {socialMediaBrandColor}; --border-hover-color: {borderTextHoverColor};"
  target="_blank"
  class="social-link border-2 btn btn-outline capitalize rounded-full shadow"
>
  {@html socialMedia.icon}
  <p class="mx-2">
    {username}
  </p>
</a>

<style>
  .social-link:hover {
    color: var(--border-hover-color) !important;
    border: var(--border-hover-color) 2px solid !important;
    background-color: var(--social-media-hover-bg);
  }
</style>
