import './assets/index.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'; 
import Aura from "@primeuix/themes/aura";
import App from './App.vue'
import router from './router'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)
app.use(vuetify)
app.use(createPinia())
app.use(router)
app.use(PrimeVue,{
    theme:{
        preset: Aura
    }
}
)
app.mount('#app')
