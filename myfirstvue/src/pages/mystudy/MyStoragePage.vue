<template>
    <div class="storage-page">
        <p>
            需要保存的值：
        </p>
        <input type="text" name="" id="" v-model="storeValue">
        <button @click="onSave">保存</button>
        <button @click="onClear">清除</button>
        <p>保存到localStorage的值：{{ getStorage() }}</p>
    </div>
</template>


<script>
// SessionStorage是HTML5中引入的一种持久化方式，它可以将数据存储在浏览器中，
// 并且在用户关闭浏览器标签页后就会被清除。在Vue中，我们可以使用SessionStorage来保存状态数据。

// LocalStorage是HTML5中引入的一种持久化方式，它可以将数据存储在浏览器中，
// 并且在用户关闭浏览器后仍能保留。在Vue中，我们可以使用LocalStorage来保存状态数据。

// 但是需要注意的是，这两种方式都有一定的存储容量限制，一般为5MB左右。
// 如果需要保存大量的数据，可能需要考虑其他的持久化方式，比如使用服务器端的数据库来存储数据。

const MY_LOCAL_STORAGE_KEY = 'ZHQ_LOCAL_KEY'
const MY_SESSION_STORAGE_KEY = 'ZHQ_SESSION_KEY'

export default {
    name:"StoragePage",
    data(){
        return {
            storeValue: ''
        }
    },
    methods: {
        onSave() {
            if (this.storeValue.length === 0) {
                alert('保存的值不能为空')
                return
            }
            sessionStorage.setItem(MY_SESSION_STORAGE_KEY, this.storeValue)
            localStorage.setItem(MY_LOCAL_STORAGE_KEY, this.storeValue)
            this.storeValue = ''
        },
        onClear() {
            localStorage.removeItem(MY_LOCAL_STORAGE_KEY)
            sessionStorage.removeItem(MY_SESSION_STORAGE_KEY)
            this.$forceUpdate()
        },
        getStorage(){
            return localStorage.getItem(MY_LOCAL_STORAGE_KEY);
        }
    },
    watch: {

    },
    computed: {
        
    }
}
</script>

<style scoped>

</style>