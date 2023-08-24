<template>
    <div class="yg_landing_card">
        <p>{{cardTitle}}</p>
        <p>Account</p>
        <input type="text" v-model="user.account" placeholder="请输入账号">
        <p>Password</p>
        <input type="password" v-model="user.password" placeholder="请输入密码">
        <button id="yg_landing_btn" @click="onActionClicked">{{actionTitle}}</button>
    </div>
</template>

<script>
export default {
    name:'yg_landing_card',
    props: {
        cardType: {
            type: Number,
            default:0
        },
    },
    data() {
        return {
            user:{
                account:'',
                password:''
            }
        }
    },
    methods: {
        onActionClicked() {
            this.$emit('onActionClicked', this.user)
        }
    },
    computed: {
        cardTitle() {
            return this.cardType === 0 ? 'Sign In' : 'Sign Up'
        },
        actionTitle() {
            return this.cardType === 0 ? 'SIGN IN' : 'SIGN UP'
        }
    }
}
</script>


<style scoped>


.yg_landing_card {
    background-color: rgba(255, 255, 255, 0.6);
    box-shadow: 0px 5px 10px 5px rgba(200, 200, 200, 0.8);
    border-radius: 20px;
    align-self: center;
    width: 300px;
    display: flex;
    flex-direction: column;
}

.yg_landing_card>p {
    font-family: 'YGCustomFont', sans-serif;
    margin: 0px 10px 0px 10px;
    font-weight: bolder;
    font-size: large;
}
.yg_landing_card>p:first-child {
    text-align: end;
    font-weight: bolder;
    font-size: x-large;
    padding: 5px 0px 15px 0px;
}

.yg_landing_card>input {
    margin: 0px 10px 0px 10px;
    height: 30px;
    width: 280px;
    border: none;
    font-weight: normal;
    font-size: medium;
    border-radius: 5px;
    margin-top: 10px;
    margin-bottom: 15px;
    align-self: center;
}

#yg_landing_btn {
    margin-top: 30px;
    margin-bottom: 20px;
    height: 40px;
    width: 250px;
    border: 1px solid #dcdcdc;
    border-radius: 10px;
    background-color: #98DCF9;
    color: black;
    align-self: center;
    cursor: pointer;
}
</style>