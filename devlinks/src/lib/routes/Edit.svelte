<script lang="ts">
  import { onMount } from 'svelte';
  import {showDefaultHeader, showEditHeader} from '../stores/header'
  import ProfileCard from '../components/ProfileCard.svelte';

  onMount(() => {
    showDefaultHeader.set(false)
    showEditHeader.set(true)
  })
</script>
<section class="flex w-full mt-3 container mx-auto" style="gap: 20px;">
  <div class="bg-base-100 w-4/6 rounded-lg p-5">
    <div class="mockup-phone mx-auto">
      <div class="camera"></div> 
      <div class="display">
        <div class="artboard artboard-demo phone-1 bg-base-100">
          <ProfileCard />
        </div>
      </div>
    </div>
  </div>
  <div class="bg-base-100 w-full rounded-lg px-8 py-12">
    <slot />
      </div>
</section>
