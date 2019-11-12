<template>
	<div id="login">
		<!-- 左半部分为空 -->
		<div class="left"></div>
		<!-- 登录注册 -->
		<div class="right">
			<div class="neiRong">
				<h1> 安全检测系统</h1>
				<div class="aa">
					<span>账号登录</span>
					 <el-divider direction="vertical"></el-divider>
					<span>密码登录</span>
					
				</div>
				<!-- 登录性质 -->
				<div class="user">
					<router-view></router-view>
					<span>用户名</span>
					<input type="text" v-model="usernames">
					<br />&nbsp;
					<span>密码</span>
					<input type="password" v-model="passwords">
				</div>
				<el-button
				 type="primary"
				 @click="aa"
				 style="width:200px;"
				 size="mini"
				 >
				 主要按钮</el-button>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				usernames:"admin",
				passwords:"admin"
			}
		},
		methods: {
			aa() {
		
				// this.$router.push('main');
				this.$http({
					methods:'post',
					url:"auth/userlogin",
					data:{'username':this.usernames,
						'password':this.passwords}
						
										
				})
				.then(function(res){
					console.log(res)
				})
				.catch(function(error){
					console.log(error)
				})
			}
		},
	}
</script>

<style scoped>
	#login{
		height: 969px;
		display: flex;
		background:url(../../assets/back.jpeg) no-repeat center;
		background-size: 100% 100%;
		
	}
	/* 布局展示 */
	.left{
		flex: 2;
	}
	.right{flex: 1;}
	.right h1{
		color: white;
	}
	.right{
		display: flex;
  justify-content: center;
  align-items: center;
	}
	.neiRong{
		text-align:center;
	}
	h1{
		margin: 20px;
	}
	.aa{padding: 10px;}
	.user{margin: 5px;}
	.user span{
		margin: 5px;
	}
	el-button{
		padding: 10px;
	}
</style>
