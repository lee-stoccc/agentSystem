<template>
    <div>
        <div class="logo"><img src="../../assets/imgs/swiper01.jpg" alt=""></div>
        <div>
            <div class="type">
                <div :class="type==1?'cho':'uncho'" k id="1" data-s="1">小程序</div>
                <div class="colline"></div>
                <div :class="type==2?'cho':'uncho'" @click="show" id="2" data-s="2">广告合作</div>
                <div class="colline"></div>
                <div :class="type==3?'cho':'uncho'" @click="show" id="3" data-s="3">合作经营</div>
                <div class="colline"></div>
                <div :class="type==4?'cho':'uncho'" @click="show" id="4" data-s="4" class="cho-list">
                    <div :style="aid==''?'':'display:none'"  @click="choarea">运营 </div>
                    <div :style="aid==''?'display:none':''"  @click="choarea">{{aname}}</div>
                    <div><img src="../../assets/imgs/t-3.png" alt=""></div>
                </div>

            </div>
            <div  class="area"    @click="chos" :class="dot==true?'dis':'dis2'">
                <div v-for="n in area" :data-sid=n.id  :data-na=n.name>{{n.name}}</div>
            </div>
            <!--小程序-->
            <div class="d-1" :style="type==1?'':'display:none'">
                <div><img src="../../assets/imgs/c-1.png" alt=""></div>
                <div>
                    <div class="d-2"><span>小程序名字</span><span style="color:#ec3939">￥&nbsp;</span><span
                            style="color:#e82424">9.99</span></div>
                    <div class="d-2 d-3"><span>小程序类别</span><img src="../../assets/imgs/t-1.png"
                                                                alt="">&nbsp;&nbsp;<span>粉丝：</span><span>9.99</span>
                    </div>
                    <div class="des">三千预算进卡吧,加钱加到九万八,八核 E5 装上去</div>
                </div>
            </div>
            <!--广告和做-->
            <div class="d-1" :style="type==2?'':'display:none'">
                <div><img src="../../assets/imgs/c-1.png" alt=""></div>
                <div>
                    <div class="d-2"><span>广告合作社</span><span style="color:#ec3939">￥&nbsp;</span><span
                            style="color:#e82424">9.99</span></div>
                    <div class="d-2"><span style="font-size: 1rem">合作类型</span><span>合作行业</span></div>
                    <div class="d-2 d-3">
                        <img src="../../assets/imgs/t-2.png" alt="">&nbsp;&nbsp;<span>日活量：</span><span>9999</span>
                        <span class="d-r"></span>
                        <img src="../../assets/imgs/t-1.png" alt="">&nbsp;&nbsp;<span>粉丝：</span><span>9.99</span>
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
    </div>
</template>

<script src="./trade.js">

</script>

<style src="./trade.scss" lang="scss" scoped=""></style>

