<template>
    <div class="grid">
        <div class="card">
            <TreeTable :value="treeTableData" paginator :rows="10" selectionMode="checkbox">
                <Column field="BeginDate" header="Дата"></Column>
                <Column field="AccTypeName" header="Счет списания"></Column>
                <Column field="Corr" header="Тип операции">
                    <template #footer="slotProps">Итог</template>
                </Column>
                <Column field="Quantity" header="Дебит">
                    <template #body="slotProps">
                        {{ formatNumber(slotProps.node.data.Quantity) }}
                    </template>
                    <template #footer="slotProps">
                        {{ formatNumber(totalQuantity) }}
                    </template>
                </Column>
                <Column field="QuantityStop" header="Кредит">
                    <template #body="slotProps">
                        {{ formatNumber(slotProps.node.data.QuantityStop) }}
                    </template>
                    <template #footer="slotProps">
                        {{ formatNumber(totalQuantityStop) }}
                    </template>
                </Column>
            </TreeTable>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const extractCash = computed(() => store.getters['extractCash']);

const treeTableData = computed(() => extractCash.value.map((item, index) => ({
    key: index,
    data: {
        BeginDate: new Date(item.BeginDate).toLocaleDateString(),
        AccNumber: item.AccNumber,
        AccTypeName: item.AccTypeName,
        CurrName: item.CurrName,
        Quantity: item.Quantity,
        QuantityStop: item.QuantityStop,
    }
})));

const totalQuantity = computed(() =>
    extractCash.value.reduce((sum, item) => sum + item.Quantity, 0)
);

const totalQuantityStop = computed(() =>
    extractCash.value.reduce((sum, item) => sum + item.QuantityStop, 0)
);

function formatNumber(value) {
    if (Math.abs(value) < 1e-6) {
        return value;
    }
    return value.toLocaleString('ru-RU');
}
</script>

<style>
.card {
    padding: 1em;
    margin-bottom: 1em;
    background-color: #ffffff;
    border: 1px solid #ddd;
    border-radius: 4px;
}

.grid {
    display: grid;
    gap: 1em;
}
</style>
