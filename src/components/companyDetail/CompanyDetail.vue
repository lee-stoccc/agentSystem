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
        </div>
        <div class="line"></div>
        <div class="des" :style="type==1?'':'display:none'">{{l.companyIntroduce}}
        </div>
    </div>
</template>


<script src="./CompanyDetail.js">
</script>

<style src="./CompanyDetail.scss" lang="scss" scoped=""></style>

