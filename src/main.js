import 'ant-design-vue/dist/antd.css'
import Antd from 'ant-design-vue'
import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

createApp(App)
  .use(Antd)
  .use(router)
  .mount('#app')
