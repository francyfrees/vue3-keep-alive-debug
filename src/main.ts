import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus'
import locale from "element-plus/lib/locale/lang/zh-cn"

const Vue = createApp(App);
Vue.use(ElementPlus, { locale })

Vue.mount('#app');
