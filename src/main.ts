import 'uno.css'
import './assets/main.css'

import { createApp, getCurrentInstance } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import Antd from 'ant-design-vue'
import { PieChartOutlined } from '@ant-design/icons-vue'
const app = createApp(App)
app.use(Antd)
app.component('PieChartOutlined', PieChartOutlined)
app.use(createPinia())
app.use(router)

app.directive('p', {
  created: (el, binding, vnode) => {
    const action = binding.arg
    const actions = app.config.globalProperties.$route.meta?.actions as [string]
    if (!actions.includes(action)) {
      el.disabled = true
    }
  }
})

app.mount('#app')
