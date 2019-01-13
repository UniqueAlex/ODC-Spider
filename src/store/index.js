// index.js
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'
import claimState from './modules/claim/state'
import claimMutation from './modules/claim/mutations'
import claimAction from './modules/claim/actions'
import forecastState from './modules/forecast/state'
import forecastMutation from './modules/forecast/mutations'
import forecastAction from './modules/forecast/actions'

Vue.use(Vuex)

const claimModule = {
  state: claimState,
  mutations: claimMutation,
  actions: claimAction
}

const forecastModule = {
  state: forecastState,
  mutations: forecastMutation,
  actions: forecastAction
}

export default new Vuex.Store({
  actions,
  mutations,
  state,
  modules: {
    claim: claimModule,
    forecast: forecastModule
  }
})
