<template>
    <div class="yg_main_header">
        <div id="yg_main_header_left" @click="onSloganClicked">
            <img id="yg_main_header_logo" src="@/assets/images/logo/logo_main.png" alt=""/>
            <span id="yg_main_header_slogan">WEGO</span>
        </div>
        <div id="yg_main_header_right">
            <el-menu mode="horizontal" default-active="2" class="yg_main_header_menu">
                <el-menu-item index="1">专业技能</el-menu-item>
                <el-menu-item index="2">兴趣爱好</el-menu-item>
                <el-menu-item index="3">个人经历</el-menu-item>
                <el-menu-item index="4">个人中心</el-menu-item>
            </el-menu>
        </div>
        <div></div>
    </div>
</template>


<script>
export default {
    name: 'yg_main_header',
    data() {
        return {

        }
    },
    methods: {
        onSloganClicked() {

        }
    }
}
</script>


<style scoped>
.yg_main_header {
    padding-top: env(safe-area-inset-top, 44px);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    border-bottom: 1px solid #dcdcdc;
}

#yg_main_header_left {
    margin-left: 20px;
    display: flex;
    align-items: center;
    flex-grow: 0;
}

#yg_main_header_slogan {
    font-weight: bolder;
    font-size: xx-large;
    font-family: 'YGCustomFont', sans-serif;
}

#yg_main_header_logo {
    width: 40px;
    height: 40px;
    margin-right: 10px;
}
#yg_main_header_right {
    flex-shrink: 0;
}

.yg_main_header_menu {
    border-bottom: none;
}

</style>