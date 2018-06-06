/**
 * Created by Administrator on 2018/5/18 0018.
 */

import * as J from '../../../static/ajax'
export default {
    name:'CompanyList',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App',
            type:4,
            list:[],
            cut:''
        }
    },
    methods:{
        go:function (id) {
            this.$router.push({
                name:'CompanyDetail',
                params:{id:id}
            })
        }
    },
    mounted:function () {
        this.cut=this.$route.params.cut;
        var t=this;
        let datas={};
        var url='/system/company/list';

        var ajax=new J.A();
        ajax.ajaxs(url,datas,"GET").then(
            function (res) {
                t.list=res.rows;
            }
        )
    }
}