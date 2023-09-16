<script lang="ts">
  import { onMount } from 'svelte';
  import {showDefaultHeader, showEditHeader} from '../stores/header'
  import {socialMedia, type SocialMedia} from '../services/social-links'
  import LinkInput from '../components/LinkInput.svelte';
  import { getUser, saveUser, type UserLink } from '../services/user-profile';
  import { userProfileStore } from '../stores/profile';
  import { addToast } from '../services/toast';

  export const maxLinks = 5


  onMount(() => {
    showDefaultHeader.set(false)
    showEditHeader.set(true)
  })
  let userLinks: UserLink[] = []
  const saveUserLinks = () => {
    userLinks = userLinks.filter(u => u.username.trim().length > 0)
    if (userLinks.length <= 0) return
    let user = getUser()
    if (user) {
      user.links = userLinks
    } else {
      user = {
        links: userLinks
      }
    }
    userProfileStore.set(user)
    saveUser(user)
    addToast({
      message: "Your changes have been successfully saved!",
      closeBtn: true
    })
  }
  const addLink = (link: SocialMedia) => {
    if (userLinks.length < maxLinks) {
      userLinks.push({socialId: link.name, username: ""})
      userLinks = userLinks
    console.log(userLinks)
    }
  }

  const removeLink = (index: number) => {
    userLinks.splice(index, 1)
    console.log(userLinks)
    userLinks = userLinks
  }
</script>
<section class="w-full min-h-screen">
  <h1 class="text-3xl font-bold">Customize your links</h1>
  <h5 class="mt-5 text-neutral-500">Add/Edit/Remove links below and then share all your profiles with the world</h5>
  <details class="dropdown mb-9 w-full mt-8">
    <summary class="m-1 btn btn-block btn-outline btn-primary">+Add new link</summary>
    <ul class="p-5 shadow-lg menu dropdown-content z-[1] bg-neutral-content rounded-box w-full">
      {#each socialMedia as sm}
        <li style="color: {sm.color}" on:click={() => addLink(sm)}>
          <a>
            {@html sm.icon}
            {sm.fullName}
          </a>
        </li>
      {/each}
    </ul>
  </details>
  {#each userLinks as ul, index }
    <div class="my-4">
    <LinkInput on:update={(v) => {userLinks[index].username = v.detail.username || ""}} on:remove={() => removeLink(index)} socialMediaName={ul.socialId}  linkIndex={index+1} />
    </div>
  {/each}
  <button on:click={saveUserLinks} class="btn btn-primary my-4 btn-wide normal-case block ml-auto mr-0">Save</button>
</section>
