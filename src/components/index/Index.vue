<template>
    <div>
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
            <div>
                <div><img src="../../assets/imgs/1-1.png" alt=""></div>
                <div>新闻</div>
            </div>
            <div>
                <div><img src="../../assets/imgs/1-2.png" alt=""></div>
                <div>加盟政策</div>
            </div>
            <div>
                <div><img src="../../assets/imgs/1-3.png" alt=""></div>
                <div>培训</div>
            </div>
            <div>
                <div><img src="../../assets/imgs/1-4.png" alt=""></div>
                <div>公司招聘</div>
            </div>
            <div>
                <div><img src="../../assets/imgs/1-5.png" alt=""></div>
                <div>公司介绍</div>
            </div>
        </div>
        <div class="category">
            <div>
                <div><img src="../../assets/imgs/2-1.png" alt=""></div>
                <div>移动支付</div>
            </div>
            <div @click="go('Template')">
                <div><img src="../../assets/imgs/2-2.png" alt=""></div>
                <div>小程序模版</div>
            </div>
            <div>
                <div><img src="../../assets/imgs/2-3.png" alt=""></div>
                <div>附近服务商</div>
            </div>
            <div>
                <div><img src="../../assets/imgs/2-4.png" alt=""></div>
                <div>社交广告</div>
            </div>
            <div>
                <div><img src="../../assets/imgs/2-5.png" alt=""></div>
                <div>业务合作</div>
            </div>
        </div>

        <div class="adv">
            <img src="../../assets/imgs/swiper01.jpg" alt="">
        </div>

        <div class="temp" >
            <div v-for="l in picUrl">
                <div :id='l.id'><img :src='l.url' alt=""></div>
            </div>

        </div>

        <Footer :type="type"></Footer>
    </div>
</template>
<link rel="stylesheet" href="/static/swiper.min.css" />
<script src="../../../static/ajax.js"></script>
<script src="/static/swiper.min.js"></script>
<script src="./index.js"></script>
<style src="./index.scss" lang="scss" scoped=""></style>