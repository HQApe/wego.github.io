<template>
    <div class="yg_about_view">
        <div id="book-info">
            <div id="book-img"></div>
            <p>《WEGO》</p>
            <p>一个以Vue+Element为前端框架，PHP/SpringBoot为后端框架的学习网站，从零开始学习前端/后端技术，记录入门并进阶前端/后端的学习历程。</p>
            <p> 张华清 / 出品 </p>
        </div>
        <div id="book-about">
            <p>关于WEGO</p>
            <p class="book-intr">
                WEGO是一个开源性质的学习网站，旨在帮助人们从零开始学习前端/后端技术，并记录他们的学习历程并进行进阶。WEGO采用了流行的框架Vue和Element作为前端框架，PHP和SpringBoot作为后端框架。采用这种技术栈，可以帮助学习者了解现代Web开发的工具和进程。
            </p>
            <p class="book-intr">
                在WEGO上，学习者可以享受到各种方式的学习方式，包括在线视频、文档、示例实验等。网站提供了各种示例项目，帮助初学者了解前后端的交互和实际项目开发中的一些问题。通过实践和交流，学习者可以更深入的理解Web开发的各个方面，以便在日后的实际工作中更好的应用。
            </p>
            <button id="book-now">立即阅读</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'yg_about_view',
    data () {
        return {

        }
    }
}
</script>

<style scoped>
/*匹配带有屏幕的设备，只适用于屏幕低于 850px的设备 */
@media screen and (max-width: 850px) {
  .yg_about_view {
    flex-direction: column;
  }
  #book-info {
    padding-top: 30px;
  }
  #book-now {
    align-self: center;
  }

}
/*匹配带有屏幕的设备，只适用于屏幕高于 850px的设备 */
@media screen and (min-width: 850px) {
  #book-now {
    align-self: flex-start;
  }
}

.yg_about_view {
  display: flex;
  align-items: center;
}

#book-info {
  width: 200px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 20px;
  margin-bottom: 0px;
}

#book-info p {
  margin-top: 0px;
  margin-bottom: 10px;
}

#book-info p:nth-child(2) {
  font-size: 20px;
  font-weight: bold;
}

#book-info p:nth-child(3) {
  font-size: 14px;
}

#book-info p:nth-child(4) {
  font-size: 10px;
}


#book-img {
  background-image: url('https://z3.ax1x.com/2021/04/11/c0KRBj.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-clip: content-box;
  width: 200px;
  height: 200px;
}

#book-about {
  padding-top: 30px;
  padding-right: 20px;
  padding-bottom: 20px;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  margin-left: 60px;
}

#book-about p:first-child {
  margin: 0px;
  font-size: 25px;
  font-weight: bold;
}

.book-intr {
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 16px;
  line-height: 25px;
  text-align: justify;
}

#book-now {
  background-color: rgba(53, 130, 238, 0.929);
  color: white;
  font-size: 18px;
  padding: 10px 30px 10px 30px;
  margin-top: 20px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
}

</style>