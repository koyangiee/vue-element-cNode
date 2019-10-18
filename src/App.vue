<template>
  <div id="app">
    <cn-header></cn-header>
    <router-view name="main"></router-view>
  </div>
  
</template>

<script>
import cnHeader from "@/components/Header";
export default {
  name: "App",
  components: {
    cnHeader
  }
};
</script>

<style lang="less">

</style>