/**
 * Created by Administrator on 2018/5/29 0029.
 */
/**
 * Created by Administrator on 2018/5/28 0028.
 */
/**
 * Created by Administrator on 2018/5/18 0018.
 */
import * as J from '../../../static/ajax.js'
export default {
    name:'Index',
    data () {
        return {
            list:[]
        }

    },
    methods:{
    },
    mounted:function () {
        let t=this;
        let ajax=new J.A();
        ajax.ajaxs('/oa/notify/selfList','','GET').then(function (res) {
            console.log(res);
            t.list=res.rows
        })
    },

}