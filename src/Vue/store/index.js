import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    user: {
      id: null,
      name: null
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    SET_NAME(state, payload) {
      state.user.id = (state.user.length + 1) || 1
      state.user.name = payload
    }
  }
})