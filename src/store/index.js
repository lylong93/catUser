import Vuex from 'vuex'
import Vue from 'vue';
import modules from './modules'
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    LOGINED:false,
    Loadflag: false,
    Err:'',
  },
  mutations:{
    'LOADING'(state){
      state.Loadflag = true
    },
    'LOADEND'(state) {
      state.Loadflag = false
    },
    'LOADIN'(state) {
      state.LOGINED = true
    },
    'LOADOUT'(state) {
      state.LOGINED = false
    },
    'DEERR'(state,msg) {
      state.Err = msg
    }
  },

  modules
})

export default store