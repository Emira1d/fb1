<template>
    <Dialog
        header="Подробности"
        :visible="internalVisible"
        @update:visible="handleVisibleChange"
        :modal="true"
        :closable="true"
        :draggable="false"
    >
        <div class="modal-content">
            <p><strong>Введение:</strong> {{ orderDetails?.more?.introduce || '' }}</p>
            <p><strong>Выполнение:</strong> {{ orderDetails?.more?.performance || '' }}</p>
            <p><strong>Завершено:</strong> {{ orderDetails?.more?.fulfilled || '' }}</p>
            <p><strong>Кредитный счет:</strong> {{ orderDetails?.more?.creditAccount || '' }}</p>
            <p><strong>Пользователь:</strong> {{ orderDetails?.more?.user || '' }}</p>
            <p><strong>Основание:</strong> {{ orderDetails?.more?.base || '' }}</p>
        </div>
    </Dialog>
</template>

<script>
import Dialog from 'primevue/dialog';
import { ref, watch } from 'vue';

export default {
    components: {
        Dialog,
    },
    props: {
        isVisible: {
            type: Boolean,
            required: true,
        },
        orderDetails: {
            type: Object,
            default: null,
        },
    },
    setup(props, { emit }) {
        const internalVisible = ref(props.isVisible);

        watch(() => props.isVisible, (newVal) => {
            internalVisible.value = newVal;
        });

        watch(internalVisible, (newVal) => {
            emit('update:isVisible', newVal);
        });

        const handleVisibleChange = (value) => {
            internalVisible.value = value;
            emit('update:isVisible', value);
            if (!value) {
                emit('close');
            }
        };

        return {
            internalVisible,
            handleVisibleChange,
        };
    },
};
</script>

<style scoped>
.modal-content {
    padding: 1rem;
}
</style>
