import { RouteRecordRaw } from 'vue-router'
import { routeNames } from './constants.ts'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: routeNames.home,
    component: () => import('../views/HomePage/HomePage.vue')
  }
]

export { routes }
