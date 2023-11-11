import AdminManagementIndexView from '@/views/admin/management/AdminManagementIndexView.vue';
import AdminManagementReviewListView from '@/views/admin/management/AdminManagementReviewListView.vue';
import AdminManagementQnaListView from '@/views/admin/management/AdminManagementQnaListView.vue';
import AdminManagementFaqListView from '@/views/admin/management/AdminManagementFaqListView.vue';
import AdminManagementInquiryListView from '@/views/admin/management/AdminManagementInquiryListView.vue';
import AdminManagementBoardManageView from '@/views/admin/management/AdminManagementBoardManageView.vue';
import AdminManagementConfigView from '@/views/admin/management/AdminManagementConfigView.vue';
import AdminManagementMentManageView from '@/views/admin/management/AdminManagementMentManageView.vue';
import AdminManagementEmoticonManageView from '@/views/admin/management/AdminManagementEmoticonManageView.vue';
import AdminManagementSendMsgView from '@/views/admin/management/AdminManagementSendMsgView.vue';
import AdminManagementMailFormView from '@/views/admin/management/AdminManagementMailFormView.vue';

const adminManagementRoutes = [
	{
		path: '/nmanager/management/index',
		name: 'AdminManagementIndex',
		component: AdminManagementIndexView,
	},
	{
		path: '/nmanager/management/review_list',
		name: 'AdminManagementReviewList',
		component: AdminManagementReviewListView,
	},
	{
		path: '/nmanager/management/qna_list',
		name: 'AdminManagementQnaList',
		component: AdminManagementQnaListView,
	},
	{
		path: '/nmanager/management/faq_list',
		name: 'AdminManagementFaqList',
		component: AdminManagementFaqListView,
	},
	{
		path: '/nmanager/management/inquiry_list',
		name: 'AdminManagementInquiryList',
		component: AdminManagementInquiryListView,
	},
	{
		path: '/nmanager/management/board_manage',
		name: 'AdminManagementBoardManage',
		component: AdminManagementBoardManageView,
	},
	{
		path: '/nmanager/management/config',
		name: 'AdminManagementConfig',
		component: AdminManagementConfigView,
	},
	{
		path: '/nmanager/management/ment_manage',
		name: 'AdminManagementMentManage',
		component: AdminManagementMentManageView,
	},
	{
		path: '/nmanager/management/emoticon_manage',
		name: 'AdminManagementEmoticonManage',
		component: AdminManagementEmoticonManageView,
	},
	{
		path: '/nmanager/management/send_msg',
		name: 'AdminManagementSendMsg',
		component: AdminManagementSendMsgView,
	},
	{
		path: '/nmanager/management/mail_form',
		name: 'AdminManagementMailForm',
		component: AdminManagementMailFormView,
	},
];

export default adminManagementRoutes;
