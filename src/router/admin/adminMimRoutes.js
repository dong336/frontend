import AdminMimIndexView from '@/views/admin/mim/AdminMimIndexView.vue';
import AdminMimDealerRegistListView from '@/views/admin/mim/AdminMimDealerRegistListView.vue';
import AdminMimDealerListView from '@/views/admin/mim/AdminMimDealerListView.vue';
import AdminMimDealerSecessionListView from '@/views/admin/mim/AdminMimDealerSecessionListView.vue';
import AdminMimDealerQnaListView from '@/views/admin/mim/AdminMimDealerQnaListView.vue';
import AdminMimGoodsListView from '@/views/admin/mim/AdminMimGoodsListView.vue';
import AdminMimBrandListView from '@/views/admin/mim/AdminMimBrandListView.vue';
import AdminMimEventListView from '@/views/admin/mim/AdminMimEventListView.vue';
import AdminBoardListView from '@/views/admin/board/AdminBoardListView.vue';

const adminMimRoutes = [
	{
		path: '/nmanager/mim/index',
		name: 'AdminMimIndex',
		component: AdminMimIndexView,
	},
	{
		path: '/nmanager/mim/dealer_regist_list',
		name: 'AdminMimDealerRegistList',
		component: AdminMimDealerRegistListView,
	},
	{
		path: '/nmanager/mim/dealer_list',
		name: 'AdminMimDealerList',
		component: AdminMimDealerListView,
	},
	{
		path: '/nmanager/mim/dealer_secession_list',
		name: 'AdminMimDealerSecessionList',
		component: AdminMimDealerSecessionListView,
	},
	{
		path: '/nmanager/mim/dealer_qna_list',
		name: 'AdminMimDealerQnaList',
		component: AdminMimDealerQnaListView,
	},
	{
		path: '/nmanager/board/list',
		name: 'AdminBoardList',
		component: AdminBoardListView,
	},
	{
		path: '/nmanager/mim/goods_list',
		name: 'AdminMimGoodsList',
		component: AdminMimGoodsListView,
	},
	{
		path: '/nmanager/mim/brand_list',
		name: 'AdminMimBrandList',
		component: AdminMimBrandListView,
	},
	{
		path: '/nmanager/mim/event_list',
		name: 'AdminMimEventList',
		component: AdminMimEventListView,
	},
];

export default adminMimRoutes;
