<template>
	<div id="device">
		<div class="count">
			<div class="neiRong">
				<el-tabs v-model="activeName" @tab-click="handleClick">
					<el-tab-pane label="用户管理" name="first">
						<div class="top">
							<!-- 按钮设置 -->
							<div class="left">
								<el-button type="primary" size="mini">添加</el-button>
								<el-button type="danger" size="mini">删除</el-button>
								<el-button type="primary" size="mini">排序</el-button>
								<el-button type="primary" size="mini">导出设备</el-button>
							</div>
							<!--下拉框 -->
							<div class="right">
								<el-select filterable allow-create default-first-option v-model="value" placeholder="默认排序" size="mini">
									<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
									</el-option>
								</el-select>
								<el-select size="mini" v-model="value1" placeholder="请选择">
									<el-option v-model="value1" :value="value1" style="height:100%">
										<el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
									</el-option>

								</el-select>

								<el-input size="mini" placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input2" style="width:200px;">
								</el-input>

							</div>
						</div>
						<div>

						</div>
						<!-- 表格设置 -->
						<div class="table">
							<el-table :data="tableData" style="width: 100%" ref="multipleTable">
								<el-table-column width="60" type="selection">
								</el-table-column>
								<el-table-column prop="id" label="状态" width="100">
								</el-table-column>
								<el-table-column prop="productKey" label="名称/地址" width="200">
								</el-table-column>
								<el-table-column prop="deviceNum" label="设备编号" width="160">
								</el-table-column>
								<el-table-column prop="enabled" label="所属分组" width="120">
								</el-table-column>
								<el-table-column prop="isEnabled" label="设备类型" width="120">
								</el-table-column>
								<el-table-column prop="id" label="通讯协议" width="180">
								</el-table-column>
								<el-table-column prop="intro" label="采集频率" width="100">
								</el-table-column>
								<el-table-column label="操作" width="280">
									<template scope>
									<el-button size="mini">预览</el-button> 
									<el-button size="mini" style="margin-left:2px;">编辑</el-button>
									<el-dropdown>
										<el-button type="primary" size="mini">
											更多<i class="el-icon-arrow-down el-icon--right"></i>
										</el-button>
										<el-dropdown-menu slot="dropdown">
											<el-dropdown-item>删除</el-dropdown-item>
											<el-dropdown-item>调试</el-dropdown-item>

										</el-dropdown-menu>
									</el-dropdown>
									</template>
									
								</el-table-column>
							</el-table>
						</div>
						<!-- 页码 -->
						<el-pagination class="pagination" @size-change="handleSizeChange" @current-change="handleCurrentChange"
						 :current-page="currentPage4" :page-sizes="[5, 10, 15, 20]" :page-size="10" layout="total, sizes, prev, pager, next, jumper"
						 :total="0">
						</el-pagination>
					</el-tab-pane>

				</el-tabs>
			</div>

		</div>

	</div>
</template>

<script>
	export default {
		name: 'device',
		data() {
			return {
				// 页码
				
				currentPage4: 0,
				currentPage1: 0,
				formInline: {
					user: '',
					region: ''
				},
				// 搜索框
				input2: '',
				activeName: 'first',
				// 表格
				tableData: [
				// 	{
				// 	date: '2016-05-02',
				// 	name: 'tianqiao cfdhfvjdehf',
				// 	number: ' 11111111',
				// 	ground: "默认分组",
				// 	device: "默认设备",
				// 	tel_Ip: "Modbus RTu8",
				// 	pL: "1s"
				// },
				],
				// 选择
				options: [{
						value: '选项3',
						label: '默认排序'
					},
					{
						value: '选项1',
						label: '在线'
					}, {
						value: '选项2',
						label: '离线'
					}
				],
				data: [{
					value1: '1',
					label: '一级 1',
					children: [{
						value1: '2',
						label: '二级 1-1',
						children: [{
							value1: '3',
							label: '三级 1-1-1'
						}]
					}]
				}, {
					value1: '4',
					label: '一级 2',
					children: [{
						value1: '5',
						label: '二级 2-1',
						children: [{
							value1: '6',
							label: '三级 2-1-1'
						}]
					}, {
						value1: '7',
						label: '二级 2-2',
						children: [{
							value1: '8',
							label: '三级 2-2-1'
						}]
					}]
				}],
				defaultProps: {
					children: 'children',
					value1: 'value1',
					label: 'label'
				},
				value: '',
				value1: ''

			}
		},
		mounted(){
			this.getData();
		},
		methods: {
			handleClick(tab, event) {
				console.log(tab, event);
			},
			handleNodeClick(data) {
				console.log(data);
				this.value1 = data.label
			},
			// 页码
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
			},
			// 请求数据
// 			getData(){
// 				this.$http.get("/api/getList")
// 				.then(res =>{
// 					console.log(res);
// 					this.tableData=res.data.data;
// 					console.log(this.tableData);
// 					
// 				})
// 				.catch(err =>{
// 					alert("失败")
// 				})
// 			}
// 
		}
	}
</script>

<style scoped>
	#device {
		margin: 0;
		padding: 0;
	}

	.count {
		margin: 20px;
		border: 1px solid gainsboro;

		border-top: none;
	}

	.neiRong {
		padding: 20px;
	}

	/* 内容上部分样式 */
	.top .left {
		float: left;
	}

	.top .right {
		float: right;
	}

	/* 按钮更多的样式设置 */
	
	/* 页码布局 */
	/* 页码布局 */
	.pagination {
		margin: 10px 0px;
		float: right;
		margin-right: 100px;
	}
</style>
