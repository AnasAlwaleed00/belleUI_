import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notifications: [
      {
        id: 121212,
        type: "info",
        msg: "This is info notification",
      },
      {
        id: 121212,
        type: "info",
        msg: "This is info notification",
      },
      {
        id: 121212,
        type: "success",
        msg: "This is success notification",
      },
      {
        id: 121212,
        type: "warning",
        msg: "This is warning notification",
      },
      {
        id: 121212,
        type: "error",
        msg: "This is error notification",
      },
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
