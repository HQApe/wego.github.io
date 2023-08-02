<template>
    <div class="animation-page">
        <my-navigation-bar :title="title" color="#f00" backgroud="#00f"></my-navigation-bar>
        <div class="section info">
            <span>一起来学CSS动画</span>
        </div>
        <div class="view_port">
            <div class="polling_message">Listening for dispatches</div>
            <div class="cylon_eye"></div>
        </div>

        <p>随便点击某处来移动球</p>
        <div class="ball-move" @click="onBallMoveClick">
            <div id="my-foo" class="ball"></div>
        </div>
    </div>
</template>


<script>

import MyNavigationBar from '@/components/navbar/MyNavigationBar';

export default {
    name: 'AnimationPage',
    components:{MyNavigationBar},
    data() {
        return {
            title: "CSS动画学习",
        }
    },
    methods: {
        onBallMoveClick(ev) {
            const f = document.getElementById("my-foo");
            f.style.transform = `translateY(${ev.offsetY - 25}px)`;
            f.style.transform += `translateX(${ev.offsetX - 25}px)`;
        },
        onBack() {
            this.$router.back()
        }
    }
}



</script>

<style scoped>
.animation-page {
    margin-top: 44px;
}
.polling_message {
  color: white;
  float: left;
  margin-right: 2%;
}

.view_port {
  background-color: black;
  height: 25px;
  width: 100%;
  overflow: hidden;
}

.cylon_eye {
  background-color: red;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.9) 25%,
    rgba(0, 0, 0, 0.1) 50%,
    rgba(0, 0, 0, 0.9) 75%
  );
  color: white;
  height: 100%;
  width: 20%;

  -webkit-animation: 4s linear 0s infinite alternate move_eye;
  animation: 4s linear 0s infinite alternate move_eye;
}

@-webkit-keyframes move_eye {
  from {
    margin-left: -20%;
  }
  to {
    margin-left: 100%;
  }
}
@keyframes move_eye {
  from {
    margin-left: -20%;
  }
  to {
    margin-left: 100%;
  }
}

.ball-move {
    margin: 20px;
    width: 300px;
    height: 300px;
    border: 1px solid gray;
    position: relative;
}
.ball {
  border-radius: 25px;
  width: 50px;
  height: 50px;
  background: #c00;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 1s;
}



</style>