import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import Button from '@/components/Button/Button'
import Message from '@/components/Message/Message'
import Notification from '@/components/Notification/Notification'
import NotificationsList from '@/components/Notification/NotificationsList'


Vue.component('Button', Button)
Vue.component('Message', Message)
Vue.component('Notification', Notification)
Vue.component('NotificationsList', NotificationsList)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
