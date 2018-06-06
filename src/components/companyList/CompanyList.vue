<template>
    <div>
        <!--小程序模板列表 cut=0-->
        <div >
            <div class="c-list" @click='go(l.id)' v-for="l in list" :id="l.id" :data-cid="l.id">
                <div><img :src="l.companyUrl" alt=""></div>
                <div>
                    <div>{{l.companyName}}</div>
                    <div>{{l.companyAdress}}<img src="../../assets/imgs/c-1.png" alt=""></div>
                    <div>
                        <span>{{l.number}}</span>
                        <span>/</span>
                        <span>{{l.companyProperty}}</span>
                        <span>/</span>
                        <span>{{l.companyType}}</span>
                    </div>
                </div>
            </div>
            <Footer :type="type"></Footer>
        </div>





    </div>
</template>


<script src="./companyList.js"></script>
<style src="./companyList.scss" lang="scss" scoped=""></style>

