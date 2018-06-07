/**
 * Created by Administrator on 2018/5/18 0018.
 */
import * as J from '../../../static/ajax'
import Swiper from '../../../static/swiper.min.js'
export default {
    components: {
        Trade: 'Trade'
    },
    data () {
        return {
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
            swiperList:[],
            msg: 'Welcome to Your Vue.js App',
            types: 1,
            type:2,
            area: [
                {id: 4, name: '运营'},
                {id: 5, name: '商家'},
            ],
            aid:'',
            dot:true,
            name:'运营',
            src:'',
            tips:'',
            show:0,
            list1:[], //小程序
            list2:[],//广告合作
            list3:[], //合作经营的
            list4:[],//运营商
            list5:[] //商家
        }
    },
    methods: {
        swiper () {
            new Swiper('.swiper-container', {
                autoplay: 1000,
                loop: true,
                observer: true
            })
        },
        shows: function (e) {
            console.log(1231)
            console.log(e.target.dataset.s)
            this.types = e.target.dataset.s
        },
        choarea:function (e) {
            this.dot=!this.dot;
        },
        chos:function (e) {
            console.log(e.target.dataset.sid)
            this.dot=!this.dot;
            this.aid=e.target.dataset.sid;
            this.name=e.target.dataset.na;
            this.types=e.target.dataset.sid
        },

        //收藏功能
        coll:function (id,types,gourl) {
            let t=this;
            let ajax=new J.A();
            ajax.ajaxs(gourl,{id:id,types:types},'GET').then(function (res) {
                if(res.code==0){
                    t.tips='收藏成功';
                    t.show=1;
                    setTimeout(function () {
                        t.show=0
                    },2000)
                }
            })

        }

    },
    mounted:function () {
        this.swiper()
        let t=this;
        let ajax =new J.A();
        // 广告合作
        ajax.ajaxs('/system/advertising/getListByStatus',{},'GET').then(function (res) {
            t.list2=res;
        });
            // 小程序
        ajax.ajaxs('/system/miniappDetails/getListByStatus',{},'GET').then(function (res) {
            t.list1=res;
        });


            // 合作经营的
        ajax.ajaxs('/system/manage/getListByStatus',{},'GET').then(function (res) {
            t.list3=res;
        });

        //运营商
        ajax.ajaxs('/system/operator/getListByStatus',{},'GET').then(function (res) {
            t.list4=res;
        });


        // 商家
        ajax.ajaxs('/system/merchant/getListByStatus',{},'GET').then(function (res) {
            t.list5=res;
        })

        //轮播图
        ajax.ajaxs('/system/dealSlideshow/list',{},'GET').then(function (res) {
            t.swiperList=res.rows;
        })
    }
}