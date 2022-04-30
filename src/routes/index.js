import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import About from '@/views/About.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: Dashboard,
			redirect: 'dashboard',
			children: [
				{
					path: '/dashboard',
					name: 'dashboard',
					component: Dashboard
				}
			]
		},
	],
})

export default router