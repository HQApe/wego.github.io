<template>
    <div class="page-study">
      <div id="study_content_left"></div>
        <el-menu :default-active="currentTabComponent" class="yg_main_header_menu" :router="true">
            <el-menu-item index="/home/study/vue">小试Vue</el-menu-item>
            <el-menu-item index="/home/study/vuex">Vuex探秘</el-menu-item>
            <el-submenu index="1">
                <template slot="title">
                    <span slot="title">CSS浅尝</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="/home/study/css">小试CSS</el-menu-item>
                    <el-menu-item index="/home/study/css_moments">朋友圈</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="/home/study/store">本地持久化</el-menu-item>
            <el-menu-item index="/home/study/drawing">Canvas画图</el-menu-item>
            <el-menu-item index="/home/study/cordova">Cordova集成</el-menu-item>
        </el-menu>
        <div id="study_content_right">
          <keep-alive include="/home/study/vue">
            <router-view></router-view>
          </keep-alive>
        </div>
    </div>
</template>

<script>
export default {
    name:'StudyPage',
    data () {
        return {
            title: "学习",
        }
    },
    methods:{
      
    },
    computed: {
      currentTabComponent: function() {
        let path = this.$route.path
        return path
      }
    }
}
</script>

<style scoped>
.page-study {
  display: flex;
}

.yg_main_header_menu {
  width: 200px;
  text-align: center;
  flex-shrink: 0;
}

#study_content_right {
  background-color: white;
  width: 100%;
  flex-shrink: 1;
  overflow: scroll;
  overflow-x: hidden;
}
</style>