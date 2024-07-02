<template>
    <Dialog header="Отчет" :visible="isVisible" @update:visible="handleVisibleChange" :modal="true" :closable="true">
        <div class="modal-content">
            <TabView v-model="activeTab">
                <TabPanel header="Депоненты">
                    <PickList listStyle="height:250px" dataKey="code">
                        <template #sourceheader> From 1 </template>
                        <template #targetheader> To </template>
                        <template #item="slotProps">
                            <div></div>
                        </template>
                    </PickList>
                </TabPanel>
                <TabPanel header="Типы счетов">
                    <PickList listStyle="height:250px" dataKey="code">
                        <template #sourceheader> From 2 </template>
                        <template #targetheader> To </template>
                        <template #item="slotProps">
                            <div></div>
                        </template>
                    </PickList>
                </TabPanel>
                <TabPanel header="Ценные бумаги">
                    <PickList listStyle="height:250px" dataKey="code">
                        <template #sourceheader> From 3 </template>
                        <template #targetheader> To </template>
                        <template #item="slotProps">
                            <div></div>
                        </template>
                    </PickList>
                </TabPanel>
                <TabPanel header="Дата (период)">
                    <div class="p-fluid">
                        <div class="p-field">
                            <label for="startDate">Начальная дата и время</label>
                            <Calendar id="startDate" v-model="startDate" showTime="true" hourFormat="24" />
                        </div>
                        <div class="p-field">
                            <label for="endDate">Конечная дата и время</label>
                            <Calendar id="endDate" v-model="endDate" showTime="true" hourFormat="24" />
                        </div>
                    </div>
                </TabPanel>
            </TabView>
        </div>
    </Dialog>
</template>

<script>
import { ref } from 'vue';
import Dialog from 'primevue/dialog';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Calendar from 'primevue/calendar';

export default {
    name: 'ReportModal',
    components: { Dialog, TabView, TabPanel, Calendar },
    props: {
        isVisible: Boolean,
    },
    setup(props, { emit }) {
        const activeTab = ref(0); // Индекс активной вкладки, по умолчанию первая
        const startDate = ref(null);
        const endDate = ref(null);

        const handleVisibleChange = (value) => {
            emit('update:isVisible', value);
        };

        return {
            activeTab,
            startDate,
            endDate,
            handleVisibleChange,
        };
    },
};
</script>

<style scoped>

</style>
