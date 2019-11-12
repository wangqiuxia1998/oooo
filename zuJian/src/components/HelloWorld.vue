<template>
  <div class="hello">
		<img @click="first(item)" 
		v-for="(item,index) in item" 
		:src="item.src" alt="图片1" style="height:200px;width:200px;">
		<img  @click="next" src="../assets/img/bb.jpg" alt="图片2" style="height: 200px;width: 200px;">
	</div>
</template>

<script>

export default {
  data(){
	  imge:"";
		return{
			item:[{
				name:'aaa',
				src:"https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=37b53adad40735fa85fd46ebff3864d6/6a63f6246b600c331be946091a4c510fd8f9a15b.jpg"
			},
			{
				name:'bbb',
				src:"https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=37b53adad40735fa85fd46ebff3864d6/6a63f6246b600c331be946091a4c510fd8f9a15b.jpg"
			}
			]
		}
		
	},
	methods:{
		first(item){
			this.$router.push({
				path: '/first',
				query:{
					name:item.name
				}
			})
			
		},
		next(){
			this.$router.push({
				path: '/first',
				query:{
					aa:"我是详情二"
				}
			})
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
