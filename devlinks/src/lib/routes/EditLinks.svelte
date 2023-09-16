<script lang="ts">
  import { onMount } from 'svelte';
  import {showDefaultHeader, showEditHeader} from '../stores/header'
  import {socialMedia, type SocialMedia} from '../services/social-links'
  import LinkInput from '../components/LinkInput.svelte';
  import { getUser, saveUser, type UserLink } from '../services/user-profile';
  import { userProfileStore } from '../stores/profile';
  import { addToast } from '../services/toast';
  import { randomId } from '../utils/rand';

  export const maxLinks = 5


  let userLinks: UserLink[] = []
  $: userLinks = userLinks.map(l => {
    l.id = randomId(10)
    return l
  })
  onMount(() => {
    showDefaultHeader.set(false)
    showEditHeader.set(true)
    userLinks = $userProfileStore.links || []
  })
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
    }
  }
  const removeLink = (index: number) => {
    userLinks.splice(index,1)
    userLinks = userLinks
  }


  const reorderLinks = (links: UserLink[], from:number, to:number) => {
    const newArray = [...links]
    const [removed] = newArray.splice(from, 1)
    newArray.splice(to, 0, removed)
    return newArray
  }

  let draggableItemFromIndex = -1
  const onDrop = (e: DragEvent) => {
    e.preventDefault()
    const toIndex = e.detail
    if (draggableItemFromIndex !==-1 && draggableItemFromIndex !== toIndex) {
      userLinks = reorderLinks(userLinks, draggableItemFromIndex, toIndex)
    }
  }

  const onDragStart = (e: DragEvent) => {
    const index = (e.target as HTMLOListElement).dataset.index
    e.dataTransfer.setData("text/plain", index.toString())
    draggableItemFromIndex = parseInt(index)
  }

  const onDragover = (e: DragEvent) => {
    e.preventDefault()
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
  <ul>
    {#each userLinks as ul, index (ul.id)}
      <li 
        class="my-4" 
        draggable="true"
        data-index={index}
        on:dragstart={onDragStart}
        on:dragover={onDragover}
        on:drop={onDrop}>
        <LinkInput 
          on:update={(v) => {userLinks[index].username = v.detail.username || ""}}
          on:remove={() => removeLink(index)}
          socialMediaName={ul.socialId}
          socialMediaUsername={userLinks[index].username}
          linkIndex={index+1} />
      </li>
    {/each}

  </ul>
    <button on:click={saveUserLinks} class="btn btn-primary my-4 btn-wide normal-case block ml-auto mr-0">Save</button>
</section>
