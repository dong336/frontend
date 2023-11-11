import AdminStatisticsIndexView from '@/views/admin/statistics/AdminStatisticsIndexView.vue';
import AdminStatisticsSaleTotalView from '@/views/admin/statistics/AdminStatisticsSaleTotalView.vue';
import AdminStatisticsSaleGoodsView from '@/views/admin/statistics/AdminStatisticsSaleGoodsView.vue';
import AdminStatisticsSaleMemberView from '@/views/admin/statistics/AdminStatisticsSaleMemberView.vue';
import AdminStatisticsMemberGenderView from '@/views/admin/statistics/AdminStatisticsMemberGenderView.vue';
import AdminStatisticsMemberAgeView from '@/views/admin/statistics/AdminStatisticsMemberAgeView.vue';
import AdminStatisticsMemberAreaView from '@/views/admin/statistics/AdminStatisticsMemberAreaView.vue';
import AdminStatisticsVisitCountView from '@/views/admin/statistics/AdminStatisticsVisitCountView.vue';
import AdminStatisticsVisitFromsiteView from '@/views/admin/statistics/AdminStatisticsVisitFromsiteView.vue';
import AdminStatisticsGoodsTotalView from '@/views/admin/statistics/AdminStatisticsGoodsTotalView.vue';
import AdminStatisticsGoodsWishView from '@/views/admin/statistics/AdminStatisticsGoodsWishView.vue';
import AdminStatisticsGoodsMarksView from '@/views/admin/statistics/AdminStatisticsGoodsMarksView.vue';
import AdminStatisticsMarketingUsecmoneyView from '@/views/admin/statistics/AdminStatisticsMarketingUsecmoneyView.vue';

const adminStatisticsRoutes = [
	{
		path: '/nmanager/statistics/index',
		name: 'AdminStatisticsIndex',
		component: AdminStatisticsIndexView,
	},
	{
		path: '/nmanager/statistics/sale_total',
		name: 'AdminStatisticsSaleTotal',
		component: AdminStatisticsSaleTotalView,
	},
	{
		path: '/nmanager/statistics/sale_goods',
		name: 'AdminStatisticsSaleGoods',
		component: AdminStatisticsSaleGoodsView,
	},
	{
		path: '/nmanager/statistics/sale_member',
		name: 'AdminStatisticsSaleMember',
		component: AdminStatisticsSaleMemberView,
	},
	{
		path: '/nmanager/statistics/member_gender',
		name: 'AdminStatisticsMemberGender',
		component: AdminStatisticsMemberGenderView,
	},
	{
		path: '/nmanager/statistics/member_age',
		name: 'AdminStatisticsMemberAge',
		component: AdminStatisticsMemberAgeView,
	},
	{
		path: '/nmanager/statistics/member_area',
		name: 'AdminStatisticsMemberArea',
		component: AdminStatisticsMemberAreaView,
	},
	{
		path: '/nmanager/statistics/visit_count',
		name: 'AdminStatisticsVisitCount',
		component: AdminStatisticsVisitCountView,
	},
	{
		path: '/nmanager/statistics/visit_fromsite',
		name: 'AdminStatisticsVisitFromsite',
		component: AdminStatisticsVisitFromsiteView,
	},
	{
		path: '/nmanager/statistics/goods_total',
		name: 'AdminStatisticsGoodsTotal',
		component: AdminStatisticsGoodsTotalView,
	},
	{
		path: '/nmanager/statistics/goods_wish',
		name: 'AdminStatisticsGoodsWish',
		component: AdminStatisticsGoodsWishView,
	},
	{
		path: '/nmanager/statistics/goods_marks',
		name: 'AdminStatisticsGoodsMarks',
		component: AdminStatisticsGoodsMarksView,
	},
	{
		path: '/nmanager/statistics/marketing_usecmoney',
		name: 'AdminStatisticsMarketingUsecmoney',
		component: AdminStatisticsMarketingUsecmoneyView,
	},
];

export default adminStatisticsRoutes;
