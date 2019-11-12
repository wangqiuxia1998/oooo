<template>
	<div class="table">
		<div class="btn">
			 <el-button type="primary" size="mini">主要按钮</el-button>
			 <el-button type="danger" size="mini">主要按钮</el-button>
		</div>
		<el-table :data="tableData" style="overflow: auto;" :style="{height:height}">
			<el-table-column type="selection" width="55"></el-table-column>
			<el-table-column prop="source" label="来源" width="150"></el-table-column>
			<el-table-column prop="category" label="所属栏目" width="80"></el-table-column>
			<el-table-column prop="title" label="标题"></el-table-column>
			<el-table-column prop="ptime" label="发布时间"></el-table-column>
			<el-table-column label="操作">
				<template>
					<i class="el-icon-edit"></i>
					<i class="el-icon-delete" style="color:red;"></i>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	export default {
		name:"Article",
		data:function(){
			return {
				height:(document.documentElement.clientHeight-150)+"px",
				tableData:[],
			}
		},
		created:function(){
			//发送请求
			this.$http.get("https://www.apiopen.top/journalismApi").then(function(resp){
				if(resp.body.code == 200){
					this.tableData = resp.body.data.dy;
				}
			},function(){
				
			})
		}
	}
</script>

<style scoped>
	.btn{
		margin:10px 0px 10px 10px;
	}
	
</style>