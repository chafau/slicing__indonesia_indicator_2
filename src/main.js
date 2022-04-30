import { app } from "./plugins/globalComponents.js"
import router from './routes'
import VueApexCharts from "vue3-apexcharts";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

app.use(VueApexCharts);
app.use(router).mount('#app')
