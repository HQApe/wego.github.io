<template>
    <div class="page_yg_landing">
        <div id="nav_header">
            <div id="nav_content_left">
                <img id="nav_logo" src="@/assets/images/logo/logo_main.png" alt=""/>
                <span id="nav_slogan">WEGO</span>
            </div>
            <div id="nav_content_right">
                <span id="nav_sign_up">Don't have an account?</span>
                <button id="nav_btn_sign_up">SIGN UP</button>
            </div>
        </div>
        <div id="land_in_card">
            <div id="login_card">
                <p>Sign In</p>
                <p>Account</p>
                <input type="text">
                <p>Password</p>
                <input type="password">
                <button id="btn_sign_in" @click="actionSignIn">SIGN IN</button>
            </div>
        </div>
        <div id="bottom_content">
            <img id="footer_img" src="@/assets/images/logo/logo_main.png" alt="">
            <div id="footer_copyright">
                <p>这是我的学习项目，关注我，一起学习成长</p>
                <p>Copyright © 2020 - 2023 WeGo. All Rights Reserved.</p>
                <div>
                    <span>WeGo</span>
                    <span class="copyright_divid">版权所有</span>
                    <span class="copyright_divid"><a href="">车牌号 粤·B88888888</a></span>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

import TYPES from '@/store/types'
import { mapMutations } from 'vuex'

export default {
    name:"LandingPage",
    data() {
        return {

        }
    },
    methods: {
        ...mapMutations([TYPES.SET_USER_LOGIN]),
        actionSignIn() {
            this.setUserLogin()
            this.$router.replace('/home')
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

#nav_header {
    margin-top: env(safe-area-inset-top, 44px);
    height: 44px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

#nav_content_left {
    margin-left: 20px;
    display: flex;
    align-items: center;
}

#nav_content_left>span {
    font-weight: bolder;
    font-size: xx-large;
    font-family: 'YGCustomFont', sans-serif;
}

#nav_logo {
    width: 40px;
    height: 40px;
    margin-right: 5px;
}

#nav_content_right {
    margin-right: 20px;
}
#nav_content_right>span {
    font-family: 'YGCustomFont', sans-serif;
}

#nav_btn_sign_up {
    margin-left: 10px;
    padding: 0px 15px 0px 15px;
    height: 35px;
    border: 1px solid #dcdcdc;
    border-radius: 10px;
    background-color: white;
    color: black;
}

#land_in_card {
    flex-grow: 1;
    display: flex;
    justify-content: center;
}

#login_card {
    background-color: rgba(255, 255, 255, 0.6);
    box-shadow: 0px 5px 10px 5px rgba(200, 200, 200, 0.8);
    border-radius: 20px;
    align-self: center;
    width: 300px;
    display: flex;
    flex-direction: column;
}

#login_card>p {
    font-family: 'YGCustomFont', sans-serif;
    margin: 0px 10px 0px 10px;
}
#login_card>p:first-child {
    text-align: end;
    font-weight: bolder;
    font-size: x-large;
    padding: 5px 0px 15px 0px;
}
#login_card>p:nth-child(2) {
    font-weight: bolder;
    font-size: large;
}

#login_card>input {
    margin: 0px 10px 0px 10px;
    height: 30px;
    width: 280px;
    border: none;
    border-radius: 5px;
    margin-top: 10px;
    margin-bottom: 15px;
    align-self: center;
}

#btn_sign_in {
    margin-top: 30px;
    margin-bottom: 20px;
    height: 40px;
    width: 250px;
    border: 1px solid #dcdcdc;
    border-radius: 10px;
    background-color: #98DCF9;
    color: black;
    align-self: center;
}

#bottom_content {
    height: 150px;
    padding-bottom: env(safe-area-inset-top, 44px);
    background-color: rgba(255, 255, 255, 0.4);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

#footer_img {
    width: 100px;
    height: 100px;
    border-radius: 20px;
    margin-right: 30px;
}

#footer_copyright>p {
    margin: 0px;
    padding: 0px 0px 5px 0px;
}

.copyright_divid::before {
    content: "";
    width: 1px;
    height: 15px;
    background: rgba(125,125,125,0.5);
    display: inline-block;
    margin-left: 10px;
    margin-right: 10px;
    vertical-align: middle;
}

.copyright_divid>a {
    text-decoration: none;
    color: inherit;
}

</style>