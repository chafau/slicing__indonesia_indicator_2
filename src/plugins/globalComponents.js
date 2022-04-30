import { createApp } from 'vue'
import Header from '@/layout/Header.vue'
import Sidebar from '@/layout/Sidebar.vue'

const app = createApp({})

app.component('Sidebar', Sidebar)
