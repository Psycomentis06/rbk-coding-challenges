<script lang="ts">
  import {userProfileStore} from "../stores/profile"
  let fileInput: File[];
  export let avatar = ""

  const onImageInputChange = (e: InputEvent) => {
    const el = e.target as HTMLInputElement
    if (el.files && el.files.length > 0) {
      avatar = URL.createObjectURL(el.files[0])
    }
  }
</script>
<div class="flex justify-between items-center my-5 p-4 bg-base-200 rounded-lg">
  <h4 class="text-neutral-500">Profile picture:</h4>
  <div>
    <div>
      <label for="image-input" class="cursor-pointer ">
        <div class="w-[140px] h-[140px] rounded-lg overflow-hidden relative">
          {#if avatar}
            <img class="w-full h-full object-cover" src={avatar} alt="default">
              {:else}
            <div class="w-full h-full bg-neutral-700"></div>
          {/if}
          <div class="image-input-label-overlay flex flex-col items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            <h6 class="font-bold">{avatar ? 'Change Image' : 'Upload Image'}</h6>
          </div>
        </div>
      </label>
      <input id="image-input" class="hidden" on:change={onImageInputChange} bind:value={fileInput} type="file">
    </div>
  </div>
  <div>
    <h5 class="text-neutral-500">Image must be below 1024x1024px.</h5>
    <h5 class="text-neutral-500">Use PNG, JPG or BMP format.</h5>
  </div>
</div>
<style lang="scss">
  .image-input-label-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 100%;
    height: 100%;
    color: white;
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,.4);
      z-index: -1;
    }
  }
</style>
