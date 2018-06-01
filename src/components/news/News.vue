<template>
    <div style="background-color:#eee">
        <div class="coll">新闻</div>
        <div class="list" @click="go('NewDetail',{id:l.id})" v-for="l in list">
            <div><img :src='l.url' alt=""></div>
            <div class="msg">
                <div>{{l.title}}</div>
                <div>{{l.content}}</div>
                <div class="time" style="margin-top:5px"> {{l.createTime}}</div>
            </div>
        </div>
    </div>
</template>

<script src="./news.js">

</script>

<style src="./news.scss" lang="scss" scoped=""></style>

