<template>
    <div>
        <div :style="isnotify==0?'':'display:none'">
            <div class="title">{{info.title}}</div>
            <div class="img"><img :src='info.url' alt=""></div>
            <div class="text">{{info.content}}</div>
        </div>

        <div :style="isnotify==0?'display:none':''">
            <div class="title title2" >{{info2.title}}</div>
            <div class="text">{{info2.content}}</div>
        </div>
    </div>
</template>

<script src="./nesdetail.js">

</script>

<style src="./newDetail.scss" lang="scss" scoped=""></style>

