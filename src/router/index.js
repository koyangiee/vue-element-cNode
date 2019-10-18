import Vue from 'vue'
import Router from 'vue-router'
import PostList from '@/components/PostList'
import User from '@/components/User'
import Content from '@/components/Content'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      components: {
        main: PostList
      }
    },
    {
      path: '/user/:username',
      name: 'user',
      components: {
        main: User
      }
    },
    {
      path: '/content/:id',
      name: 'content',
      components: {
        main: Content
      }
    }
  ]
})
