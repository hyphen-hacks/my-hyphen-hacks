import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: false,
    firebaseLoaded: false,
    loading: true,
    api: "https://2020.hyphen-hacks.com"
  },
  getters: {
    api(state) {
      if (window.location.hostname === "localhost") {
        return "http://localhost:3005"
      } else {
        return state.api
      }

    },
    loading(state) {
      return state.loading
    },
    user(state) {
      return state.user
    },
    firebaseLoaded(state) {
      return state.firebaseLoaded
    }
  },
  mutations: {
    loading(state, load) {
      state.loading = load
    },
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
