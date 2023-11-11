import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
	state: () => ({
		isAuthenticated: false,
		userData: null,
	}),
	actions: {
		login() {
			// 로그인 로직 수행 (API 호출 등)
			// 로그인 성공 시 상태 변경을 mutations에 요청
			this.isAuthenticated = true;
		},
		logout() {
			// 로그아웃 로직 수행 (API 호출 등)
			// 로그아웃 성공 시 상태 변경을 mutations에 요청
			this.isAuthenticated = false;
		},
	},
	mutations: {
		setAuthenticated(state, isAuthenticated) {
			// 실제 상태 변경 처리
			state.isAuthenticated = isAuthenticated;
		},
	},
});
