import AdminPromotionIndexView from '@/views/admin/promotion/AdminPromotionIndexView.vue';
import AdminPromotionEventListView from '@/views/admin/promotion/AdminPromotionEventListView.vue';
import AdminPromotionEventRegView from '@/views/admin/promotion/AdminPromotionEventRegView.vue';
import AdminPromotionCouponListView from '@/views/admin/promotion/AdminPromotionCouponListView.vue';

const adminPromotionRoutes = [
	{
		path: '/nmanager/promotion/index',
		name: 'AdminPromotionIndex',
		component: AdminPromotionIndexView,
	},
	{
		path: '/nmanager/promotion/event_list',
		name: 'AdminPromotionEventList',
		component: AdminPromotionEventListView,
	},
	{
		path: '/nmanager/promotion/event_reg',
		name: 'AdminPromotionEventReg',
		component: AdminPromotionEventRegView,
	},
	{
		path: '/nmanager/promotion/coupon_list',
		name: 'AdminPromotionCouponList',
		component: AdminPromotionCouponListView,
	},
];

export default adminPromotionRoutes;
