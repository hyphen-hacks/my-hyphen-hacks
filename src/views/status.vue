<template>
  <div class="page">
    <navBar></navBar>
    <main class="page__content">
      <div class="screen">
        <img src="../assets/undraw_done_a34v.svg" alt="">
        <h1 class="heading">Thank you for applying!</h1>
        <p class="desc">Your application has been submitted to our review board. Our review process usually takes up to two weeks. You will receive an email when the status of your application changes.</p>


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
        emailSignUp: false
      }
    },
    created() {
      this.$store.commit("loading", false)
    }
  }
</script>