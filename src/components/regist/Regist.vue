<template>
    <div class="bg">
        <div class="login">
            <div class="title">加入速用，感受科技的魅力</div>
            <div class="title-1">欢迎注册速用科技后台管理系统</div>
            <div class="use">用户名</div>
            <div class="ainput">
                <input type="text" placeholder="companyName" v-model="companyName">
            </div>
            <div class="use">手机号码</div>
            <div class="ainput">
                <input type="text" placeholder="phone" v-model="phone">
            </div>
            <div class="use">手机验证码</div>
            <div class="code">
                <div><input type="text" placeholder="code" v-model="code"></div>
                <div>获取验证码</div>
            </div>
            <div class="use" style="margin-top: 1rem" >密码</div>
            <div class="ainput">
                <input type="text" placeholder="password" v-model="password">
            </div>
            <div class="use" >推荐码</div>
            <div class="ainput">
                <input type="text" placeholder="inviteCode" v-model="inviteCode">
            </div>

            <div class="sign" @click="sub()">
                注册
            </div>
        </div>
    </div>
</template>

<script src="./regist.js">

</script>

<style src="./regist.scss" lang="scss" scoped=""></style>

