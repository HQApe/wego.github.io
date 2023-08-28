<template>
    <div class="yg_vuex_try_page">
        <button @click="increaseCount(5)">增加</button>
        <button @click="decreaseCounter">减少</button>
        <div>Main div State with Store: <strong>{{ this.$store.state.count.counter }}</strong></div>
        <button @click="addStudent_">添加学生</button>
        <myCounter></myCounter>
        <div>
            Getters中的方法访问
            <h2>{{$store.getters.moreAgeStu(25)}}</h2>
        </div>
        <p>mapState modules.count: {{ count.counter }}</p>
        <p>mapState info: {{ info.age }}</p>
        <p>mapGetters modules.count: {{ powerCounter }}</p>
        <p>mapGetters modules.student: （带参）{{ moreAgeStu(20) }}=========（无参）{{ more20stu }}</p>
        <button @click="loginAction">登录</button>
        <button @click="logout">退出登录</button>
        <button @click="getProjectList">获取项目信息</button>
        <button @click="downloadFile">下载文件</button>
        <h2>我是单例{{ sigtonAge() }}</h2>
        <div>
            <h2>项目列表</h2>
            <button @click="clearProject">清空项目</button>
            <p v-for="project in $store.state.project.list" :key="project.id">
            {{ project.name }}
            </p>
        </div>
    </div>
</template>

<script>
// import MyNavigationBar from '../../components/navbar/MyNavigationBar'

import {logIn, logOut} from '@/network/api/account'
import {getProjectList} from '@/network/api/project'
import {downloadFile} from '@/network/api/file'
import myCookie from '@/utils/MyCookies'
import sington from '@/utils/MySington'

import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
import TYPES from '@/store/types'

let MyCounter = {
    name:"Counter",
    template:`
    <div>Sub div State Manager With Store: 
        <strong>{{ this.$store.state.count.counter }}</strong>
        <h2>counter*counter: {{$store.getters.powerCounter}}</h2>
        <h2>{{$store.getters.more20stu}}</h2>
        <h2>{{$store.getters.more20stuLength}}</h2>
    </div>
    `
}

export default {
    name:'yg_vuex_try_page',
    components:{myCounter:MyCounter},
    data () {
        return {
            title: "Vuex入门"
        }
    },
    methods: {
        // 可以使用常量替代Mutation事件类型，不容易写错字符串
        ...mapMutations([TYPES.INCREASE_COUNTER,'decrease','increaseCount', TYPES.ADD_STUDENT]),
        ...mapActions({increaseAction:'increaseAction', }),
        increaseCounter() {
            sington.age += 10;
            // Actions中的方法触发方式
            // this.$store.dispatch('increaseAction', 5)
            // 使用mapActions，可以简化调用
            this.increaseAction(10)
            
        },
        decreaseCounter() {
            // Mutations中的方法触发方式
            // this.$store.commit('decrease')
            // 使用mapMutations，可以简化调用
            this.decrease()
        },
        addStudent_() {
            const stu = {id:1105, name:"Helon", age:28}

            // this.$store.commit('addStudent', stu)

            // 使用mapMutations，可以简化调用
            this.addStudent(stu)
        },
        clearProject() {
            // 直接改变state中的属性
            sington.age += 10;
            this.$store.state.project.list = []
        },
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
            const data = await getProjectList({})
            this.$store.commit('updateList', data)
            console.log('项目列表结果', data)
        },
        async downloadFile() {
            const data = await downloadFile("/api/config-hook/download?oss_key=config/3a020990-3cc119be-098b-2c311a146a83/hook/3a02d0ff-ca80f404-6796-99b191a98bf8_add-Keyboard.js&name=add-Keyboard.js")
            console.log(data);
        },
        sigtonAge() {
            return sington.age ?? 0;
        }
    },
    computed: {
        //用mapState等这种辅助函数的时候，前面的方法名和获取的属性名是一致的
        ...mapState(['count','info']),
        ...mapGetters(['powerCounter', 'moreAgeStu', 'more20stu'])
    }
}
</script>

<style scoped>

.yg_vuex_try_page {
    padding: 20px;
}

</style>