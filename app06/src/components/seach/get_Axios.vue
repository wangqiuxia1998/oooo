<template>
	<div id="get_axios">
		<p>首页</p>
		<button @click="btn">获取数据</button>
		<p>{{aa.data}}</p>
	</div>
</template>

<script>
	export default{
		name:'get_axios',
		data(){
			return{
				aa:{}
			}
		},
		methods: {
			btn() {
			// alert("11")	
			// this.$http.get("/api/getList")
			// .then(res =>{
			// 	this.aa=res
			// 	console.log(res)
			// 	console.log()
			// })
			// .catch(err =>{
			// 	alert("失败")
			// })
			}
		},
	}
</script>

<style>
	#get_axios{
		text-align: center;
	}
</style>
