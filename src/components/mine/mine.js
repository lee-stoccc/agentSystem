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
            isRead:0,
            role:'',
            userId:'',
            show:0
        }
    },
    methods:{
        Userinfo:function () {
            var t=this;
            var ajax=new J.A();
            ajax.ajaxs('/sys/user/appPersonal',{},'GET').then(function (res) {
                if(res.msg=='no'){
                    t.login=0
                }else {
                t.info=res.msg;
                t.role=res.msg.roleId;
                t.userId=res.msg.id;
                t.login=1}
            })
        },
        loginoutapp(){
            var t=this;
            var ajax=new J.A();
            ajax.ajaxs('/loginoutapp',{},'GET').then(function (res) {
                if(res.msg==='success'){
                    t.login=0;
                    t.info={};
                    t.userId=99
                    t.Tip('退出登录')
                }else {

                }
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