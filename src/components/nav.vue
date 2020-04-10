<template>
  <div>
    <div class="nav__spacer"></div>
    <nav class="nav bg-gray ">
      <div class="flex items-center mr-auto">
        <img class="nav__logo" src="@/assets/logo.svg" alt="Hyphen-Hacks logo">
        <h1 class="nav__brand">Hyphen-Hacks 2020</h1>
      </div>
      <div class="flex justify-center">
        <h2 class="font-bold">{{title}}</h2>
        <p class="ml-1 text-primary">({{saved? "Saved" : "Waiting..."}})</p>
      </div>
<div class="flex">
  <button class="btn ml-auto">LOGOUT</button>
</div>

    </nav>

  </div>

</template>

<script>
  export default {
    name: 'Nav',
    props: {
      title: String,
      saved: Boolean
    },
    computed: {}
  }
</script>

