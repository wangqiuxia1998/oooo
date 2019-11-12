<template>
	<div class="aa">
		<el-card class="box-card">
			<div slot="header" class="clearfix">
				<span>本用户信息</span>
			</div>
			<div class="text item">
				<!-- 表格信息 -->
				<div class="table">
					<table>
						<tr>
							<td class="font">用户名</td>
							<td>ceshi</td>
						</tr>
						<tr>
							<td class="font">姓名</td>
							<td>ceshi</td>
						</tr>
						<tr>
							<td class="font">联系方式</td>
							<td>17739332365</td>
						</tr>
						<tr>
							<td class="font">报警级别</td>
							<td>三级报警</td>
						</tr>
						<tr>
							<td class="font">所属组织</td>
							<td>河南省建设银行总行</td>
						</tr>
						<tr>
							<td class="font">角色</td>
							<td>管理员</td>
						</tr>
						<tr>
							<td class="font">性别</td>
							<td>男</td>
						</tr>
						<tr>
							<td class="font">最后登录日期</td>
							<td>2019-09-04 02:43:22</td>
						</tr>
						<tr>
							<td class="font">最后登录ip</td>
							<td>192.168.0.104</td>
						</tr>
						
					</table>
				</div>
				<!-- 按钮 -->
				<el-row style="margin: 20px;">
					<el-button size="mini" type="primary" >返回</el-button>
				</el-row>
			</div>
		</el-card>
	</div>
</template>

<script>
	export default {
      data() {
        return {
        }
		
      },
	  
    }
</script>

<style scoped>
	/* 字体 */
	.font{
		font-size:15px ;
		font-weight:bold;
	}
	table{
		color: #82848A;
	}
	/* 表格布局 */
	tr td{
		padding: 6px;
	}
	
	/* 卡片布局 */
	.text {
		font-size: 14px;
	}

	.item {
		margin-bottom: 18px;
	}

	.clearfix:before,
	.clearfix:after {
		display: table
	}

	.clearfix:after {
		clear: both
	}
	.box-card {
		width: 100%;
	}
</style>
