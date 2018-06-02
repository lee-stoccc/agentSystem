/**
 * Created by Administrator on 2018/5/28 0028.
 */
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
            types:'',
            list1:'',   //小程序
            list1_pic:[],
            list2_pic:[],  // 广告
            list2:'',
            list3:'',   // 合作运营
            list3_pic:'',
            list4:'',    //运营商
            list4_pic:[],
            list5:'',    //运营商
            list5_pic:[],

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
        //收藏功能
        coll:function (id,types,gourl) {
            console.log(124123);
            let t=this;
            let ajax=new J.A();
            let datas={
                id:id,
                types:types,
                price:0,
                name:0,
                url:0
            }
            ajax.ajaxs(gourl,datas,'GET').then(function (res) {
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
        let t=this;
        t.id=this.$route.params.id;
        t.types=this.$route.params.types;
        var ajax=new J.A();
        console.log(t.types);

        // switch (t.types){
        //     case 3:
        //        var url='miniappDetails';  //小程序
        //         break;
        //     case 1:
        //          url='advertising';  // 广告合作
        //         break;
        //     case 3:
        //          url='manage';
        //         break;
        //     case 4:
        //          url='operator';
        //         break;
        //     case 5:
        //          url='merchant';
        //         break;
        //
        // }
        //     ajax.ajaxs('/system/'+url+'/detailsPage',{id:t.id},'GET').then(function (rex) {
        //         t.list1=rex+'.'+url;
        //         t.list2=rex.piclist;
        //         console.log(rex);
        //         console.log(t.list1);
        //         console.log(t.list2)
        //     })


        // 小程序
        ajax.ajaxs('/system/miniappDetails/detailsPage',{id:t.id},'GET').then(function (rex) {
                t.list1=rex.miniappDetails;
                t.list1==null?t.list1='':'';
                t.list1_pic=rex.piclist
        });

        // 广告
        ajax.ajaxs('/system/advertising/detailsPage',{id:t.id},'GET').then(function (rex) {
            t.list2=rex.advertising;
            t.list2==null?t.list2='':'';
            t.list2_pic=rex.piclist
        })

        // 合作运营
        ajax.ajaxs('/system/manage/detailsPage',{id:t.id},'GET').then(function (rex) {
            t.list3=rex.manage;
            t.list3_pic=rex.piclist;
            t.list3==null?t.list3='':'';
        });

        // 运营商
        ajax.ajaxs('/system/operator/detailsPage',{id:t.id},'GET').then(function (rex) {
            t.list4=rex.operator;
            t.list4_pic=rex.piclist;
            t.list4==null?t.list4='':'';
        })

        // 商家
        ajax.ajaxs('/system/merchant/detailsPage',{id:t.id},'GET').then(function (rex) {
            t.list5=rex.merchant;
            t.list5_pic=rex.piclist;
            t.list5==null?t.list5='':'';
        })

    },

}