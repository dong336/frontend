<template>
	<div id="container" class="container">
		<AdminLocalNav v-if="isAdminLocalNav"></AdminLocalNav>

		<RouterView></RouterView>
	</div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import AdminLocalNav from './AdminLocalNav.vue';

const route = useRoute();
const isAdminLocalNav = computed(() => {
	return route.path !== '/nmanager/main/index';
});
</script>

<style></style>
