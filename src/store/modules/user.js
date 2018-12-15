import {apiUserLogin,apiUserRegiste,apiRefurbish} from '@/api'
import {ioLogin} from '@/socket'

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
					
				await dispatch('_next',query)
			}
			catch(err) {
				commit('DEERR','报错',{ root: true })
			}
		},
		async login({ dispatch,commit},user) {
			commit('LOADING',null,{ root: true })
			try {
				let query = await apiUserLogin(user)

				await dispatch('_next',query)

			}catch(err) {
				commit('DEERR','报错',{ root: true })
			}
		},
		async refurbish({dispatch,commit},user) {
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
		_next({commit},query) {
			commit('LOADEND',null,{ root: true })
			console.log(query)
			if(query.data.state===0) { 
				commit('_changeData',query.data)
				localStorage.setItem('token',query.data.token)
				ioLogin(query.data.name)
				commit('LOADIN',null,{ root: true })
			}else {
				commit('DEERR','失败',{ root: true })
			}
		},
		
	}
}

export default user