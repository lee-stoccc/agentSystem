/**
 * Created by Administrator on 2018/5/18 0018.
 */
import * as J from '../../../static/ajax'
export default {
    components:{
        Mine:'Mine',


    },
    data () {
        return {
            msg: 'Welcome to Your Vue.js App',
            type:3,
            login:0,
            state:'登录',
            info:{}
        }
    },
    methods:{
        Userinfo:function () {
            var t=this;
            var ajax=new J.A();
            ajax.ajaxs('/sys/user/appPersonal',{},'GET').then(function (res) {
                t.info=res
            })
        }
    },
    mounted:function () {
        var t=this;
        t.Userinfo()
    }
}