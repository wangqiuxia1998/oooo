<template>
	<div class="main">
		<div class="top" style="height: 400px;border: 1px solid black;">
			<router-view></router-view>
		</div>
		<div class="bottom" style="height: 20px;border: 1px solid black;">
			<router-link to='/helloWorld' >首页</router-link>
			<router-link to='/me'>我的</router-link>
		</div>
	</div>
</template>

<script>
	
	export default{
		data(){
			return{
				a:decodeURI('首页'),
				b:decodeURI('我的')
			}
		},
		methods:{
			// 点击事件的跳转地址
			aa(){
				this.$router.push('/helloWorld')
			},
			bb(){
				this.$router.push('/me')
			}
		}
		
	}
</script>

<style scoped>
	span{
		margin: 80px;
	}
</style>
