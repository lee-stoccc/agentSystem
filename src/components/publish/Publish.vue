<template>
    <div>

        <div>
            <div class="coll" id="coll">我的发布</div>

            <div class="area-1" @click="choarea"> {{name}}</div>
            <div class="area" :class=" dot==true?'dis':'dis2'">
                <div @click="chos" v-for="n in area" :data-sid=n.id :data-na=n.name>{{n.name}}</div>
            </div>
        </div>
        <!--广告合作-->
        <form action="" id="signupForm">
            <div :style="aid==10?'':'display:none'">
                <div class="area-2">
                    名称:   <input type="text" v-model="advertisingName" name="advertisingName">
                </div>
                <div class="area-2">
                    联系电话:   <input type="text" v-model="advertisingPhone" name="advertisingPhone">
                </div>
                <div class="area-2">
                    合作类型:<input type="text" v-model="cooperationType" name="cooperationType">
                </div>
                <div class="area-2">
                    合作行业:<input type="text" v-model="cooperationBusiness" name="cooperationBusiness">
                </div>
                <div style="display: flex">
                    <div class="area-2 a-3" style="width:37%">
                        粉丝:<input type="text" v-model="advertisingFans" name="advertisingFans">
                    </div>
                    <div class="area-2 a-3" style="width: 37%;margin-left: 0">
                        价格:<input type="text" v-model="advertisingMoney" name="advertisingMoney">
                    </div>
                </div>
                <div class="text-4 area-2"><textarea rows="3" v-model="advertisingDetails"
                                                     name="advertisingDetails"></textarea></div>
                <div>
                    <div class="pic">
                        <input type="file" name="file1" accept="image/*" capture="camera" @change="upload1($event)">
                        <input type="file" name="file2" accept="image/*" capture="camera" @change="upload2($event)">
                    </div>
                </div>
                <div class="line"></div>

                <div @click="sub" class="sub"> 点击提交</div>
                <!--<SMEditor :config='config' id="edit" style="margin-bottom: 2rem"></SMEditor>-->
            </div>
        </form>
        <!--合作经营-->
        <form action="" id="signupForm1">
            <div :style="aid==11?'':'display:none'">
                <div class="area-2">
                    名称:<input type="text" v-model="advertisingName" name="miniappName">
                </div>
                <div class="area-2">
                    联系电话:   <input type="text" v-model="advertisingPhone" name="managePhone">
                </div>
                <div class="area-2">
                    行业:<input type="text" v-model="advertisingName" name="miniappVocation">
                </div>
                <div style="display: flex">
                    <div class="area-2 a-3" style="width:37%">
                        粉丝:<input type="text" v-model="advertisingFans" name="manageFans">
                    </div>
                    <div class="area-2 a-3" style="width: 37%;margin-left: 0">
                        价格:<input type="text" v-model="advertisingMoney" name="manageMoney">
                    </div>
                </div>
                <div class="text-4 area-2"><textarea rows="3" v-model="manageDetails"
                                                     name="advertisingDetails"></textarea></div>
                <div>
                    <div class="pic">
                        <input type="file" name="file1" accept="image/*" capture="camera" >
                        <input type="file" name="file2" accept="image/*" capture="camera" >
                    </div>
                </div>
                <div class="line"></div>

                <div @click="sub2" class="sub"> 点击提交</div>

            </div>
        </form>
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
            </div>
            <div style="margin-top: 1rem">
                <div class="btn">
                    上传主图
                </div>
            </div>
            <div class="line"></div>
        </div>
        <Alert :show="show" :tips="tips"></Alert>
    </div>
</template>

<script src="./publish.js">

</script>

<style src="./publish.scss" lang="scss" scoped=""></style>

