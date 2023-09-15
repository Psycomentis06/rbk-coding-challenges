<script lang="ts">
  import {Link} from 'svelte-routing'
</script>
<nav class="navbar bg-base-100 w-auto mx-10 mt-5 rounded-xl p-3">
  <div class="navbar-start">
    <Link to="/edit/profile">
      <span class="normal-case btn btn-outline btn-primary">Back to Editor</span>
    </Link>
  </div>
  <div class="navbar-center flex">
  </div>
  <div class="navbar-end">
    <span class="normal-case btn btn-primary">Share Link</span>
  </div>
</nav>
