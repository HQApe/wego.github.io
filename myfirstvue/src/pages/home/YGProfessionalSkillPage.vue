<template>
    <div class="yg_professional_skill_page">
      <!-- <div id="nav">
        <div id="nav-left">
          <div id="nav-more" @click="onShowSlider"></div>
          <p>前端小课</p>
        </div>
        <div id="navi-right">
          <p>给读者的一封信</p>
          <p>学习资源</p>
          <p>前端学习路线</p>
          <div id="free-book">
            <p>免费订阅</p>
            <div id="notice"></div>
          </div>
          <p>GitHub</p>
        </div>
      </div> -->
      <div id="content">
        <div class="section">
          <YGAboutView></YGAboutView>
        </div>
        <div class="section">
          <YGBookListView></YGBookListView>
        </div>
        <div class="section tools">
          <YGToolsView></YGToolsView>
        </div>
      </div>
      <div id="bottom">
        <YGPageFooter></YGPageFooter>
      </div>

      <el-drawer title="我是标题"
      :visible.sync="showSlider"
      direction="ltr"
      :withHeader=false
      :before-close="handleClose">
        <span>我来啦!</span>
      </el-drawer>
    </div>
</template>

<script>

import YGAboutView from '@/components/studyComponents/YGAboutView'
import YGBookListView from '@/components/studyComponents/YGBookListView'
import YGToolsView from '@/components/studyComponents/YGToolsView'
import YGPageFooter from '@/components/footer/YGPageFooter'
export default {
    name:'yg_professional_skill_page',
    components:{YGAboutView, YGBookListView, YGPageFooter, YGToolsView},
    data () {
        return {
            title: "首页",
            showSlider:false
        }
    },
    methods:{
      onShowSlider() {
        this.showSlider = true
      },
      handleClose(done) {
        done()
      }
    },
    computed: {
            
    }
}
</script>

<style scoped>

.yg_professional_skill_page {
    display: flex;
    background-color: #efefef;
    flex-direction: column;
    align-items: center;
  }

/*匹配带有屏幕的设备，只适用于屏幕超过 1200px的设备 */
@media screen and (min-width: 1200px) {
  #content {
    width: 1200px;
  }
  #nav-left {
    width: 250px;
    display: flex;
    justify-content: flex-start;
    flex-shrink: 0;
  }
}

/*匹配带有屏幕的设备，只适用于屏幕低于 850px的设备 */
@media screen and (max-width: 1200px) {
  #content {
    width: 100%;
  }
}

@media screen and (min-width: 850px) {
  #nav-more {
    visibility: hidden;
  }
  #nav-left {
    justify-content: space-between;
  }
}

/*匹配带有屏幕的设备，只适用于屏幕低于 850px的设备 */
@media screen and (max-width: 850px) {
  #navi-right {
    visibility: hidden;
  }

  #nav-more {
    visibility: visible;
  }

  #nav-left {
    justify-content: flex-start;
  }
}

#nav {
  background-color: white;
  height: 44px;
  width: 100%;
  display: flex;
  position:fixed;
  /**如果要顶满安全区的状态栏，需要设置top=0 */
  top: 0;
  padding-top: env(safe-area-inset-top, 0px) ;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ececec;
}

#content {
  /* padding-top: 44px; */
}

#bottom {
  height: 200px;
  width: 100%;
  background-color: rgba(193, 215, 245, 0.99);
  margin-top: 20px;
  margin-bottom: calc(env(safe-area-inset-bottom, 0px) + 49px);
}

.section {
  background-color: white;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;
  border-radius: 10px;
}

#nav-left {
  width: 250px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

#nav-left p {
  font-size: 22px;
  margin-right: 40px;
}

#nav-more {
  margin-left: 20px;
  margin-right: 20px;
  width: 50px;
  height: 44px;
  background-color: #ececec;
}

#navi-right {
  display: flex;
  width: 600px;
  margin-right: 20px;
  flex-shrink: 0;
  justify-content: space-between;
}

/* 给文字后面添加图片 */
#navi-right p:last-child::after {
  content: '';
  background-image: url('../../assets/moments/star_small.png');
  display: inline-block;
  margin-left: 5px;
  width: 15px;
  height: 15px;
  vertical-align: middle;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}

#free-book {
  display: flex;
  /*父相子绝 */
  position: relative;
}

#notice {
  background-color: red;
  width: 5px;
  height: 5px;
  border-radius: 2.5px;
  position: absolute;
  top: 15px;
  right: -5px;
}

</style>