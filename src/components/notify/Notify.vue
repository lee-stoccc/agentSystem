<template>
    <div style="background-color:#eee"   >
        <div class="coll">我的消息</div>
        <div class="msg" v-for="l in list" @click="go('NewDetail',{id:l.id,is_otify:true})" style="position: relative">
            <div>{{l.title}}</div>
            <div>{{l.content}}</div>
            <div class="time" >时间：{{l.createDate}}</div>
            <div class="status">{{l.isRead==1?'已读':'未读'}}</div>
        </div>
    </div>
</template>

<script src="./notify.js">

</script>

<style src="./notify.scss" lang="scss" scoped=""></style>

