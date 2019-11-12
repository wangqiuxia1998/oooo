import Vue from 'vue'
import Router from 'vue-router'
import login from "@/components/logIn/login"
import HelloWorld from '@/components/todoList/HelloWorld'
import Main from '@/components/main_Page/Main'
import Device from '@/components/seach/Device'
import get_Axios from '@/components/seach/get_Axios'
import Page_two from '@/components/Page2/Page_two'

Vue.use(Router)

export default new Router({
  routes: [
    {
		path: '/',
		name: 'login',
		component: login,
	},
	{
      path: '/main',
      name: 'Main',
      component: Main,
			children:[
				{
					path: '/helloWorld',
					name: 'HelloWorld',
					component: HelloWorld
				},
				{
					path: '/device',
					name: 'Device',
					component: Device
				},
				{
					path: '/get_Axios',
					name: 'get_Axios',
					component: get_Axios
				}
			]
    }
]
})
