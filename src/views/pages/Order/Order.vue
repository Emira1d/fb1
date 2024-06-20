<template>
    <div class="grid">

        <div class="col-12">
            <div class="card">


                <div id="app">
                    <Button label="Add Order" class="mr-2 mb-2" @click="showModal = true"></Button>
                    <Modal :isVisible="showModal" @update:isVisible="showModal = $event" />
                </div>

                <DataTable :value="orders" :expandedRows.sync="expandedRows" dataKey="id" paginator :rows="10"
                    tableStyle="min-width: 60rem;">
                    <Column :expander="true" headerStyle="width: 3rem" header="+" />
                    <Column field="id" header="№" />
                    <Column field="orderType">
                        <template #header>
                            <Dropdown :options="orderTypeOptions" @change="handleOrderTypeChange"
                                :placeholder="selectedOrderType || 'Выберите тип поручения'" />
                        </template>
                        <template #body="slotProps">{{ slotProps.data.orderType }}</template>
                    </Column>
                    <Column field="currency" header="Инструмент">
                        <template #body="slotProps">{{ slotProps.data.currency }}</template>
                    </Column>
                    <Column field="quantity" header="Кол-во" sortable>
                        <template #body="slotProps">{{ slotProps.data.quantity }}</template>
                    </Column>
                    <Column field="state">
                        <template #header>
                            <Dropdown :options="statusOptions" @change="handleStatusChange"
                                :placeholder="selectedStatus || 'Состояние'" />
                        </template>
                        <template #body="slotProps">
                            <Tag :severity="getBadgeSeverity(slotProps.data.state)">{{ slotProps.data.state }}</Tag>
                        </template>
                    </Column>
                    <template #expansion="slotProps">
                        <div class="p-3">
                            <h5>Подробная информация</h5>
                            <table>
                                <tr>
                                    <td class="td"><span class="weight">Введение:</span></td>
                                    <td class="td">{{ slotProps.data.more.introduce }}</td>
                                    <td class="td"><span class="weight">Выполнение:</span></td>
                                    <td class="td">{{ slotProps.data.more.performance }}</td>
                                    <td class="td"><span class="weight">Завершено:</span></td>
                                    <td class="td">{{ slotProps.data.more.fulfilled }}</td>
                                </tr>
                                <tr>
                                    <td class="td"><span class="weight">Кредитный счет:</span></td>
                                    <td class="td">{{ slotProps.data.more.creditAccount }}</td>
                                    <td class="td"><span class="weight">Пользователь:</span></td>
                                    <td class="td">{{ slotProps.data.more.user }}</td>
                                    <td class="td"><span class="weight">Основание:</span></td>
                                    <td class="td">{{ slotProps.data.more.base }}</td>
                                </tr>
                            </table>
                        </div>
                    </template>
                </DataTable>
            </div>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex';
import Dropdown from 'primevue/dropdown';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Tag from 'primevue/tag';
import Modal from "./ModalOrder/ModalOrder.vue";
import { ref, computed } from 'vue';


export default {
    components: {
        Modal,
        Dropdown,
        DataTable,
        Column,
        Tag, 
    },
    setup() {
        const store = useStore();

        const showModal = ref(false);
        const expandedRows = ref([]);
        const selectedOrderType = ref(null);
        const selectedStatus = ref(null);

        const getBadgeSeverity = (status) => {
            switch (status) {
                case 'Исполнено':
                    return 'success';
                case 'На исполнении':
                    return 'warning';
                case 'Отменено':
                    return 'danger';
                case 'Введено':
                    return 'info';
                default:
                    return 'light';
            }
        };

        const orders = computed(() => {
            let filteredOrders = store.getters['orders/orders'];
            if (selectedOrderType.value && selectedOrderType.value !== 'Все') {
                filteredOrders = filteredOrders.filter(order => order.orderType === selectedOrderType.value);
            }
            if (selectedStatus.value && selectedStatus.value !== 'Все') {
                filteredOrders = filteredOrders.filter(order => order.state === selectedStatus.value);
            }
            return filteredOrders;
        });

        const orderTypes = computed(() => store.getters['orders/orderTypes']);
        const statuses = computed(() => store.getters['orders/statuses']);

        const orderTypeOptions = computed(() => ['Все', ...orderTypes.value]);
        const statusOptions = computed(() => ['Все', ...statuses.value]);

        const handleOrderTypeChange = (event) => {
            selectedOrderType.value = event.value;
        };

        const handleStatusChange = (event) => {
            selectedStatus.value = event.value;
        };

        return {
            showModal,
            expandedRows,
            selectedOrderType,
            selectedStatus,
            orders,
            orderTypeOptions,
            statusOptions,
            getBadgeSeverity,
            handleOrderTypeChange,
            handleStatusChange,
        };
    },
};
</script>

<style>
table {
    width: 100%;
    border-collapse: collapse;
}

.weight {
    font-weight: 700;
}

.td {
    padding: 0.5em;
    border: 1px solid #ddd;
}
</style>