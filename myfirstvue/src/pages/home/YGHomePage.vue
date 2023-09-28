<template>
    <div class="yg_home_page">
        <YGMainHeader class="yg_header" @showNavigationBar="showNavigationBar"></YGMainHeader>
        <keep-alive include="StudyPage">
            <router-view class="yg_main"></router-view>
        </keep-alive>
    </div>
</template>


<script>
import YGMainHeader from '@/components/header/YGMainHeader'

export default {
    components: { YGMainHeader },
    name: 'yg_home_page',
    data() {
        return {
            showSlider:false
        }
    },
    methods: {
        
    }
}

</script>

<style scoped>
.yg_home_page{
    height: 100vh;
    display: flex;
    flex-direction: column;
}
.yg_header {
    padding-top: env(safe-area-inset-top, 0px);
    height: 62px;
}
.yg_main {
    height: calc(100vh - 62px - env(safe-area-inset-top, 0px));
    flex-shrink: 0;
    flex-grow: 0;
}
</style>