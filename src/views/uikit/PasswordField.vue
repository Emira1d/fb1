<template>
    <div>
        <h5>{{ label }}</h5>
        <div class="p-inputgroup">
            <InputText :type="isPasswordVisible ? 'text' : 'password'" :placeholder="placeholder" v-model="password" />
            <button @click="togglePasswordVisibility" type="button" class="p-inputgroup-addon">
                <i :class="isPasswordVisible ? 'pi pi-eye-slash' : 'pi pi-eye'"></i>
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    label: String,
    placeholder: String
});

const password = ref('');
const isPasswordVisible = ref(false);

const togglePasswordVisibility = () => {
    isPasswordVisible.value = !isPasswordVisible.value;
};
</script>

<style scoped>
.p-inputgroup-addon {
    cursor: pointer;
    background: none;
    border: none;
    padding: 0.5rem;
}
</style>
