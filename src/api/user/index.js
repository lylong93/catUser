import http from '../http.js'

const user = {
	login: (params = {}) => {
		return http.get('/api/shopchat/userlist', params)
	},
	registe: (params = {}) => {
		return http.post('/api/chat/registe', params)
	},
	getMstList: (params = {}) => {
		return http.get('/api/shopchat/msglist',{params})
	},

}
export default user