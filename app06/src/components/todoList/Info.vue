<template>
	<div id="bbb">
		<p @click='bb'>{{content}}</p>
	</div>
</template>

<script>
	export default{
		name:"bbb",
		data(){
			return{
				
			}
		},
		methods:{
			bb:function(){
				// 通知父组件   事件 值
				this.$emit('delete',this.index)
			}
		},
		props:["content","index"],
	}
</script>

<style>
</style>
