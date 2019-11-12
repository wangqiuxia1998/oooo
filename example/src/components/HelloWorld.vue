<template>
	<div class="hello">
		<!-- tab网页 -->
		<div>
			<el-tabs type="border-card">
				<el-tab-pane>
					<span slot="label"><i class="el-icon-date"></i> 我的行程</span>
					我的行程
				</el-tab-pane>
				<el-tab-pane label="消息中心">11</el-tab-pane>
				<el-tab-pane label="角色管理">角色管理</el-tab-pane>
				<el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
			</el-tabs>
		</div>
		<!-- <div class="block">
			<el-slider v-model="value" show-input>
			</el-slider>
		</div> -->

	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data() {
			return {
				value: 0,

			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
