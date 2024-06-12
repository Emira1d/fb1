<script setup>
import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import TreeTable from 'primevue/treetable';
import Column from 'primevue/column';

const store = useStore();

const treeTableData = computed(() => store.getters.orders.map((item, index) => ({
    key: index,
    data: {
        BeginDate: new Date(item.BeginDate).toLocaleDateString(),
        SecIN: item.SecIN,
        AccTypeName: item.AccTypeName,
        Quantity: item.TransType === '+' ? item.Quantity : 0,
        QuantityStop: item.TransType === '-' ? item.Quantity : 0,
    }
})));

onMounted(() => {
    store.dispatch('fetchOrders');
});

const totalQuantity = computed(() =>
    store.getters.orders.reduce((sum, item) => sum + (item.TransType === '+' ? item.Quantity : 0), 0)
);

const totalQuantityStop = computed(() =>
    store.getters.orders.reduce((sum, item) => sum + (item.TransType === '-' ? item.Quantity : 0), 0)
);

</script>

<template>
    <div class="grid">
        <div class="card">
            <TreeTable :value="treeTableData" selectionMode="checkbox" paginator :rows="10">
                <Column field="BeginDate" header="Дата"></Column>
                <Column field="AccTypeName" header="Счет списания"></Column>
                <Column field="SecIN" header="ЦБ"></Column>
                <Column field="Quantity" header="Дебит">
                    <template #footer="slotProps">
                        {{ totalQuantity }}
                    </template></Column>
                <Column field="QuantityStop" header="Кредит">
                    <template #footer="slotProps">
                        {{ totalQuantityStop }}
                    </template>
                </Column>
            </TreeTable>
        </div>
    </div>
</template>

<style>

</style>
