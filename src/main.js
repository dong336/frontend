// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import 'bootstrap/dist/js/bootstrap.js';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
// import funcPlugins from './plugins/func';
// import objPlugins from './plugins/obj';
//import person from './plugins/person';

const app = createApp(App);
const pinia = createPinia();

app
	// .use(funcPlugins)
	// .use(objPlugins, { name: 'kdw' })
	//.use(person, { name: '홍길동' })
	.use(router)
	.use(pinia)
	.mount('#app');

console.log('mode: ', import.meta.env.MODE);
// console.log('base_url: ', import.meta.env.BASE_URL);
// console.log('prod: ', import.meta.env.PROD);
// console.log('dev: ', import.meta.env.DEV);
// console.log('VITE_APP_API_URL: ', import.meta.env.VITE_APP_API_URL);
