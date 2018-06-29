/**
 * Created by Administrator on 2018/5/18 0018.
 */
import * as J from '../../../static/ajax.js'
export default {
    name: 'CompanyDetail',

    data () {
        return {
            list:[],
            type:1,
            offset:0,
            search_phone:''
        }
    },
    methods: {
        add:function () {
            var t=this;
            var ajax =new J.A();
            var datas={limit:10,offset:t.offset};
            ajax.ajaxs('/sys/user/agencylist',datas,'GET').then(function (res) {
                for(let ii=0;res.rows.length>ii;ii++){
                    if(res.rows[ii].agencyRank==1){res.rows[ii].agencyRank='一'}
                    if(res.rows[ii].agencyRank==2){res.rows[ii].agencyRank='二'}
                    if(res.rows[ii].agencyRank==3){res.rows[ii].agencyRank='三'}
                    if(res.rows[ii].agencyRank==4||0||''){res.rows[ii].agencyRank='客户'}
                    t.list.push(res.rows[ii]);
                }
            })
            t.offset+=10;
        },

        // 搜索
        search:function(){
            var t=this;
            let search_phone=this.search_phone;
            var ajax =new J.A();
            if(/^1[34578]\d{9}$/.test(search_phone)){
                var data={phone:search_phone,limit:10,offset:0}       // 传电话，根据电话查询
            }else {
                var data={companyName:search_phone,limit:10,offset:0}    // 传公司名字，根据公司名字查询
            }
            ajax.ajaxs('/sys/user/agencylist',data,'GET').then(function (res) {
                if(res){
                    t.list=res.rows
                }
            })



        }
    },
    created:function () {
    },
    mounted:function () {
        var t=this;
        var ajax =new J.A();
        var datas={limit:10,offset:t.offset};
        ajax.ajaxs('/sys/user/agencylist',datas,'GET').then(function (res) {
            for(let ii=0;res.rows.length>ii;ii++){
                    if(res.rows[ii].agencyRank==1){res.rows[ii].agencyRank='一'}
                    if(res.rows[ii].agencyRank==2){res.rows[ii].agencyRank='二'}
                    if(res.rows[ii].agencyRank==3){res.rows[ii].agencyRank='三'}
                    if(res.rows[ii].agencyRank==4||0||''){res.rows[ii].agencyRank='客户'}
                t.list.push(res.rows[ii]);
            }
        });
        t.offset+=10;
    }
}