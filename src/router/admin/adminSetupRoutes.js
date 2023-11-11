import AdminSetupIndexView from '@/views/admin/setup/AdminSetupIndexView.vue';
import AdminSetupConfigManagerView from '@/views/admin/setup/AdminSetupConfigManagerView.vue';
import AdminSetupConfigSiteView from '@/views/admin/setup/AdminSetupConfigSiteView.vue';
import AdminSetupConfigDealerView from '@/views/admin/setup/AdminSetupConfigDealerView.vue';
import AdminSetupConfigVocabView from '@/views/admin/setup/AdminSetupConfigVocabView.vue';
import AdminSetupConfigDeliveryView from '@/views/admin/setup/AdminSetupConfigDeliveryView.vue';
import AdminSetupConfigDiscountView from '@/views/admin/setup/AdminSetupConfigDiscountView.vue';
import AdminSetupMemberLevelView from '@/views/admin/setup/AdminSetupMemberLevelView.vue';
import AdminSetupConfigCmoneyView from '@/views/admin/setup/AdminSetupConfigCmoneyView.vue';
import AdminSetupNotifyTplView from '@/views/admin/setup/AdminSetupNotifyTplView.vue';

import AdminSetupManagerListView from '@/views/admin/setup/AdminSetupManagerListView.vue';
import AdminSetupAccessIpView from '@/views/admin/setup/AdminSetupAccessIpView.vue';
import AdminSetupConfigPolicyView from '@/views/admin/setup/AdminSetupConfigPolicyView.vue';
import AdminSetupConfigTermsHistoryView from '@/views/admin/setup/AdminSetupConfigTermsHistoryView.vue';
import AdminSetupConfigPayView from '@/views/admin/setup/AdminSetupConfigPayView.vue';
import AdminSetupConfigMwPayView from '@/views/admin/setup/AdminSetupConfigMwPayView.vue';
import AdminSetupConfigPayOnlineView from '@/views/admin/setup/AdminSetupConfigPayOnlineView.vue';
import AdminSetupConfigKakaopayView from '@/views/admin/setup/AdminSetupConfigKakaopayView.vue';
import AdminSetupConfigPaycoView from '@/views/admin/setup/AdminSetupConfigPaycoView.vue';

const adminSetupRoutes = [
	{
		path: '/nmanager/setup/index',
		name: 'AdminSetupIndex',
		component: AdminSetupIndexView,
	},
	{
		path: '/nmanager/setup/config_manager',
		name: 'AdminSetupConfigManager',
		component: AdminSetupConfigManagerView,
	},
	{
		path: '/nmanager/setup/config_site',
		name: 'AdminSetupConfigSite',
		component: AdminSetupConfigSiteView,
	},
	{
		path: '/nmanager/setup/config_dealer',
		name: 'ConfigDealer',
		component: AdminSetupConfigDealerView,
	},
	{
		path: '/nmanager/setup/config_vocab',
		name: 'AdminSetupConfigVocab',
		component: AdminSetupConfigVocabView,
	},
	{
		path: '/nmanager/setup/config_delivery',
		name: 'AdminSetupConfigDelivery',
		component: AdminSetupConfigDeliveryView,
	},
	{
		path: '/nmanager/setup/config_discount',
		name: 'AdminSetupConfigDiscount',
		component: AdminSetupConfigDiscountView,
	},
	{
		path: '/nmanager/setup/member_level',
		name: 'AdminSetupMemberLevel',
		component: AdminSetupMemberLevelView,
	},
	{
		path: '/nmanager/setup/config_cmoney',
		name: 'AdminSetupConfigCmoney',
		component: AdminSetupConfigCmoneyView,
	},
	{
		path: '/nmanager/setup/notify_tpl',
		name: 'AdminSetupNotifyTpl',
		component: AdminSetupNotifyTplView,
	},
	{
		path: '/nmanager/setup/manager_list',
		name: 'AdminSetupManagerList',
		component: AdminSetupManagerListView,
	},
	{
		path: '/nmanager/setup/access_ip',
		name: 'AdminSetupAccessIp',
		component: AdminSetupAccessIpView,
	},
	{
		path: '/nmanager/setup/config_policy',
		name: 'AdminSetupConfigPolicy',
		component: AdminSetupConfigPolicyView,
	},
	{
		path: '/nmanager/setup/config_terms_history',
		name: 'AdminSetupConfigTermsHistory',
		component: AdminSetupConfigTermsHistoryView,
		props: true,
	},
	{
		path: '/nmanager/setup/config_pay',
		name: 'AdminSetupConfigPay',
		component: AdminSetupConfigPayView,
	},
	{
		path: '/nmanager/setup/config_mw_pay',
		name: 'AdminSetupConfigMwPay',
		component: AdminSetupConfigMwPayView,
	},
	{
		path: '/nmanager/setup/config_pay_online',
		name: 'AdminSetupConfigPayOnline',
		component: AdminSetupConfigPayOnlineView,
	},
	{
		path: '/nmanager/setup/config_kakaopay',
		name: 'AdminSetupConfigKakaopay',
		component: AdminSetupConfigKakaopayView,
	},
	{
		path: '/nmanager/setup/config_payco',
		name: 'AdminSetupConfigPayco',
		component: AdminSetupConfigPaycoView,
	},
];

export default adminSetupRoutes;
