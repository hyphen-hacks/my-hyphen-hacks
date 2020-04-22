<template>
  <div class="page">
    <navBar></navBar>
    <main class="page__content">

      <div class="screen">
        <h1 class="heading">Login</h1>
        <p class="desc">Login to view your Hyphen-Hacks dashboard</p>
        <div v-if="!emailSignUp" class="grid justify-center mt-auto mb-auto ">
          <button @click="signInWithGithub" class="btn--dark mt-4"><i class="fab fa-github"></i> Login with
            Github
          </button>
          <button @click="signInWithGoogle" class="btn--dark mt-4 "><i class="fab fa-google"></i> Login with
            Google
          </button>
          <button @click="emailSignUp = true" class="btn mt-4">Use email and password</button>
        </div>
        <button v-if="emailSignUp" @click="emailSignUp = false" class="mr-auto mt-auto text-primary">back</button>
        <form @submit.prevent="signUpEmail" v-show="emailSignUp" class="flex flex-col justify-center  mb-auto">
          <input required placeholder="email" type="email" class="input mb-5" v-model="email">
          <input required placeholder="password" type="password" class="input" v-model="pass">
          <p class="text-warning">{{emailError}}</p>
          <button type="submit" @click.prevent="signUpEmail" class="btn mt-5 mx-auto">Login</button>
        </form>
        <a class="ml-auto mr-auto" href="https://admin.2020.hyphen-hacks.com">admin sign on</a>
      </div>
    </main>
  </div>
</template>
<script>
  import navBar from "@/components/nav.vue"
  import Loader from "@/components/loading.vue"

  export default {
    name: "Auth",
    components: {navBar, Loader},
    data() {
      return {
        emailSignUp: false,
        email: "",
        pass: "",
        emailError: "",

      }
    },
    computed: {
      user() {
        return this.$store.getters.user
      }
    },
    created() {
      this.$store.commit("loading", true)
      if (this.user) {
        this.handleUser()
      } else {
        this.$store.commit("loading", false)
      }
    },
    methods: {
      handleUser() {
        console.log("handling user", this.user.uid)
        if (this.user) {
          fetch(this.$store.getters.api + "/api/v1/apply/status", {
            method: "get",
            headers: {
              "authorization": this.$store.getters.token
            }
          }).then(async res => {
            let resJson = await res.json()

            console.log(resJson)
            if (resJson.applied) {
              this.$router.push("/status")
            } else {
              this.$firebase.firestore().collection("users").doc(this.user.uid).get().then(doc => {
                if (doc.exists) {
                  let data = doc.data()
                  console.log(data.intent, data.intent == "applyAttendee", "intent")
                  switch (data.intent) {
                    case "applyAttendee":
                      this.$router.push('/apply/attendee')
                      break
                    default:
                      this.$router.push('/apply')
                      break
                  }
                } else {
                  this.$store.commit("loading", false)
                }

              })
            }
          })


        }
      },
      signInWithGoogle() {
        var provider = new this.$firebase.auth.GoogleAuthProvider();
        this.$firebase.auth().signInWithRedirect(provider);
      },
      signInWithGithub() {
        var provider = new this.$firebase.auth.GithubAuthProvider();
        this.$firebase.auth().signInWithRedirect(provider);
      },
      signUpEmail() {
        this.emailSignUp = true
        this.$firebase.auth().signInWithEmailAndPassword(this.email, this.pass).then(user => {
          console.log("logged in", user.user.uid)
          this.$store.commit("user", user.user)
          this.handleUser()
        }).catch((error) => {
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