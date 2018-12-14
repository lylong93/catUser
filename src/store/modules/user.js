import {apiUserLogin,apiUserRegiste,apiRefurbish} from '@/api'

const user = {
	namespaced: true,
	state:{
		name:'',
		avatar:'',
	},
	mutations:{
		_changeData (state,params) {
			state.name = params.name
		},
	},
	actions:{
		async registe({ commit},user) {
			commit('LOADING',null,{ root: true })
			try{
				let query = await apiUserRegiste(user)
					commit('LOADEND',null,{ root: true })
					console.log(query)
					if(query.data.state===0) { 
						commit('_changeData',query.data)
						commit('LOADIN',null,{ root: true })
					}else {
						commit('DEERR','失败',{ root: true })
					}
			}
			catch(err) {
				commit('deErr','报错',{ root: true })
			}
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
		},
		async refurbish({ commit},user) {
			commit('LOADING',null,{ root: true })
			try{
				let query = await apiRefurbish()
				console.log(query)
				if(query.data.state === 0) {
					commit('_changeData',query.data)
				} else {
					commit('_changeData',query.data)
				}
			}
			catch(err) {
				commit('DEERR','报错',{ root: true })
			}
		},
	}
}

export default user