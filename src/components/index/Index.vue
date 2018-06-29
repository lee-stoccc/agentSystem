<template>
    <div style="position: relative" @click="showMap_f">
        <!--搜索区-->
        <!--<div class="ban">-->
        <!--<div><img src="../../assets/imgs/for.png" alt=""></div>-->
        <!--<div class="dis">广州</div>-->
        <!--<div><input type="text" placeholder="请输入搜索"></div>-->
        <!--</div>-->
        <!--轮播图-->
        <div class="swipera car">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="l in swiperList"><img :src='l.imgUrl' alt="" :id='l.id'></div>
                </div>
            </div>
        </div>
        <!--类别-->
        <div class="category">
            <div @click="go('News')">
                <div><img src="../../assets/imgs/1-1.png" alt=""></div>
                <div>新闻</div>
            </div>
            <div @click="go('Template',{cut:1})">
                <div><img src="../../assets/imgs/1-2.png" alt=""></div>
                <div>加盟政策</div>
            </div>
            <div @click="go('Template',{cut:2})">
                <div><img src="../../assets/imgs/1-3.png" alt=""></div>
                <div>培训</div>
            </div>
            <div @click="go('Template',{cut:3})">
                <div><img src="../../assets/imgs/1-4.png" alt=""></div>
                <div>公司招聘</div>
            </div>
            <div @click="go('Template',{cut:4})">
                <div><img src="../../assets/imgs/1-5.png" alt=""></div>
                <div>公司介绍</div>
            </div>
        </div>
        <div class="category">
            <div  @click="go('Template',{cut:5})">
                <div><img src="../../assets/imgs/2-1.png" alt=""></div>
                <div>移动支付</div>
            </div>
            <div @click="go('Template',{cut:0})">
                <div><img src="../../assets/imgs/2-2.png" alt=""></div>
                <div>小程序模版</div>
            </div>
            <div @click.stop="showMap" >
                <div><img src="../../assets/imgs/2-3.png" alt=""></div>
                <div>附近服务商</div>
            </div>
            <div  @click="go('Template',{cut:6})">
                <div><img src="../../assets/imgs/2-4.png" alt=""></div>
                <div>社交广告</div>
            </div>
            <div  @click="go('Template',{cut:7})">
                <div><img src="../../assets/imgs/2-5.png" alt=""></div>
                <div>业务合作</div>
            </div>
        </div>

        <div class="swipera car" style="height: 6rem">
            <div class="swiper-container" style="height: 6rem">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="l in swiperList2"><img :src='l.imgUrl' alt="" :id='l.id'></div>
                </div>
            </div>
        </div>

        <div class="temp">
            <div v-for="l in picUrl">
                <div :id='l.id'><img :src='l.imgUrl' alt="" @click="getSrc"></div>
            </div>
        </div>
        <div id="div1"  style="width: 100%;height: 300px;position: absolute;top: 15%;z-index: 9" :style="isshowMap==true?'':'display:none'"
            ></div>

        <!--第一次登录输入地址                                                                                 从子组件取回事件和datas-->
        <AlertInput class="alertinptu" :isshow="isshow" :showInput="showInput" :showImg="showImg" :src="src" v-on:canceinput_z="getsdf"></AlertInput>
        <Footer :type="type"></Footer>

    </div>
</template>


<link rel="stylesheet" href="/static/swiper.min.css"/>
<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=3xbHccCCEFzogxmzs4os1qo5rdOHGAlW">

</script>
<script src="../../../static/ajax.js"></script>
<script src="/static/swiper.min.js"></script>
<script src="./index.js"></script>
<style src="./index.scss" lang="scss" scoped=""></style>
