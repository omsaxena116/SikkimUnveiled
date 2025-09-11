import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import ExploreView from '../views/ExploreView.vue'
import StoryView from '../views/StoryView.vue'
import BudgetView from '../views/BudgetView.vue'
import TrafficView from '../views/TrafficView.vue'
import CalendarView from '../views/CalendarView.vue'
import NearbyView from '../views/NearbyView.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/explore', name: 'Explore', component: ExploreView },
  { path: '/story', name: 'Story', component: StoryView },
  { path: '/budget', name: 'Budget', component: BudgetView },
  { path: '/traffic', name: 'Traffic', component: TrafficView },
  { path: '/calendar', name: 'Calendar', component: CalendarView },
  { path: '/nearby', name: 'Nearby', component: NearbyView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
