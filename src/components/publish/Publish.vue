<template>
    <div>
        <div>
            <div class="coll" id="coll">我的发布</div>

                <div class="area-1" @click="choarea"> {{name}}</div>
                <div class="area"  :class=" dot==true?'dis':'dis2'">
                    <div @click="chos" v-for="n in area" :data-sid=n.id :data-na=n.name>{{n.name}}</div>
                </div>
            </div>
        <!--广告合作-->
        <div :style="aid==10?'':'display:none'">
            <div class="area-2">
                名称:
            </div>
            <div class="area-2">
                合作类型:
            </div>
            <div class="area-2">
                合作行业:
            </div>
            <div style="display: flex">
                <div class="area-2" style="width: 18.5%">
                    粉丝:
                </div>
                <div class="area-2" style="width: 18.5%;margin-left: 0">
                    价格:
                </div>
            </div>
            <div style="margin-top: 2rem">
                <div class="pic">
                    <img src="../../assets/imgs/swiper01.jpg" alt="">
                </div>
            </div>
            <div style="margin-top: 1rem">
                <div class="btn">
                    上传主图
                </div>
            </div>
            <div class="line"></div>
            <SMEditor :config='config' id="edit" style="margin-bottom: 2rem"></SMEditor>
        </div>
        <!--合作经营-->
        <div :style="aid==11?'':'display:none'">
            <div class="area-2">
                名称:
            </div>
            <div class="area-2">
                行业:
            </div>
            <div style="display: flex">
                <div class="area-2" style="width: 18.5%">
                    粉丝:
                </div>
                <div class="area-2" style="width: 18.5%;margin-left: 0">
                    价格:
                </div>
            </div>
            <div style="margin-top: 2rem">
                <div class="pic">
                    <img src="../../assets/imgs/swiper01.jpg" alt="">
                </div>
            </div>
            <div style="margin-top: 1rem">
                <div class="btn">
                    上传主图
                </div>
            </div>
            <div class="line"></div>
        </div>
        <!--运营商-->
        <div :style="aid==12?'':'display:none'">
            <div class="area-2">
                名称:
            </div>
            <div class="area-2">
                周期:
            </div>
            <div style="display: flex">
                <div class="area-2" style="width: 18.5%">
                    粉丝:
                </div>
                <div class="area-2" style="width: 18.5%;margin-left: 0">
                    价格:
                </div>
            </div>
            <div style="margin-top: 2rem">
                <div class="pic">
                    <img src="../../assets/imgs/swiper01.jpg" alt="">
                </div>
            </div>
            <div style="margin-top: 1rem">
                <div class="btn">
                    上传主图
                </div>
            </div>
            <div class="line"></div>
        </div>
        <!--商家-->
        <div :style="aid==13?'':'display:none'">
            <div class="area-2">
                名称:
            </div>
            <div class="area-2">
                行业:
            </div>
            <div style="display: flex">
                <div class="area-2" style="width: 40%;margin-left:2rem">
                    价格:
                </div>
            </div>
            <div style="margin-top: 2rem">
                <div class="pic">
                    <img src="../../assets/imgs/swiper01.jpg" alt="">
                </div>
            </div>
            <div style="margin-top: 1rem">
                <div class="btn">
                    上传主图
                </div>
            </div>
            <div class="line"></div>
        </div>
        <!--小程序模板-->
        <div :style="aid==14?'':'display:none'">
            <div class="area-2">
                产品名称:
            </div>
            <div class="area-2">
                小程序类别:
            </div>
            <div style="display: flex">
                <div class="area-2" style="width: 18.5%;margin-left: 2rem">
                    粉丝:
                </div>
                <div class="area-2" style="width: 18.5%;margin-left: 0">
                    价格:
                </div>
            </div>
            <div style="margin-top: 2rem">
                <div class="pic">
                    <img src="../../assets/imgs/swiper01.jpg" alt="">
                </div>
            </div>
            <div style="margin-top: 1rem">
                <div class="btn">
                    上传主图
                </div>
            </div>
            <div class="line"></div>
        </div>


    </div>
</template>

<script src="./publish.js">

</script>

<style src="./publish.scss" lang="scss" scoped=""></style>

