import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/pages/Entry/Login'
import Registe from '@/pages/Entry/Registe'
import Main from '@/commons/Main'

import Home from '@/pages/Home'
import Order from '@/pages/Order'
import Me from '@/pages/Me'
import Search from '@/pages/Search'

import Shop from '@/pages/Shop'
import Pay from '@/pages/Pay'
import Detail from '@/pages/Detail'

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
	      	path: '/search',
	      	name: 'search',
	      	component: Search
	      },
	      {
	      	path: '/order',
	      	name: 'Order',
	      	component: Order
	      },
	       {
	      	path: '/shop',
	      	name: 'Shop',
	      	component: Shop
	      },
	      {
	      	path: '/pay',
	      	name: 'pay',
	      	component: Pay
	      },
	      {
	      	path: '/detail',
	      	name: 'detail',
	      	component: Detail
	      }
      ]
    },{
     	path: '/login',
      	name: 'Login',
     	component: Login
    },{
    	path: '/registe',
      	name: 'Registe',
     	component: Registe
    }
  ]
})
