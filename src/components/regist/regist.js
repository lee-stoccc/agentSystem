/**
 * Created by Administrator on 2018/5/18 0018.
 */
import $ from 'jquery'

// 引入ajax 类
import * as J from '../../../static/ajax'
export default {
    name: 'Regist',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App',
            companyName: '',
            phone: "",
            code: "",
            password: "",
            inviteCode: '',
            exit: false,
            time: '获取验证码',
            isDisable:false,
            show:0,
            tips:'登录成功'
        }
    },
    methods: {
        sub: function () {
            var t = this;
            var datas = {
                companyName: t.companyName,
                phone: t.phone,
                code: t.code,
                password: t.password,
                inviteCode: t.inviteCode
            };
            t.$validator.validateAll().then(
                function (res) {
                    if (res == true) {
                        t.http('/sys/user/exit', datas).then(
                            function (res) {
                                if (res.data == true) {
                                    var ajax=new J.A();
                                    ajax.ajaxs('/register',datas,"POST").then(function (res) {
                                        if(res.code==0){
                                            t.show=1
                                            t.tips='注册成功';
                                            setTimeout(function () {
                                                t.show=0
                                            },3000)
                                        }else {
                                            t.show=1
                                            t.tips='注册失败，请重试';
                                            setTimeout(function () {
                                                t.show=0
                                            },3000)
                                        }
                                    }).catch(function (err) {
                                        console.log(err.code)
                                    })
                                } else {
                                    t.show=1
                                    t.tips='用户名已存在';
                                    setTimeout(function () {
                                        t.show=0
                                    },3000)
                                }
                            }
                        );

                    } else {
                        alert('请重新填写')
                    }
                }
            );
        },
        getMsn: function () {
            var t = this;
            var times = 10;
            let datas = {phone: this.phone};
            var phone=this.phone;
            var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
            this.isDisable = true;
            var wait = setInterval(function () {
                if(times==10 && !null && !"" && myreg.test(phone)){
                    t.http('/sendMsg', datas).then(function (res) {
                    });
                }
                document.getElementById('code').style.backgroundColor = "#eee";
                document.getElementById('code').style.color = "#25aaff";
                t.time = times + 's后获取';
                times--;
                if (times == 0) {
                    clearInterval(wait);
                    t.isDisable = false;
                    document.getElementById('code').style.backgroundColor = "#25aaff";
                    document.getElementById('code').style.color = "#fff";
                    t.time='获取验证码'
                }
            }, 1000)
        }
    },
    mounted: function () {
        console.log(this)
    }

}
