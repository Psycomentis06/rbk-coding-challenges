<script>
  let d = [1,2,3]
</script>
<div class="w-[300px] bg-base-100 p-11 rounded-2xl shadow-2xl">
  <div class="avatar block">
    <div class="w-20 h-20 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
      <img alt="user profile pic" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
  
  <div class="text-center">
    <h1 class="text-3xl font-bold my-5">Ali Amor</h1>
    <h4 class="text-sm my-4">alibenamor30@gmail.com</h4>
  </div>
  <div class="flex-row">
    {#each d as a}
      <button class="btn btn-accent w-full my-2">ButtonN{a}</button>
    {/each}
  </div>
</div>
