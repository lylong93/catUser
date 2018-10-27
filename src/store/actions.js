import {apiUserRegister} from '@/api'
export default {
	registe ({commit},params) {
      commit('changeData',params)
    }
}