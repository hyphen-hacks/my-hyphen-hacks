<template>
  <div>
    <div class="nav__spacer"></div>
    <nav class="nav bg-gray ">
      <a href="https://hyphen-hacks.com" class="flex items-center mr-auto brand">
        <img class="nav__logo" src="@/assets/logo.svg" alt="Hyphen-Hacks logo">
        <h1 class="nav__brand">Hyphen-Hacks 2020</h1>
      </a>
      <div class="flex justify-center">
        <h2 class="font-bold">{{title}}</h2>
        <p v-if="saveStatus" class="ml-1 text-primary">({{saved? "Saved" : "Waiting..."}})</p>
      </div>
<div class="flex justify-end">
  <a href="mailto:support@hyphen-hacks.com" class="btn--outline mx-2">GET HELP</a>
  <button @click="logOut" v-if="user" class="btn mx-2">LOGOUT</button>
</div>

    </nav>

  </div>

</template>

<script>
  export default {
    name: 'Nav',
    props: {
      title: String,
      saved: Boolean,
      saveStatus: Boolean
    },
    computed: {
      user() {
        return this.$store.getters.user
      }
    },
    methods: {
      logOut() {
        this.$firebase.auth().signOut().then(err => {
          this.$store.commit("user", false)
        })
      }
    }
  }
</script>

