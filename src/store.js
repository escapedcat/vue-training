import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  twitter: 'poawromina'
}

const mutations = {
  'SET_TWITTER' (state, payload) {
    state.twitter = payload
  }
}

const store = new Vuex.Store({
  state,
  mutations
})

export default store
