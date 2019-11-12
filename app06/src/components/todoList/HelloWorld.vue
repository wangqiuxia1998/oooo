<template>
	<div id="aaa">
		<input type="text" v-model="input"/>
		<button @click="btn">提交</button>
		
			<Hello v-for="(item,index) of items" 
				:key="index"
				:content="item"
				:index="index"
				@delete="deletes"></Hello>
		<div>
			<p @click="aa">跳回主页</p>
		</div>
		
	</div>
</template>

<script>
	import Hello from '@/components/todoList/Info.vue'
	export default{
		name:"aaa",
		data(){
			return{
				input:"Hello",
				items:[]
			}
		},
		methods:{
			btn(){
			// alert("你已经提交了哦")	
			this.items.push(this.input),
			this.input=""
			},
			deletes(index){
				this.items.splice(index,1)
			},
			// 跳回首页
			aa(){
				this.$router.push({path: '/'})
			}
		},
		components:{
			Hello
		}
		
		
	}
</script>

<style>
</style>
