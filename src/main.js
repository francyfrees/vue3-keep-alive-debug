import { createApp } from 'vue';
import App from './App.vue';
import Router from './router';

const Vue = createApp(App);
Vue.use(Router);

Vue.mount('#app');
