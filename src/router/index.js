import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  scrollBehavior(to, from, savePosition) {
    if (to.hash) {
      return {selector: to.hash}; // 앵커 태그 이동 지원
    } else {
      return {x: 0, y: 0}; // 페이지 이동시 화면 위치 맨위로.
    }
  },
  routes: [
    {
      path: '/',
      name: 'Main',
      component: () => import('../views/Main.vue')
    },
    {
      path: '/news',
      name: 'HomeNews',
      component: () => import('../views/news/HomeNews.vue'),
      children: [
        {
          path: 'first',
          name: 'FirstChildren',
          component: () => import('../views/news/FirstChild.vue')
        }
      ]
    }
  ]
})

export default router
