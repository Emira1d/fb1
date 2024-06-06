<template>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <div class="p-inputgroup">
                    <span class="p-inputgroup-addon">
                        <i class="pi pi-search"></i>
                    </span>
                    <InputText v-model="searchQuery" placeholder="Поиск по депонименту" @input="filterData"/>
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
import { ref } from 'vue';
import Dropdown from 'primevue/dropdown';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import InputText from 'primevue/inputtext';

const arr = [
    {
        "dep": 'ЗАО "Страховая компания"',
        "CH": "ЦБ для собственности для ДБ",
        "KG": "QEDO12VFG",
        "free" : 0,
        "block": 123123
    },
    {
        "dep": 'ЗАО "Страховая компания"',
        "CH": "ЦБ для собственности для ДБ",
        "KG": "QEDO12VFG",
        "free" : 0,
        "block": 123123
    },
    {
        "dep": 'ЗАО "Страховая компания"',
        "CH": "ЦБ для собственности для ДБ",
        "KG": "QEDO12VFG",
        "free" : 0,
        "block": 123123
    },
    {
        "dep": 'ЗАО "Страховая компания"',
        "CH": "ЦБ для собственности для ДБ",
        "KG": "QEDO12VFG",
        "free" : 0,
        "block": 123123
    },
    {
        "dep": 'ЗАО "Страховая компания"',
        "CH": "ЦБ для собственности для ДБ",
        "KG": "QEDO12VFG",
        "free" : 0,
        "block": 123123
    },
    {
        "dep": 'ЗАО "Страховая компания"',
        "CH": "ЦБ для собственности для ДБ",
        "KG": "QEDO12VFG",
        "free" : 0,
        "block": 123123
    },
    {
        "dep": 'ЗАО "Страховая компания"',
        "CH": "ЦБ для собственности для ДБ",
        "KG": "QEDO12VFG",
        "free" : 0,
        "block": 123123
    },
    {
        "dep":"Агентство по защите депозитов КР",
        "CH": "ЦБ для собственности для ДБ",
        "KG": "QEDO12VFG",
        "free" : 0,
        "block": 123123
    },
    {
        "dep":"Агентство по защите депозитов КР",
        "CH": "ЦБ для собственности для ДБ",
        "KG": "QEDO12VFG",
        "free" : 0,
        "block": 123123
    },
    {
        "dep":"Агентство по защите депозитов КР",
        "CH": "ЦБ для собственности для ДБ",
        "KG": "QEDO12VFG",
        "free" : 0,
        "block": 123123
    },
    {
        "dep":"Агентство по защите депозитов КР",
        "CH": "ЦБ для собственности для ДБ",
        "KG": "QEDO12VFG",
        "free" : 0,
        "block": 123123
    },
    {
        "dep": 'ЗАО "Страховая компания"',
        "CH": "ЦБ для собственности для ДБ",
        "KG": "QEDO12VFG",
        "free" : 0,
        "block": 123123
    },
    {
        "dep": 'ЗАО "Страховая компания"',
        "CH": "ЦБ для собственности для ДБ",
        "KG": "QEDO12VFG",
        "free" : 0,
        "block": 123123
    },
    {
        "dep": 'ЗАО "Страховая компания"',
        "CH": "ЦБ для собственности для ДБ",
        "KG": "QEDO12VFG",
        "free" : 0,
        "block": 123123
    },
    {
        "dep": 'ЗАО "Страховая компания"',
        "CH": "ЦБ для собственности для ДБ",
        "KG": "QEDO12VFG",
        "free" : 0,
        "block": 123123
    },
    {
        "dep": 'ЗАО "Страховая компания"',
        "CH": "ЦБ для собственности для ДБ",
        "KG": "QEDO12VFG",
        "free" : 0,
        "block": 123123
    },
    {
        "dep": 'ЗАО "Страховая компания"',
        "CH": "ЦБ для собственности для ДБ",
        "KG": "QEDO12VFG",
        "free" : 0,
        "block": 123123
    },
    {
        "dep": 'ЗАО "Страховая компания"',
        "CH": "ЦБ для собственности для ДБ",
        "KG": "QEDO12VFG",
        "free" : 0,
        "block": 123123
    },
    {
        "dep":"Агентство по защите депозитов КР",
        "CH": "ЦБ для собственности для ДБ",
        "KG": "QEDO12VFG",
        "free" : 0,
        "block": 123123
    },
    {
        "dep":"Агентство по защите депозитов КР",
        "CH": "ЦБ для собственности для ДБ",
        "KG": "QEDO12VFG",
        "free" : 0,
        "block": 123123
    },
    {
        "dep":"Агентство по защите депозитов КР",
        "CH": "ЦБ для собственности для ДБ",
        "KG": "QEDO12VFG",
        "free" : 0,
        "block": 123123
    },
    {
        "dep":"Агентство по защите депозитов КР",
        "CH": "ЦБ для собственности для ДБ",
        "KG": "QEDO12VFG",
        "free" : 0,
        "block": 123123
    }
];

const searchQuery = ref('');
const expandedRows = ref([]);
const filteredArr = ref([...arr]);

const handleOrderTypeChange = (event) => {
    console.log('Selected order type:', event.value);
};

const handleStateChange = (event) => {
    console.log('Selected state:', event.value);
};

const filterData = () => {
    filteredArr.value = arr.filter(item => item.dep.toLowerCase().includes(searchQuery.value.toLowerCase()));
};
</script>

<style>
.card {
    padding: 1em;
    margin-bottom: 1em;
    background-color: #ffffff;
    border: 1px solid #ddd;
    border-radius: 4px;
}
</style>
