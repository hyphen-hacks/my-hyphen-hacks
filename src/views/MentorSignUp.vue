<template>
  <div class="page">
    <navBar></navBar>

    <main class="page__content">

      <div class="screen">
        <h1 class="heading">Create an account</h1>
        <p class="desc">In order to apply to Hyphen-Hacks you must create an account with us. You will use this account
          to
          apply and view your registration status.</p>
        <div v-if="!emailSignUp" class="grid justify-center mt-auto mb-auto">
          <button @click="signInWithGithub" class="btn--dark mt-4 "><i class="fab fa-github"></i> Sign up with
            Github
          </button>
          <button @click="signInWithGoogle" class="btn--dark mt-2 "><i class="fab fa-google"></i> Sign up with
            Google
          </button>
          <button @click="emailSignUp = true" class="btn mt-2">Use email and password</button>
        </div>
        <button v-if="emailSignUp" @click="emailSignUp = false" class="mr-auto mt-auto text-primary">back</button>
        <form @submit.prevent="signUpEmail" v-show="emailSignUp" class="flex flex-col justify-center mt-auto mb-auto">

          <input required placeholder="email" type="email" class="input mb-5" v-model="email">
          <input required placeholder="password" type="password" class="input" v-model="pass">
          <p class="text-warning">{{emailError}}</p>
          <button type="submit" @click.prevent="signUpEmail" class="btn mt-5 mx-auto">Sign Up</button>
        </form>

      </div>
    </main>
  </div>
</template>
<script>
  import navBar from "@/components/nav.vue"

  export default {
    name: "Auth",
    components: {navBar},
    data() {
      return {
        emailSignUp: false,
        email: "",
        pass: "",
        emailError: "",
        loading: true
      }
    },
    computed: {
      user() {
        return this.$store.getters.user
      }
    },
    created() {
      if (this.user) {
        this.$router.push('/apply/mentor')
      } else {
        this.$store.commit("loading", false)
      }
    },
    methods: {
      signInWithGoogle() {
        var provider = new this.$firebase.auth.GoogleAuthProvider();
        this.$firebase.auth().signInWithRedirect(provider);
      },
      signInWithGithub() {
        var provider = new this.$firebase.auth.GithubAuthProvider();
        this.$firebase.auth().signInWithRedirect(provider);
      },
      signUpEmail() {
        this.$firebase.auth().createUserWithEmailAndPassword(this.email, this.pass).then(user => {
          this.$store.commit("user", user)
          this.$router.push("/apply/mentor")
        }).catch( (error) => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          this.emailError = errorMessage
          console.log(errorCode, errorMessage)
          // ...
        });
      }
    }
  }
</script>