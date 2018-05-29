<template>
    <div>
        <div class="logo"><img src="../../assets/imgs/swiper01.jpg" alt=""></div>
        <div>
            <div class="type">
                <div :class="types==1?'cho':'uncho'" @click="show" id="1" data-s="1">小程序</div>
                <div class="colline"></div>
                <div :class="types==2?'cho':'uncho'" @click="show" id="2" data-s="2">广告合作</div>
                <div class="colline"></div>
                <div :class="types==3?'cho':'uncho'" @click="show" id="3" data-s="3">合作经营</div>
                <div class="colline"></div>
                <div :class="types==4?'cho':'uncho'" @click="show" id="4" data-s="4" class="cho-list">
                    <div @click="choarea">{{name}}</div>
                    <div><img src="../../assets/imgs/t-3.png" alt=""></div>
                </div>

            </div>
            <div  class="area"    :class="dot==true?'dis':'dis2'">
                <div v-for="n in area" :data-sid=n.id  :data-na=n.name  @click="chos">{{n.name}}</div>
            </div>
            <!--小程序-->
            <div class="d-1" :style="types==1?'':'display:none'"
                 v-for="l in list1"
                 @click="go('TradeDetail',{id:l.id,types:3})">
                <div><img :src='l.advertisingMainImgurl' alt=""></div>
                <div>
                    <div class="d-2"><span>{{l.advertisingName}}</span><span style="color:#ec3939">￥&nbsp;</span><span
                            style="color:#e82424">{{l.advertisingMoney}}</span></div>
                    <div class="d-2 d-3"><span>小程序类别</span><img src="../../assets/imgs/t-1.png"
                                                                alt="">&nbsp;&nbsp;<span>粉丝：</span><span>{{l.advertisingFans}}</span>
                    </div>
                    <div class="d-2 d-3">
                        <img src="../../assets/imgs/tel2.png" alt="">&nbsp;&nbsp;<span>15920128088</span>
                        <span class="d-r"></span>
                        <img src="../../assets/imgs/m-2-1.png" alt="">&nbsp;&nbsp;
                    </div>
                </div>
            </div>
            <!--广告和做-->
            <div class="d-1" :style="types==2?'':'display:none'"
                 v-for="l in list2"
                 @click="go('TradeDetail',{id:l.id,types:1})">
                <div><img :src='l.advertisingDetailsImgurl' alt=""></div>
                <div>
                    <div class="d-2"><span>{{l.advertisingName}}</span><span style="color:#ec3939" @click="go('TradeDetail',{id:12,types:1})">￥&nbsp;</span><span
                            style="color:#e82424">{{l.advertisingMoney}}</span></div>
                    <div class="d-2"><span style="font-size: 1rem">合作类型:{{l.cooperationType}}</span><span>合作行业:{{l.cooperationBusiness}}</span></div>
                    <div class="d-2 d-3">
                        <img src="../../assets/imgs/t-2.png" alt="">&nbsp;&nbsp;<span>日活量：</span><span>{{l.active}}</span>
                        <span class="d-r"></span>
                        <img src="../../assets/imgs/t-1.png" alt="">&nbsp;&nbsp;<span>粉丝：</span><span>{{l.advertisingFans}}</span>
                    </div>
                    <div class="d-2 d-3">
                        <img src="../../assets/imgs/tel2.png" alt="">&nbsp;&nbsp;<span>15920128088</span>
                        <span class="d-r"></span>
                        <img src="../../assets/imgs/m-2-1.png" alt="">&nbsp;&nbsp;
                    </div>
                </div>
            </div>
            <!--合作经营-->
            <div class="d-1" :style="types==3?'':'display:none'" @click="go('TradeDetail',{id:12,types:3})">
                <div><img src="../../assets/imgs/c-1.png" alt=""></div>
                <div>
                    <div class="d-2"><span>合作经营</span><span style="color:#ec3939">￥&nbsp;</span><span
                            style="color:#e82424">9.99</span></div>
                    <div class="d-2 d-3"><span>小程序行业</span><img src="../../assets/imgs/t-1.png"
                                                                alt="">&nbsp;&nbsp;<span>粉丝：</span><span>9.99</span>
                    </div>
                    <div class="d-2 d-3">
                        <img src="../../assets/imgs/tel2.png" alt="">&nbsp;&nbsp;<span>15920128088</span>
                        <span class="d-r"></span>
                        <img src="../../assets/imgs/m-2-1.png" alt="">&nbsp;&nbsp;
                    </div>
                </div>

            </div>
            <!--运营-->
            <div class="d-1" :style="types==4?'':'display:none'" @click="go('TradeDetail',{id:12,types:4})">
                <div><img src="../../assets/imgs/c-1.png" alt=""></div>
                <div>
                    <div class="d-2"><span>运营商</span><span style="color:#ec3939">￥&nbsp;</span><span
                            style="color:#e82424">9.99</span></div>
                    <div class="d-2 d-3"><span>周期：<span>2-5月</span></span><img src="../../assets/imgs/t-1.png"
                                                                alt="">&nbsp;&nbsp;<span>粉丝：</span><span>9.99</span>
                    </div>
                    <div class="d-2 d-3">
                        <img src="../../assets/imgs/tel2.png" alt="">&nbsp;&nbsp;<span>15920128088</span>
                        <span class="d-r"></span>
                        <img src="../../assets/imgs/m-2-1.png" alt="">&nbsp;&nbsp;
                    </div>
                </div>
            </div>
        </div>
        <Footer :type="type"></Footer>
    </div>
</template>

<script src="./trade.js">

</script>

<style src="./trade.scss" lang="scss" scoped=""></style>

