import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from "../views/Login";

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    meta:{
      isShow: false
    }
  },
  {
    path: '/course',
    name: 'Course',
    component: () => import(/* webpackChunkName: "course" */ '../views/Course'),
    meta:{
      isShow: true,
      title: '课程列表'
    }
  },
  {
    path: '/teacher',
    name: 'Teacher',
    component: () => import(/* webpackChunkName: "teacher" */ '../views/Teacher'),
    meta:{
      isShow: true,
      title: '讲师列表'
    }
  },
  {
    path: '/personal',
    name: 'Personal',
    component: () => import(/* webpackChunkName: "personal" */ '../views/Personal'),
    meta:{
      isShow: true,
      title: '个人中心'
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta:{
      isShow: true,
      title: '关于'
    }
  },
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta:{
      isShow: false
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
