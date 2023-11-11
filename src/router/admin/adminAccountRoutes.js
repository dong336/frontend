import AdminAccountIndexView from '@/views/admin/account/AdminAccountIndexView.vue';
import AdminAccountAccountView from '@/views/admin/account/AdminAccountAccountView.vue';
import AdminAccountDealerAccountView from '@/views/admin/account/AdminAccountDealerAccountView.vue';

const adminAccountRoutes = [
	{
		path: '/nmanager/account/index',
		name: 'AdminAccountIndex',
		component: AdminAccountIndexView,
	},
	{
		path: '/nmanager/account/account',
		name: 'AdminAccountAccount',
		component: AdminAccountAccountView,
	},
	{
		path: '/nmanager/account/dealer_account',
		name: 'AdminAccountDealerAccount',
		component: AdminAccountDealerAccountView,
	},
];

export default adminAccountRoutes;
