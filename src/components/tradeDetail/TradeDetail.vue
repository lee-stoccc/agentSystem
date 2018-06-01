<template>
    <div>
        <!--小程序模板-->
        <div class="swiperss"  :style="types==1?'':'display:none'">
            <div>
                <div class="swipera car">
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="l in list1_pic"><img :src='l.imgUrl' alt="" :id='l.id'></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-1">
                <div style="width: 1px"></div>
                <div>
                    <div class="d-2"><span>{{list1.miniappName}}</span><span style="color:#ec3939">￥&nbsp;</span><span
                            style="color:#e82424">{{list1.miniappMoney}}</span></div>
                    <div class="d-2 d-3"><span>类型：<span>{{list1.miniappType}}</span></span><img src="../../assets/imgs/t-1.png"
                                                                               alt="">&nbsp;&nbsp;<span>粉丝：</span><span>{{list1.miniappFans}}</span>
                    </div>
                    <!--<div class="d-2 d-3"><span>合作行业：<span>电商</span></span><img src="../../assets/imgs/t-2.png"-->
                                                                               <!--alt="">&nbsp;&nbsp;<span>日活跃量：</span><span>9.99</span>-->
                    <!--</div>-->
                    <div class="d-2 d-3">
                        <img src="../../assets/imgs/tel2.png" alt="">&nbsp;&nbsp;<span>{{list1.miniappPhone}}</span>
                        <span class="d-r"></span>
                        <img src="../../assets/imgs/m-2-1.png" alt="" @click="coll(id,types,'/system/wechat/myCollection')">&nbsp;&nbsp;<span>收藏</span>
                    </div>
                </div>
            </div>
            <div class="blue">商品详情</div>
            <div class="detail">{{list1.miniappDetails}}</div>
            <Footer></Footer>
        </div>
        <!--广告合作-->
        <div class="swiperss"  :style="types==2?'':'display:none'">
            <div>
                <div class="swipera car">
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="l in list2_pic"><img :src='l.imgUrl' alt="" :id='l.id'></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-1">
                <div style="width: 1px"></div>
                <div>
                    <div class="d-2"><span>{{list2.advertisingName}}</span><span style="color:#ec3939">￥&nbsp;</span><span
                            style="color:#e82424">{{list2.advertisingMoney}}</span></div>
                    <div class="d-2 d-3"><span>合作类型：<span>{{list2.cooperationType}}</span></span><img src="../../assets/imgs/t-1.png"
                                                                               alt="">&nbsp;&nbsp;<span>粉丝：</span><span>{{list2.advertisingFans}}</span>
                    </div>
                    <div class="d-2 d-3"><span>合作行业：<span>{{list2.cooperationBusiness}}</span></span>
                        <img src="../../assets/imgs/t-2.png" alt="">&nbsp;&nbsp;
                        <span>&nbsp;</span><span>&nbsp;</span>
                    </div>
                    <div class="d-2 d-3">
                        <img src="../../assets/imgs/tel2.png" alt="">&nbsp;&nbsp;<span>{{list2.advertisingPhone}}</span>
                        <span class="d-r"></span>
                        <img src="../../assets/imgs/m-2-1.png" alt="" @click="coll(id,types,'/system/wechat/myCollection')">&nbsp;&nbsp;<span>收藏</span>
                    </div>
                </div>
            </div>
            <div class="blue">商品详情</div>
            <div class="detail">{{list2.advertisingDetails}}</div>
            <Footer></Footer>
        </div>
        <!--合作经营-->
        <div class="swiperss"  :style="types==3?'':'display:none'">
            <div>
                <div class="swipera car">
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="l in url"><img :src='l.url' alt="" :id='l.id'></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-1">
                <div style="width: 1px"></div>
                <div>
                    <div class="d-2"><span>合作经营</span><span style="color:#ec3939">￥&nbsp;</span><span
                            style="color:#e82424">9.99</span></div>
                    <div class="d-2 d-3"><span>合作经营行业：<span>军工</span></span><img src="../../assets/imgs/t-1.png"
                                                                               alt="">&nbsp;&nbsp;<span>粉丝：</span><span>9.99</span>
                    </div>
                    <div class="d-2 d-3">
                        <img src="../../assets/imgs/tel2.png" alt="">&nbsp;&nbsp;<span>15920128088</span>
                        <span class="d-r"></span>
                        <img src="../../assets/imgs/m-2-1.png" alt="" @click="coll(id,types,'/system/wechat/myCollection')">&nbsp;&nbsp;<span>收藏</span>
                    </div>
                </div>
            </div>
            <div class="blue">商品详情</div>
            <div class="detail">{{info.description}}</div>
            <Footer></Footer>
        </div>
        <!--运营商-->
        <div class="swiperss"  :style="types==4?'':'display:none'">
            <div>
                <div class="swipera car">
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="l in url"><img :src='l.url' alt="" :id='l.id'></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-1">
                <div style="width: 1px"></div>
                <div>
                    <div class="d-2"><span>运营商名字</span><span style="color:#ec3939">￥&nbsp;</span><span
                            style="color:#e82424">9.99</span></div>
                    <div class="d-2 d-3"><span>周期：<span>2-5月</span></span><img src="../../assets/imgs/t-1.png"
                                                                               alt="">&nbsp;&nbsp;<span>粉丝：</span><span>9.99</span>
                    </div>
                    <div class="d-2 d-3">
                        <img src="../../assets/imgs/tel2.png" alt="">&nbsp;&nbsp;<span>15920128088</span>
                        <span class="d-r"></span>
                        <img src="../../assets/imgs/m-2-1.png" alt="" @click="coll(id,types,'/system/wechat/myCollection')">&nbsp;&nbsp;
                    </div>
                </div>
            </div>
            <div class="blue">商品详情</div>
            <div class="detail">{{info.description}}</div>
            <Footer></Footer>
        </div>
        <!--商家-->
        <div class="swiperss" :style="types==5?'':'display:none'">
            <div>
                <div class="swipera car">
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="l in url"><img :src='l.url' alt="" :id='l.id'></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-1">
                <div style="width: 1px"></div>
                <div>
                    <div class="d-2"><span>商家名称</span><span style="color:#ec3939">￥&nbsp;</span><span
                            style="color:#e82424">9.99</span></div>
                    <div class="d-2 d-3"><span>行业名称：<span>保护伞公司</span></span><img src="../../assets/imgs/m-2-1.png"
                                                                               alt="">&nbsp;&nbsp;<span>收藏</span>
                    </div>
                    <div class="d-2 d-3">
                        <img src="../../assets/imgs/tel2.png" alt="" @click="coll(id,types,'/system/wechat/myCollection')">&nbsp;&nbsp;<span>15920128088</span>
                        <span class="d-r"></span>
                    </div>
                </div>
            </div>
            <div class="blue">商品详情</div>
            <div class="detail">{{info.description}}</div>
            <Footer></Footer>
        </div>
    </div>
</template>

<script src="./tradeDetail.js">

</script>

<style src="./tradeDetail.scss" lang="scss" scoped=""></style>

