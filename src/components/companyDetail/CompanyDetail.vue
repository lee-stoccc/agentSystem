<template>
    <div>
        <div class="logo"><img :src="l.companyUrl" alt=""></div>
        <div class="logo-1"><img :src="l.companyUrl" alt=""></div>
        <div class="name">{{l.companyName}}</div>
        <div class="other">
            <span>{{l.companyStatus}}</span>
            <span>/</span>
            <span>{{l.number}}</span>
            <span>/</span>
            <span>{{l.companyType}}</span>
            <span>/</span>
            <span>{{l.companyProperty}}</span>
        </div>
        <div class="line"></div>
        <div class="d-1">
            <div>法定代表人：</div>
            <div>{{l.representative}}</div>
        </div>
        <div class="d-1">
            <div>公司联系电话：</div>
            <div>{{l.companyPhone}}</div>
        </div>
        <div class="d-1">
            <div>公司邮箱：</div>
            <div>{{l.companyEmail}}</div>
        </div>
        <div class="line"></div>
        <div class="d-1 d-2">
            <div>地址：</div>
            <div>{{l.companyAdress}}</div>
            <div><img src="../../assets/imgs/c-1.png" alt=""></div>
        </div>
        <div class="d-3">
            <div :class="type==1?'d-4':''" data-s="1" @click="show">公司介绍</div>
            <div :class="type==2?'d-4':''" data-s="2" @click="show">公司介绍</div>
        </div>
        <div class="line"></div>
        <div class="des" :style="type==1?'':'display:none'">{{l.companyIntroduce}}
        </div>
        <div class="des" :style="type==2?'':'display:none'">
            农企努力啦，你们别黑他；卡秒英特尔，u秒英伟达；价格也公道，双芯四千八；游戏更鲜艳，视频美如画；功耗虽略大，频率成佳话；风冷6g起，上水10.8；今年连亏损，都怪你们啊，不买它产品，脑子进水啦？你说他不行，你行你上啊！
        </div>
    </div>
</template>


<script src="./CompanyDetail.js">
</script>

<style src="./CompanyDetail.scss" lang="scss" scoped=""></style>

