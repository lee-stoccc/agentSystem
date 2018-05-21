/**
 * Created by Administrator on 2018/5/18 0018.
 */
export default {
    name:'CompanyList',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App',
            type:4
        }
    },
    methods:{
        go:function () {
            this.$router.push({
                name:'CompanyDetail',
                params:{id:'213'}
            })
        }
    }
}