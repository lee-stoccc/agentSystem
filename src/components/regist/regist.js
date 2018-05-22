/**
 * Created by Administrator on 2018/5/18 0018.
 */
import Qs from 'qs'
export default {
    name: 'Regist',

    data () {
        return {
            msg: 'Welcome to Your Vue.js App',
            companyName:'',
            phone:"",
            code:"",
            password:"",
            inviteCode:''
        }
    },
    methods:{
        sub:function () {
            this.http('http://192.168.1.161/register',{companyName:this.companyName,phone:this.phone,code:this.code,password:this.password,inviteCode:this.inviteCode})
        }
    },
    mounted:function () {
        console.log(this)
    }

}