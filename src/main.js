import './index.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import { toast } from 'vue3-toastify/index';

// import 'vue3-toastify/dist/index.css'
import App from './App.vue'
import router from './router'


const app = createApp(App)

app.use(createPinia())
app.use(router)
// app.use(toast)
app.mount('#app')
