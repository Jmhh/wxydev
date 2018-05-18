import Vue from 'vue'
import Vuex from 'vuex'
import Getters from './getters'
import Actions from './actions'
import Mutations from './mutations'

import User from './modules/user'

Vue.use(Vuex)

const state = {
  login: false
}

export default new Vuex.Store({
  state,
  getters: Getters,
  actions: Actions,
  mutations: Mutations,
  modules: {
    user: User
  }
})
