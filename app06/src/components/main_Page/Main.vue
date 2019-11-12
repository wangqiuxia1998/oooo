<template>
	<div class="main">
		<div class="title">
			<h1>项目综合</h1>
		</div>
		<div class="center" :style="{height:height}">
			<div class="left" >
				<el-row>
					<!-- <h5>自定义颜色</h5> -->
					<el-menu default-active="" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#545c64"
					 text-color="#fff" active-text-color="#ffd04b" :style="{height:height}" router>
						<el-submenu index="1">
							<template slot="title">
								<i class="el-icon-location"></i>
								<span >导航一</span>
							</template>
							
							<el-menu-item-group>
								
								<el-menu-item index="/helloWorld">todoList组件</el-menu-item>
								<el-menu-item index='/device'>设备列表</el-menu-item>
								<el-menu-item index='/get_Axios'>获取axios</el-menu-item>
							</el-menu-item-group>
							
						</el-submenu>
						<el-menu-item index='/page_two'>
							<i class="el-icon-menu"></i>
							<span slot="title">导航二</span>
						</el-menu-item>
						<el-menu-item index="3" >
							<i class="el-icon-document"></i>
							<span slot="title">导航三</span>
						</el-menu-item>
						<el-menu-item index="4">
							<i class="el-icon-setting"></i>
							<span slot="title">导航四</span>
						</el-menu-item>
					</el-menu>
					</el-col>
				</el-row>
			</div>
			<div class="right" :style="{height:height}">
				<router-view/>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
	data() {
		return {
			height: (document.documentElement.clientHeight-80) + "px",
			
		}
	},
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
	beforeCreate(){
		console.log('11111111111111')
	},
	create(){
		console.log("2222")
	},
	beforemount(){
		console.log("初始渲染前")
	}
  }
</script>

<style scoped>
	
	/* 头部的样式 */
	.title {
		background-color: #409EFF;
		height: 80px;
		line-height: 80px;
		text-align: center;
	}

	h1 {
		font-size: 40px;
		color: floralwhite;
	}
	/* flex布局 */
	.center{
		
		display: flex;
		/* background-color: yellow; */
	}
	.left{
		
		flex: 1;
		
	}
	.right{
		
		flex: 5;
		/* background-color: deepskyblue; */
	}
</style>
