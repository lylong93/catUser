import Vuex from 'vuex'
import Vue from 'vue';
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: 'user',
    token:'',
    pic:'',
  },
  mutations,
  actions
})

export default store