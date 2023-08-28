<template>
    <div class="yg_cordova_try_page">
        <MyListView></MyListView>
    </div>
</template>

<script>
import MyListView from '@/components/studyComponents/MyListView'

export default {
    name:'yg_cordova_try_page',
    components:{MyListView},
    data() {
        return {

        }
    }
}
</script>

<style scoped>
.yg_cordova_try_page {
    padding: 20px;
}
</style>