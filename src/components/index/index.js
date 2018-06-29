/**
 * Created by Administrator on 2018/5/18 0018.
 */
import * as J from '../../../static/ajax.js'
import Swiper from '../../../static/swiper.min.js'
import $ from 'jquery'

export default {
    name: 'Index',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App',
            type: 1,
            swiperOption: {//以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
                // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，<br>　　　　　　　　假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
                notNextTick: true,
                // swiper configs 所有的配置同swiper官方api配置
                autoplay: 3000,
                direction: 'horizontal',
                grabCursor: true,
                setWrapperSize: true,
                autoHeight: true,
                pagination: '.swiper-pagination',
                paginationClickable: true,
                scrollbar: '.swiper-scrollbar',//滚动条
                mousewheelControl: true,
                observeParents: true,
                // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
                debugger: true,
            },
            swiperList: [],
            swiperList2: [],
            picUrl: [],

            address_detail: null, //详细地址
            userlocation: {lng: "", lat: ""},
            value: '',
            height: 300,
            longitude: 113.30764968,
            latitude: 23.1200491,

            province: '',
            addList: [],
            adds:[],
            src:'',
            isshowMap: false,
            isshow: false,
            showInput:false,
            showImg:false
        }

    },
    // 路由传递参数
    methods: {
        getSrc(e){
            console.log(e);
            this.src=e.target.currentSrc;
            this.showImg=!this.showImg
            this.isshow= !this.isshow


        },
        swiper () {
            new Swiper('.swiper-container', {
                autoplay: 1000,
                loop: true,
                observer: true
            })
        },
        sub: function () {
            let ajax = new J.A();
            let datas = {
                liveAddress: this.address_de,
                province: this.prov,
                city: this.city,
                district: this.district
            };
            ajax.ajaxs('sys/user/saveAddress', datas, 'POST').then(function (res) {
                console.log(res)
            })
        },
        showMap: function () {
            var t = this;
            this.isshowMap = true;
            var adds = [];
            for (let ii = 0; ii < t.addList.length; ii++) {
                adds.push(t.addList[ii].liveAddress)
            }
            t.adds=adds;
            // var map = new BMap.Map("div1");
            // map.centerAndZoom(new BMap.Point(113.30764968, 23.1200491), 13);
            // map.enableScrollWheelZoom(true);
            var index = 0;
            // var myGeo = new BMap.Geocoder();
            // this.miaohuidian()
        },

        showMap_f(){
            if(this.isshowMap==true){
                this.isshowMap=false
            }

        },

        // 子组件传回来的数据，控制浮沉关闭
        getsdf:function (datas) {
            this.showImg=datas.showImg;
            this.isshow=datas.isshow;
            console.log(datas)
        },
    },
    mounted: function () {
        console.log(this);
        this.swiper();
        let t = this;
        let ajax = new J.A();
        t.isshow = this.$route.params.isshow;
        t.showInput=this.$route.params.isshow;

        //轮播图
        ajax.ajaxs('/system/sowingmap/lunbolist', {}, 'GET').then(function (res) {
            t.swiperList = res.rows
        })
        //图片
        ajax.ajaxs('/system/sowingmap//homepagelist', {}, 'GET').then(function (res) {
            t.picUrl = res.rows
        });
        ajax.ajaxs('/system/sowingmap/addAdvertisingPicturelist', {}, 'GET').then(function (res) {
            t.swiperList2 = res.rows
        });

        var map = new BMap.Map("div1");
        var point = new BMap.Point(this.longitude, this.latitude);
        map.centerAndZoom(point, 12);
        var marker = new BMap.Marker(point);// 创建标注
        map.addOverlay(marker);
        map.enableScrollWheelZoom(true);

        var geoc = new BMap.Geocoder();
        geoc.getLocation(point, function (rs) {
            var addComp = rs.addressComponents;
            t.province = addComp.province;

            ajax.ajaxs('/sys/user/mySelfGpsMapPhone', {province: t.province}, 'GET').then(function (rs) {


                var addlist = [];
                for (let ii = 0; ii < rs.length; ii++) {
                    rs[ii].liveAddress = rs[ii].province + rs[ii].city + rs[ii].district + rs[ii].liveAddress;
                    t.adds.push(rs[ii].liveAddress)
                }
                t.addList = rs

                for(let jj=0;jj<t.adds.length;jj++){
                    setTimeout(window.bdGEO, 400);
                    geoc.getPoint(t.adds[jj],function (point) {
                        if(point){
                            var Point=new BMap.Point(point.lng,point.lat)
                            var marker = new BMap.Marker(Point,1);
                            console.log(marker);
                            // 描绘点
                            map.addOverlay(marker);
                        }
                    })
                }
            })
        });
    },
}

