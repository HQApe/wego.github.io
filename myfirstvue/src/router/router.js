import VueRouter from 'vue-router'
import Vue from 'vue'

import MyHomePage from '../pages/home/MyHomePage'
import MyCategoriesPage from '../pages/categoties/MyCategoriesPage'
import MyShopPage from '../pages/shop/MyShopPage'
import MyProfilePage from '../pages/profile/MyProfilePage'
import MyGodsDetailePage from '../pages/categoties/MyGodsDetailePage'
import MyStudyPage from '../pages/mystudy/MyStudyPage'
import MyVuexPage from '../pages/mystudy/MyVuexPage'
import MyCSSAnimationPage from '@/pages/mystudy/MyCSSAnimationPage'

Vue.use(VueRouter)

const routes = [
    { path: '/', redirect: '/home'},
    { path: '/home', name:'首页', component: MyHomePage, meta:{hideTabBar:false}},
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
    {path: '/animation', name:'CSS动画学习', component:MyCSSAnimationPage, meta:{hideTabBar:true}}
]

const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})

router.beforeEach((to, from, next)=>{
    document.title = to.name
    console.log('++++++', from)
    next()
})
router.afterEach((to, from)=>{
    console.log(to,'------',from)
})

export default router