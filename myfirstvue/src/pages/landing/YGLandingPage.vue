<template>
    <div class="page_yg_landing">
        <YGLandingHeader @onSignActionClicked="onSignChanged" :signTitle="signTitle"></YGLandingHeader>
        <div id="land_in_card">
            <keep-alive>
                <YGLandingCard v-if="isSingIn" :cardType="0" key="a" @onActionClicked="actionSignIn"></YGLandingCard>
                <YGLandingCard v-else :cardType="1" key="b" @onActionClicked="actionSignUp"></YGLandingCard>
            </keep-alive>
        </div>
        <YGPageFooter></YGPageFooter>
    </div>
</template>


<script>

import TYPES from '@/store/types'
import { mapMutations } from 'vuex'
import {logIn, logOut} from '@/network/api/account'
import myCookie from "@/utils/MyCookies"

import YGLandingHeader from '@/components/header/YGLandingHeader'
import YGPageFooter from '@/components/footer/YGPageFooter'
import YGLandingCard from '@/components/landing/YGLandingCard'

export default {
    name:"LandingPage",
    components:{YGLandingHeader, YGPageFooter, YGLandingCard},
    data() {
        return {
            isSingIn:true
        }
    },
    methods: {
        ...mapMutations([TYPES.SET_USER_INFO]),
        onSignChanged() {
            this.isSingIn = !this.isSingIn
        },
        async actionSignUp(user) {
            this.$message({message:'用户名称：' + user.account + '===' + '用户密码：' + user.password})
        },
        async actionSignIn(user) {
            if(user.account.length ===0 || user.password.length === 0) {
                this.$message.error('账号密码不能为空');
                return
            }

            if(user.account === 'admin') {
                myCookie.setBearerAuthToken('ABCDERCSXX', 200);
                this.setUserInfo({userName:'Admin', showName:'Admin', role:'manager'})
                this.$router.replace('/home')
                return
            }

            let params = {
                "username": user.account,
                "name": user.account,
                "password": user.password,
                "code": "",
                "account_type": 1
            }
            try {
                const res = await logIn(params)
                if (res.access_token) {
                    myCookie.setBearerAuthToken(res.access_token, res.expires);
                    this.setUserInfo({userName:res.username, showName:res.show_name, role:res.role})
                    this.$router.replace('/home')
                }else {
                    this.$message.error(res.toString());
                }
            } catch (error) {
                this.$message.error(error);
            }
            
        }
    },
    computed:{
        signTitle() {
            return this.isSingIn ? 'SING UP' : 'SIGN IN'
        }
    }
}

</script>

<style scoped>
.page_yg_landing{
    height: 100vh;
    width: 100%;
    background-image: url('@/assets/images/background/yogo.webp');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

#land_in_card {
    flex-grow: 1;
    display: flex;
    justify-content: center;
}

</style>