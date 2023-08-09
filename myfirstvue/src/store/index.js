import Vue from 'vue'
import Vuex from 'vuex'

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
})

export default store