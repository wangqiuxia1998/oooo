<template>
	<div>
		<button @click="ss">返回</button>
		<P>{{name}}</P>
		<p>{{aa}}</p>
	</div>
</template>

<script>
	
	export default{
		data(){
			return{
				name:'',
				aa:""
			}
		},
		methods:{
			ss(){
				this.$router.push('/helloWorld')
			},
			getRouterData(){
				this.name=this.$route.query.name,
				this.aa=this.$route.query.aa
			}
			
		},
		created() {
			this.getRouterData()
		}
		
	}
</script>

<style>
</style>
