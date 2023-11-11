import { createRouter, createWebHistory } from 'vue-router';
import AdminMainIndexView from '@/views/admin/AdminMainIndexView.vue';
import adminSetupRoutes from './admin/adminSetupRoutes.js';
import adminDesignRoutes from './admin/adminDesignRoutes.js';
import adminPromotionRoutes from './admin/adminPromotionRoutes.js';
import adminGoodsRoutes from './admin/adminGoodsRoutes.js';
import adminMemberRoutes from './admin/adminMemberRoutes.js';
import adminManagementRoutes from './admin/adminManagementRoutes.js';
import adminStatisticsRoutes from './admin/adminStatisticsRoutes.js';
import adminAccountRoutes from './admin/adminAccountRoutes.js';
import adminMimRoutes from './admin/adminMimRoutes.js';
import adminOrderRoutes from './admin/adminOrderRoutes.js';

const indexRoutes = [
	{
		path: '/nmanager/main/index',
		name: 'AdminMainIndex',
		component: AdminMainIndexView,
	},
	{
		path: '/nmanager/main',
		redirect: '/nmanager/main/index',
	},
	{
		path: '/nmanager',
		redirect: '/nmanager/main/index',
	},
	{
		path: '/index',
		redirect: '/nmanager/main/index',
	},
];

const router = createRouter({
	history: createWebHistory(),
	/**
	 * 히스토리 모드:
	 * 배포를 할 때에는 서버 설정이 필요함
	 * 디폴트로 해당 경로에 있는 index.html 을 로드하는데 spa에서는 파일이 없기 때문
	 */
	//history: createWebHashHistory('/'),
	/**
	 * 해시 모드:
	 * 서버 설정이 필요하지 않음
	 * 그러나 SEO 가 좋지않다 (검색엔진은 해시 이후의 정보를 무시하는 경우가 많음)
	 */
	routes: [
		...indexRoutes,
		...adminSetupRoutes,
		...adminDesignRoutes,
		...adminPromotionRoutes,
		...adminGoodsRoutes,
		...adminOrderRoutes,
		...adminMemberRoutes,
		...adminManagementRoutes,
		...adminStatisticsRoutes,
		...adminAccountRoutes,
		...adminMimRoutes,
	],
});

export default router;
