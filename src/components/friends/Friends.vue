<template>
    <div style="position: relative">
        <AlertInput class="alertinptu" :isshow="isshow" :showInput="showInput" :showImg="showImg" :src="src" v-on:canceinput_z="getsdf"></AlertInput>
        <div class="coll">速用朋友圈</div>
        <div v-for="item in list">

            <div style="margin-left: 1.4rem;margin-top: 0.6rem;margin-bottom: 0.6rem">{{item.content}}</div>
            <div :class="num==1?'temp':'temp-1'">
                <div v-for="l in item.picUrls">
                    <div :id='l.pId'  >
                        <img :src='l.url' alt="" @click="getSrc">
                    </div>
                </div>
            </div>
            <div class="hours">
                <div><span>{{item.timeBefore}}</span></div>
                <div @click="updatalike(item.id)"><img src="../../assets/imgs/f-1.png" alt="" >&nbsp;&nbsp;{{item.likeCount}}</div>
            </div>
            <div class="says">
                <div v-for="i in item.comments">
                    <span style="color: #25aaff">{{i.userName}}</span> <span>:</span><span>{{i.content}}</span>
                </div>
            </div>
            <div style="width: 100%;height: 1px;background-color: #eee;margin-top: 0.9rem;margin-bottom: 0.8rem"></div>
        </div>
        <!--点击弹框放大图片-->

    </div>
</template>

<script src="./friends.js">

</script>

<style src="./friends.scss" lang="scss" scoped=""></style>

