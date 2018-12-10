import Vuex from 'vuex'
import Vue from 'vue';
import modules from './modules'
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    loadin:'false'
  },
  // mutations,
  // actions
  modules
})

export default store