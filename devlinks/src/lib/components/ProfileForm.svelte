<script lang="ts">
    import { onMount } from "svelte";
    import { getUser } from "../services/user-profile";

  export let firstname = ""
  export let lastname = ""
  export let email = ""

  onMount(() => {
      let user = getUser()
      if (user) {
        firstname = user.name
        lastname = user.lastName
        email = user.email
      }
    })
</script>
<div class="w-full bg-base-200 p-5 rounded-lg flex flex-col" style="gap: 20px;">
  <div class="flex justify-between items-center">
    <label for="firstname-input" class="text-neutral-500">First Name <i>*</i></label>
    <input bind:value={firstname} id="firstname-input" type="text" placeholder="Name" class="input input-bordered input-primary w-full max-w-xs" />
  </div>
  <div class="flex justify-between items-center">
    <label for="lasttname-input" class="text-neutral-500">Last Name <i>*</i></label>
    <input bind:value={lastname} id="lastname-input" type="text" placeholder="Famiyly name" class="input input-bordered input-primary w-full max-w-xs" />
  </div>
  <div class="flex justify-between items-center">
    <label for="email-input" class="text-neutral-500">Email<i>*</i></label>
    <input bind:value={email} id="email-input" type="email" placeholder="user@u.com" class="input input-bordered input-primary w-full max-w-xs" />
  </div>
</div>
