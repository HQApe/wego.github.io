<template>
    <div class="yg_book_list_view">
        <p >主要技能</p>
        <div id="yg_book_container">
            <div v-for="skill in skills" :key="skill.name">
                <a href="#" class="yg_book_card">
                    <img :src=skill.image alt="">
                    <p class="yg_book_name">《{{ skill.name }}》</p>
                    <p class="yg_book_description">{{ skill.description }}</p>
                </a>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name:'yg_book_list_view',
    data() {
        return {
            skills:[
                {
                    name: 'iOS',
                    image:'https://kfwimg.kafan.cn/upload/image/20220920/20220920103804_27401.jpg',
                    description: 'iOS系统开发必被技能，掌握了这项技能，就可以在所有的Apple设备上开发应用。'
                },
                {
                    name: 'Android',
                    image:'https://img.linux.net.cn/data/attachment/album/202105/19/181440kkb9jbvx8he8jbjb.jpg',
                    description: 'Android系统开发必被技能，掌握了这项技能，就可以在所有的Android设备上开发应用。'
                },
                {
                    name: 'Vue',
                    image:'https://pic3.zhimg.com/v2-c052f772c27dea54296342154fd484df_400x224.jpg?source=172ae18b',
                    description: '是一款用于构建用户界面的 JavaScript 框架。它基于标准 HTML、CSS 和 JavaScript 构建，并提供了一套声明式的、组件化的编程模型，帮助你高效地开发用户界面。无论是简单还是复杂的界面，Vue 都可以胜任。'
                },
                {
                    name: 'PHP',
                    image:'https://img1.baidu.com/it/u=1480460208,184305928&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
                    description: 'PHP是一种通用开源脚本语言，特别适用于Web开发。它可以嵌入HTML中，可以运行于服务器端，并与数据库交互，生成动态网页。'
                },
                {
                    name: 'MYSQL',
                    image:'https://5b0988e595225.cdn.sohucs.com/images/20180110/c3e294bd13ba4f018a500669ac073393.jpeg',
                    description: 'MySQL是一个开源的关系型数据库管理系统，常用于Web应用程序的后端数据存储。它支持多种操作系统和编程语言，具有高性能、可靠性和可扩展性等特点。'
                }
            ]
        }
    }
}

</script>

<style scoped>

/*匹配带有屏幕的设备，只适用于屏幕低于 850px的设备 */
@media screen and (max-width: 850px) {
    #yg_book_container {
        flex-direction: column;
    }
    .yg_book_card {
        max-width: 500px;
    }

    img {
        max-width: 100%;
    }
}

@media screen and (min-width: 850px) {
    #yg_book_container {
        flex-direction: row;
    }
    img {
        width: 180px; 
    }
}

.yg_book_list_view {
    padding: 20px 20px 20px 20px;
    overflow: hidden;
}

.yg_book_list_view>p {
  margin: 0px;
  padding-bottom: 10px;
  font-size: 25px;
  font-weight: bold;
}

#yg_book_container {
  display: flex;
  justify-content: flex-start;
  padding: 10px;
  align-items: center;
  gap: 20px;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
}

.yg_book_card {
    padding: 10px;
    margin-right: 2px;
    border-radius: 10px;
    flex-shrink: 0;
    flex-grow: 0;
    transition:box-shadow .25s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 0px 2px rgba(0,0,0,.5);
}

.yg_book_card:hover {
    box-shadow: 0px 0px 5px rgba(0,0,0,.6);
}

a {
    text-decoration: none;
    color: black;
}

img {
    border-radius: 10px;
}

.yg_book_name{
    margin: 15px 0 0 0;
    font-size: 18px;
    font-weight: bold;
}
.yg_book_description {
    margin: 10px 0 0 0;
    align-self: flex-start;
    font-size: 15px;
    text-align: justify;
    white-space: normal;
    overflow:hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    /* text-overflow: ellipsis; 只能单行生效*/

    /* -webkit-line-clamp 是一个 不规范的属性（unsupported WebKit property），它没有出现在 CSS 规范草案中。
    为了实现该效果，它需要组合其他外来的WebKit属性。常见结合属性：
        display: -webkit-box; 必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。
        -webkit-box-orient 必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式 。
        text-overflow，可以用来多行文本的情况下，用省略号“...”隐藏超出范围的文本 。  
    */
}

</style>