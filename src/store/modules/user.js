import {apiUserRegiste} from '@/api'

const user = {
    namespaced: true,
    state:{
        name:'',
        token:'',
        avatar:'',
    },
    mutations:{
        changeData (state,params) {
            state.name = params.name
        }
    },
    actions:{
        async login({ commit,state }) {
            await  apiUserRegiste()
            commit('changeData')
        }
    }
}