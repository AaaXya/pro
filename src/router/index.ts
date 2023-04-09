import {
    createRouter,
    createWebHistory,
    createWebHashHistory,
    createMemoryHistory,
    RouteRecordRaw,
} from 'vue-router'
import SidePost from '../views/SidePost.vue'

const routes: Array<RouteRecordRaw> = [{ path: '/side/:reflect', component: SidePost }]

const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    // history: createWebHashHistory(),

    history: createWebHistory(),
    routes,
})
export default router
