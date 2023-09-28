<template>
    <div class="yg_http_try_page">
        <el-table
            :data="$store.state.project.list"
            style="width: 100%" class="my_table">
            <el-table-column
            fixed
            prop="name"
            label="名称"
            width="150">
            </el-table-column>
            <el-table-column
            prop="manager"
            label="管理员"
            width="120">
            </el-table-column>
            <el-table-column
            prop="created_at"
            label="创建时间"
            width="180">
            </el-table-column>
            <el-table-column
            prop="code"
            label="应用编码"
            width="120">
            </el-table-column>
            <el-table-column
            prop="git_url"
            label="仓库地址"
            show-overflow-tooltip>
            </el-table-column>
            <el-table-column
            fixed="right"
            label="操作"
            width="100">
            <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                <el-button type="text" size="small">编辑</el-button>
            </template>
            </el-table-column>
        </el-table>

        <el-dialog custom-class="my-dialog" width="300" top="15vh" :center="true" :visible='myDialog.visible' @close="onCancel" @closed="onDialogClose">
            <span slot="title" class="my-dialog-title">
                温馨提示
            </span>
            <p class="my-dialog-msg">{{myDialog.msg}}</p>
            <span slot="footer" class="my-dialog-button">
                <el-button type="primary" @click="onConfirm">确定</el-button>
                <el-button type="danger" @click="onCancel">取消</el-button>
            </span>
        </el-dialog>
    </div>
</template>


<script>
import {logIn, logOut} from '@/network/api/account'
import {getProjectList} from '@/network/api/project'
import {downloadFile} from '@/network/api/file'
import myCookie from '@/utils/MyCookies'
import sington from '@/utils/MySington'

export default {
    name:'yg_http_try_page',
    data() {
        return {
            myDialog:{
                visible:false,
                msg:""
            }
        }
    },
    created() {
        console.log('项目列表结果')
        this.getProjectList()
    },
    methods: {
        async loginAction() {
            let params = {
                "username": "zhanghq05",
                "name": "zhanghq05",
                "password": "zhq092329@",
                "code": "",
                "account_type": 1
            }
            const res = await logIn(params)
            myCookie.setBearerAuthToken(res.access_token, res.expires)
            console.log('登录结果', res.access_token)
        },
        async logout() {
            const data = await logOut({})
            myCookie.removeBearerAuthToken()
            document.location.reload()
            console.log('退出登录结果', data)
        },
        async getProjectList() {
            try {
                const data = await getProjectList({})
                this.$store.commit('updateList', data)
                console.log('项目列表结果', data)
            } catch (val) {
                console.log(val)
            }
        },
        async downloadFile() {
            const data = await downloadFile("/api/config-hook/download?oss_key=config/3a020990-3cc119be-098b-2c311a146a83/hook/3a02d0ff-ca80f404-6796-99b191a98bf8_add-Keyboard.js&name=add-Keyboard.js")
            console.log(data);
        },
        handleClick(val) {
            console.log(val)
            this.myDialog.visible = true;
            this.myDialog.msg = "您选择的项目是："+val.name+"。由" + val.manager + "创建。"
        },
        onConfirm() {
            this.myDialog.visible = false
        },
        onCancel() {
            this.myDialog.visible = false
        },
        onDialogClose() {

        },
    }
}

</script>


<style scoped>
.my_table {
    /* height: 500px; */
}
</style>