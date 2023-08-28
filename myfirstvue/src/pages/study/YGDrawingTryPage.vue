<template>
    <div class="yg_drawing_try_page">
        <canvas class="myCanvas">
            <p>Add suitable fallback here.</p>
        </canvas>
    </div>
</template>


<script>

export default {
    name: 'DrawingPage',
    data() {
        return{

        }
    },
    beforeCreate (ctx) {
        console.log("=====Life Circle=======", 'beforeCreate:', ctx)
    },
    created() {
        console.log("=====Life Circle=======", 'created')
    },
    beforeMount() {
        console.log("=====Life Circle=======", 'beforeMount')
    },
    mounted() {

        // rectangle
        const canvas = document.querySelector('.myCanvas');
        const width = canvas.width = window.innerWidth;
        const height = canvas.height = window.innerHeight;
        const ctx = canvas.getContext('2d');

        ctx.fillStyle = 'rgb(0,0,0)';
        ctx.fillRect(0,0,width,height);

        ctx.fillStyle = 'rgb(255,0,0)';
        ctx.fillRect(50,50,100,150);

        ctx.fillStyle = 'rgb(0,255,0)';
        ctx.fillRect(75,75,100,100);

        ctx.fillStyle = 'rgba(255,0,255,0.75)';
        ctx.fillRect(25,100,175,50);

        ctx.strokeStyle = 'rgb(255,255,255)';
        ctx.lineWidth = 5;
        ctx.strokeRect(25,25,175,200);

        // paths
        function degToRad(degrees) {
            return degrees * Math.PI / 180;
        }

        ctx.fillStyle = 'rgb(255,0,0)';
        ctx.beginPath();
        ctx.moveTo(350,160);
        ctx.lineTo(450,160);
        const triHeight = 50 * Math.tan(degToRad(60));
        ctx.lineTo(400,160+triHeight);
        ctx.lineTo(350,160);
        ctx.fill();

        ctx.fillStyle = 'rgb(0,0,255)';
        ctx.beginPath();
        ctx.arc(260, 206, 50, degToRad(0), degToRad(360), false);
        ctx.fill()

        ctx.fillStyle = 'yellow';
        ctx.beginPath();
        ctx.arc(310, 206, 50, degToRad(-45), degToRad(45), true);
        ctx.lineTo(310,206);
        ctx.fill();

        //text
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 1;
        ctx.font = '36px arial';
        ctx.strokeText('Canvas text', 450, 50);

        ctx.fillStyle = 'red';
        ctx.font = '48px georgia';
        ctx.fillText('Canvas text', 450, 150);

        canvas.setAttribute('aria-label', 'Canvas text');
        // image 
        const image = new Image();
        image.src = require('@/assets/logo.png');
        setTimeout(()=>ctx.drawImage(image, 0, 0, 1000, 1000, 100, 100, 1000, 1000), 250)

        console.log("=====Life Circle=======", 'mounted')
    },
    beforeUpdate() {
        console.log("=====Life Circle=======", 'beforeUpdate')
    },
    updated() {
        console.log("=====Life Circle=======", 'updated')
    },
    activated() {
        console.log("=====Life Circle=======", 'activated')
    },
    beforeDestroy() {
        console.log("=====Life Circle=======", 'beforeDestroy')
    },
    destroyed() {
        console.log("=====Life Circle=======", 'destroyed')
    },
    errorCaptured(err, vm, info) {
        console.log("=====Life Circle======= error:", err, vm, info)
    }
}

</script>


<style scoped>
.yg_drawing_try_page {
    margin: 20px;
    overflow: hidden;
}
</style>