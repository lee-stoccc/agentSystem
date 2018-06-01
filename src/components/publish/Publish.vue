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
        <form action="" id="signupForm1">
            <div :style="aid==10?'':'display:none'">
                <div class="area-2">
                    名称:   <input type="text" name="advertisingName">
                </div>
                <div class="area-2">
                    联系电话:   <input type="text" name="advertisingPhone">
                </div>
                <div class="area-2">
                    合作类型:<input type="text" name="cooperationType">
                </div>
                <div class="area-2">
                    合作行业:<input type="text" name="cooperationBusiness">
                </div>
                <div style="display: flex">
                    <div class="area-2 a-3" style="width:37%">
                        粉丝:<input type="text" name="advertisingFans">
                    </div>
                    <div class="area-2 a-3" style="width: 37%;margin-left: 0">
                        价格:<input type="text" name="advertisingMoney">
                    </div>
                </div>
                <div class="text-4 area-2"><textarea rows="3"
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
        <form action="" id="signupForm2">
            <div :style="aid==11?'':'display:none'">
                <div class="area-2">
                    名称:<input type="text" name="miniappName">
                </div>
                <div class="area-2">
                    联系电话:   <input type="text" name="managePhone">
                </div>
                <div class="area-2">
                    行业:<input type="text" name="miniappVocation">
                </div>
                <div style="display: flex">
                    <div class="area-2 a-3" style="width:37%">
                        粉丝:<input type="text" name="manageFans">
                    </div>
                    <div class="area-2 a-3" style="width: 37%;margin-left: 0">
                        价格:<input type="text" name="manageMoney">
                    </div>
                </div>
                <div class="text-4 area-2"><textarea rows="3"
                                                     name="advertisingDetails"></textarea></div>
                <div>
                    <div class="pic">
                        <input type="file" name="file1" accept="image/*" capture="camera">
                        <input type="file" name="file2" accept="image/*" capture="camera">
                    </div>
                </div>
                <div class="line"></div>

                <div @click="sub2" class="sub"> 点击提交</div>

            </div>
        </form>
        <!--运营商-->
        <form action="" id="signupForm4">
            <div :style="aid==12?'':'display:none'">
                <div class="area-2">
                    名称:<input type="text" name="operatorName">
                </div>
                <div class="area-2">
                    联系电话:   <input type="text" name="operatorPhone">
                </div>
                <div class="area-2">
                    周期:<input type="text" name="operatorCycle">
                </div>
                <div style="display: flex">
                    <div class="area-2 a-3" style="width:37%">
                        粉丝:<input type="text" name="operatorFans">
                    </div>
                    <div class="area-2 a-3" style="width: 37%;margin-left: 0">
                        价格:<input type="text" name="operatorMoney">
                    </div>
                </div>
                <div class="text-4 area-2"><textarea rows="3"
                                                     name="operatorDetails"></textarea></div>
                <div>
                    <div class="pic">
                        <input type="file" name="file1" accept="image/*" capture="camera">
                    </div>
                </div>
                <div class="line"></div>
                <div @click="sub4" class="sub"> 点击提交</div>
            </div>
        </form>
        <!--商家-->
        <form action="" id="signupForm5">
            <div :style="aid==13?'':'display:none'">
                <div class="area-2">
                    名称:<input type="text" name="merchantName">
                </div>
                <div class="area-2">
                    联系电话:   <input type="text" name="merchantPhone">
                </div>
                <div class="area-2">
                    行业:<input type="text" name="merchantTrade">
                </div>
                <div style="display: flex">
                    <div class="area-2" style="width: 40%;margin-left:2rem">
                        价格:<input type="text" name="merchantBudget">
                    </div>
                </div>
                <div class="text-4 area-2"><textarea rows="3"
                                                     name="merchantDetails"></textarea></div>
                <div>
                    <div class="pic">
                        <input type="file" name="file1" accept="image/*" capture="camera">
                    </div>
                </div>
                <div class="line"></div>
                <div @click="sub5" class="sub"> 点击提交</div>
            </div>
        </form>
        <!--小程序模板-->
        <form action="" id="signupForm3">
            <div :style="aid==14?'':'display:none'">
                <div class="area-2">
                    产品名称:<input type="text" name="miniappName">
                </div>
                <div class="area-2">
                    联系电话:   <input type="text" name="miniappPhone">
                </div>
                <div class="area-2">
                    小程序类别:<input type="text" name="miniappType" style="width: 66%">
                </div>
                <div style="display: flex">
                    <div class="area-2 a-3" style="width:37%">
                        粉丝:<input type="text" name="miniappFans">
                    </div>
                    <div class="area-2 a-3" style="width: 37%;margin-left: 0">
                        价格:<input type="text" name="miniappMoney">
                    </div>
                </div>
                <div class="text-4 area-2"><textarea rows="3"
                                                     name="miniappDetails"></textarea></div>

                <div>
                    <div class="pic">
                        <input type="file" name="file1" accept="image/*" capture="camera">
                        <input type="file" name="file2" accept="image/*" capture="camera">
                    </div>
                </div>
                <div class="line"></div>
                <div @click="sub3" class="sub"> 点击提交</div>
            </div>
        </form>
        <Alert :show="show" :tips="tips"></Alert>
    </div>
</template>

<script src="./publish.js">

</script>

<style src="./publish.scss" lang="scss" scoped=""></style>

