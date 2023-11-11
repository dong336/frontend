import AdminDesignIndexView from '@/views/admin/design/AdminDesignIndexView.vue';
import AdminDesignTopperView from '@/views/admin/design/AdminDesignTopperView.vue';
import AdminDesignFooterView from '@/views/admin/design/AdminDesignFooterView.vue';
import AdminDesignMainView from '@/views/admin/design/AdminDesignMainView.vue';
import AdminDesignPageMakerView from '@/views/admin/design/AdminDesignPageMakerView.vue';
import AdminDesignMwTopperView from '@/views/admin/design/AdminDesignMwTopperView.vue';
import AdminDesignMwMainView from '@/views/admin/design/AdminDesignMwMainView.vue';
import AdminDesignPopupView from '@/views/admin/design/AdminDesignPopupView.vue';
import AdminDesignMwPopupView from '@/views/admin/design/AdminDesignMwPopupView.vue';

const adminDesignRoutes = [
	{
		path: '/nmanager/design/index',
		name: 'AdminDesignIndex',
		component: AdminDesignIndexView,
	},
	{
		path: '/nmanager/design/topper',
		name: 'AdminDesignTopper',
		component: AdminDesignTopperView,
	},
	{
		path: '/nmanager/design/footer',
		name: 'AdminDesignFooter',
		component: AdminDesignFooterView,
	},
	{
		path: '/nmanager/design/main',
		name: 'AdminDesignMain',
		component: AdminDesignMainView,
	},
	{
		path: '/nmanager/design/pagemaker',
		name: 'AdminDesignPageMaker',
		component: AdminDesignPageMakerView,
	},
	{
		path: '/nmanager/design/mw_topper',
		name: 'AdminDesignMwTopper',
		component: AdminDesignMwTopperView,
	},
	{
		path: '/nmanager/design/mw_main',
		name: 'AdminDesignMwMain',
		component: AdminDesignMwMainView,
	},
	{
		path: '/nmanager/design/popup',
		name: 'AdminDesignPopup',
		component: AdminDesignPopupView,
	},
	{
		path: '/nmanager/design/mw_popup',
		name: 'AdminDesignMwPopup',
		component: AdminDesignMwPopupView,
	},
];

export default adminDesignRoutes;
