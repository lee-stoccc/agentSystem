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
            // this.$axios.post('http://192.168.1.161/register',
            //     {companyName:this.companyName,phone:this.phone,code:this.code,password:this.password,inviteCode:this.inviteCode}
            // ,{
            //     transformRequest: [function (data) {
            //         // 对 data 进行任意转换处理
            //         let ret = '';
            //         for (let it in data){
            //             ret += encodeURIComponent(it)+'='+encodeURIComponent(data[it])+'&'
            //         }
            //         return ret
            //         // return this.$qs.stringify(data);
            //     }],
            //     headers:{
            //         "Content-Type":'application/x-www-form-urlencoded;charset=UTF-8'
            //     }
            // }).then(res=>{
            //     console.log(2111111111111);
            //     console.log(res)
            // })
        }
    },
    mounted:function () {
        console.log(this)
    }

}