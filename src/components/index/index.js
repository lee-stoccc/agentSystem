/**
 * Created by Administrator on 2018/5/18 0018.
 */
export default {
    name:'Index',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App',
            type:1,
        }
    },
    // 路由传递参数
    methods:{
        // go:function () {
        //     this.$router.push({name:'Template',params:{id:'2231'}})
        // }
    },
    mounted:function () {
        console.log(this);
    }
}