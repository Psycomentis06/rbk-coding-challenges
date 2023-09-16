<script lang="ts">
  import {Router, Route} from 'svelte-routing'
  import Home from './lib/routes/Home.svelte'
  import EditProfile from './lib/routes/EditProfile.svelte'
  import EditLinks from './lib/routes/EditLinks.svelte'
  import Header from './lib/components/Header.svelte';
  import {getUser, saveUser, type UserProfile} from './lib/services/user-profile'
  import { onMount } from 'svelte';
  import {userProfileStore} from './lib/stores/profile'
  import Edit from './lib/routes/Edit.svelte';
  import {toastStore} from './lib/stores/toast'
    import { removeToast } from './lib/services/toast';
    import { SocialMediaNames } from './lib/services/social-links';
  onMount(() => {
    let user: UserProfile = getUser()
    if (!user) {
      user = {
        name: "Ben ",
        lastName: "Wright",
        email: "ben@example.com",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
        links: [
          {
            socialId: SocialMediaNames.GITHUB,
            username: "BenWright"
          },
          {
            socialId: SocialMediaNames.YOUTUBE,
            username: "benYt"
          },
          {
            socialId: SocialMediaNames.LINKEDIN,
            username: "ben_wright"
          }
        ]
      }
      saveUser(user)
    }
    userProfileStore.set(user)
  })
</script>
<main>
  <Router>
    <Header />
    <div>
      <Route path="/" component={Home} />
      <Route path="/edit">
        <Edit><EditProfile /></Edit>
      </Route>
      <Route path="/edit/links">
        <Edit>
          <EditLinks />
        </Edit>
      </Route>
    </div>
  </Router>
  {#each $toastStore as t}
    <div class="toast toast-center">
      <div class="alert bg-neutral-700 text-white shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <div>
          {#if t.toast.title}
            <h3 class="font-bold">{t.toast.title}</h3>
          {/if}
          {#if t.toast.message}
          <div class="text-xs">{t.toast.message}</div>
          {/if}
        </div>
        {#if t.toast.closeBtn}
          <button on:click={() => removeToast(t.id)} class="btn btn-sm">Close</button>
        {/if}
      </div>
    </div>
  {/each}
</main>
