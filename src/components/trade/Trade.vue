<template>
    <div>
        <div class="swipera car">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="l in swiperList"><img :src='l.imgUrl' alt="" :id='l.id'></div>
                </div>
            </div>
        </div>
        <div style="margin-bottom: 5rem">
            <div class="type">
                <div :class="types==1?'cho':'uncho'" @click="shows" id="1" data-s="1">小程序</div>
                <div class="colline"></div>
                <div :class="types==2?'cho':'uncho'" @click="shows" id="2" data-s="2">广告合作</div>
                <div class="colline"></div>
                <div :class="types==3?'cho':'uncho'" @click="shows" id="3" data-s="3">合作经营</div>
                <div class="colline"></div>
                <div :class="types==4?'cho':'uncho'" @click="shows" id="4" data-s="4" class="cho-list">
                    <div @click="choarea">{{name}}</div>
                    <div><img src="../../assets/imgs/t-3.png" alt="" ></div>
                </div>

            </div>
            <div  class="area"    :class="dot==true?'dis':'dis2'">
                <div v-for="n in area" :data-sid=n.id  :data-na=n.name  @click="chos">{{n.name}}</div>
            </div>
            <!--小程序-->
            <div class="d-1" :style="types==1?'':'display:none'"
                 v-for="l in list1"
                 @click="go('TradeDetail',{id:l.id,types:1})">
                <div><img :src='l.miniappMainImgurl' alt=""></div>
                <div>
                    <div class="d-2"><span>{{l.miniappName}}</span><span style="color:#ec3939">￥&nbsp;</span><span
                            style="color:#e82424">{{l.miniappMoney}}</span></div>
                    <div class="d-2 d-3"><span>{{l.miniappType}}</span><img src="../../assets/imgs/t-1.png"
                                                                alt="">&nbsp;&nbsp;<span>粉丝：</span><span>{{l.miniappFans}}</span>
                    </div>
                    <div class="d-2 d-3">
                        <img src="../../assets/imgs/tel2.png" alt="">&nbsp;&nbsp;<span>{{l.miniappPhone}}</span>
                        <span class="d-r"></span>
                        <img src="../../assets/imgs/m-2-1.png" alt="" @click.stop="coll(l.id,types,'/system/wechat/myCollection')">&nbsp;&nbsp;
                    </div>
                </div>
            </div>
            <!--广告和做-->
            <div class="d-1" :style="types==2?'':'display:none'"
                 v-for="l in list2"
                 @click="go('TradeDetail',{id:l.id,types:2})">
                <div><img :src='l.advertisingMainImgurl' alt=""></div>
                <div>
                    <div class="d-2"><span>{{l.advertisingName}}</span><span style="color:#ec3939" >￥&nbsp;</span><span
                            style="color:#e82424">{{l.advertisingMoney}}</span></div>
                    <div class="d-2"><span style="font-size: 1rem">合作类型:{{l.cooperationType}}</span><span>合作行业:{{l.cooperationBusiness}}</span></div>
                    <div class="d-2 d-3">
                        <img src="../../assets/imgs/t-2.png" alt="">&nbsp;&nbsp;<span>日活量：{{l.active}}</span><span>{{l.active}}</span>
                        <span class="d-r"></span>
                        <img src="../../assets/imgs/t-1.png" alt="">&nbsp;&nbsp;<span>粉丝：</span><span>{{l.advertisingFans}}</span>
                    </div>
                    <div class="d-2 d-3">
                        <img src="../../assets/imgs/tel2.png" alt="">&nbsp;&nbsp;<span>{{l.advertisingPhone}}</span>
                        <span class="d-r"></span>
                        <img src="../../assets/imgs/m-2-1.png" alt=""  @click.stop="coll(l.id,types,'/system/wechat/myCollection')">&nbsp;&nbsp;
                    </div>
                </div>
            </div>
            <!--合作经营-->
            <div class="d-1" :style="types==3?'':'display:none'"
                 v-for="l in list3"
                 @click="go('TradeDetail',{id:l.id,types:3})">
                <div><img :src='l.manageMainImgurl' alt=""></div>
                <div>
                    <div class="d-2"><span>{{l.manageName}}</span><span style="color:#ec3939">￥&nbsp;</span><span
                            style="color:#e82424">{{l.manageMoney}}</span></div>
                    <div class="d-2 d-3"><span>{{l.manageVocation}}</span><img src="../../assets/imgs/t-1.png"
                                                                alt="">&nbsp;&nbsp;<span>粉丝：</span><span>{{l.manageFans}}</span>
                    </div>
                    <div class="d-2 d-3">
                        <img src="../../assets/imgs/tel2.png" alt="">&nbsp;&nbsp;<span>{{l.managePhone}}</span>
                        <span class="d-r"></span>
                        <img src="../../assets/imgs/m-2-1.png" alt=""  @click.stop="coll(l.id,types,'/system/wechat/myCollection')">&nbsp;&nbsp;
                    </div>
                </div>
            </div>
            <!--运营商-->
            <div class="d-1" :style="types==4?'':'display:none'"
                 v-for="l in list4"
                 @click="go('TradeDetail',{id:l.id,types:4})">
                <div><img :src="l.operatorMainImgurl" alt=""></div>
                <div>
                    <div class="d-2"><span>{{l.operatorName}}</span><span style="color:#ec3939">￥&nbsp;</span><span
                            style="color:#e82424">{{l.operatorPhone}}</span></div>
                    <div class="d-2 d-3"><span>周期：<span>{{l.operatorCycle}}</span></span><img src="../../assets/imgs/t-1.png"
                                                                alt="">&nbsp;&nbsp;<span>粉丝：</span><span>{{l.operatorFans}}</span>
                    </div>
                    <div class="d-2 d-3">
                        <img src="../../assets/imgs/tel2.png" alt="">&nbsp;&nbsp;<span>{{l.operatorMoney}}</span>
                        <span class="d-r"></span>
                        <img src="../../assets/imgs/m-2-1.png" alt=""  @click.stop="coll(l.id,types,'/system/wechat/myCollection')">&nbsp;&nbsp;
                    </div>
                </div>
            </div>
            <!--商家-->
            <div class="d-1" :style="types==5?'':'display:none'"
                 v-for="l in list5"
                 @click="go('TradeDetail',{id:l.id,types:5})">
                <div><img :src='l.merchantMainImgurl' alt=""></div>
                <div>
                    <div class="d-2"><span>{{l.merchantName}}</span><span style="color:#ec3939">￥&nbsp;</span><span
                            style="color:#e82424">{{l.merchantPhone}}</span></div>
                    <div class="d-2 d-3"><span>行业：<span>{{l.merchantTrade}}</span></span><img src="../../assets/imgs/t-1.png"
                                                                               alt="">&nbsp;&nbsp;<span>粉丝：</span><span>{{l.merchantTrade}}</span>
                    </div>
                    <div class="d-2 d-3">
                        <img src="../../assets/imgs/tel2.png" alt="">&nbsp;&nbsp;<span>{{l.merchantPhone}}</span>
                        <span class="d-r"></span>
                        <img src="../../assets/imgs/m-2-1.png" alt=""  @click.stop="coll(l.id,types,'/system/wechat/myCollection')">&nbsp;&nbsp;
                    </div>
                </div>
            </div>
        </div>
        <Alert :tips='tips' :show="show"></Alert>
        <Footer :type="type"></Footer>
    </div>
</template>
<link rel="stylesheet" href="/static/swiper.min.css"/>
<script src="/static/swiper.min.js"></script>
<script src="./trade.js">

</script>

<style src="./trade.scss" lang="scss" scoped=""></style>

