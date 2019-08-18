<template>
	<div>
		<div class="login-wrap">
			<div class="login-title">
			</div>
			<el-form :model="loginForm" status-icon ref="loginFormEl" label-width="70px"
			         class="demo-ruleForm" style="width: 370px">
				<el-form-item label="帐号" prop="username"
				              :rules="[{
									required: true,
									message: '请输入帐号',
									trigger: 'blur'
								},
								{
									type: 'string',
									message: '格式有误',
									trigger: 'blur'
								}]"
				>
					<el-input type="text" v-model="loginForm.username" @keyup.enter.native="submitlogin('loginFormEl')"
					          auto-complete="off"></el-input>
				</el-form-item>

				<el-form-item label="密码" prop="password"
				              :rules="[{
									required: true,
									message: '请输入密码',
									trigger: 'blur'
								},
								{
									min:6,
									max: 20,
									message: '请输入6-20个字符',
									trigger: 'blur'
								}]"
				>
					<el-input type="password" v-model="loginForm.password"
					          @keyup.enter.native="submitlogin('loginFormEl')" auto-complete="off"></el-input>
					<el-checkbox v-model="checkedPwd">记住密码</el-checkbox>
				</el-form-item>
				<el-form-item>
					<el-button style="width: 100%;" type="primary" @click="submitlogin('loginFormEl')">登录</el-button>
				</el-form-item>
			</el-form>

		</div>
	</div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                loginForm: {
                    username: null,
                    password: null
                },
            }
        },
        methods: {
            submitlogin(formName) {
                this.$router.push({
                    path: '/dashboard',
                })
            },

        },
    }
</script>


<style scoped>
	.login-wrap {
		position: absolute;
		left: 0;
		right: 0;
		width: 400px;
		padding: 35px 35px 15px 35px;
		margin: 120px auto;
	}

	.login-title {
		font-size: 25px;
		text-align: center;
		margin-bottom: 15px;
		padding-left: 30px;
	}
</style>

