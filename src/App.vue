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
            fetch(this.$store.getters.api + "/api/v1/apply/status", {
              method: "get",
              headers: {
                "authorization": this.$store.getters.token
              }
            }).then(async res => {
              let resJson = await res.json()

              console.log(resJson)
              if (resJson.applied) {


              }
            })

            // ...
          }).catch(function (error) {
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