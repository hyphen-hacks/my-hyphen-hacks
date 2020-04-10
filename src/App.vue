<template>
  <div id="app">
<Loader v-if="!firebaseLoaded">

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
        this.$store.commit("firebaseLoaded", true)
        if (user) {

          this.$store.commit("user", user)
        } else {
          this.$store.commit("user", false)
        }
      })
    },
    computed: {
      firebaseLoaded() {
        return this.$store.getters.firebaseLoaded
      }
    }
  }
</script>