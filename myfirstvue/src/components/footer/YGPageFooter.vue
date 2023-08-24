<template>
    <div class="yg_footer">
        <img id="footer_img" src="@/assets/images/logo/logo_main.png" alt="">
            <div id="footer_copyright">
                <p>这是我的学习项目，关注我，一起学习成长</p>
                <p>Copyright © 2020 - 2023 WeGo. All Rights Reserved.</p>
                <div>
                    <span>WeGo</span>
                    <span class="copyright_divid">版权所有</span>
                    <span class="copyright_divid"><a href="">车牌号 粤·B88888888</a></span>
                </div>
            </div>
    </div>
</template>


<script>
export default {
    name:'yg_footer',
    data() {
        return {

        }
    }
}
</script>

<style scoped>
.yg_footer {
    height: 150px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: env(safe-area-inset-bottom, 44px);
    background-color: rgba(255, 255, 255, 0.4);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

#footer_img {
    width: 100px;
    height: 100px;
    border-radius: 20px;
    margin-right: 30px;
}

#footer_copyright>p {
    margin: 0px;
    padding: 0px 0px 5px 0px;
}

.copyright_divid::before {
    content: "";
    width: 1px;
    height: 15px;
    background: rgba(125,125,125,0.5);
    display: inline-block;
    margin-left: 10px;
    margin-right: 10px;
    vertical-align: middle;
}

.copyright_divid>a {
    text-decoration: none;
    color: inherit;
}
</style>