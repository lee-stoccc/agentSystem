<template>
    <div>
        <div class="coll">速用朋友圈</div>
        <div style="margin-left: 1.4rem;margin-top: 0.6rem;margin-bottom: 0.6rem">新上线的小程序模块，功能模块</div>
        <div  :class="num==1?'temp':'temp-1'">
            <div @click="go('TempDetail',{id:'12'})">
                <div><img src="../../assets/imgs/i.png" alt=""></div>
            </div>
            <div>
                <div><img src="../../assets/imgs/i.png" alt=""></div>
            </div>
            <div>
                <div><img src="../../assets/imgs/i.png" alt=""></div>
            </div>
            <div>
                <div><img src="../../assets/imgs/i.png" alt=""></div>
            </div>

            <div>
                <div><img src="../../assets/imgs/i.png" alt=""></div>
            </div>
        </div>
        <div class="hours">
            <div><span>1</span>小时前</div>
            <div><img src="../../assets/imgs/f-1.png" alt="">&nbsp;&nbsp;999</div>
            <div><img src="../../assets/imgs/f-2.png" alt="" style="position: relative;top: 3px">&nbsp;&nbsp;999</div>
        </div>
        <div class="says">
            <div><span style="color: #25aaff">吕布</span> <span>:</span><span> 楼下都是美女</span></div>
            <div><span style="color: #25aaff">貂蝉</span> <span>:</span><span> 还用你说？</span></div>
            <div><span style="color: #25aaff">大乔</span> <span>:</span><span> 还用你说？</span></div>
            <div style="color: #25aaff">共999条评论&nbsp;></div>
        </div>
    </div>
</template>

<script src="./friends.js">

</script>

<style src="./friends.scss" lang="scss" scoped=""></style>

