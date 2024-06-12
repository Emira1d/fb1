<template>
    <div class="grid">
      <div class="col-12">
        <div class="card">
          <div class="p-inputgroup">
            <span class="p-inputgroup-addon">
              <i class="pi pi-search"></i>
            </span>
            <InputText v-model="searchQuery" placeholder="Поиск по депонименту" @input="filterData" />
          </div>
          <DataTable :value="filteredArr" :expandedRows.sync="expandedRows" dataKey="KG" paginator :rows="10" tableStyle="min-width: 60rem">
            <Column field="dep" header="Депонимент">
              <template #body="slotProps">{{ slotProps.data.dep }}</template>
            </Column>
            <Column field="CH" header="Тип счета">
              <template #body="slotProps">{{ slotProps.data.CH }}</template>
            </Column>
            <Column field="KG" header="KG">
              <template #body="slotProps">{{ slotProps.data.KG }}</template>
            </Column>
            <Column field="free" header="Свободно">
              <template #body="slotProps">{{ slotProps.data.free }}</template>
            </Column>
            <Column field="block" header="Блокированно">
              <template #body="slotProps">{{ slotProps.data.block }}</template>
            </Column>
          </DataTable>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import { useStore } from 'vuex';
  import Dropdown from 'primevue/dropdown';
  import DataTable from 'primevue/datatable';
  import Column from 'primevue/column';
  import InputText from 'primevue/inputtext';
  
  const store = useStore();
  
  const searchQuery = computed({
    get: () => store.state.posSecurites.searchQuery,
    set: (value) => store.commit('posSecurites/setSearchQuery', value),
  });
  
  const expandedRows = ref([]);
  const filteredArr = computed(() => store.getters['posSecurites/filteredArr']);
  
  const handleOrderTypeChange = (event) => {
    console.log('Selected order type:', event.value);
  };
  
  const handleStateChange = (event) => {
    console.log('Selected state:', event.value);
  };
  
  const filterData = () => {
    store.commit('posSecurites/setSearchQuery', searchQuery.value);
  };
  </script>
  
  <style>

  </style>
  