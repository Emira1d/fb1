import { createRouter, createWebHistory } from 'vue-router';
import AppLayout from '@/layout/AppLayout.vue';

const router = createRouter({
history: createWebHistory(),
routes: [
{
path: '/',
component: AppLayout,
children: [
{
path: '/',
name: 'Order',
component: () => import('@/views/pages/Order/Order.vue')
},
{
path: '/PosSecurities',
name: 'PosSecurities',
component: () => import('@/views/pages/Positions/PosSecurities.vue')
},
{
path: '/PosCash',
name: 'PosCash',
component: () => import('@/views/pages/Positions/PosCash.vue')
},
{
path: '/ExtractSecurities',
name: 'ExtractSecurities',
component: () => import('@/views/pages/Extract/ExtractSecurities.vue')
},
{
path: '/ExtractCash',
name: 'ExtractCash',
component: () => import('@/views/pages/Extract/ExtractCash.vue')
},            {
    path: '/:pathMatch(.*)*',
    name: 'Notfound',
    component: () => import('@/views/pages/NotFound.vue')
},
{
    path: '/Profile',
    name: 'Profile',
    component: () => import('@/views/Profile.vue')
},
{
    path: '/Admin',
    name: 'Admin',
    component: () => import('@/views/Admin.vue')
},
]
},
{
path: '/auth/login',
name: 'login',
component: () => import('@/views/pages/auth/Login.vue')
}
]
});

export default router;