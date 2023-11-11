<template>
	<div>
		<h2>{{ post.title }}</h2>
		<p>{{ post.content }}</p>
		<p class="text-muted">{{ post.createdAt }}</p>
		<hr class="my-4" />
		<div class="row g-2">
			<div class="col-auto">
				<button class="btn btn-outline-dark">이전글</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-dark">다음글</button>
			</div>
			<div class="col-auto me-auto"></div>
			<div class="col-auto">
				<button class="btn btn-outline-dark" @click="goListPage">목록</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-primary" @click="goEditPage">
					수정
				</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-danger" @click="remove">삭제</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { getPostById, deletePost } from '@/api/posts';
import { ref } from 'vue';

const props = defineProps({
	id: [String, Number],
});

const router = useRouter();
const post = ref({});
/**
 * ref 로 할당하면 같은 참조임
 * 객체 할당 가능
 *
 * reactive 로 할당하면 주소값이 달라짐 (새로운 값)
 * 객체 할당 불가능
 */
const goListPage = () => router.push({ name: 'PostList' });
const goEditPage = () =>
	router.push({ name: 'PostEdit', params: { id: props.id } });

const fetchPost = async () => {
	try {
		const { data } = await getPostById(props.id);
		setPost(data);
		// post.value = { ...data }; 모든 속성을 할당하지 말자
	} catch (error) {
		console.log(error);
	}
};
const setPost = ({ title, content, createdAt }) => {
	post.value.title = title;
	post.value.content = content;
	post.value.createdAt = createdAt;
};

const remove = async () => {
	try {
		if (confirm('삭제하시겠습니까?') === false) return;

		await deletePost(props.id);
		router.push({ name: 'PostList' });
	} catch (error) {
		console.log(error);
	}
};

fetchPost();
</script>

<style lang="scss" scoped></style>
