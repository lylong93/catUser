import {apiUserLogin,apiUserRegiste} from '@/api'

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
        registe({ commit},user) {

            commit('loading',null,{ root: true })
            // console.log(apiUserRegiste())
            apiUserLogin()
            .then((data)=> {
                console.log(data)
            })
            // .then((data)=> {
            //     console.log(data)
            // })
            
            // console.log(query)
            // if(query.data.state==='0') {
            //     // commit('loadEnd',null,{ root: true })
            //     // commit('changeData',query.data)
            // }else {
            //     // commit('deErr','报错',{ root: true })
            // }
        },
        async login({ commit},user) {

            commit('loading',null,{ root: true })

            let query = await apiUserLogin(user)

             if(query.data.state==='0') {
                commit('loadEnd',null,{ root: true })
                commit('changeData',query.data)
            }else {
                commit('deErr','报错',{ root: true })
            }
        }
    }
}

export default user