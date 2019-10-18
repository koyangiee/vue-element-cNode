<template>
  <!-- <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
    
  </div> -->
  <el-container>
    <el-header>Header</el-header>
    <el-main>{{ msg }}</el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      loading: false
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
