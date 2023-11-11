<template>
	<div>
		<h2>게시글 등록</h2>
		<hr class="my-4" />
		<PostForm
			v-model:title="form.title"
			v-model:content="form.content"
			@submit.prevent="save"
		>
			<template #actions>
				<button class="btn btn-outline-dark" @click="goListPage">목록</button>
				<button type="submit" class="btn btn-primary">저장</button>
			</template>
		</PostForm>
	</div>
</template>

<script setup>
import { createPost } from '@/api/posts';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import PostForm from '@/components/posts/PostForm.vue';

const router = useRouter();
const goListPage = () => router.push({ name: 'PostList' });
const form = ref({
	title: null,
	content: null,
});
const save = async () => {
	try {
		let now = new Date();
		const createdAt = now.toISOString().split('T')[0];

		const data = {
			...form.value,
			createdAt,
		};
		await createPost(data);

		router.push({ name: 'PostList' });
	} catch (error) {
		console.error(error);
	}
};
</script>

<style lang="scss" scoped></style>
