<template>
    <div>
        <div class="coll">代理列表</div>
        <div class="area-2">
            <input type="text" name="advertisingName" v-model="search_phone">
            <div style="text-align: center;line-height: 1.8rem" @click="search">搜索</div>
        </div>
        <div>
            <!--小程序-->
            <div class="d-1"  v-for="l in list" :id='l.id'>
                <div><img :src='l.userPic' alt=""></div>
                <div>
                    <div class="d-2 d-3"><span style="font-size:14px;color: #333;width: 68%" >{{l.companyName}}</span><img src="../../assets/imgs/dengji.png" alt="">&nbsp;&nbsp;
                        <div style="font-size:10px;width: 20%">等级：</div><span style="color: orangered">{{l.agencyRank}}</span>
                    </div>
                    <div class="d-2 d-3">
                        <span>地区:{{l.city}}</span>
                    </div>
                    <div class="d-2 d-3">
                        <span style="color: #666">联系电话:</span>
                        <span style="color: #666">{{l.phone}}</span>
                    </div>
                </div>
            </div>
            <div style="text-align: center;color: #007aff;font-size:16px;margin-bottom: 6rem" @click="add">点击加载</div>
        </div>
        <Footer :type="type"></Footer>
    </div>
</template>

<script src="./Agent.js">

</script>

<style src="./Agent.scss" lang="scss" scoped=""></style>

