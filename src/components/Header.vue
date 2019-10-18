<template>
  <el-header class="navbar">
    <div class="container">
      <router-link :to="{name: 'root'}" class="logo">
        <img src="../assets/cnodejs_light.svg" alt />
      </router-link>
      <span class="about">关于</span>
    </div>
  </el-header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  }
};
</script>

<style lang="less">
.navbar {
  background: #444;
  .container {
    width: 1200px;
    margin: 0 auto;
  }

  .logo img {
    height: 35px;
    margin-top: 10px;
    display: block;
    float: left;
  }

  .about {
    color: #fff;
    font-size: 20px;
    float: right;
    line-height: 60px;
    cursor: pointer;
  }
}
</style>