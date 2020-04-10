<template>
  <main class="page">
    <div class="screen">
      <h1 class="heading">Create an account</h1>
      <p class="desc">In order to apply to Hyphen-Hacks you must create an account with us. You will use this account to
        apply and view your registration status.</p>
      <div v-if="!emailSignUp" class="flex flex-col justify-center">
        <button @click="signInWithGithub" class="btn--dark mt-4 mx-auto"><i class="fab fa-github"></i> Login with Github
        </button>
        <button @click="signInWithGoogle" class="btn--dark mt-2 mx-auto"><i class="fab fa-google"></i> Login with Google
        </button>
        <button @click="emailSignUp = true" class="btn mt-2 mx-auto">Use email and password</button>
      </div>
      <form @submit.prevent v-if="emailSignUp" class="flex flex-col justify-center">
        <button @click="emailSignUp = false" class="mr-auto mt-5 text-primary">back</button>
        <input placeholder="email" type="email" class="input mb-5">
        <input placeholder="password" type="password" class="input">
        <button class="btn mt-5 mx-auto">Sign Up</button>
      </form>

    </div>
  </main>
</template>
<script>
  export default {
    name: "Auth",
    data() {
      return {
        emailSignUp: false
      }
    },
    methods: {
      signInWithGoogle() {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithRedirect(provider);
      },
      signInWithGithub() {
        var provider = new firebase.auth.GithubAuthProvider();
        firebase.auth().signInWithRedirect(provider);
      }
    }
  }
</script>