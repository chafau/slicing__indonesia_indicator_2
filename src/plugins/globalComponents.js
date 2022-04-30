import { createApp } from 'vue'
import App from '@/App.vue';

// nama komponen
import Sidebar from '@/layout/components/Sidebar.vue'
import Header from '@/layout/components/Header.vue'

export const app = createApp(App);
app.component('Sidebar', Sidebar)
app.component('Header', Header)