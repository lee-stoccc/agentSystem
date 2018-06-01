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
            info:{},
            list:[],
            isRead:0
        }
    },
    methods:{
        Userinfo:function () {
            var t=this;
            var ajax=new J.A();
            ajax.ajaxs('/sys/user/appPersonal',{},'GET').then(function (res) {
                if(res=='no'){
                    t.login=0
                }
                t.info=res;
                t.login=1
            })
        }
    },
    mounted:function () {
        let t=this;
        t.Userinfo();
        let ajax=new J.A();

        ajax.ajaxs('/oa/notify/selfList',{},'GET').then(function (res) {
            t.list=res.rows;
            for (let ii=0;ii<res.rows.length;ii++){
                if(res.rows[ii].isRead==0){
                    t.isRead++;
                }
            }
        })
    }
}