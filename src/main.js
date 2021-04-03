import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { i18n } from './i18n'

const app = createApp(App)

const i18nRoute = (to) => {
  return {
    ...to,
    params: {
      locale: i18n.global.locale.value || i18n.global.locale,
      ...to.params
    }
  }
}
app.config.globalProperties.$i18nRoute = i18nRoute

app.use(i18n)
app.use(store)
app.use(router)

app.mount('#app')
