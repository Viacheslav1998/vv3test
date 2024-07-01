// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import VueSplide from '@splidejs/vue-splide';
import './index.css'


const app = createApp( App );
app.use( VueSplide );
app.mount( '#app' );