<template>
    <div>
        <div class="logo"><img src="../../assets/imgs/swiper01.jpg" alt=""></div>
        <div class="logo-1"><img src="../../assets/imgs/c-1.png" alt=""></div>
        <div class="name">阿帕奇有限公司</div>
        <div class="other">
            <span>军火企业</span>
            <span>/</span>
            <span>20-50人</span>
            <span>/</span>
            <span>互联网</span>
            <span>/</span>
            <span>营运</span>
        </div>
        <div class="line"></div>
        <div class="d-1">
            <div>法定代表人：</div>
            <div>小名</div>
        </div>
        <div class="d-1">
            <div>公司联系电话：</div>
            <div>15902028088</div>
        </div>
        <div class="d-1">
            <div>公司邮箱：</div>
            <div>807022422@qq.com</div>
        </div>
        <div class="line"></div>
        <div class="d-1 d-2">
            <div>地址：</div>
            <div>广东省广州市花都区体育西路150平安大楼23022号国防科技有限公司</div>
            <div><img src="../../assets/imgs/c-1.png" alt=""></div>
        </div>
        <div class="d-3">
            <div :class="type==1?'d-4':''" data-s="1" @click="show">公司介绍</div>
            <div :class="type==2?'d-4':''" data-s="2" @click="show">公司介绍</div>
        </div>
        <div class="line"></div>
        <div class="des" :style="type==1?'':'display:none'">这是11年的时候因为GTX480发热量太大，功耗恐怖，曾经有个人用它煎鸡蛋结果把卡烧了，故得名“核弹”称号
            后来出的GTX590也是一个德行，“核弹”称号得以后继有人，黄仁勋因此被称为两弹元勋军火专家
            至于剩下的那都是黄仁勋家族一堆ID的衍生品
            说白了就是无聊的恶搞而已
        </div>
        <div class="des" :style="type==2?'':'display:none'">
            农企努力啦，你们别黑他；卡秒英特尔，u秒英伟达；价格也公道，双芯四千八；游戏更鲜艳，视频美如画；功耗虽略大，频率成佳话；风冷6g起，上水10.8；今年连亏损，都怪你们啊，不买它产品，脑子进水啦？你说他不行，你行你上啊！
        </div>
    </div>
</template>


<script src="./CompanyDetail.js">
</script>

<style src="./CompanyDetail.scss" lang="scss" scoped=""></style>

