<script>
  import {userProfileStore} from "../stores/profile"
  let d = [1,2,3]

</script>
<div class="w-[300px] bg-base-100 p-11 rounded-2xl shadow">
  {#if $userProfileStore && $userProfileStore.avatar}
    <div class="avatar block">
      <div class="w-20 h-20 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
        <img alt="user profile pic" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
      </div>
    </div>
  {:else}
    <div class="w-24 h-24 mx-auto bg-neutral-200 my-5 rounded-full"></div>
  {/if}

  <div class="text-center">
    {#if $userProfileStore && $userProfileStore.name}
      <h1 class="text-3xl font-bold my-5">Ali Amor</h1>
    {:else}
      <div class="w-full h-5 bg-neutral-200 my-5 rounded-full"></div>
    {/if}
    {#if $userProfileStore && $userProfileStore.email}
      <h4 class="text-sm my-4">alibenamor30@gmail.com</h4>
    {:else}
      <div class="w-1/2 h-3 bg-neutral-200 mx-auto my-5 rounded-full"></div>
    {/if}
  </div>
  <div class="flex-row mt-14">
    {#if $userProfileStore && $userProfileStore.links}
    {:else}
     {#each d as a}
      <div class="w-full h-10 bg-neutral-200 mx-auto my-5 rounded-lg"></div>
    {/each}
    {/if}
      </div>
</div>
