<template>
    <div v-if="isVisible" class="modal-overlay" @click.self="close">
      <div class="modal">
        <button class="close-button" @click="close">×</button>
  
        <div v-if="currentPage === 1">
          <h6>Page 1: Add Order</h6>
          <Dropdown 
            :options="orderTypeOptions" 
            v-model="selectedOrderType"
            placeholder="Выберите тип поручения"
            class="mb-3"
          />
          <Button @click="nextPage" label="Next" class="p-button-outlined"/>
        </div>
  
        <div v-if="currentPage === 2">
          <h6>Page 2: Order Details</h6>
          <Dropdown 
            :options="currencyOptions" 
            v-model="selectedCurrency"
            placeholder="Выберите валюту"
            class="mb-3"
          />
          <Dropdown 
            :options="orderType" 
            v-model="selectedAccount"
            placeholder="Выберите счет списания"
            class="mb-3"
          />
          <InputNumber 
            showButtons 
            v-model="quantity" 
            mode="decimal" 
            placeholder="Введите количество"
            class="mb-3"
          />
          <Calendar 
            v-model="calendarValue" 
            :showIcon="true" 
            :showButtonBar="true" 
            placeholder="Выберите дату"
            class="mb-3"
          />
  
          <div class="button-group">
            <Button @click="prevPage" label="Back" class="p-button-outlined"/>
            <Button @click="finish" label="Finish" class="p-button-outlined"/>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, defineComponent, computed } from 'vue';
  import { useStore } from 'vuex';
  import Dropdown from 'primevue/dropdown';
  import Button from 'primevue/button';
  import InputNumber from 'primevue/inputnumber';
  import Calendar from 'primevue/calendar';
  
  export default defineComponent({
    props: {
      isVisible: {
        type: Boolean,
        required: true,
      },
    },
    emits: ['update:isVisible'],
    setup(props, { emit }) {
      const store = useStore();
  
      const currentPage = ref(1);
      const selectedOrderType = ref(null);
      const selectedCurrency = ref(null);
      const selectedAccount = ref(null);
      const quantity = ref(null);
      const calendarValue = ref(null);
  
      const orderTypeOptions = computed(() => store.getters['orders/orderTypes']);
      const currencyOptions = computed(() => [
        'Кыргызский сом', 'Доллар США', 'Евро'
      ]);
      const orderType = computed(() => [
        'ДС в номинальном держании', 'ДС в номинальном держании', 'ДС в номинальном держании', 'ДС в номинальном держании',
      ]);
  
      const nextPage = () => {
        currentPage.value += 1;
      };
  
      const prevPage = () => {
        currentPage.value -= 1;
      };
  
      const close = () => {
        currentPage.value = 1; // Reset to the first page on close
        emit('update:isVisible', false);
      };
  
      const finish = () => {
        const result = {
          orderType: selectedOrderType.value,
          currency: selectedCurrency.value,
          account: selectedAccount.value,
          quantity: quantity.value,
          date: calendarValue.value
        };
        console.log(result);
        close();
      };
  
      return {
        currentPage,
        nextPage,
        prevPage,
        close,
        finish,
        orderTypeOptions,
        selectedOrderType,
        selectedCurrency,
        selectedAccount,
        quantity,
        calendarValue,
        currencyOptions,
        orderType
      };
    },
  });
  </script>
  
  <style scoped>
  .modal-overlay {
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    position: relative;
    max-width: 500px;
    width: 90%;
    max-height: 80%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
  }
  h6 {
    margin-bottom: 20px;
    text-align: center;
  }
  .mb-3 {
    margin-bottom: 20px;
    width: 100%;
  }
  .button-group {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  </style>
  