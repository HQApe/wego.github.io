import VueRouter from 'vue-router'
import Vue from 'vue'

import myCookie from "@/utils/MyCookies"

import YGLandingPage from '@/pages/landing/YGLandingPage'
import YGHomePage from '@/pages/home/YGHomePage'
import YGVueTryPage from '@/pages/study/YGVueTryPage'
import YGVuexTrypage from '@/pages/study/YGVuexTrypage'
import YGCSSTryPage from '@/pages/study/YGCSSTryPage'
import YGCSSMomentsPage from '@/pages/study/YGCSSMomentsPage'
import YGStorageTryPage from '@/pages/study/YGStorageTryPage'
import YGDrawingTryPage from '@/pages/study/YGDrawingTryPage'
import YGCordovaTryPage from '@/pages/study/YGCordovaTryPage'

import MyCategoriesPage from '@/pages/categoties/MyCategoriesPage'
import MyShopPage from '@/pages/shop/MyShopPage'
import MyProfilePage from '@/pages/profile/MyProfilePage'

import MyStudyPage from '@/pages/mystudy/MyStudyPage'
import YGProfessionalSkillPage from '@/pages/home/YGProfessionalSkillPage'
import YGHobbiesPage from '@/pages/home/YGHobbiesPage'
import YGExperiencePage from '@/pages/home/YGExperiencePage'
import YGHttpTryPage from '@/pages/study/YGHttpTryPage'

Vue.use(VueRouter)

const routes = [
    { path: '/', redirect: '/landing'},
    { path: '/landing', name:'登录', component:YGLandingPage, meta:{hideTabBar:true}},
    // 对页面的一些参数，可以用meta传递
    { path: '/home', name:'home', redirect:'/home/skill', component: YGHomePage, meta:{hideTabBar:false}, children:[
        {
            path:'skill',
            name:'专业技能',
            component:YGProfessionalSkillPage,
            
        },
        {
            path:'study',
            component:MyStudyPage,
            children:[
                {
                    path:'/',
                    redirect:'vue'
                    
                },
                {
                    path:'vue',
                    name:'vue',
                    component:YGVueTryPage,
                    
                },
                {
                    path:'vuex',
                    name:'vuex',
                    component:YGVuexTrypage,
                    
                },
                {
                    path:'css',
                    name:'css',
                    component:YGCSSTryPage,
                    
                },
                {
                    path:'css_moments',
                    name:'css_moments',
                    component:YGCSSMomentsPage,
                    
                },
                {
                    path:'store',
                    name:'store',
                    component:YGStorageTryPage,
                    
                },
                {
                    path:'drawing',
                    name:'drawing',
                    component:YGDrawingTryPage,  
                },
                {
                    path:'cordova',
                    name:'cordova',
                    component:YGCordovaTryPage,  
                },
                {
                    path:'http',
                    name:'http',
                    component:YGHttpTryPage,  
                },
            ]
        },
        {
            path:'hobbies',
            name:'兴趣爱好',
            component:YGHobbiesPage,
            
        },
        {
            path:'experience',
            name:'个人经历',
            component:YGExperiencePage,
            
        },
    ]},
    { path: '/categories', name:'分类', component: MyCategoriesPage, meta:{hideTabBar:false}},
    { path: '/shop', name:'购物车', component: MyShopPage, meta:{hideTabBar:false}},
    { path: '/me', name:'我的', component: MyProfilePage, meta:{hideTabBar:false}},
    { path: '/detail/:goodsId', name:'详情', component: YGVueTryPage, meta:{hideTabBar:true}},
]

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function (location, onComplete, onAbort) {
    if (onComplete && onAbort && typeof Promise !== 'undefined') {
        return originalPush.call(this, location, onComplete, onAbort)
    } else {
        originalPush.call(this, location).catch(err => { })
    }
}

const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function (location, onComplete, onAbort) {
    if (this.path === location) return
    if (onComplete && onAbort && typeof Promise !== 'undefined') {
        return originalReplace.call(this, location, onComplete, onAbort).catch(err => { })
    } else {
        originalReplace.call(this, location).catch(err => { })
    }
}

const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})

router.beforeEach((to, from, next)=>{
    let isAuth = myCookie.getBearerAuthToken() && (myCookie.getBearerAuthToken().length > 0)
    if (to.path === '/landing') {
        if (isAuth) {
            next({ name: 'home' })
        }else {
            next()
        }
    }else {
        if (isAuth) {
            next()
        }else {
            next({ path: '/landing' })
        }
    }
    // 拦截后跳转至特定页面
    // next({ name: 'home' })
    // next({ path: '/home', query: {} })
})
router.afterEach((to, from)=>{
    document.title = to.name
    console.log('to====',to)
    console.log('from====',from)
})

export default router