<template>
    <div>
        <div class="coll">客户列表</div>
        <div class="area-2">
            <input type="text" name="advertisingName" v-model="search_phone">
            <div style="text-align: center;line-height: 1.8rem" @click="search">搜索</div>
        </div>
        <div>
            <!--小程序-->
            <div class="d-1" v-for="l in list" :id='l.id'>
                <div><img :src='l.userPic' alt=""></div>
                <div>
                    <div class="d-2 d-3" >
                        <span style="font-size:4px;color: #333;width: 50%">{{l.companyName}}</span><img src="../../assets/imgs/dengji.png" alt="">&nbsp;
                        <!--<span style="font-size:10px;width: 19%">等级：</span>-->
                        <span style="color: orangered;width: 13%;text-align: center" >{{l.agencyRank}}</span>
                    </div>
                    <div class="d-2 d-3"><span>地区:{{l.city}}</span><span style="color: #666">联系电话:</span><span style="color: #666">{{l.phone}}</span>
                    </div>
                </div>
            </div>
            <div style="text-align: center;color: #007aff;font-size:16px;margin-bottom: 6rem" @click="add">点击加载</div>
        </div>
        <Footer :type="type"></Footer>
    </div>
</template>

<script src="./customer.js">

</script>

<style src="./customer.scss" lang="scss" scoped=""></style>

