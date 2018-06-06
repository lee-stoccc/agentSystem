/**
 * Created by Administrator on 2018/5/18 0018.
 */
import * as J from '../../../static/ajax'
export default {
    components: {
        Trade: 'Trade'
    },
    data () {
        return {
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
        let t=this;
        let ajax =new J.A();
        // 广告合作
        ajax.ajaxs('/system/advertising/getListByStatus',{},'GET').then(function (res) {
            console.log(res+11111111111)
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
    }
}