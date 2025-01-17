import { setProcessesPiniaData } from '@/utils';
import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: '/',
			redirect: '/desktop',
		},
		{
			path: '/desktop',
			name: 'desktop',
			component: () => import('../views/desktop'),
			beforeEnter: (to, from, next) => {
				setProcessesPiniaData();
				next();
			},
		},
	],
});

export default router;
