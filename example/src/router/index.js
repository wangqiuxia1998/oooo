import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import main_page from "@/components/Main/main_page"
import First from "@/components/one/First"
import Second from "@/components/two/Second"
import Third from "@/components/three/Third"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main_page',
      component: main_page,
			children:[
				{
				  path: '/first',
				  name: 'First',
				  component: First
				},
				{
				  path: '/second',
				  name: 'Second',
				  component: Second
				},
				{
				  path: '/third',
				  name: 'Third',
				  component: Third
				}
			]
    },
		{
		  path: '/helloWorld',
		  name: 'HelloWorld',
		  component: HelloWorld
		}
  ]
})
