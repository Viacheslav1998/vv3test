// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import VueSplide from '@splidejs/vue-splide';
import VueScrollTo from 'vue-scrollto';
import '../node_modules/flowbite-vue/dist/index.css'
import './index.css'


const app = createApp( App );
app.use( VueSplide );
app.use( VueScrollTo );
app.mount( '#app' );