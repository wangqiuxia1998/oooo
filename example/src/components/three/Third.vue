<template>
	<div>
		<div style="width: 300px;height: 200px;">
			<div style="width: 100%;height: 100%;overflow: hidden;">
				<ul ref="uls">
					<li v-for="(item,index) in li" :key='index' ref="lis">
						{{item.con}}
					</li>
				</ul>
				
			</div>
		</div>
		
	</div>
</template>

<script>
	export default {
	  data() {
	    return {
			li:[{con:123123},{con:123122},{con:123155},{con:123177},{con:123188},{con:123199},{con:123100},{con:1253323},{con:1253323},{con:1253323},{con:1253323},{con:1253323},{con:1253323}]
	    }
		
	  },
	  created(){
		  
		  
		  // setTimeout(function  () {
		  // 	console.log(th.$refs.uls)
		  // },500)
			 
	  },
	  mounted(){
	  	setTimeout(function  () {
	  		var lis=document.getElementsByTagName('li')
			for (let i=0;i<lis.length;i++) {
				if (i%2==0) {
					lis[i].style.backgroundColor='green'
				}
			}
	  	},100)
		 var th=this
			var ul=th.$refs.uls
			var li=th.$refs.lis
			var aa=null
			var bb=null
			var num=1
			
			aa=setInterval(function  () {
				num+=1
				console.log(num)
				if (num%200!==0) {
					ul.style.marginTop=
					-num+'px'
				} else{
					clearInterval(aa)
					setTimeout(function  () {
						num+=1
						setInterval(aa)
					},2000)
					
				}
				
			})
			
		 
	  },
	  methods: {
	  	aa(){
			
		}
	  },
	 
	}
</script>

<style>
	ul li{
		height: 50px;
		line-height: 50px;
		
	}
</style>
