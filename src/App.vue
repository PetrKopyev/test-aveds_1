<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: "App",

  components: {
    Navbar
  },


}
</script>

<style lang="scss">
#app {
  height: 100%;
  position: relative;
}

</style>

