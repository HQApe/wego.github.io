import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from "js-cookie"

import TYPES from './types'

Vue.use(Vuex)

/**
 * ① 依赖state得到新的数据，用getters（跟computed一样，只读）

 * ② 修改state的属性值，就用mutations（同步操作）

 * ③ 如果需要调用异步方法，放在actions中去
 */
const store = new Vuex.Store({
  // 如果项目变大变复杂了，每个module都可以拆成单独文件
    modules:{
      count:{
        state: {
          // modules的形式在访问时，仅state需要加state.moduleName.property
          counter:0
        },
        mutations:{
          // 无论是否是modules形式，在外面使用时，this.$store.commit('method',params...)方式触发
          /**
           * ① 在mutations中不仅仅能做赋值操作

           * ② 作者在mutations中做了类似埋点操作，如果从mutations中操作的话， 能被检测到，可以更方便用调试工具调试，调试工具可以检测到实时变化，而直接改变state中的属性，则无法实时监测

           * 注意：mutations只能写同步方法，不能写异步，比如axios、setTimeout等，这些都不能写，mutations的主要作用就是为了修改state的。

           * 原因类似：如果在mutations中写异步，也能够调成功，但是由于是异步的，不能被调试工具追踪到，所有不推荐这样写，不利于调试,这是官方的约定。
           */
          [TYPES.INCREASE_COUNTER](state) {
            state.counter++
          },
          decrease(state) {
            state.counter--
          },
          increaseCount(state, playload) {
            state.counter += playload
          },
        },
        getters: {
          // 无论是否是modules形式，在外面使用时，$store.getters.method(params)方式触发
          powerCounter(state) {
            return state.counter * state.counter
          }
        },
        actions:{
          // 无论是否是modules形式，在外面使用时，this.$store.dispatch('method', params...)方式触发
          /**
           * 1. action也不要直接去操作state，而是去操作mutation
           * 2. action包含异步操作，类似于axios请求，可以都放在action中写
           * 3. action中的方法默认的就是异步，并且返回promise
           */
          increaseAction(context, playload) {
            setTimeout(() => {
              context.commit('increaseCount', playload)
            }, 1000);
          }
        },
      },
      student:{
        state:{
          students:[
            {id:1101, name:"jacky", age:18},
            {id:1102, name:"nancy", age:20},
            {id:1103, mame:"judy", age:19},
            {id:1104, name:"alon", age:21}
          ]
        },
        mutations: {
          [TYPES.ADD_STUDENT](state, stu) {
            state.students.push(stu)
          },
          updateInfo(state, height) {
            state.info.height = height
          }
        },
        getters: {
          more20stu(state) {
            return state.students.filter(s=> s.age > 20)
          },
          more20stuLength(state, getters) {
            return getters.more20stu.length
          },
          moreAgeStu(state) {
            return age=>{
              return state.students.filter(s=>s.age>age)
            }
          }
        }
      },
      project: {
        state: {
          list:[]
        },
        mutations:{
          updateList(state, list) {
            state.list = list
          }
        }
      }
    },
    state: {
        info: {
          name: "sandy",
          age:35,
          height: 1.88
        }
    },
    mutations: {

    },
    getters:{

    },
    plugins: [
      // 两个createPersistedState，相当于配置了两个插件，所以并不会存在冲突或无法使用的情况
      createPersistedState({
        // 默认使用localStorage来持久化数据
        storage: window.sessionStorage,
        // key: 'my_store', // 如果只配置一个key，则是把所有state数据持久化，没有设置key，默认为vuex
        // paths: ['count'], // 需要持久化的模块
        // 如果path和reducer同时存在则使用reducer, 忽悠paths属性
        reducer(state) {
          return {
            // 只存储state中指定的值，或者需要持久化的模块
            // info:state.info,
            count:state.count,
            student:state.student
          }
        }
      }),
      createPersistedState({
        storage: window.localStorage,
        key: 'my_info',
        paths:['info'],
      }),
      // createPersistedState({
      //   // 还可以存储到cookie，使用getItem、setItem、removeItem方法来操作数据
      //   storage: {
      //     getItem: (key) => Cookies.get(key),
      //     setItem: (key, value) =>
      //       Cookies.set(key, value, { expires: 3, secure: true }),
      //     removeItem: (key) => Cookies.remove(key)
      //   }
      // }),
      // createPersistedState({
      //   //如果需要使用本地存储但需要保护数据的内容，则可以对其进行加密。
      //   //secure-ls 通过高级别的加密和数据压缩来保护localStorage数据 https://github.com/softvar/secure-ls
      //   storage: {
      //     getItem: (key) => ls.get(key),
      //     setItem: (key, value) => ls.set(key, value),
      //     removeItem: (key) => ls.remove(key)
      //   }
      // })
    ]
})

export default store