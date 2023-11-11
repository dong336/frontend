<template>
	<div id="login_box">
		<div class="box">
			<p class="logo"><img src="../imgs/login_logo.png" alt="NCGN 로고" /></p>
			<form
				name="Frm"
				method="post"
				action="login_act"
				onsubmit="return validSubmit(this)"
			>
				<!--autocomplete="off"-->
				<input type="hidden" name="token" value="" />
				<div class="login_area">
					<input
						type="text"
						id="mid"
						name="id"
						value="admin"
						placeholder="ID를 입력하세요."
						tabindex="1"
					/>
					<input
						type="password"
						id="mpw"
						name="pw"
						value=""
						placeholder="비밀번호를 입력하세요."
						tabindex="2"
					/>
					<input type="hidden" name="" value="" />
				</div>
				<div class="">
					<label
						><input
							type="checkbox"
							class="input"
							id="save_id"
							name="isSaveId"
							value="T"
							checked=""
						/>아이디 저장</label
					>
				</div>
				<button @click="pass" type="button">로그인</button>
			</form>
		</div>
	</div>
	<div id="footer">
		<p>Copyright ⓒ <strong>내친구네트웍스</strong> All rights reserved.</p>
	</div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth';

const emit = defineEmits(['updateIsAuthenticated']);

const authStore = useAuthStore();

const pass = () => {
	authStore.login();
	console.log(authStore.$state.isAuthenticated);
	emit('updateIsAuthenticated', true);
};
</script>

<style></style>
