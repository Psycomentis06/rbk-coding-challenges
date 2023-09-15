<script lang="ts">
  import { onMount } from 'svelte';
  import ProfileCard from '../components/ProfileCard.svelte'
  import {showDefaultHeader, showEditHeader} from '../stores/header'

  onMount(() => {
    showDefaultHeader.set(true)
    showEditHeader.set(false)
  })
</script>


<section class="home-section flex items-center justify-center">
  <ProfileCard />
</section>

<style lang="scss">
  .home-section {
    min-height: calc(100vh - 50px);
    position: relative;
    &::after {
      content: '';
      width: 100%;
      height: 60%;
      position: absolute;
      top: -20%;
      left: 0;
      background-color: hsl(var(--p));
      z-index: -1;
      border-bottom-right-radius: 30px;
      border-bottom-left-radius: 30px;
    }
  }
</style>
