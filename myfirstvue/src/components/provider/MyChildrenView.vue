<template>
    <div class="children-view">

        <button @click="onAgeChanged">年龄减少</button>

        <p>
            {{ this.userInfo.name }} --- {{ this.info.age }}
        </p>
    </div>
</template>

<script>

export default {
    name: 'ChildrenView',
    inject:['userInfo'],
    data() {
        return {
            info:this.userInfo,
        }
    },
    methods: {
        onAgeChanged() {
            this.info.age -=1
        }
    }
}

</script>

<style scoped>
.children-view {
    padding: 30px;
}
</style>