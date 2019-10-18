<template>
  <el-main>
    <div class="posts">
      <el-tabs v-model="tab" @tab-click="handleClick">
        <el-tab-pane label="全部" name="all">
          <topic :list="list"></topic>
        </el-tab-pane>
        <el-tab-pane label="精华" name="good">
          <topic :list="list"></topic>
        </el-tab-pane>
        <el-tab-pane label="分享" name="share">
          <topic :list="list"></topic>
        </el-tab-pane>
        <el-tab-pane label="问答" name="ask">
          <topic :list="list"></topic>
        </el-tab-pane>
        <el-tab-pane label="招聘" name="job">
          <topic :list="list"></topic>
        </el-tab-pane>
      </el-tabs>
    </div>
  </el-main>
</template>

<script>
import Topic from "@/components/Topic";
export default {
  name: "PostList",
  data() {
    return {
      tab: "all",
      list: [],
      limit: 20
    };
  },
  methods: {
    getTopic() {
      this.$http
        .get("/topics", {params: {tab: this.tab, limit: this.limit}})
        .then(response => {
          this.limit += 10
          this.list = response.data.data
          console.log(response)
        })
        .catch(err => {
          console.log(err)
        });
    },
    handleClick(tab, event) {
      this.tab = tab.name
      this.getTopic()
      console.log(tab, event)
    },
    redaMore(){
      let documentHeight = document.body.scrollHeight || document.documentElement.scrollHeight
      let scrollHeight = document.body.scrollTop || document.documentElement.scrollTop
      let clientHeight = document.documentElement.clientHeight
      if(documentHeight == (scrollHeight + clientHeight)){
        this.getTopic()
      }
    }
  },
  created() {
    this.getTopic();
    window.addEventListener("scroll", this.redaMore);
  },
  components: {
    Topic
  }
};
</script>

<style lang="less">
.posts {
  width: 1200px;
  margin: 0 auto;
  box-shadow: 0 0 10px #ccc;
  padding: 50px;
  box-sizing: border-box;
}
</style>