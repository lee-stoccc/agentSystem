/**
 * Created by Administrator on 2018/5/18 0018.
 */
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
            time: '点击获取验证码',
            isDisable:false

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
                                    t.http('/register', datas).then(
                                        function (res) {
                                            console.log(res)
                                        })
                                } else {
                                    console.log('用户名已存在')
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
                t.time = times + 's重新获取';
                times--;
                if (times == 0) {
                    clearInterval(wait);
                    t.isDisable = false;
                    document.getElementById('code').style.backgroundColor = "#25aaff";
                    document.getElementById('code').style.color = "#fff";
                    t.time='点击获取验证码'
                }
            }, 1000)
        }
    },
    mounted: function () {
        console.log(this)
    }

}