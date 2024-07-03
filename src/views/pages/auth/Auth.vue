<template>
    <div class="surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden display flex ">
        <div class="grid">
            <div class="col-5">
                <div class="flex flex-column align-items-center justify-content-center">
                    <div style="border-radius: 56px; padding: 0.3rem;">
                        <div class="w-full surface-card py-8 px-5 sm:px-8" style="border-radius: 53px">
                            <div class="text-center mb-5">
                                <div class="text-900 text-5xl font-medium mb-3">Авторизация</div>
                                <span class="text-600 font-medium">Введите логин или пароль для авторизации</span>
                            </div>

                            <div class="card p-fluid" style="border: none;">
                                <label for="email" class="block text-900 text-xl font-medium mb-2">Логин</label>
                                <InputText id="email" type="text" placeholder="Email" class="w-full md:w-30rem mb-5"
                                    style="padding: 1rem" v-model="login" />

                                <label for="password" class="block text-900 font-medium text-xl mb-2">Пароль</label>
                                <Password id="password" v-model="password" placeholder="Password"
                                    :toggleMask="true" class="w-full mb-3" inputClass="w-full"
                                    :inputStyle="{ padding: '1rem' }"></Password>

                                <div class="flex align-items-center justify-content-between mb-5 gap-5">
                                    <a class="font-medium no-underline ml-2 text-right cursor-pointer"
                                        style="color: var(--primary-color)">Забыли пароль?</a>
                                </div>
                                <Button label="Вход" class="w-full p-3 text-xl" @click="onFinishFailed" />
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <img src="../../../assets/img/logoImg.jpeg" alt="" style="width: 500px; height: 400px;"> -->
            </div>
            <div class="col-2"></div>
            <div class="col-5">
                <img src="../../../assets/img/logoImg.jpeg" alt="" style="width: 600px; height: 400px;" />
            </div>
        </div>
        <AppConfig simple />
    </div>
</template>
  
<script setup>

import { reactive, computed, ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import AppConfig from '@/layout/AppConfig.vue';
import { useToast } from 'primevue/usetoast';

const store = useStore();
const router = useRouter();

const login = ref('')
const password = ref('')

const toast = useToast();
const message = ref([]);

const addMessage = (type) => {
    if (type === 'success') {
        message.value = [{ severity: 'success', detail: 'Success Message', content: 'Message sent', id: count.value++ }];
    } else if (type === 'info') {
        message.value = [{ severity: 'info', detail: 'Info Message', content: 'PrimeVue rocks', id: count.value++ }];
    } else if (type === 'warn') {
        message.value = [{ severity: 'warn', detail: 'Warn Message', content: 'There are unsaved changes', id: count.value++ }];
    } else if (type === 'error') {
        message.value = [{ severity: 'error', detail: 'Error Message', content: 'Validation failed', id: count.value++ }];
    }
};
const showError = () => {
    toast.add({ severity: 'error', summary: 'Error Message', detail: 'Message Detail', life: 3000 });
};

const onFinish = async () => {
    try {
        const auth = await store.dispatch('auth/login', { login: login.value, password: password.value })
        console.log(auth)
        //console.log(login.value)
    } catch (error) {
        console.log('auth error', error)
    }
};
const onFinishFailed = errorInfo => {
    console.log("error");
};

const disabled = computed(() => {
    return !(formState.login && formState.password);
});


</script>

<style>
body{
    background-color: white;
}
</style>