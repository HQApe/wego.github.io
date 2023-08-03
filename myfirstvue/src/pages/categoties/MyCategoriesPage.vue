<template>
    <div class="page-categories">
        <my-navigation-bar :title="title" color="#f00" backgroud="#00f" @showup="clickedDown"></my-navigation-bar>
        <div class="nav-span"></div>
        <div class="page-container">
            <div class="page-left">
                <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span slot="title">导航一</span>
                        </template>
                        <el-menu-item-group>
                            <span slot="title">分组一</span>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="分组2">
                            <el-menu-item index="1-3">选项3</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="1-4">
                            <span slot="title">选项4</span>
                            <el-menu-item index="1-4-1">选项1</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span slot="title">导航二</span>
                    </el-menu-item>
                    <el-menu-item index="3" disabled>
                        <i class="el-icon-document"></i>
                        <span slot="title">导航三</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="el-icon-setting"></i>
                        <span slot="title">导航四</span>
                    </el-menu-item>
                </el-menu>
            </div>
            <div class="page-right">
                <el-breadcrumb separator-class="el-icon-arrow-right" class="el-breadcrub-demo">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                    <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                    <el-breadcrumb-item>活动详情</el-breadcrumb-item>
                </el-breadcrumb>
                <el-tabs class="el-tabs-demo" v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="用户管理" name="first">
                        <HelloWorld></HelloWorld>
                    </el-tab-pane>
                    <el-tab-pane label="配置管理" name="second">
                        <MyListView></MyListView>
                    </el-tab-pane>
                    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
                    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
                </el-tabs>
            </div>
        </div>
    </div>
</template>

<script>
import MyNavigationBar from '../../components/navbar/MyNavigationBar'
import HelloWorld from '@/components/HelloWorld'
import MyListView from '@/components/studyComponents/MyListView'
export default {
    name:'CategoriesPage',
    components:{MyNavigationBar, HelloWorld, MyListView},
    data () {
        return {
            title: "分类",
            activeName:'first',
            isCollapse:false,
        }
    },
    methods: {
        clickedDown(event){
            if (event);
            alert("You are clicked"+ event)
        }
    }
}
</script>


<style>
.my-dialog {
    border-radius: 20px;
    width: 300px;
    background-color: antiquewhite;
}
</style>

<style scoped>

.page-categories {
    /* display: flex;
    flex-direction: column; */
    background-color: white;
    height: 100vh;
}
.page-container {
    display: flex;
    background-color: white;
    height: calc(100vh - 44px);
}
.nav-span {
    height: calc(env(safe-area-inset-top, 0px) + 44px);
    width: 100%;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 100%;
}

.page-right {
    padding: 20px 20px 0px 20px;
    width: 100%;
}

.el-breadcrub-demo {
    margin-bottom: 10px;
}
</style>