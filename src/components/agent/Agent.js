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
            offset:1
        }
    },
    methods: {
        add:function () {
            var t=this
            this.offset++;
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
        })

    }
}