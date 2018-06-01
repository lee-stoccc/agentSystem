<template>
    <div style="background-color:#eee"   >
        <div class="coll">我的消息</div>
        <div class="msg" v-for="l in list">
            <div>{{l.title}}</div>
            <div>{{l.content}}</div>
            <div class="time" >时间：{{l.createDate}}</div>
        </div>
    </div>
</template>

<script src="./notify.js">

</script>

<style src="./notify.scss" lang="scss" scoped=""></style>

