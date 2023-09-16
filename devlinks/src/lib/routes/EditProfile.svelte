<script lang="ts">
  import UploadProfilePicture from '../components/UploadProfilePicture.svelte';
  import ProfileForm from '../components/ProfileForm.svelte';
  import { getUser, saveUser } from '../services/user-profile';
  import {userProfileStore} from '../stores/profile'
    import { addToast } from '../services/toast';
  let firstname
  let lastname
  let email
  let avatar

  const saveUserInfo = () => {
    let user = getUser()
    if (user) {
      user.name = firstname
      user.lastName = lastname
      user.email = email
      user.avatar = avatar
    } else {
      user = {
        name: firstname,
        lastName: lastname,
        email: email,
        avatar: avatar,
        links: []
      }
    }
    saveUser(user)
    userProfileStore.set(user)
    addToast({
      message: "Your changes have been successfully save!",
      closeBtn: true
    })
  }
</script>
<h1 class="text-3xl font-bold">Profile Details</h1>
<h5 class="mt-5 text-neutral-500">Add your details to create a personal touch to your profile.</h5>
<UploadProfilePicture bind:avatar={avatar} />
<ProfileForm bind:firstname={firstname} bind:lastname={lastname} bind:email={email} />
<button on:click={saveUserInfo} class="btn btn-primary my-4 btn-wide normal-case block ml-auto mr-0">Save</button>
