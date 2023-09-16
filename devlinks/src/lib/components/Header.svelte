<script>
  import DefaultHeader from '../components/DefaultHeader.svelte'
  import EditHeader from '../components/EditHeader.svelte'
  import {showEditHeader, showDefaultHeader} from '../stores/header'
</script>

<header class="shadow bg-base-100 w-auto mx-10 mt-5 rounded-xl">
  {#if $showEditHeader}
    <EditHeader />
  {/if}
  {#if $showDefaultHeader}
    <DefaultHeader />
  {/if}
</header>
