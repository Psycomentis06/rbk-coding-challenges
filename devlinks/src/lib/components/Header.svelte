<script>
  import DefaultHeader from '../components/DefaultHeader.svelte'
  import EditHeader from '../components/EditHeader.svelte'
  import {showEditHeader, showDefaultHeader} from '../stores/header'
</script>

<header class="shadow">
  {#if $showEditHeader}
    <EditHeader />
  {/if}
  {#if $showDefaultHeader}
    <DefaultHeader />
  {/if}
</header>
