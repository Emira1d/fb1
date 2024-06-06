<script setup>
import { ref } from 'vue';
import Dropdown from 'primevue/dropdown';

const arr = [
    {
        "id": 123123,
        "orederType": "Депонирование ДС",
        "currency": "Кыргызский сом",
        "quantity": 25000,
        "state": "Введено",
        "more": {
            "introduceв": "17.05.2024 11.12.18",
            "performance": "17.05.2024 14.31.34",
            "fulfilled": "18.05.2024 10.02.12",
            "creditAccount": "L-400-2015",
            "user": "Depo17",
            "base": "Оплата биржевых сделок по аукциону"
        }
    },
    {
        "id": 123124,
        "orederType": "Поручение ГЦБ",
        "currency": "Кыргызский сом",
        "quantity": 54342,
        "state": "На исполнении",
        "more": {
            "introduceв": "17.05.2024 11.12.18",
            "performance": "17.05.2024 14.31.34",
            "fulfilled": "18.05.2024 10.02.12",
            "creditAccount": "L-400-2015",
            "user": "Depo17",
            "base": "Оплата биржевых сделок по аукциону"
        }
    },
    {
        "id": 123125,
        "orederType": "Списание ГЦБ",
        "currency": "Кыргызский сом",
        "quantity": 9843,
        "state": "Отменено",
        "more": {
            "introduceв": "17.05.2024 11.12.18",
            "performance": "17.05.2024 14.31.34",
            "fulfilled": "18.05.2024 10.02.12",
            "creditAccount": "L-400-2015",
            "user": "Depo17",
            "base": "Оплата биржевых сделок по аукциону"
        }
    },
    {
        "id": 123126,
        "orederType": "Перевод ГЦБ в иной депозиторий",
        "currency": "Кыргызский сом",
        "quantity": 3,
        "state": "Исполнено",
        "more": {
            "introduceв": "17.05.2024 11.12.18",
            "performance": "17.05.2024 14.31.34",
            "fulfilled": "18.05.2024 10.02.12",
            "creditAccount": "L-400-2015",
            "user": "Depo17",
            "base": "Оплата биржевых сделок по аукциону"
        }
    },
    {
        "id": 123127,
        "orederType": "Прием ГЦБ из иного депозитория",
        "currency": "Кыргызский сом",
        "quantity": 100000,
        "state": "Отменено",
        "more": {
            "introduceв": "17.05.2024 11.12.18",
            "performance": "17.05.2024 14.31.34",
            "fulfilled": "18.05.2024 10.02.12",
            "creditAccount": "L-400-2015",
            "user": "Depo17",
            "base": "Оплата биржевых сделок по аукциону"
        }
    },
    {
        "id": 123128,
        "orederType": "Депонирование ГЦБ из ДК",
        "currency": "Кыргызский сом",
        "quantity": 2234,
        "state": "Исполнено",
        "more": {
            "introduceв": "17.05.2024 11.12.18",
            "performance": "17.05.2024 14.31.34",
            "fulfilled": "18.05.2024 10.02.12",
            "creditAccount": "L-400-2015",
            "user": "Depo17",
            "base": "Оплата биржевых сделок по аукциону"
        }
    }
];

const expandedRows = ref([]);

const orderTypes = ['Депонирование ДС', 'Поручение ГЦБ', 'Списание ГЦБ', 'Перевод ГЦБ в иной депозиторий', 'Прием ГЦБ из иного депозитория', 'Депонирование ГЦБ из ДК' ,'Списание ГЦБ в ДК', 'Перевод ГЦБ депонента на счет другого депонента', 'Депонирование ДС', 'Списание ДС', 'Перемещение ГЦБ по счетам одного депонента'];

const statuses = ['На исполнении', 'Введено', 'Исполнено', 'Отменено'];

const handleOrderTypeChange = (event) => {
    console.log('Selected order type:', event.value);
};

const handleStateChange = (event) => {
    console.log('Selected state:', event.value);
};
</script>



<template>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <DataTable :value="arr" :expandedRows.sync="expandedRows" dataKey="id" tableStyle="min-width: 60rem">
                    <Column :expander="true" headerStyle="width: 3rem" />
                    <Column field="id" header="№" sortable>
                        <template #body="slotProps">{{ slotProps.data.id }}</template>
                    </Column>

                    <Column field="orderTypeDropdown">
                        <template #header="slotProps">
                            <Dropdown :options="orderTypes" @change="handleOrderTypeChange" placeholder="Выберите тип поручения" />
                        </template>
                        <template #body="slotProps">{{ slotProps.data.orederType }}</template>
                    </Column>

                    <Column field="currency" header="Инструмент">
                        <template #body="slotProps">{{ slotProps.data.currency }}</template>
                    </Column>
                    <Column field="quantity" header="Кол-во" sortable>
                        <template #body="slotProps">{{ slotProps.data.quantity }}</template>
                    </Column>
                    <Column field="stateDropdown">
                        <template #header>
                            <Dropdown :options="statuses" placeholder="Статус" @change="handleStateChange" />
                        </template>
                        <template #body="slotProps">{{ slotProps.data.state }}</template>
                    </Column>
                    <template #expansion="slotProps">
                        <div class="p-3">
                            <h5>Подробная информация</h5>
                            <table>
                                <tr>
                                    <td>Введение:</td>
                                    <td><span class="weight">{{ slotProps.data.more.introduceв }}</span></td>
                                    <td>Выполнение:</td>
                                    <td><span class="weight">{{ slotProps.data.more.performance }}</span></td>
                                    <td>Завершено:</td>
                                    <td><span class="weight">{{ slotProps.data.more.fulfilled }}</span></td>
                                </tr>
                                <tr>
                                    <td>Кредитный счет:</td>
                                    <td><span class="weight">{{ slotProps.data.more.creditAccount }}</span></td>
                                    <td>Пользователь:</td>
                                    <td><span class="weight">{{ slotProps.data.more.user }}</span></td>
                                    <td>Основание:</td>
                                    <td><span class="weight">{{ slotProps.data.more.base }}</span></td>
                                </tr>
                            </table>
                        </div>
                    </template>
                </DataTable>
            </div>
        </div>
    </div>
</template>



<style>
</style>


<style>
.card {
    padding: 1em;
    margin-bottom: 1em;
    background-color: #ffffff;
    border: 1px solid #ddd;
    border-radius: 4px;
}

table {
    width: 100%;
    border-collapse: collapse;
}

.weight {
    font-weight: 700;
}

td {
    padding: 0.5em;
    border: 1px solid #ddd;
}
</style>
