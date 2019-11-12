import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import mainPage from '@/components/mainPage'
import me from '@/components/me'
import first from '@/components/first'
Vue.use(Router)

export default new Router({
	routes: [
		// 路由跳转
		{
			path: '/',
			name: 'mainPage',
			component: mainPage,
			children: [{
					path: '/helloWorld',
					name: 'HelloWorld',
					component: HelloWorld
				},
				{
					path: '/me',
					name: 'me',
					component: me
				}]},
			{
				path: '/first',
				name: 'first',
				component: first
			},
			
	]
})
