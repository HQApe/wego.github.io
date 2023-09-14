<template>
    <div class="yg_main_header">
        <div id="yg_main_header_left" @click="onSloganClicked">
            <img id="yg_main_header_logo" src="@/assets/images/logo/logo_main.png" alt=""/>
            <span id="yg_main_header_slogan">WEGO</span>
        </div>
        <div id="yg_main_header_right">
            <el-menu mode="horizontal" :default-active="currentTabIndex" class="yg_main_header_menu" :router="true" @select="onSelectedIndex">
                <el-menu-item index="/home/study">学习中心</el-menu-item>
                <el-menu-item index="/home/skill">专业技能</el-menu-item>
                <el-menu-item index="/home/hobbies">兴趣爱好</el-menu-item>
                <el-menu-item index="/home/experience">个人经历</el-menu-item>
            </el-menu>
        </div>
        <div>
            <el-dropdown @command="onCommandClicked">
                <div class="yg_main_header_user">
                    <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                    <span class="el-dropdown-link">
                        {{ $store.state.user.userInfo.showName || 'User'}}
                        <i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                </div>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="UserCenter">个人中心</el-dropdown-item>
                    <el-dropdown-item command="SignOut">退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>


<script>

import {logOut} from '@/network/api/account'
import myCookie from '@/utils/MyCookies'
import { mapMutations } from 'vuex'
import TYPES from '@/store/types'

export default {
    name: 'yg_main_header',
    data() {
        return {
            title:''
        }
    },
    methods: {
        ...mapMutations([TYPES.CLEAR_USER_INFO]),
        async onSelectedIndex(index, path) {
            if (index === '/') {
                const data = await logOut({})
                this.clearUserInfo()
                myCookie.removeBearerAuthToken()
                document.location.reload()
                console.log('退出登录结果', data)
            }
        },
        onSloganClicked() {

        },
        async onCommandClicked(command) {
            switch (command) {
                case 'UserCenter':
                    this.$router.push('/me')
                    break;
                case 'SignOut':
                    {
                        try {
                            const data = await logOut({})
                            console.log('退出登录结果', data)
                        } catch (error) {
                            console.error(error)
                        } finally {
                            this.clearUserInfo()
                            myCookie.removeBearerAuthToken()
                            document.location.reload()
                        }
                    }
                    break;
                default:
                    break;
            }
        }
    },
    computed: {
        currentTabIndex() {
            let index = this.$route.path.indexOf('/', 6)
            if (index > 0) {
                return this.$route.path.substring(0, index)
            }else {
                return this.$route.path 
            }
        }
    }
}
</script>


<style scoped>
.yg_main_header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    border-bottom: 1px solid #dcdcdc;
}

#yg_main_header_left {
    margin-left: 20px;
    display: flex;
    align-items: center;
    flex-grow: 0;
}

#yg_main_header_slogan {
    font-weight: bolder;
    font-size: xx-large;
    font-family: 'YGCustomFont', sans-serif;
}

#yg_main_header_logo {
    width: 40px;
    height: 40px;
    margin-right: 10px;
}
#yg_main_header_right {
    margin-left: 40px;
    flex-shrink: 0;
}

.yg_main_header_menu {
    border-bottom: none;
}

.yg_main_header_user {
    padding-right: 20px;
    display: flex;
    align-items: center;
}

.el-dropdown-link {
    padding-left: 10px;
}

</style>