import * as J from '../../../static/ajax.js'
export default {
    name:'Index',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App',
            type:1,
            list:[]
        }
    },
    methods:{

    },
    mounted:function () {
        var t =this;
        var ajax =new J.A();
        ajax.ajaxs('/system/wechat/list',{},'GET').then(function (res) {
            t.list=res.rows
        })

    }
}