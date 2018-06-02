<template>
    <div>
        <div class="coll">我要投诉</div>



        <div class="call" >
            <textarea placeholder="请输入投诉内容" v-model="content"></textarea>
            <div class="sub" @click="sub">提交投诉</div>
        </div>


        <Alert :tips="tips" :show="show"></Alert>





    </div>
</template>

<script src="./Complaint.js">

</script>

<style src="./Complaint.scss" lang="scss" scoped=""></style>

