import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Student from '@/components/Student'
import Course from '@/components/Course'
import Article from '@/components/Article'
import Article2 from '@/components/Article2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[
      	{
		    	path: '/student',
		      name: 'Student',
		      component: Student
		    },{
		    	path: '/course',
		      name: 'Course',
		      component: Course
		    },{
		    	path: '/art',
		      name: 'Article',
		      component: Article
		    },{
		    	path: '/art2',
		      name: 'Article2',
		      component: Article2
		    }
      ]
    }
  ]
})
