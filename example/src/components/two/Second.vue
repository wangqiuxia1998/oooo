<template>
	<div class="bb">
		<el-form size="mini" label-width="100px">
			<el-form-item label="用户名:" :rules="{ required: true}">
				<el-input v-model="username" placeholder="ceshi"></el-input>
			</el-form-item>
			<el-form-item label="密码:">
				<el-input v-model="password" placeholder="不填写就是原始密码"></el-input>
			</el-form-item>
			<el-form-item label="姓名:" :rules="{ required: true}">
				<el-input v-model="name" placeholder="ceshi"></el-input>
			</el-form-item>
			<el-form-item label="手机号:" :rules="{ required: true}">
				<el-input v-model="phone" placeholder="17739332365"></el-input>
			</el-form-item>
			<el-form-item label="图片:">
				<!-- 上传图片 -->
				<el-upload class="upload" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess"
				 :before-upload="beforeAvatarUpload">
					<img v-if="imageUrl" :src="imageUrl" class="img">
					<i v-else class="el-icon-plus avatar-uploader-icon"></i>
				</el-upload>
			</el-form-item>
			<!-- 出现问题 -->
			<el-form-item label="关联组织:">
				<el-select v-model="region" filterable>
					<el-option label="河南省建设银行总行" value="1" >
					</el-option>
				</el-select>
			</el-form-item>
			<!-- 按钮隐藏 -->
			<el-form-item label="报警级别:" >
				<el-input v-model="level"></el-input> 		
			</el-form-item>
			<el-form-item label="性别:">
				<el-radio v-model="radio" label="1">男</el-radio>
				<el-radio v-model="radio" label="2">女</el-radio>
			</el-form-item>
			<el-form-item label="权限:" :rules="{ required: true}">
				<el-input v-model="message"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary">提交</el-button>
				<el-button type="primary">返回</el-button>
			</el-form-item>
		</el-form>


	</div>
</template>

<script>
	export default {
		data() {
			return {
				// input双向绑定
				username: "",
				password: "",
				name: '',
				phone: "",
				region: "",
				radio:'1',
				message:"管理员",
				level:"三级",
				// 图片
				imageUrl: '',
			}
		},
		methods: {
			handleAvatarSuccess(res, file) {
				this.imageUrl = URL.createObjectURL(file.raw);
			},
			beforeAvatarUpload(file) {
				const isJPG = file.type === 'image/jpeg';
				const isLt2M = file.size / 1024 / 1024 < 2;

				if (!isJPG) {
					this.$message.error('上传头像图片只能是 JPG 格式!');
				}
				if (!isLt2M) {
					this.$message.error('上传头像图片大小不能超过 2MB!');
				}
				return isJPG && isLt2M;
			},
			btn(){
				
			}
			
		},


	}
</script>

<style scoped>
	/* 按钮改变 */
	.btn{
		padding: 2px;
	}
	/* 输入框样式 */
	.el-input {
		width: 20%;
		
	}

	/* 图片的样式 */
	.upload {
		border: 1px solid #8C939D;
		width: 178px;
		height: 178px;
	}

	.avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: 178px;
		height: 178px;
		line-height: 178px;
		text-align: center;
	}

	.img {
		width: 178px;
		height: 178px;
		display: block;
	}
</style>
