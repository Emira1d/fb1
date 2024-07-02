<template>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <Button label="Показать отчет" @click="showModal = true" />
                <ReportModal :isVisible="showModal" @update:isVisible="showModal = $event" />
            </div>
        </div>
    </div>
</template>

<script>
import ReportModal from './ReportModal/ReportModal.vue'; 
import { ref } from 'vue';

export default {
    components: {
        ReportModal, 
    },
    setup() {
        const showModal = ref(false); 
        return {
            showModal, 
        };
    },
};
</script>

<style>
</style>
