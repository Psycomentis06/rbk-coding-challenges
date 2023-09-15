<script lang="ts">
  import {Router, Route} from 'svelte-routing'
  import Home from './lib/routes/Home.svelte'
  import EditProfile from './lib/routes/EditProfile.svelte'
  import EditLinks from './lib/routes/EditLinks.svelte'
  import Header from './lib/components/Header.svelte';

</script>
  <Router>
  <Header />
  <div>
    <Route path="/" component={Home} />
    <Route path="/edit" component={EditProfile} />
    <Route path="/edit/profile" component={EditLinks} />
  </div>
  </Router>
