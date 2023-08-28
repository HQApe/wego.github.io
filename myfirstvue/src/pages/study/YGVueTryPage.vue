<template>
    <div class="yg_vue_try_page">

        <p v-if="$route.params.goodsId" class="my-params">
          router-link 传过来的参数：{{$route.params.goodsId}}
        </p>
        <p v-else>
            <!-- router-link标签属性 -->
            <router-link :to="'/detail/' + 20123">导航去详情</router-link>
        </p>
        <input type="text" v-model.lazy="message"/>
        <input type="text" v-model.trim="password"/>
        <p>输入的内容{{ message + '===' + password }}</p>

        <p>我是一个单例{{ sigtonAge() }}</p>
        <label for="male">
            <input type="radio" id="male" value="男" v-model="sex"/>男
        </label>
        <label for="female">
            <input type="radio" id="female" value="女" v-model="sex"/>女
        </label>
        <p>选择的性别是：{{ sex }}</p>
        <h2>爱好：</h2>
        <div class="hobbies">
            <input type="checkbox" value="篮球" v-model="hobbies"/>篮球
            <input type="checkbox" value="足球" v-model="hobbies"/>足球
            <input type="checkbox" value="乒乓球" v-model="hobbies"/>乒乓球
            <input type="checkbox" value="羽毛球" v-model="hobbies"/>羽毛球
            <h3>爱好是：{{ hobbies }}</h3>
        </div>
        <div>
            <h2>这是一个provider/injects使用案例</h2>
            <myparent-view></myparent-view>
        </div>
        <div id="dynamic-component-demo">
            <button
                v-for="tab in tabs"
                v-bind:key="tab"
                v-bind:class="['tab-button', { active: currentTab === tab }]"
                v-on:click="currentTab = tab"
            >
                {{ tab }}
            </button>
            <keep-alive>
                <component v-bind:is="currentTabComponent" class="tab"></component>
            </keep-alive>
        </div>
    </div>
</template>


<script>
import sington from '@/utils/MySington'
import MyparentView from '@/components/provider/MyparentView.vue';
var tabA = {
    name:"tab-posts",
    data: function() {
          return {
            posts: [
              {
                id: 1,
                title: "Cat Ipsum",
                content:
                  "<p>Dont wait for the storm to pass, dance in the rain kick up litter decide to want nothing to do with my owner today demand to be let outside at once, and expect owner to wait for me as i think about it cat cat moo moo lick ears lick paws so make meme, make cute face but lick the other cats. Kitty poochy chase imaginary bugs, but stand in front of the computer screen. Sweet beast cat dog hate mouse eat string barf pillow no baths hate everything stare at guinea pigs. My left donut is missing, as is my right loved it, hated it, loved it, hated it scoot butt on the rug cat not kitten around</p>"
              },
              {
                id: 2,
                title: "Hipster Ipsum",
                content:
                  "<p>Bushwick blue bottle scenester helvetica ugh, meh four loko. Put a bird on it lumbersexual franzen shabby chic, street art knausgaard trust fund shaman scenester live-edge mixtape taxidermy viral yuccie succulents. Keytar poke bicycle rights, crucifix street art neutra air plant PBR&B hoodie plaid venmo. Tilde swag art party fanny pack vinyl letterpress venmo jean shorts offal mumblecore. Vice blog gentrify mlkshk tattooed occupy snackwave, hoodie craft beer next level migas 8-bit chartreuse. Trust fund food truck drinking vinegar gochujang.</p>"
              },
              {
                id: 3,
                title: "Cupcake Ipsum",
                content:
                  "<p>Icing dessert soufflé lollipop chocolate bar sweet tart cake chupa chups. Soufflé marzipan jelly beans croissant toffee marzipan cupcake icing fruitcake. Muffin cake pudding soufflé wafer jelly bear claw sesame snaps marshmallow. Marzipan soufflé croissant lemon drops gingerbread sugar plum lemon drops apple pie gummies. Sweet roll donut oat cake toffee cake. Liquorice candy macaroon toffee cookie marzipan.</p>"
              }
            ],
            selectedPost: null
          };
        },
        template: `
  	<div class="posts-tab">
      <ul class="posts-sidebar">
        <li
          v-for="post in posts"
          v-bind:key="post.id"
          v-bind:class="{ selected: post === selectedPost }"
					v-on:click="selectedPost = post"
        >
          {{ post.title }}
        </li>
      </ul>
      <div class="selected-post-container">
      	<div
        	v-if="selectedPost"
          class="selected-post"
        >
          <h3>{{ selectedPost.title }}</h3>
          <div v-html="selectedPost.content"></div>
        </div>
        
      </div>
    </div>
  `
}

var tabB = {
    name:"tab-archive",
    template: "<div>Archive component <input type='text'/></div>"
}

export default {
    name:'yg_vue_try_page',
    components:{MyparentView, tabA, tabB},
    data() {
        return {
            message:'Hello',
            password:'',
            sex:'男',
            hobbies:[],
            currentTab: "A",
            tabs: ["A", "B"]
        }
    },
    methods: {
        onclicked() {
            new Promise((resolve)=>{
                
                setTimeout(() => {
                    resolve('Hello World')
                }, 1000);

            }).then((result) => {
                console.log(result);
                return result + '11111'
            }).then((result) => {
                console.log(result);
                return result + '22222'
            }).then((result) => {
                console.log(result);
            }).catch((err) => {
                console.error(err);
            });
        },
        sigtonAge() {
            return sington.age ?? 0;
        }
    },
    computed: {
        currentTabComponent: function() {
        return "tab" + this.currentTab;
        }
    }
}
</script>

<style scoped>
.yg_vue_try_page {
    padding: 20px;
}

.dynamic-component-demo {
  display: flex;
}
.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}


/**deep语法: 让父组件向下影响到子组件内部的样式*/
/**
    ::v-deep (scss)
    /deep/ (less)
 */
::v-deep  .posts-tab {
  display: flex;
}
::v-deep .posts-sidebar {
  max-width: 200vw;
  margin: 0;
  padding: 0 10px 0 0;
  list-style-type: none;
  border-right: 1px solid #ccc;
}
::v-deep  .posts-sidebar li {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: pointer;
}
::v-deep .posts-sidebar li:hover {
  background: #eee;
}
::v-deep .posts-sidebar li.selected {
  background: lightblue;
}
::v-deep .selected-post-container {
  padding-left: 10px;
    word-spacing: normal;
}
::v-deep .selected-post > :first-child {
  margin-top: 0;
  padding-top: 0;
}
</style>