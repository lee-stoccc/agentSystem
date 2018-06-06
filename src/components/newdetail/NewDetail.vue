<template>
    <div>
        <div :style="isnotify==false?'':'display:none'">
            <div class="title">{{info.title}}</div>
            <div class="img"><img :src='info.url' alt=""></div>
            <div class="text">{{info.content}}</div>
        </div>

        <div :style="isnotify==true?'':'display:none'">
            <div class="title">{{info.title}}</div>
            <div class="img"><img :src='info.url' alt=""></div>
            <div class="text">{{info.content}}</div>
        </div>
    </div>
</template>

<script src="./nesdetail.js">

</script>

<style src="./newDetail.scss" lang="scss" scoped=""></style>

