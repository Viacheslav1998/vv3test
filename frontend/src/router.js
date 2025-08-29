
// it was a sample, but not used now
import { createMemoryHistory, createRouter } from 'vue-router';

// components pages
import BlogView from './components/pages/BlogView.vue';

const routes = [
	{ path: '/blog', component: BlogView },
];

const router = createRouter({
	history: createMemoryHistory(),
	routes,
});

export default router