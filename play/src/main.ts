import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { OButton } from '@ofe/ui'
import '@ofe/ui/dist/style.css'

const app = createApp(App)

app.use(ElementPlus)
app.component('OButton', OButton)
app.mount('#app')