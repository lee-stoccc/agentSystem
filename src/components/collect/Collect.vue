<template>
    <div>
        <div class="coll">我的收藏</div>
        <div>
            <!--小程序-->
            <div class="d-1" :style="type==1?'':'display:none'"
                 v-for="l in list" :id='l.appid' @click="godetail(l.appid,l.types)">
                <div><img :src='l.url' alt=""></div>
                <div>
                    <div class="d-2"><span>{{l.name}}</span><span style="color:#ec3939">￥&nbsp;</span><span
                            style="color:#e82424">{{l.price}}</span></div>
                    <!--<div class="d-2 d-3"><span>小程序类别</span><img src="../../assets/imgs/t-1.png"-->
                                                                <!--alt="">&nbsp;&nbsp;<span>粉丝：</span><span>9.99</span>-->
                    <!--</div>-->
                    <!--<div class="des">三千预算进卡吧,加钱加到九万八,八核 E5 装上去</div>-->
                </div>
            </div>
            <!--广告和做-->
            <div class="d-1" :style="type==2?'':'display:none'">
                <div><img src="../../assets/imgs/c-1.png" alt=""></div>
                <div>
                    <div class="d-2"><span>广告合作社</span><span style="color:#ec3939">￥&nbsp;</span><span
                            style="color:#e82424">9.99</span></div>
                    <div class="d-2"><span style="font-size: 1rem">合作类型</span><span style="color: #666">合作行业</span></div>
                    <div class="d-2 d-3">
                        <img src="../../assets/imgs/t-2.png" alt="">&nbsp;&nbsp;<span>日活量：</span><span style="color:#ff6e36">9999</span>
                        <span class="d-r"></span>
                        <img src="../../assets/imgs/t-1.png" alt="">&nbsp;&nbsp;<span>粉丝：</span><span style="color:#ff6e36"> 9.99</span>
                    </div>
                    <div class="des">三千预算进卡吧,加钱加到九万八,八核 E5 装上去</div>
                </div>
            </div>
            <!--小程序-->
            <div class="d-1" :style="type==3?'':'display:none'">
                <div><img src="../../assets/imgs/c-1.png" alt=""></div>
                <div>
                    <div class="d-2"><span>小程序名字</span><span style="color:#ec3939">￥&nbsp;</span><span
                            style="color:#e82424">9.99</span></div>
                    <div class="d-2 d-3"><span>小程序行业</span><img src="../../assets/imgs/t-1.png"
                                                                alt="">&nbsp;&nbsp;<span>粉丝：</span><span>9.99</span>
                    </div>
                    <div class="des">三千预算进卡吧,加钱加到九万八,八核 E5 装上去</div>
                </div>
            </div>
            <!--运营-->
            <div class="d-1" :style="type==11?'':'display:none'">
                <div><img src="../../assets/imgs/c-1.png" alt=""></div>
                <div>
                    <div class="d-2"><span>小程序名字</span><span style="color:#ec3939">￥&nbsp;</span><span
                            style="color:#e82424">9.99</span></div>
                    <div class="d-2 d-3"><span>周期：<span>2-5月</span></span><img src="../../assets/imgs/t-1.png"
                                                                               alt="">&nbsp;&nbsp;<span>粉丝：</span><span>9.99</span>
                    </div>
                    <div class="des">三千预算进卡吧,加钱加到九万八,八核 E5 装上去</div>
                </div>
            </div>
        </div>
        <Footer :type="type"></Footer>
    </div>
</template>

<script src="./collect.js">

</script>

<style src="./collect.scss" lang="scss" scoped=""></style>

