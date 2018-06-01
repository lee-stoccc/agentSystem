/**
 * Created by Administrator on 2018/5/30 0030.
 */
/**
 * Created by Administrator on 2018/5/28 0028.
 */
/**
 * Created by Administrator on 2018/5/18 0018.
 */
import * as J from '../../../static/ajax'
export default {
    components: {
        TempDetail: 'TempDetail'
    },
    data () {
        return {
            list:[]
        }
    },
    methods: {
    },
    mounted:function () {
        let t =this;
        let ajax=new J.A();
        ajax.ajaxs('/system/news/list',{},'GET').then(function (res) {
            console.log(res);
            t.list=res.rows
        })
    },

}