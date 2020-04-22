<template>
  <div id="app">
    <Loader v-if="!firebaseLoaded || loading">

    </Loader>
    <router-view v-if="firebaseLoaded"/>
  </div>
</template>
<script>
  import Loader from "@/components/loading.vue"

  export default {
    name: "app",
    components: {Loader},
    mounted() {
      this.$firebase.auth().onAuthStateChanged(user => {

        if (user) {

          this.$store.commit("user", user)
          this.$firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then((idToken) => {
            // Send token to your backend via HTTPS
            this.$store.commit("setToken", idToken)
            this.$store.commit("firebaseLoaded", true)

            // ...
          }).catch(function(error) {
            // Handle error
          });

        } else {
          this.$store.commit("user", false)
          this.$store.commit("firebaseLoaded", true)
        }
      })
    },
    computed: {
      loading() {
        return this.$store.getters.loading
      },
      firebaseLoaded() {
        return this.$store.getters.firebaseLoaded
      }
    }
  }
</script>