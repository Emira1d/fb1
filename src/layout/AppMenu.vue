<script setup>
import { ref, computed } from 'vue';

const isAdmin = true;
// const isAdmin = false;

import AppMenuItem from './AppMenuItem.vue';

const model = ref([
    {
        label: 'Home',
        items: [
            { label: 'Поручения', icon: 'pi pi-fw pi-home', to: '/' },
            { label: 'Позиции по ЦБ', icon: 'pi pi-fw pi-home', to: '/PosSecurities' },
            { label: 'Позиции по ДС', icon: 'pi pi-fw pi-home', to: '/PosCash' },
            { label: 'Выписка ЦБ', icon: 'pi pi-fw pi-home', to: '/ExtractSecurities' },
            { label: 'Выписка по ДС', icon: 'pi pi-fw pi-home', to: '/ExtractCash' }
        ]
    },
    {
        label: 'Pages',
        icon: 'pi pi-fw pi-briefcase',
        to: '/pages',
        items: [
            {
                label: 'Auth',
                icon: 'pi pi-fw pi-user',
                items: [
                    {
                        label: 'Login',
                        icon: 'pi pi-fw pi-sign-in',
                        to: '/auth/login'
                    }
                ]
            },
            { label: 'Admin', icon: 'pi pi-fw pi-home', to: '/Admin', }
            
            
        ]
    }
]);

const filteredModel = computed(() => {
    return model.value.map(category => {
        if (category.label === 'Pages') {
            return {
                ...category,
                items: category.items.filter(item => isAdmin || item.label !== 'Admin')
            };
        }
        return category;
    });
});

</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in filteredModel" :key="i">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
    </ul>
</template>

<style lang="scss" scoped></style>
