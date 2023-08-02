<template>
    <div class="my-navigation-bar" :style="{backgroundColor:backgroud, color:color}">
        <div id="left-box">
            <div id="item-back" @click="onBack" v-show="$route.meta.hideTabBar"></div>
        </div>
        <p id="title">{{title}}</p>
        <p class="item-more" v-on:click="onclicked">More</p>
    </div>
</template>


<script>
export default {
    name:'MyNavigationBar',
    props: {
        backgroud:String,
        color: {
            type: String,
            default: '#fff'
        },
        title:{
            type: String,
            required: true
        }
    },
    methods: {
        onclicked() {
            this.$emit('showup', this.$parent.title)
        },
        onBack() {
            this.$router.back()
        }
    }
}
</script>>

<style scoped>
.my-navigation-bar {
    display: flex;
    justify-content: space-between;
    height: 44px;
    background-color: #1d7bff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding-top: env(safe-area-inset-top, 0px);
    z-index: 2;
}

#left-box {
    align-self: center;
    width: 50px;
    height: 32px;
    margin-left: 20px;
}

#item-back {
    width: 44px;
    height: 32px;
    background-image: url('@/assets/images/icon-nav-back.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}

#title {
    align-self: center;
    padding: 0px;
}

.item-more {
    align-self: center;
    width: 50px;
    margin-right: 20px;
    padding: 0px;
}
</style>