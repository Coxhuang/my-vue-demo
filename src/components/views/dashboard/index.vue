<template>
	<div class="my-layout">
		<el-container style="border: 1px solid #eee">
			<el-aside width="200px" style="background-color: rgb(238, 241, 246)">
				<el-menu :default-openeds="['1', '3']">
					<el-submenu index="1">
						<template slot="title"><i class="el-icon-check"></i>Admin</template>
					</el-submenu>
					<el-submenu index="2">
						<template slot="title"><i class="el-icon-document"></i>文档</template>
						<el-menu-item index="2-1">
							<router-link to="/dashboard/document" style="text-decoration:none;color:#fff">
								<el-menu-item index="2-1">
									发布
								</el-menu-item>
							</router-link>
						</el-menu-item>
						<el-menu-item index="2-2">
							<router-link to="/dashboard/document/list" style="text-decoration:none;color:#fff">
								<el-menu-item index="2-2">
									列表
								</el-menu-item>
							</router-link>
						</el-menu-item>
					</el-submenu>
					<el-submenu index="3">
						<template slot="title"><i class="el-icon-user"></i>主页</template>
						<el-menu-item index="3-1">列表</el-menu-item>
						<el-menu-item index="3-2">修改</el-menu-item>
					</el-submenu>
				</el-menu>
			</el-aside>

			<el-container>
				<el-header style="text-align: right; font-size: 12px">
					<el-dropdown>
						<i class="el-icon-user-solid" style="margin-right: 15px;font-size:25px"></i>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item>个人信息</el-dropdown-item>
							<el-dropdown-item>退出登录</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
					<span>User</span>
				</el-header>

				<el-main>
					<router-view />
				</el-main>

			</el-container>
		</el-container>
	</div>
</template>

<style>
	.el-container {
		height:80vh;
	}
	.el-header {
		background-color: #B3C0D1;
		color: #333;
		line-height: 60px;
	}
	.el-aside {
		color: #333;
	}
	/*.my-layout {*/
	/*	height:80%;*/
	/*}*/

</style>

<script>
    export default {
        data() {
            const item = {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            };
            return {
                tableData: Array(10).fill(item)
            }
        }
    };
</script>
