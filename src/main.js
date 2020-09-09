import { createApp } from 'vue';
import router from './router';
import Default from '@/layouts/default/Default.vue';
import App from './App.vue';

const app = createApp(App);
app.component('LayoutDefault', Default);
app.use(router).mount('#app');
