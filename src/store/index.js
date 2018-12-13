import Vuex from 'vuex'
import Vue from 'vue';
import modules from './modules'
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    loadFlag: false,
    err:'',
  },
  mutations:{
    loading(state){
      state.loadFlag = true
    },
    loadEnd() {
      state.loadFlag = false
    },
    deErr(msg) {
      state.err = msg
    }
  },
  // // actions:{

  // }
  modules
})

export default store