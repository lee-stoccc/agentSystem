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
            area: [
                {id: 4, name: '运营'},
                {id: 5, name: '商家'},
            ],
            aid:'',
            dot:true,
            name:'运营',
            src:'',
            list1:[], //小程序
            list2:[],//广告合作
            list3:[], //合作经营的
            list4:[],//运营商
            list5:{} //商家
        }
    },
    methods: {
        show: function (e) {
            this.types = e.target.dataset.s
        },
        choarea:function (e) {
            this.dot=!this.dot;
        },
        chos:function (e) {
            this.dot=!this.dot;
            this.aid=e.target.dataset.sid;
            this.name=e.target.dataset.na;
            this.types=e.target.dataset.sid
        },
        coll:function (name,id,gourl) {
            let url = window.location.href;
            console.log(name,id);
            let t=this;
            let ajax=new J.A();
            ajax.ajaxs(gourl,{name:name,url:url},'GET').then(function (res) {
                console(res)
            })

        }

    },
    mounted:function () {
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
    }
}