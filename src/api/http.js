import axios from 'axios'

const URL = 'http://localhost:8000';
const token = localStorage.getItem('token');
// 请求拦截
axios.interceptors.request.use((config) => {
	config.baseURL = URL
	config.timeout = 5000
	config.headers.authorization = token
	return config;
}, (error) => {
	return Promise.reject(error);
});
// 返回拦截
// axios.interceptors.response.use((response) => {
// 	// console.log(response)
// }, (error) => {
// 	return Promise.reject(error);
// });

export default axios