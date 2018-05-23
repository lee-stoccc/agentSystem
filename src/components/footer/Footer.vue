<template>
    <div class="foot">
        <div @click="cho">
            <div><img :src="type==1?src[4]:src[0]" alt="" data-t="1" @click="cho" data-n="Index"></div>
            <div :style="type==1?'color:#25aaff':'color:#333'" @click="cho" data-t="1" data-n="Index">首页</div>
        </div>
        <div @click="cho">
            <div><img :src="type==2?src[5]:src[1]" alt="" data-t="2" @click="cho" data-n="Trade"></div>
            <div :style="type==2?'color:#25aaff':'color:#333'" @click="cho" data-t="2" data-n="Trade">交易中心</div>
        </div>
        <div @click="cho">
            <div><img :src="type==3?src[6]:src[2]" alt="" data-t="3" @click="cho" data-n="Mine"></div>
            <div :style="type==3?'color:#25aaff':'color:#333'" @click="cho" data-t="3" data-n="Mine">我的</div>
        </div>
        <div @click="cho">
            <div><img :src="type==4?src[7]:src[3]" alt="" data-t="4" @click="cho" data-n="CompanyList"></div>
            <div :style="type==4?'color:#25aaff':'color:#333'" @click="cho" data-t="4" data-n="CompanyList">分公司</div>
        </div>
    </div>
</template>

<script src="./footer.js">

</script>

<style src="./footer.scss" lang="scss" scoped=""></style>

