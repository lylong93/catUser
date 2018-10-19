import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/pages/Entry/Login'
import Main from '@/commons/Main'

import Home from '@/pages/Home'
import Order from '@/pages/Order'
import Me from '@/pages/Me'
import Bulletin from '@/pages/Bulletin'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name:'main',
      component: Main,
      redirect:'/home',
      children:[
	      {
	      	path: '/home',
	      	name: 'Home',
	      	component: Home
	      },
	      {
	      	path: '/me',
	      	name: 'Me',
	      	component: Me
	      },
	      {
	      	path: '/bulletin',
	      	name: 'bulletin',
	      	component: Bulletin
	      },
	      {
	      	path: '/order',
	      	name: 'Order',
	      	component: Order
	      }
      ]
    },{
     	path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
