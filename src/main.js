import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import Button from '@/components/Button/Button'
import Message from '@/components/Message/Message'


Vue.component('Button', Button)
Vue.component('Message', Message)


import Unicon from 'vue-unicons/dist/vue-unicons-vue2.umd'
import { uniExclamationCircle, uniPlus, uniLocationArrow, uniApple, uniTimes, uniExclamationTriangle, uniExclamationOctagon, uniCheckCircle } from 'vue-unicons/dist/icons'

Unicon.add([uniExclamationCircle, uniPlus, uniLocationArrow, uniApple, uniTimes, uniExclamationTriangle, uniExclamationOctagon, uniCheckCircle])
Vue.use(Unicon)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
