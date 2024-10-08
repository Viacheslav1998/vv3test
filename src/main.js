import { createApp } from 'vue'
import router from './router';
import App from './App.vue'
import VueSplide from '@splidejs/vue-splide';
import VueScrollTo from 'vue-scrollto';
import store from './store';
import './index.css'

const app = createApp(App);
app.use(VueSplide);
app.use(VueScrollTo);
app.use(store);
app.use(router);
app.mount('#app');