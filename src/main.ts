import { createApp } from 'vue'
import App from './App.vue'
import copy from './directives/vCopy'
import router from './router/index'

const app = createApp(App)
app.directive('copy', copy)
app.use(router)
app.mount('#app')
