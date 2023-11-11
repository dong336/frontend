import AdminGoodsIndexView from '@/views/admin/goods/AdminGoodsIndexView.vue';
import AdminGoodsCategoryView from '@/views/admin/goods/AdminGoodsCategoryView.vue';
import AdminGoodsGoodsRegView from '@/views/admin/goods/AdminGoodsGoodsRegView.vue';
import AdminGoodsGoodsListView from '@/views/admin/goods/AdminGoodsGoodsListView.vue';
import AdminGoodsGoodsSortView from '@/views/admin/goods/AdminGoodsGoodsSortView.vue';
import AdminGoodsTrashListView from '@/views/admin/goods/AdminGoodsTrashListView.vue';
import AdminGoodsBrandListView from '@/views/admin/goods/AdminGoodsBrandListView.vue';
import AdminGoodsExcelDownView from '@/views/admin/goods/AdminGoodsExcelDownView.vue';
import AdminGoodsExcelRegistView from '@/views/admin/goods/AdminGoodsExcelRegistView.vue';

const adminGoodsRoutes = [
	{
		path: '/nmanager/goods/index',
		name: 'AdminGoodsIndex',
		component: AdminGoodsIndexView,
	},
	{
		path: '/nmanager/goods/category',
		name: 'AdminGoodsCategory',
		component: AdminGoodsCategoryView,
	},
	{
		path: '/nmanager/goods/goods_reg',
		name: 'AdminGoodsGoodsReg',
		component: AdminGoodsGoodsRegView,
	},
	{
		path: '/nmanager/goods/goods_list',
		name: 'AdminGoodsGoodsList',
		component: AdminGoodsGoodsListView,
	},
	{
		path: '/nmanager/goods/goods_sort',
		name: 'AdminGoodsGoodsSort',
		component: AdminGoodsGoodsSortView,
	},
	{
		path: '/nmanager/goods/trash_list',
		name: 'AdminGoodsTrashList',
		component: AdminGoodsTrashListView,
	},
	{
		path: '/nmanager/goods/brand_list',
		name: 'AdminGoodsBrandList',
		component: AdminGoodsBrandListView,
	},
	{
		path: '/nmanager/goods/excel_down',
		name: 'AdminGoodsExcelDown',
		component: AdminGoodsExcelDownView,
	},
	{
		path: '/nmanager/goods/excel_regist',
		name: 'AdminGoodsExcelRegist',
		component: AdminGoodsExcelRegistView,
	},
];

export default adminGoodsRoutes;
