<template>
  <div class="loader">
    <div></div>
    <div class="flex justify-center items-center flex-col">
      <div class="sk-cube-grid">
        <div class="sk-cube sk-cube1"></div>
        <div class="sk-cube sk-cube2"></div>
        <div class="sk-cube sk-cube3"></div>
        <div class="sk-cube sk-cube4"></div>
        <div class="sk-cube sk-cube5"></div>
        <div class="sk-cube sk-cube6"></div>
        <div class="sk-cube sk-cube7"></div>
        <div class="sk-cube sk-cube8"></div>
        <div class="sk-cube sk-cube9"></div>
      </div>
      <h1 class="text-3xl font-bold mt-2">My Hyphen-Hacks 2020</h1>
      <h2>Dashboard v{{version}}</h2>
    </div>
 <div class="flex justify-center items-center flex-col">

   <p>Something not working right? Get tech support <a href="mailto:ronan.furuta@hyphen-hacks.com">ronan.furuta@hyphen-hacks.com</a></p>
 </div>

  </div>

</template>
<script>
  export default {
    data() {
      return {
        version: require("../../package.json").version
      }
    }
  }
</script>