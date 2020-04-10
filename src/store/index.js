import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: false,
    firebaseLoaded: false
  },
  getters: {
    user(state) {
      return state.user
    },
    firebaseLoaded(state) {
      return state.firebaseLoaded
    }
  },
  mutations: {
    user(state, user) {
      return state.user = user
    },
    firebaseLoaded(state, firebaseLoaded) {
      return state.firebaseLoaded = firebaseLoaded
    }
  },
  actions: {
  },
  modules: {
  }
})
