import * as J from '../../../static/ajax'
export default {
    name:'Login',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App',
            type:1,
            phone:'',
            password:'',
            tips:'',
            show:'',
            time:'获取验证码',
            isDisable:false,
            sms_num:'',
            smsphone:"",
            isshow:''
        }
    },
    methods: {
        shows: function(e) {
            if(e.target.dataset.s==1){
                this.type=1
            }else {
                this.type=2
            }
        },

        //密码登录
        login:function () {
            var t=this;
            let datas={phone:this.phone,password:this.password}
            let url='/login'
            var ajax=new J.A();
            ajax.ajaxs(url,datas,'POST').then(
                function (res) {
                    if(res.code==0){
                        t.show=1;
                        t.tips='登录成功';
                        ajax.ajaxs('/mobileIndex',{},'GET').then(function (res) {
                            t.isshow=res.msg
                        });
                        setTimeout(function () {
                            t.show=0;
                            t.go('Index',{isshow:t.isshow})
                        },2000);

                    }
                }
            ).catch(function (err) {
                console.log(err);
                console.log(111)
            })
        },

        //短信登录
        loginPhone:function () {
            var t=this;
            let datas={smsphone:this.phone,sms_num:this.sms_num}
            let url='/login'
            var ajax=new J.A();
            ajax.ajaxs(url,datas,'POST').then(
                function (res) {
                    if(res.code==0){
                        t.show=1;
                        t.tips='登录成功';
                        ajax.ajaxs('/mobileIndex',{},'GET').then(function (res) {
                            t.isshow=res.msg
                        });
                        setTimeout(function () {
                            t.show=0;
                            t.go('Index',{isshow:t.isshow})
                        },2000);

                    }
                }
            )
        },

        //获取激活码
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
    }
}