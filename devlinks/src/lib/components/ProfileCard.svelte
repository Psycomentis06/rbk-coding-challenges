<script>
  import {userProfileStore} from "../stores/profile"
    import SocialMediaLink from "./SocialMediaLink.svelte";
  let d = [1,2,3]

</script>
<div class="w-[300px] bg-base-100 p-11 rounded-2xl shadow">
  {#if $userProfileStore && $userProfileStore.avatar}
    <div class="avatar block">
      <div class="w-20 h-20 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
        <img alt="user profile pic" src={$userProfileStore.avatar} />
      </div>
    </div>
  {:else}
    <div class="w-24 h-24 mx-auto bg-neutral-200 my-5 rounded-full"></div>
  {/if}

  <div class="text-center">
    {#if $userProfileStore && ($userProfileStore.name || $userProfileStore.lastName)}
      <h1 class="text-3xl font-bold my-5">
        {($userProfileStore.name || '') + ' ' + ($userProfileStore.lastName)}
      </h1>
    {:else}
      <div class="w-full h-5 bg-neutral-200 my-5 rounded-full"></div>
    {/if}
    {#if $userProfileStore && $userProfileStore.email}
      <h4 class="text-sm my-4">{$userProfileStore.email}</h4>
    {:else}
      <div class="w-1/2 h-3 bg-neutral-200 mx-auto my-5 rounded-full"></div>
    {/if}
  </div>
  <div class="flex-row mt-14">
    {#if $userProfileStore && $userProfileStore.links && $userProfileStore.links.length > 0}
      {#each $userProfileStore.links as l}
        <div class="my-4">
          <SocialMediaLink username={l.username} socialMediaName={l.socialId} /> 
        </div>
      {/each}
    {:else}
     {#each d as a}
      <div class="w-full h-10 bg-neutral-200 mx-auto my-5 rounded-lg"></div>
    {/each}
    {/if}
      </div>
</div>
