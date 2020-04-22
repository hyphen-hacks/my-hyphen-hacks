<template>
  <div class="page">
    <navBar></navBar>
    <main class="page__content">
      <div v-if="status.applied && !status.reviewed && status.role == 'attendee'" class="screen">
        <img src="../assets/undraw_done_a34v.svg" alt="">
        <h1 class="heading">Thank you for applying!</h1>
        <p class="desc">Your application has been submitted to our review board. Our review process usually takes up to
          two weeks. You will receive an email when the status of your application changes.</p>
      </div>
      <div v-if="status.applied && !status.reviewed && status.role == 'mentor'" class="screen">
        <img src="../assets/undraw_done_a34v.svg" alt="">
        <h1 class="heading">Thank you for applying!</h1>
        <p class="desc">Your application has been submitted to our review board. Our review process usually takes up to
          two weeks. You will receive an email when the status of your application changes.</p>
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
        status: {}
      }
    },
    created() {
      fetch(this.$store.getters.api + "/api/v1/apply/status", {
        method: "get",
        headers: {
          "authorization": this.$store.getters.token
        }
      }).then(async res => {
        let resJson = await res.json()
        this.$store.commit("loading", false)
        console.log(resJson)
        if (resJson.applied) {
          this.status = resJson
          if (resJson.reviewed) {

          } else {

          }
        } else {
          this.$router.push("/")
        }
      })


    }
  }
</script>