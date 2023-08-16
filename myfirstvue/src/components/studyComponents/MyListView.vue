<template>
    <div class="my-list-view">
        <div class="zhq-strategy">
            <div class="zhq-title">
                信用卡攻略
            </div>
            <div>查看更多》</div>
        </div>
        <div class="zhq-list">
            <div class="zhq-item" v-for="n in 20" v-bind:key="n" v-on:click="onItemClicked(n)">
                <div class="left-icon-box">
                    <img src="https://avatars.githubusercontent.com/u/18701895?v=4" alt="">
                </div>
                <div class="right-box">
                    <div class="name">那些条件决定了贷款买房贷款额度呢?那些条件决定了贷款买房贷款额度呢那些条件决定了贷款买房贷款额度呢那些条件决定了贷款买房贷款额度呢那些条件决定了贷款买房贷款额度呢?那些条件决定了贷款买房贷款额度呢?</div>
                    <div class="time">爱吃fei鱼 01-30</div>
                </div>
            </div>
        </div>
        <el-dialog custom-class="my-dialog" width="300" top="15vh" :center="true" :visible='myDialog.visible' @close="onCancel" @closed="onDialogClose">
            <span slot="title" class="my-dialog-title">
                温馨提示
            </span>
            <p class="my-dialog-msg">{{myDialog.msg}}</p>
            <span slot="footer" class="my-dialog-button">
                <el-button type="primary" @click="onConfirm">确定</el-button>
                <el-button type="danger" @click="onCancel">取消</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: "MyListView",
    data() {
        return{
            showDialog:false,
            myDialog:{
                visible:false,
                msg:""
            }
        }
    },
    methods: {
        onConfirm() {
            this.myDialog.visible = false
        },
        onCancel() {
            this.myDialog.visible = false
        },
        onDialogClose() {
            alert("对话框已关闭")
        },
        onItemClicked (n) {
            this.myDialog.visible = true
            this.myDialog.msg="恭喜您，点击了" + n
            if (n);
            // alert("You are clicked"+ n)
        },
    }
}
</script>

<style scoped>
.my-list-view {
    
}
.my-dialog-msg {
    padding: 0px;
    margin: 0px;
    text-align: center;
}
.my-dialog-button {
    display: flex;
    justify-content: center;
    gap: 50px;
}

.zhq-strategy {
    display: flex;
    position: sticky;
    height: 35px;
    width: 100%;
    background: white;
    justify-content: space-between;
    border-bottom: 0.5px solid lightgray;
}

.zhq-list {
    display: flex;
    flex-direction: column;
    white-space: nowrap;
    overflow-y: scroll;
    overflow-x:hidden;
    height: calc(100vh - 300px);
}

.zhq-strategy .zhq-title {
    display: flex;
    margin-top: 0px;
    margin-left: 16px;
    margin-right: 16px;
    margin-bottom: 10px;
}

.zhq-item {
    display: flex;
    border-bottom: 0.5px solid lightgray;
}

.zhq-item .left-icon-box {
    flex: 50px 50px 100px 100px;
    background-color: red;
}

.zhq-item .left-icon-box img {
    width: 80px;
    height: 80px;
    margin-top: 0px;
    margin-left: 16px;
}

.zhq-item .right-box {
    white-space: normal;
    max-width: 800px;
}

.zhq-item .right-box .name {
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 20px;
    font-size: 16px;
    color: black;
    height: 40px;

    text-align: left;
    line-height: 20px;
    overflow:hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
}

.zhq-item .right-box .time {
    display: flex;
    margin-top: 10px;
    margin-left: 10px;
    margin-bottom: 10px;
    font-size: 14px;
}
</style>