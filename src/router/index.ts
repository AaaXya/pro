import {
    createRouter,
    createWebHistory,
    createWebHashHistory,
    createMemoryHistory,
    RouteRecordRaw,
} from 'vue-router'
import SidePost from '../views/SidePost.vue'

const routes: Array<RouteRecordRaw> = [
    { path: '/sort/:reflect', component: SidePost },
    { path: '/option', component: () => import('../components/Option.vue') },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router
