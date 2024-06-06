<script setup>

</script>
<template>
    <div class="grid">
        <div class="card">
            <TreeTable selectionMode="checkbox">
                <Column field="" header="Дата"></Column>
                <Column field="" header="Счет списания"></Column>
                <Column field="" header="Тип операции"></Column>
                <Column field="" header="Сумма операции">
                    <Column field="" header="Дебит"></Column>
                    <Column field="" header="Кредит"></Column>
                </Column>
            </TreeTable>
        </div>
    </div>
</template>
<style></style>