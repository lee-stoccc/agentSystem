<template>
    <div>
        <div class="coll">客户列表</div>
        <div>
            <!--小程序-->
            <div class="d-1">
                <div><img src="../../assets/imgs/c-1.png" alt=""></div>
                <div>
                    <div class="d-2 d-3"><span style="font-size:16px;color: #333">客户名称</span><img src="../../assets/imgs/dengji.png" alt="">&nbsp;&nbsp;<span>等级：</span><span style="color: orangered">999</span>
                    </div>
                    <div class="d-2 d-3"><span>地区:广州</span><span style="color: #666">联系电话:</span><span style="color: #666">15920128083</span>
                    </div>
                </div>
            </div>
        </div>
        <Footer :type="type"></Footer>
    </div>
</template>

<script src="./customer.js">

</script>

<style src="./customer.scss" lang="scss" scoped=""></style>

