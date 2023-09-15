<script lang="ts">
  import { onMount } from 'svelte';
  import {showDefaultHeader, showEditHeader} from '../stores/header'

  onMount(() => {
    showDefaultHeader.set(false)
    showEditHeader.set(true)
  })
</script>

Profile
