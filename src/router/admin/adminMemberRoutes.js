import AdminMemberIndexView from '@/views/admin/member/AdminMemberIndexView.vue';
import AdminMemberConfigMemberView from '@/views/admin/member/AdminMemberConfigMemberView.vue';
import AdminMemberMemberListView from '@/views/admin/member/AdminMemberMemberListView.vue';
import AdminMemberMemberDeleteView from '@/views/admin/member/AdminMemberMemberDeleteView.vue';
import AdminMemberMemberBuyListView from '@/views/admin/member/AdminMemberMemberBuyListView.vue';
import AdminMemberMemberAutoDeleteListView from '@/views/admin/member/AdminMemberMemberAutoDeleteListView.vue';
import AdminMemberMemberSleepListView from '@/views/admin/member/AdminMemberMemberSleepListView.vue';
import AdminMemberMemberMailingView from '@/views/admin/member/AdminMemberMemberMailingView.vue';

const adminMemberRoutes = [
	{
		path: '/nmanager/member/index',
		name: 'AdminMemberIndex',
		component: AdminMemberIndexView,
	},
	{
		path: '/nmanager/member/config_member',
		name: 'AdminMemberConfigMember',
		component: AdminMemberConfigMemberView,
	},
	{
		path: '/nmanager/member/member_list',
		name: 'AdminMemberMemberList',
		component: AdminMemberMemberListView,
	},
	{
		path: '/nmanager/member/member_delete',
		name: 'AdminMemberMemberDelete',
		component: AdminMemberMemberDeleteView,
	},
	{
		path: '/nmanager/member/member_buy_list',
		name: 'AdminMemberMemberBuyList',
		component: AdminMemberMemberBuyListView,
	},
	{
		path: '/nmanager/member/member_auto_delete_list',
		name: 'AdminMemberMemberAutoDeleteList',
		component: AdminMemberMemberAutoDeleteListView,
	},
	{
		path: '/nmanager/member/member_sleep_list',
		name: 'AdminMemberMemberSleepList',
		component: AdminMemberMemberSleepListView,
	},
	{
		path: '/nmanager/member/member_mailing',
		name: 'AdminMemberMemberMailing',
		component: AdminMemberMemberMailingView,
	},
];

export default adminMemberRoutes;
