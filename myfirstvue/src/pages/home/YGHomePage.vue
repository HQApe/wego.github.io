<template>
    <div class="yg_home_page">
        <YGMainHeader></YGMainHeader>
        <el-menu default-active="2" class="yg_main_header_menu">
            <el-menu-item index="1">专业技能</el-menu-item>
            <el-menu-item index="2">兴趣爱好</el-menu-item>
            <el-menu-item index="3">个人经历</el-menu-item>
            <el-menu-item index="4">项目成果</el-menu-item>
            <el-menu-item index="5">个人中心</el-menu-item>
        </el-menu>
    </div>
</template>


<script>
import YGMainHeader from '@/components/header/YGMainHeader'

export default {
    components: { YGMainHeader },
    name: 'yg_home_page',
    data() {
        return {

        }
    }
}

</script>

<style scoped>
.yg_home_page{
    height: 100vh;
    display: flex;
    flex-direction: column;
}
.yg_main_header_menu {
    width: 200px;
    flex-grow: 1;
    flex-shrink: 0;
}
</style>