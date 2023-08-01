<template>
    <div class="page-profile">
        <my-navigation-bar :title="title" color="#f00" backgroud="#00f"></my-navigation-bar>
        <div class="section-info">
            <h1>自我介绍</h1>
            <p>前端小课是通过图片、文字、代码、视频等多种方式写成的一本多媒体电子书。全书分为不同的小书，每本小书旨在讲透一个知识点，比如 CSS布局、HTML、动画。以最基础的编程知识为起点，即使不懂编程的小白也能够通过本书学会编程，顺利进入互联网行业。
本书最大的特色是通过公众号+图书+网站形成一个闭环。读者可通过公众号实时获得最新的前端知识，并与作者实时互动；通过图书可以系统地学习前端知识；通过网站可看到代码实时运行结果，真正的所见即所得。</p>
        </div>
        <button @click="showShadow">显示遮罩</button>
        <div>
            <!-- router-link标签属性 -->
            <router-link :to="'/me/study/'">我的学习</router-link>
            <router-link :to="'/me/vuex/'">Vuex入门</router-link>
            <router-view></router-view>
        </div>
        <div class="slider" v-on:click="onClicked" v-if="hiddenShadow">
            <div id="side-nav" v-on:click.stop="doNothing"></div>
        </div>
    </div>
</template>

<script>
import MyNavigationBar from '../../components/navbar/MyNavigationBar'

export default {
    name:'ProfilePage',
    components:{MyNavigationBar},
    data () {
        return {
            title: "我的",
            hiddenShadow:false
        }
    },
    methods: {
        showShadow(){
            this.hiddenShadow = true
        },
        onClicked() {
            this.hiddenShadow = false
            console.log('点击了遮罩')
            // let slide = document.getElementById("side-nav")
        },
        doNothing(){
            
        }
    }
}
</script>

<style scoped>
.page-profile {
    margin-top: 44px;
    margin-left: 10px;
}

.section-info {
    padding-top: 10px;
}

.slider {
    position: fixed;
    top: 0px;
    left: 0px;
    height: 100vh;
    width: 100%;
    background-color: rgba(1, 0, 0, 0.5);
    z-index: 10;
}
#side-nav {
    height: 100vh;
    width: 200px;
    background-color:red;
    animation-duration: 0.25s;
    animation-name: slidein;
    animation-iteration-count: 1;
}

@keyframes slidein {
  from {
    margin-left: -200px;
  }

  to {
    margin-left: 0px;
  }
}

@keyframes slideout {
  from {
    margin-left: 0px;
  }

  to {
    margin-left: -200px;
  }
}
</style>