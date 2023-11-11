import AdminOrderIndexView from '@/views/admin/order/AdminOrderIndexView.vue';
import AdminOrderOrderListView from '@/views/admin/order/AdminOrderOrderListView.vue';
import AdminOrderConsultListView from '@/views/admin/order/AdminOrderConsultListView.vue';
import AdminOrderInvoiceView from '@/views/admin/order/AdminOrderInvoiceView.vue';
import AdminOrderOrderRefundListView from '@/views/admin/order/AdminOrderOrderRefundListView.vue';
import AdminOrderTaxListView from '@/views/admin/order/AdminOrderTaxListView.vue';
import AdminOrderCashreceiptListView from '@/views/admin/order/AdminOrderCashreceiptListView.vue';

const adminOrderRoutes = [
	{
		path: '/nmanager/order/index',
		name: 'AdminOrderIndex',
		component: AdminOrderIndexView,
	},
	{
		path: '/nmanager/order/order_list',
		name: 'AdminOrderOrderList',
		component: AdminOrderOrderListView,
	},
	{
		path: '/nmanager/order/consult_list',
		name: 'AdminOrderConsultList',
		component: AdminOrderConsultListView,
	},
	{
		path: '/nmanager/order/invoice',
		name: 'AdminOrderInvoice',
		component: AdminOrderInvoiceView,
	},
	{
		path: '/nmanager/order/order_refund_list',
		name: 'AdminOrderOrderRefundList',
		component: AdminOrderOrderRefundListView,
	},
	{
		path: '/nmanager/order/tax_list',
		name: 'AdminOrderTaxList',
		component: AdminOrderTaxListView,
	},
	{
		path: '/nmanager/order/cashreceipt_list',
		name: 'AdminOrderCashreceiptList',
		component: AdminOrderCashreceiptListView,
	},
];

export default adminOrderRoutes;
