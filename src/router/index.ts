import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import ResidentIndex from '@/views/resident/index.vue'
import RelativesView from '@/views/resident/RelativesView.vue'
import ResidentStatisticsView from '@/views/resident/ResidentStatisticsView.vue'
import SystemIndex from '@/views/system/index.vue'
const ROUTES_BASE = [
  {
    path: '/login',
    name: 'login',
    component: LoginView
  }
]
export const routes: RouteRecordRaw[] = [
  ...ROUTES_BASE,
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    redirect: { name: 'ResidentStatistics' },
    children: [
      {
        path: 'resident',
        name: 'Resident',
        meta: {
          title: '居民'
        },
        redirect: { name: 'ResidentStatistics' },
        children: [
          {
            path: 'resident-info',
            name: 'ResidentInfo',
            meta: {
              title: '居民信息',
              icon: 'pie-chart-outlined'
            },
            children: [
              {
                path: 'index',
                name: 'ResidentIndex',
                meta: {
                  title: '居民信息管理'
                },
                children: [
                  {
                    path: 'statistics',
                    name: 'ResidentStatistics',
                    component: ResidentStatisticsView,
                    meta: {
                      title: '居民信息统计',
                      actions: ['c', 'u', 'r', 'd']
                    }
                  }
                ]
              },
              {
                path: 'relatives',
                name: 'Relatives',
                component: RelativesView,
                meta: {
                  title: '亲属信息管理',
                  actions: ['c', 'r', 'd']
                }
              }
            ]
          }
        ]
      },
      {
        path: 'system',
        name: 'System',
        meta: {
          title: '系统管理'
        },
        redirect: { name: 'Systemindex' },
        children: [
          {
            path: '',
            name: 'Systemindex',
            component: SystemIndex,
            meta: {
              title: '菜单管理',
              actions: ['c', 'u', 'r', 'd']
            }
          }
        ]
      }
    ]
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
