import { createRouter, createWebHistory } from 'vue-router'
import PeriodicTable from '@/views/PeriodicTable.vue'
import TipsView from '@/views/TipsView.vue'
import CuriositiesView from '@/views/CuriositiesView.vue'
import ElementDetail from '@/views/ElementDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'periodic-table',
      component: PeriodicTable
    },
    {
      path: '/tips',
      name: 'tips',
      component: TipsView
    },
    {
      path: '/curiosidades',
      name: 'curiosities',
      component: CuriositiesView
    },
    {
      path: '/element/:symbol',
      name: 'element-detail',
      component: ElementDetail,
      props: true
    }
  ]
})

export default router
