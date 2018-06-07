<template>
    <div>
        <div :class="isshow=='0'?'bg':''" style="background-color: #eee" @click="canceinput"></div>
        <div class="call" :style="showInput=='0'?'':'display:none'">
            <div class="welcome">欢迎光临!新系统新增用户地图定位功能，为了更好的体验请您填写一下地址.</div>
            <div style="background-color: #eee;height: 1px;width: 100%"></div>
            <div class="address">地址：</div>
            <div id="example">
                <select v-model="prov">
                    <option v-for="option in arr" :value="option.name" >
                        {{ option.name }}
                    </option>
                </select>
                <select v-model="city">
                    <option v-for="option in cityArr" :value="option.name">
                        {{ option.name }}
                    </option>
                </select>
                <select v-model="district" v-if="district">
                    <option v-for="option in districtArr" :value="option.name">
                        {{ option.name }}
                    </option>
                </select>
            </div>
            <div class="add1">地址：</div>
            <div class="add2"><input type="text" v-model="address_de"></div>
            <div class="sub" @click="submit">提交</div>
            <div class="add1" style="padding-bottom: 0;color: #999">注意事项：</div>
            <div class="welcome" style="padding-top: 0;color: #999">
                1.仅当第一次登入新系统时才回弹出此框，后续不再弹出，敬请原谅
            </div>
        </div>

        <div :style="showImg=='0'?'':'display:none'" class="showImg">

            <img :src='src' alt="">
        </div>
    </div>
</template>
<script src="./ai.js">

</script>

<style src="./ai.scss" lang="scss" scoped=""></style>

