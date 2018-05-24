<template>

    <div class="bg">
        <div class="login">
            <div class="type">
                <div :class="type==1?'cho':'uncho'" @click="shows" id="type1" data-s="1">账户登录</div>
                <div :class="type==2?'cho':'uncho'" @click="shows" id="type2" data-s="2">短信登入</div>
            </div>
            <div :style="type==1?'':'display:none'">
                <div class="ainput">

                    <input type="text" placeholder="请输入用户名" v-model="phone">
                    <div><img src="../../assets/imgs/l-1.png" alt=""></div>
                </div>
                <div class="ainput">

                    <input type="text" placeholder="请输入密码" v-model="password">
                    <div><img src="../../assets/imgs/l-2.png" alt=""></div>
                </div>
                <div class=" sign" @click="login">
                    马上登录
                </div>
                <div class="category">
                    <div>
                        <div><img src="../../assets/imgs/l-3.png" alt=""></div>
                        <div>官网链接</div>
                    </div>
                    <div>
                        <div><img src="../../assets/imgs/l-4.png" alt=""></div>
                        <div>快速注册</div>
                    </div>
                    <div>
                        <div><img src="../../assets/imgs/l-5.png" alt=""></div>
                        <div>找回密码</div>
                    </div>
                </div>
            </div>
            <div   :style="type==2?'':'display:none'">
                <div class="ainput">

                    <input type="text" placeholder="请输入手机号码" v-model="phone">
                    <div><img src="../../assets/imgs/l-7.png" alt="" style="width: 1rem;height: 1.4rem"></div>
                </div>
                <div class="ainput">
                    <input type="text" placeholder="请输入验证码" v-model="sms_num" style="margin-right: -1rem">
                    <button class="getcode" @click="getMsn" :disabled="isDisable" id="code"> {{time}}</button>
                    <!--<div><img src="../../assets/imgs/l-6.png" alt="" style="width: 4rem;height: 1.4rem;position: relative;margin-left: -2rem"></div>-->
                </div>
                <div class=" sign " @click="loginPhone">
                    马上登录
                </div>
                <div class="category">
                    <div>
                        <div><img src="../../assets/imgs/l-3.png" alt=""></div>
                        <div>官网链接</div>
                    </div>
                    <div @click="go('Regist')">
                        <div><img src="../../assets/imgs/l-4.png" alt=""></div>
                        <div>快速注册</div>
                    </div>
                    <div>
                        <div><img src="../../assets/imgs/l-5.png" alt=""></div>
                        <div>找回密码</div>
                    </div>
                </div>
            </div>
        </div>
        <Alert :tips="tips" :show="show"></Alert>
    </div>


</template>


<script src="./login.js">

</script>

<style src="./login.scss" lang="scss" scoped=""></style>

