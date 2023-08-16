<template>
    <div class="parent-view">
        <p>父组件的值为：{{ info.name }} ---- {{ info.age }}</p>
        <button @click="onAgeChanged">年龄增长</button>
        <h2>下面是子组件</h2>
        <MyChildrenView></MyChildrenView>
    </div>
</template>


<script>
import MyChildrenView from './MyChildrenView'
export default {
    name:'ParentView',
    components: { MyChildrenView },
    data() {
        return {
            flag:'心有多高，胆有多大',
            info:{
                name:'Ape',
                age:28,
                sex:'male'
            }
        }
    },
    provide(){
        return {
            userInfo:this.info,
        }
    },
    methods: {
        onAgeChanged() {
            this.info.age += 1
        }
    }
}

</script>


<style scoped>

</style>