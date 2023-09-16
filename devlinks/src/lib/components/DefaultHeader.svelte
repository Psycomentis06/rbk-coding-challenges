<script lang="ts">
  import {Link} from 'svelte-routing'
</script>
<nav class="navbar px-6 py-4">
  <div class="navbar-start">
    <Link to="/edit">
      <span class="normal-case btn btn-outline btn-primary">Back to Editor</span>
    </Link>
  </div>
  <div class="navbar-center flex">
  </div>
  <div class="navbar-end">
    <span class="normal-case btn btn-primary">Share Link</span>
  </div>
</nav>
