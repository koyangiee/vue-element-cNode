<template>
  <el-main>
    <div class="user">
      <div class="panel info">
        <p>
          <router-link :to="{path: `/user/${userinfo.loginname}`}">
            <img :src="userinfo.avatar_url" alt="userinfo.loginname" />
            <span>{{ userinfo.loginname }}</span>
          </router-link>
        </p>
        <p>积分：{{ userinfo.score }}</p>
        <p>
          GitHub:
          <a
            :href="`http://github.com/${userinfo.githubUsername}`"
            target="_blank"
          >{{ userinfo.loginname }}</a>
        </p>
        <p>注册日期：{{ userinfo.create_at | formatDate }}</p>
      </div>
      <div class="panel">
        <div class="title">最近创建的话题</div>
        <ul>
          <li v-for="item in userinfo.recent_topics" :key="item.id">
            <router-link :to="{path: `/user/${item.author.loginname}`}">
              <img :src="item.author.avatar_url" :alt="item.author.loginname" />
            </router-link>
            <router-link class="tit" :to="{path: `/content/${item.id}`}">{{ item.title }}</router-link>
            <span>{{ item.last_reply_at | formatDate }}</span>
          </li>
        </ul>
      </div>
      <div class="panel">
        <div class="title">最近参与的话题</div>
        <ul>
          <li v-for="item in userinfo.recent_replies" :key="item.id">
            <router-link :to="{path: `/user/${item.author.loginname}`}">
              <img :src="item.author.avatar_url" :alt="item.author.loginname" />
            </router-link>
            <router-link class="tit" :to="{path: `/content/${item.id}`}">{{ item.title }}</router-link>
            <span>{{ item.last_reply_at | formatDate }}</span>
          </li>
        </ul>
      </div>
    </div>
  </el-main>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
      userinfo: {},
      loginname: ''
    };
  },
  methods: {
    getUser(username) {
      this.$http
        .get(`/user/${username}`)
        .then(response => {
          this.userinfo = response.data.data;
          console.log(response.data.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.getUser(this.$route.params.username);
  },
  beforeRouteUpdate(to, from, next){
      this.getUser(to.params.username)
      next()
  }
};
</script>

<style lang="less">
.user {
  width: 1200px;
  margin: 0 auto;
  .panel {
    box-shadow: 0 0 10px #eee;
    padding: 20px;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    .title {
      color: #333;
      padding-bottom: 10px;
      font-size: 18px;
      border-bottom: 1px solid #eee;
      width: 100%;
    }

    p {
    }
  }

  .info {
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      vertical-align: middle;
      margin-right: 10px;
    }

    a {
      color: #80bd01;
      text-decoration: none;
    }
  }

  ul,
  li {
    list-style-type: none;
    width: 100%;
  }

  li {
    line-height: 60px;
    font-size: 18px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0px;

    a.tit {
      color: #80bd01;
      text-decoration: none;
      display: inline-block;
      width: 80%;
    }

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      vertical-align: middle;
    }
  }
}
</style>