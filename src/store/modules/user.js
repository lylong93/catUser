import {apiUserLogin} from '@/api'

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
            state.token = params.token
        }
    },
    actions:{
        async login({ commit},user) {
            let query = await apiUserLogin(user)

            if(query.data.state==='1') {
                commit('changeData',query.data)
            }else {
                //错误
            }
        }
    }
}

export default user