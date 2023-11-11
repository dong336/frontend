<template>
	<Nuxt v-if="isAuthenticated.value">
		<AdminLogin @updateIsAuthenticated="updateIsAuthenticated"></AdminLogin>
	</Nuxt>
	<Nuxt v-else>
		<AdminIndex @updateIsAuthenticated="updateIsAuthenticated"></AdminIndex>
	</Nuxt>
</template>

<script setup>
import AdminLogin from './pages/AdminLogin.vue';
import AdminIndex from './pages/AdminIndex.vue';
import { useAuthStore } from './stores/auth';
import { ref } from 'vue';

const authStore = useAuthStore();
const isAuthenticated = ref(authStore.$state.isAuthenticated);

const updateIsAuthenticated = value => {
	// 자식 컴포넌트에서 업데이트된 값 수신
	console.log(value);
	isAuthenticated.value = value;
};
</script>

<style></style>
