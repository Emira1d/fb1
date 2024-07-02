<template>
    <div class="grid">
      <div class="col-12">
        <div class="card">
          <div id="printSection"  v-if="printMode">
            <PrintOrder :orderDetails="selectedOrderDetails" />
          </div>
  
          <div id="nonPrintSection" v-else>
            <Modal :isVisible.sync="showModal" @close="handleModalClose" />
            <DataTable :value="orders" :expandedRows.sync="expandedRows" dataKey="id" paginator :rows="10" tableStyle="min-width: 60rem;">
              <Column :expander="true" headerStyle="width: 3rem" header="+" />
              <Column field="id" header="№" />
              <Column field="orderType">
                <template #header>
                  <Dropdown :options="orderTypeOptions" @change="handleOrderTypeChange" :placeholder="selectedOrderType || 'Выберите тип поручения'" />
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
                  <Dropdown :options="statusOptions" @change="handleStatusChange" :placeholder="selectedStatus || 'Состояние'" />
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
                      <td class="td">
                        <i class="pi pi-plus-circle" @click="openMoreModal(slotProps.data)"></i>
                      </td>
                    </tr>
                    <tr>
                      <td class="td"><span class="weight">Кредитный счет:</span></td>
                      <td class="td">{{ slotProps.data.more.creditAccount }}</td>
                      <td class="td"><span class="weight">Пользователь:</span></td>
                      <td class="td">{{ slotProps.data.more.user }}</td>
                      <td class="td"><span class="weight">Основание:</span></td>
                      <td class="td">{{ slotProps.data.more.base }}</td>
                      <td class="td">
                        <i class="pi pi-print" @click="printOrder(slotProps.data)"></i>
                      </td>
                    </tr>
                  </table>
                </div>
              </template>
            </DataTable>
            <MoreModal :isVisible.sync="moreModalVisible" :orderDetails="selectedOrderDetails" @close="handleMoreModalClose" />
          </div>
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
  import MoreModal from "./ModalOrder/MoreModalOrder.vue";
  import PrintOrder from "./ModalOrder/PrintModalOrder.vue";
  import { ref, computed } from 'vue';
  
  export default {
    components: {
      Modal,
      MoreModal,
      Dropdown,
      DataTable,
      Column,
      Tag,
      PrintOrder,
    },
    setup() {
      const store = useStore();
  
      const showModal = ref(false);
      const moreModalVisible = ref(false);
      const selectedOrderDetails = ref(null);
      const expandedRows = ref([]);
      const selectedOrderType = ref(null);
      const selectedStatus = ref(null);
      const printMode = ref(false);
  
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
  
      const openMoreModal = (orderDetails) => {
        selectedOrderDetails.value = orderDetails;
        moreModalVisible.value = true;
      };
  
      const handleModalClose = () => {
        showModal.value = false;
      };
  
      const handleMoreModalClose = () => {
        moreModalVisible.value = false;
      };
  
      const printOrder = (orderDetails) => {
        selectedOrderDetails.value = orderDetails;
        printMode.value = true;
        setTimeout(() => {
          window.print();
          printMode.value = false;
        }, 100);
      };
  
      return {
        showModal,
        moreModalVisible,
        selectedOrderDetails,
        expandedRows,
        selectedOrderType,
        selectedStatus,
        orders,
        orderTypeOptions,
        statusOptions,
        getBadgeSeverity,
        handleOrderTypeChange,
        handleStatusChange,
        openMoreModal,
        handleModalClose,
        handleMoreModalClose,
        printOrder,
        printMode,
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
  
  @media print {
    template > *:not(#printSection) {
      display: none;
    }
  
    #printSection {
      display: block ;
    }
  }
  </style>
  