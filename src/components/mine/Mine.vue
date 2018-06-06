<template>
    <div>
        <div class="top">
            <div class="img">
                <div :style="login==1?'':'display :none'"><img src="../../assets/imgs/1-1.png" alt=""></div>
                <div :style="login==1?'':'display :none'"></div>
                <div style="height: 5rem;line-height: 5rem;margin-right: 1rem" :style="login==1?'display :none':''" @click="go('Login')">登录</div>
            </div>
            <div class="img-2">
                <div class="name">
                    <div><img src="../../assets/imgs/per.png" alt=""></div>
                    <div>{{info.companyName}}</div>
                </div>
                <div class="name">
                    <div><img src="../../assets/imgs/tel.png" alt=""></div>
                    <div>{{info.phone}}</div>
                </div>
            </div>
        </div>
        <div class="money">
            <div>
                <img src="../../assets/imgs/pri.png" alt="" style="position: relative;top: 2px;margin-right: 2px">
                <span>速用币:</span>
                <span>{{info.wyzMoney}}</span>
            </div>
            <div><img src="../../assets/imgs/m-1-2.png" alt="" style="position: relative;top: 2px;margin-right:2px"><span>总速用币：</span><span>{{info.wyzAllmoney}}</span></div>
            <div><img src="../../assets/imgs/m-1-3.png" alt="" style="position: relative;top: 2px;margin-right: 2px"><span>等级：</span><span>{{info.agencyRank}}</span></div>
        </div>

        <div class="category">
            <div @click="go('Collect')">
                <div><img src="../../assets/imgs/m-2-1.png" alt=""></div>
                <div>我的收藏</div>
            </div>
            <div @click="go('Publish',{userId:userId})">
                <div><img src="../../assets/imgs/m-2-2.png" alt=""></div>
                <div>我的发布</div>
            </div>
            <div @click="go('Agent')">
                <div><img src="../../assets/imgs/m-2-3.png" alt=""></div>
                <div>我的代理</div>
            </div>
            <div  @click="go('Customer')">
                <div><img src="../../assets/imgs/m-2-4.png" alt=""></div>
                <div>我的客户</div>
            </div>
        </div>
        <div class="line"></div>
        <div class="category">
            <div>
                <div><img src="../../assets/imgs/m-3-1.png" alt=""></div>
                <div>充币</div>
            </div>
            <div>
                <div><img src="../../assets/imgs/m-3-2.png" alt=""></div>
                <div>授权证书</div>
            </div>
            <div @click="go('Friends')">
                <div><img src="../../assets/imgs/m-3-3.png" alt=""></div>
                <div>速用朋友圈</div>
            </div>
            <div @click="go('Share')">
                <div><img src="../../assets/imgs/m-3-4.png" alt=""></div>
                <div>我的邀请</div>
            </div>
        </div>
        <div class="line"></div>
        <div class="category">
            <div>
                <div><img src="../../assets/imgs/m-4-1.png" alt=""></div>
                <div>资料库</div>
            </div>
            <div @click="go('Feedback')"  :style="role==1?'':'display:none'">
                <div><img src="../../assets/imgs//m-4-2.png" alt="" ></div>
                <div>投诉反馈</div>
            </div>
            <div @click="go('Notify')" style="position: relative">
                <div><img src="../../assets/imgs/msg.png" alt="" ></div>
                <div>我的消息</div>
                <div class="msg" :style="isRead==0?'display:none':''">{{isRead}}</div>
            </div>
            <div  style="position: relative" @click="go('Complaint')">
                <div><img src="../../assets/imgs/m-3-5.png" alt="" ></div>
                <div>我要投诉</div>
                <!--<div class="msg" :style="isRead==0?'display:none':''">{{isRead}}</div>-->
            </div>
        </div>
        <!--<div class="certificate"><img src="../../assets/imgs/certificate.png" alt=""></div>-->
        <Footer :type="type"></Footer>
    </div>
</template>


<script src="./mine.js"></script>
<style src="./mine.scss" lang="scss" scoped=""></style>

