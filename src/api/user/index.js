import http from '../http.js'

const user = {
	login: (params = {}) => {
		return http.post('/api/user/login', params)
	},
	registe: (params = {}) => {
		return http.post('/api/user/register', params)
	},
	getMstList: (params = {}) => {
		return http.get('/api/shopchat/msglist',{params})
	},
	refurbish:(params ={}) => {
		return http.get('/api/user/getinfo',{params})
	}
}
export default user