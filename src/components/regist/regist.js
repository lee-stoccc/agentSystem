/**
 * Created by Administrator on 2018/5/18 0018.
 */
export default {
    name: 'Regist',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App',
            companyName:'',
            phone:"",
            code:"",
            password:"",
            inviteCode:'',
            exit:false
        }
    },
    methods:{
        sub:function () {
            var t=this;
            var datas={companyName:t.companyName,phone:t.phone,code:t.code,password:t.password,inviteCode:t.inviteCode}
            t.$validator.validateAll().then(
                function (res) {
                    if(res==true){
                        t.http('/sys/user/exit',datas).then(
                            function (res){
                               if(res.data==true){
                                   t.http('/register',datas).then(
                                       function(res){
                                        console.log(res)
                                   })
                               }else {
                                   console.log('用户名已存在')
                               }
                            }
                        );

                    }else {
                        alert('请重新填写')
                    }
                }
            );

        }
    },
    mounted:function () {
        console.log(this)
    }

}