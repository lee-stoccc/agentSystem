<template>
    <div>
        <div class="text">邀请好友注册成功即可获得{{coin}}速用币奖励</div>
        <div class="text-1">邀请好友注册速用科技，开启你的致富之旅吧！</div>
        <div class="line"></div>
        <div class="text-2">注册速用科技用微信小程序挣钱，开启你的致富之旅！
            <div class="t-3">
                <div style="width: 73%;word-wrap: break-word; word-break: normal; ">{{qrcodeUrl}}</div>
                <div><img src="../../assets/imgs/logo.png" alt=""></div>
            </div>
        </div>
        <div class="t-4">
            <div>复制分享链接</div>
            <div>分享邀请好友</div>
        </div>
        <div class="t-5" @click="share">生成专属你的邀请名片</div>
        <div class="bg" :style="type==1?'':'display:none'">
            <img src="../../assets/imgs/l-b.png" alt="">
            <div class="z-3">
                <div class="bg-1">注册速用科技用微信小程序挣钱，开启你的致富之旅！</div>
                <div class="bg-2"><div v-show="qrcodeUrl" class="response" >
                    <qrcode
                            :value="qrcodeUrl"
                            v-if="qrcodeUrl"
                            :options="{ size: 170 }">
                    </qrcode>
                </div></div>

                <div class="bg-3" @click="save">保存分享</div>
            </div>
        </div>
    </div>
</template>
<script src="../../../static/qrcode.js"></script>
<script src="./share.js"></script>

<style src="./share.scss" lang="scss" scoped=""></style>

