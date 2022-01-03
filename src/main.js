import 'ant-design-vue/dist/antd.css'
import Antd from 'ant-design-vue'
import { createApp } from 'vue'
import store from '@/store/index'
import router from '@/router'
import App from '@/App.vue'

store.dispatch('auth/appInit')

const app = createApp(App)
  .use(store)
  .use(Antd)
  .use(router)

app.config.productionTip = false

router.isReady().then(() => {
  app.mount('#app')
})
