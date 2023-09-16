<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { getSocialMedia, type SocialMediaNames } from "../services/social-links";
  export let socialMediaName: SocialMediaNames
  let socialMedia = getSocialMedia(socialMediaName)
  let socialMediaUsername = ""
  export let linkIndex
  const dispatch = createEventDispatcher()
  const onRemove = () => {
    dispatch('remove', {item: linkIndex})
  }
  const onChange = () => {
    dispatch('update', {username: socialMediaUsername})
    console.log(socialMediaUsername)
  }
  $: socialUrl = socialMedia.url.replace("${username}", socialMediaUsername)
</script>
<div class="bg-base-200 p-4 rounded-lg w-full">
  <div class="flex justify-between items-center">
    <div class="flex">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-neutral-500 mx-2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
      </svg>
      <h3>Link #{linkIndex}</h3>
    </div>
    <button on:click={() => onRemove()} class="text-neutral-500">Remove</button>
  </div>
  <div>
    <div class="form-control w-full">
      <label for="social-username-{linkIndex}" class="label">
        <span class="label-text">Platform: <strong style="color: {socialMedia.color};">{socialMedia.fullName}</strong></span>
      </label>
      <input on:keydown={() => onChange()} bind:value={socialMediaUsername} id="social-username-{linkIndex}" type="text" placeholder="Type here" class="input input-bordered w-full " />
      <label for="social-username-{linkIndex}" class="label">
        <span class="label-text-alt">{socialUrl}</span>
      </label>
    </div>
  </div>
</div>

