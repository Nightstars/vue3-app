import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home'

const routes = [
    {
        path: '/',
        name: 'Home',
        component : Home,
        meta: {
            isShow: false
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router