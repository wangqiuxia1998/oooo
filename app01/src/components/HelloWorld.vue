<template>
	<div class="body">
		<div class="header">
			<h1>学生信息管理系统</h1>
		</div>
		<div class="content">
			<div class="left" :style="{height:height}">
				<ul>
					<!--<router-link to="/student">
						<li>学生管理</li>
					</router-link>
					<router-link to="/course">
						<li>课程管理</li>
					</router-link>-->
					<el-menu default-active="/stduent" 
							router
							class="el-menu-vertical-demo" 							background-color="#545c64" 							text-color="#fff" 							active-text-color="#ffd04b">
						<el-menu-item index="/student">
							<i class="el-icon-menu"></i>
							<span slot="title">学生管理</span>
						</el-menu-item>
						<el-menu-item index="/course">
							<i class="el-icon-document"></i>
							<span slot="title">课程管理</span>
						</el-menu-item>
						<el-menu-item index="/art">
							<i class="el-icon-document"></i>
							<span slot="title">文章管理</span>
						</el-menu-item>
						<el-menu-item index="/art2">
							<i class="el-icon-document"></i>
							<span slot="title">文章管理2</span>
						</el-menu-item>
					</el-menu>
				</ul>
			</div>
			<div class="right" :style="{height:height,width:width}">
				<!--占位符-->
				<router-view/>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'HelloWorld',
		data() {
			return {
				height: (document.documentElement.clientHeight - 60) + "px",
				width: (document.documentElement.clientWidth - 280) + "px"
			}
		}
	}
</script>
<style scoped>
	.header {
		width: 100%;
		height: 60px;
		background-color: #42B983;
	}
	
	.header h1 {
		line-height: 60px;
		margin-left: 20px;
	}
	
	.left {
		float: left;
		width: 250px;
		background-color: yellow;
	}
	
	.right {
		float: left;
		background-color: #ccc;
	}
</style>