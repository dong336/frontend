import { defineStore } from 'pinia';

export const useRouteStore = defineStore('route', {
	state: () => ({
		currentRoute: '',
	}),
	actions: {
		setCurrentRoute(route) {
			this.currentRoute = route;
		},
	},
});
