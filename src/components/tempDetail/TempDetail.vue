<template>
    <div class="swiperss">
        <div class="swipera car">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="l in url"><img :src='l.url' alt="" :id='l.id'></div>
                </div>
            </div>
        </div>
        <div class="name">{{info.name}}</div>
        <div class="price"><span>￥</span> <span>{{info.price}}</span> <img alt="" v-for="l in url" src="../../../src/assets/imgs/m-2-1.png"></div>
        <div class="blue">商品详情</div>
        <div class="detail">{{info.description}}</div>
        <Footer></Footer>
    </div>

</template>
<script src="/static/swiper.min.js"></script>
<script src="./tempDetail.js"></script>
<style src="./tempDetail.scss" lang="scss" scoped=""></style>

