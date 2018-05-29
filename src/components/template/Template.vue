<template>
    <div class="temp">
        <div @click="go('TempDetail',{id:l.id})" v-for="l in list" :id='l.id'>
            <div><img :src='l.url' alt=""></div>
            <div>{{l.name}}</div>
            <div><span>￥</span><span>{{l.price}}</span></div>
        </div>
        <!--<div>-->
            <!--<div><img src="../../assets/imgs/meinv.jpg" alt=""></div>-->
            <!--<div>小程序模板</div>-->
            <!--<div><span>￥</span><span >9.99</span></div>-->
        <!--</div>-->
        <!--<div>-->
            <!--<div><img src="../../assets/imgs/meinv.jpg" alt=""></div>-->
            <!--<div>小程序模板</div>-->
            <!--<div><span>￥</span><span>9.99</span></div>-->
        <!--</div>-->
        <!--<div>-->
            <!--<div><img src="../../assets/imgs/meinv.jpg" alt=""></div>-->
            <!--<div>小程序模板</div>-->
            <!--<div><span>￥</span><span>9.99</span></div>-->
        <!--</div>-->

        <!--<div>-->
            <!--<div><img src="../../assets/imgs/meinv.jpg" alt=""></div>-->
            <!--<div>小程序模板</div>-->
            <!--<div><span>￥</span><span>9.99</span></div>-->
        <!--</div>-->
    </div>
</template>

<script src="./template.js">

</script>

<style src="./template.scss" lang="scss" scoped=""></style>

