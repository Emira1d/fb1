<template>
  <div v-if="internalVisible" class="modal-overlay" @click.self="close">
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
        <component
          v-for="(field, index) in formFields"
          :is="getComponentType(field.element)"
          :key="index"
          v-model="formData[field.field]"
          v-bind="getFieldProps(field)"
        />
        <div class="button-group">
          <Button @click="prevPage" label="Back" class="p-button-outlined"/>
          <Button :disabled="!isFormValid" @click="finish" label="Finish" class="p-button-outlined"/>
        </div>
      </div>
    </div>
  </div>
  <Button @click="openModal" label="Добавить поручение" class="p-button-outlined"/>
</template>

<script>
import { ref, defineComponent, computed } from 'vue';
import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';
import InputNumber from 'primevue/inputnumber';
import Calendar from 'primevue/calendar';
import InputText from 'primevue/inputtext';

export default defineComponent({
  setup() {
    const internalVisible = ref(false);
    const currentPage = ref(1);
    const selectedOrderType = ref(null);
    const formData = ref({});
    
    const formFields = ref([
      { label: "Валюта", element: "select", field: "Base", options: [], required: true },
      { label: "Счет зачисления", element: "select", field: "AccTo", options: [], required: true },
      { label: "Количество", element: "input", field: "Quantity", required: false },
      { label: "Дата исполнения:", element: "DatePicker", field: "ExecDate", required: false },
      { label: "Основание", element: "input", field: "Ground", required: true },
      { label: "Принадлежность", element: "input", field: "Owner", required: true }
    ]);

    formFields.value.forEach(field => {
      formData.value[field.field] = null;
    });

    const orderTypeOptions = computed(() => ['Тип 1', 'Тип 2', 'Тип 3']);

    const nextPage = () => {
      currentPage.value += 1;
    };

    const prevPage = () => {
      currentPage.value -= 1;
    };

    const openModal = () => {
      internalVisible.value = true;
    };

    const close = () => {
      internalVisible.value = false;
      resetForm();
    };

    const finish = () => {
      console.log(formData.value);
      close();
    };

    const resetForm = () => {
      currentPage.value = 1;
      selectedOrderType.value = null;
      formFields.value.forEach(field => {
        formData.value[field.field] = null;
      });
    };

    const getComponentType = (element) => {
      switch (element) {
        case 'select':
          return Dropdown;
        case 'input':
          return InputText;
        case 'DatePicker':
          return Calendar;
        case 'number':
          return InputNumber;
        default:
          return 'input';
      }
    };

    const getFieldProps = (field) => {
      const props = {
        placeholder: field.label,
        class: 'mb-3'
      };
      if (field.element === 'select' && field.field === 'Base') {
        props.options = ['Кыргызский сом', 'Доллар США', 'Евро'];
      } else if (field.element === 'select' && field.field === 'AccTo') {
        props.options = ['Вариант 1','Вариант 2','Вариант 3'];
      } else if (field.element === 'select') {
        props.options = field.options;
      }
      return props;
    };

    const isFormValid = computed(() => {
      return formFields.value.every(field => !field.required || formData.value[field.field]);
    });

    return {
      internalVisible,
      currentPage,
      nextPage,
      prevPage,
      openModal,
      close,
      finish,
      orderTypeOptions,
      selectedOrderType,
      formData,
      formFields,
      getComponentType,
      getFieldProps,
      isFormValid,
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
