<template>
    <div class="yg_storage_try_page">
        <p>
            需要保存的值：
        </p>
        <p>
            <input type="text" name="" id="" v-model="storeValue">
        </p>
        
        <button @click="onLocalSave">保存到LocalStorage</button>
        <button @click="onSessionSave">保存到SessionStorage</button>
        <button @click="onClear">清除</button>
        <p>保存到localStorage的值：{{ getLocalStorage() }}</p>
        <p>保存到sessionStorage的值：{{ getSessionStorage() }}</p>
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
        onLocalSave() {
            if (this.storeValue.length === 0) {
                alert('保存的值不能为空')
                return
            }
            localStorage.setItem(MY_LOCAL_STORAGE_KEY, this.storeValue)
            this.storeValue = ''
        },
        onSessionSave() {
            if (this.storeValue.length === 0) {
                alert('保存的值不能为空')
                return
            }
            sessionStorage.setItem(MY_SESSION_STORAGE_KEY, this.storeValue)
            this.storeValue = ''
        },
        onClear() {
            localStorage.removeItem(MY_LOCAL_STORAGE_KEY)
            sessionStorage.removeItem(MY_SESSION_STORAGE_KEY)
            this.$forceUpdate()
        },
        getLocalStorage(){
            return localStorage.getItem(MY_LOCAL_STORAGE_KEY)
        },
        getSessionStorage() {
            return sessionStorage.getItem(MY_SESSION_STORAGE_KEY)
        }
    },
    watch: {

    },
    computed: {
        
    }
}
</script>

<style scoped>

.yg_storage_try_page {
    padding: 20px;
}

</style>