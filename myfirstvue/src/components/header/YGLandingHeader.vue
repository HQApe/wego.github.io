<template>
    <div class="yg_landing_header">
        <div id="nav_content_left" @click="onSloganClicked">
            <img id="nav_logo" src="@/assets/images/logo/logo_main.png" alt=""/>
            <span id="nav_slogan">WEGO</span>
        </div>
        <div id="nav_content_right">
            <span id="nav_sign_up">Don't have an account?</span>
            <button id="nav_btn_sign_up" @click="onSignBtnClicked">{{ signTitle }}</button>
        </div>
    </div>
</template>

<script>
export default {
    name:'yg_landing_header',
    props: {
        signTitle:{
            type: String,
            default:'SIGN UP'
        }
    },
    data() {
        return {

        }
    },
    methods: {
        onSloganClicked() {
            this.$router.push('/home')
        },
        onSignBtnClicked() {
            this.$emit('onSignActionClicked')
        }
    }
}

</script>


<style scoped>
.yg_landing_header {
    padding-top: env(safe-area-inset-top, 44px);
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
    margin-right: 10px;
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
    cursor: pointer;
}

</style>