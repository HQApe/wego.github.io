<template>
    <div class="yg_tools_view">
        <p >常用工具</p>
        <div id="yg_tools_container">
            <div v-for="tool in tools" :key="tool.name">
                <a href="#" class="yg_tool_tag">
                    <el-tag :type="tool.type">{{ tool.name }}</el-tag>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'yg_tools_view',
    data() {
        return {
            tools:[
                {
                    name:'Git',
                    type:'success'
                },
                {
                    name:'Cocoapods',
                    type:'warning'
                },
                {
                    name:'编解码',
                    type:'danger'
                },
                {
                    name:'加密与解密',
                    type:'info'
                }
            ]
        }
    },
}
</script>

<style scoped>
.yg_tools_view {
    padding: 20px;
}

.yg_tools_view>p {
  margin: 0px;
  padding-bottom: 10px;
  font-size: 25px;
  font-weight: bold;
}

#yg_tools_container {
    display: flex;
    flex-direction: row;
    gap: 20px;
    padding: 20px;
}
</style>