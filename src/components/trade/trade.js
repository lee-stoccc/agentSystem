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
                {id: 4, name: '商家'},
            ],
            aid:'',
            dot:true,
            name:'运营',
            src:'',
            list2:[],
            list1:[]
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
        }

    },
    mounted:function () {
        var t=this;
        var ajax =new J.A();
        //广告合作
        ajax.ajaxs('/system/advertising/getListByStatus',{},'GET').then(function (res) {
            t.list2=res;
        })
            //小程序
        ajax.ajaxs('/system/miniappDetails/getListByStatus',{},'GET').then(function (res) {
            console.log(res)
            t.list1=res;
        })

        //
    }
}