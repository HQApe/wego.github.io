import VueRouter from 'vue-router'
import Vue from 'vue'

import myCookie from "@/utils/MyCookies"

import YGLandingPage from '@/pages/landing/YGLandingPage'
import MyHomePage from '@/pages/home/MyHomePage'
import MyCategoriesPage from '@/pages/categoties/MyCategoriesPage'
import MyShopPage from '@/pages/shop/MyShopPage'
import MyProfilePage from '@/pages/profile/MyProfilePage'
import MyGodsDetailePage from '@/pages/categoties/MyGodsDetailePage'
import MyStudyPage from '@/pages/mystudy/MyStudyPage'
import MyVuexPage from '@/pages/mystudy/MyVuexPage'
import MyCSSAnimationPage from '@/pages/mystudy/MyCSSAnimationPage'
import MyStoragePage from '@/pages/mystudy/MyStoragePage'
import MyDrawingPage from '@/pages/mystudy/MyDrawingPage'

Vue.use(VueRouter)

const routes = [
    { path: '/', redirect: '/landing'},
    { path: '/landing', name:'landing', component:YGLandingPage, meta:{hideTabBar:true}},
    // 对页面的一些参数，可以用meta传递
    { path: '/home', name:'home', component: MyHomePage, meta:{hideTabBar:false}},
    { path: '/categories', name:'分类', component: MyCategoriesPage, meta:{hideTabBar:false}},
    { path: '/shop', name:'购物车', component: MyShopPage, meta:{hideTabBar:false}},
    { path: '/me', name:'我的', component: MyProfilePage, meta:{hideTabBar:false}, children:[
        {
            path:'study',
            name:'我的学习',
            component:MyStudyPage
        },
        {
            path:'vuex',
            name:'Vuex学习',
            component:MyVuexPage
        }
    ]},
    { path: '/detail/:goodsId', name:'详情', component: MyGodsDetailePage, meta:{hideTabBar:true}},
    { path: '/animation', name:'CSS动画学习', component:MyCSSAnimationPage, meta:{hideTabBar:true}},
    { path: '/storage', name:'持久化', component:MyStoragePage, meta:{hideTabBar:true}},
    { path: '/drawing', name:'画图', component:MyDrawingPage, meta:{hideTabBar:true}}
]

const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})

router.beforeEach((to, from, next)=>{
    document.title = to.name
    console.log('++++++', from)
    // next()
    if(to.name !== '/landing' && myCookie.getBearerAuthToken()) {
        next()
    }else if(to.name !== 'landing' && to.name !== '/'){
        next({ name: 'landing' })
    }else {
        next()
    }
    // 拦截后跳转至特定页面
    // next({ name: 'home' })
    // next({ path: '/home', query: {} })
})
router.afterEach((to, from)=>{
    console.log(to,'------',from)
})

export default router