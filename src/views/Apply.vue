<template>
  <div class="page">
    <navBar></navBar>

    <main class="page__content">

      <div class="screen">
        <h1 class="heading">Choose how to apply</h1>
        <p class="desc">There are three ways to be a part of Hyphen-Hacks.</p>
        <p class="desc">For for more informatino about these roles go to our main website:
          <a href="https://hyphen-hacks.com">hyphen-hacks.com</a></p>
        <div  class="grid grid-col-1 justify-center">
          <router-link class="btn--dark mt-4 " to="/apply/mentor">Mentor</router-link>
          <router-link class="btn--dark mt-4 " to="/apply/volunteer">Volunteer</router-link>
          <router-link class="btn mt-4" to="/apply/attendee">Attend</router-link>

        </div>
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
        this.$store.commit("loading", false)
      } else {
        this.$router.push("/")
      }
    },
    methods: {
    }
  }
</script>