<!-- <script setup>

import { useLayout } from '@/layout/composables/layout';
import { ref, computed, reactive } from 'vue';
import AppConfig from '@/layout/AppConfig.vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const { layoutConfig } = useLayout();
const email = ref('');
const password = ref('');
const checked = ref(false);

const store = useStore();
const router = useRouter();

const formState = reactive({
	login: '',
	password: '',
	remember: false,
});
</script>

<template>

</template> -->

<template>
	<div class="sign-in">

		<a-row type="flex" :gutter="[24, 24]" justify="space-around" align="middle">

			<!-- Sign In Form Column -->
			<a-col :span="24" :md="12" :lg="{ span: 12, offset: 0 }" :xl="{ span: 6, offset: 2 }" class="col-form">
				<h1 class="mb-15">Авторизация</h1>
				<h5 class="font-regular text-muted">Введите логин и пароль для авторизации</h5>

				<!-- Sign In Form -->
				<a-form :model="formState" name="normal_login" class="login-form" @finish="onFinish"
					@finishFailed="onFinishFailed">
					<a-form-item label="Логин" name="login"
						:rules="[{ required: true, message: 'Введите логин!' }]">
						<a-input v-model:value="formState.login">
							<template #prefix>
								<UserOutlined class="site-form-item-icon" />
							</template>
						</a-input>
					</a-form-item>

					<a-form-item label="Пароль" name="password"
						:rules="[{ required: true, message: 'Введите пароль!' }]">
						<a-input-password v-model:value="formState.password">
							<template #prefix>
								<LockOutlined class="site-form-item-icon" />
							</template>
						</a-input-password>
					</a-form-item>

					<a-form-item>
						<a-switch v-model:checked="formState.remember" /> Запомнить меня
					</a-form-item>

					<a-form-item>
						<a-button :disabled="disabled" type="primary" html-type="submit" class="login-form-button">
							Войти
						</a-button>
					</a-form-item>
				</a-form>
			</a-col>
			<!-- / Sign In Form Column -->

			<!-- Sign In Image Column -->
			<a-col :span="24" :md="12" :lg="12" :xl="12" class="col-img">
				<img src="./../assets/images/svgviewer-png-output.png" alt="">
			</a-col>
			<!-- Sign In Image Column -->

		</a-row>

	</div>
</template>

<script setup>

import { reactive, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();

const formState = reactive({
	login: '',
	password: '',
	remember: false,
});

const onFinish = values => {

	store.dispatch("auth/login", values).then(
		(res) => {
			res.change ? router.push("/changePass") : router.push("/dashboard");
		},
		(error) => {
			this.loading = false;
			this.message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
		}
	);
};
const onFinishFailed = errorInfo => {
	console.log('Failed:', errorInfo);
};

const disabled = computed(() => {
	return !(formState.login && formState.password);
});


</script>

<style scoped>
#components-form-demo-normal-login .login-form {
	max-width: 300px;
}

#components-form-demo-normal-login .login-form-forgot {
	float: right;
}

#components-form-demo-normal-login .login-form-button {
	width: 100%;
}
</style>