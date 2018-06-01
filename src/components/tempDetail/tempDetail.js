/**
 * Created by Administrator on 2018/5/18 0018.
 */
import * as J from '../../../static/ajax'
import Swiper from '../../../static/swiper.min.js'
export default {
    components: {
        TempDetail: 'TempDetail'
    },
    data () {
        return {
            msg: 'Welcome to Your Vue.js App',
            swiperOption: {//以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
                // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，<br>　　　　　　　　假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
                notNextTick: true,
                // swiper configs 所有的配置同swiper官方api配置
                autoplay: 3000,
                direction :'horizontal',
                grabCursor : true,
                setWrapperSize :true,
                autoHeight: true,
                pagination : '.swiper-pagination',
                paginationClickable :true,
                scrollbar:'.swiper-scrollbar',//滚动条
                mousewheelControl : true,
                observeParents:true,
                // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
                debugger: true,
            },
            info:{},
            url:[],
            id:'',
            tips:'',
            show:0

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
        //收藏
        coll:function (price,name,url,id,types,gourl) {
            let t=this;
            let ajax=new J.A();
            let datas={
                id:id,
                types:types,
                price:price,
                name:name,
                url:url
            }
            ajax.ajaxs(gourl,datas,'GET').then(function (res) {
                if(res.code==0){
                    t.tips='收藏成功';
                    t.show=1;
                    setTimeout(function () {
                        t.show=0
                    },2000)
                }else {
                    t.tips='已收藏';
                    t.show=1;
                    setTimeout(function () {
                        t.show=0;
                    },2000)
                }
            })

        }
    },
    mounted:function () {
        var t=this;
        t.swiper();
        t.id=this.$route.params.id;
        var ajax=new J.A();
        ajax.ajaxs('/system/wechat/applist',{id:t.id},'GET').then(function (res) {
            t.info =res.wechat;
            t.url=res.piclist
        });

    },

}