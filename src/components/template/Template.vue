<template>
    <div class="temp" >

        <!--小程序模板-->
        <div @click="go('TempDetail',{id:l.id})" v-for="l in list" :id='l.id' :style="cut==0?'':'display:none'" style="width: 40%">
            <div style="height: 14rem;"><img :src='l.url' alt=""></div>
            <div>{{l.name}}</div>
            <div><span>￥</span><span>{{l.price}}</span></div>
        </div>

        <!--加盟政策 cut==1-->
        <div :style="cut==1?'':'display:none'" v-for="l in list">
            <div><img :src='l.imgUrl' alt=""></div>
        </div>

        <!--培训 cut==2-->
        <div :style="cut==2?'':'display:none'" v-for="l in list">
            <div><img :src='l.imgUrl' alt=""></div>
        </div>

        <!--公司招聘 cut==3-->
        <div :style="cut==3?'':'display:none'" v-for="l in list">
            <div><img :src='l.imgUrl' alt=""></div>
        </div>

        <!--公司介绍 cut==4-->
        <div :style="cut==4 ?'':'display:none'" v-for="l in list">
            <div><img :src='l.imgUrl' alt=""></div>
        </div>
        <!--公司介绍 cut==5-->
        <div :style="cut== 5 ?'':'display:none'" v-for="l in list">
            <div><img :src='l.imgUrl' alt=""></div>
        </div>
        <!--公司介绍 cut==6-->
        <div :style="cut==6?'':'display:none'" v-for="l in list">
            <div><img :src='l.imgUrl' alt=""></div>
        </div>
        <!--公司介绍 cut==7-->
        <div :style="cut==7?'':'display:none'" v-for="l in list">
            <div><img :src='l.imgUrl' alt=""></div>
        </div>
    </div>
</template>

<script src="./template.js">

</script>

<style src="./template.scss" lang="scss" scoped=""></style>

