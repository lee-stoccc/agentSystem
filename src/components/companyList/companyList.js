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
            list:[]
        }
    },
    methods:{
        go:function () {
            let params={};
            this.$router.push({
                name:'CompanyDetail',
                params:{id:'213'}
            })
        }
    },
    mounted:function () {
        var t=this;
        let datas={}
        let url='/system/company/list'
        var ajax=new J.A();
        ajax.ajaxs(url,datas,"GET").then(
            function (res) {
                t.list=res.rows;
            }
        )
    }
}