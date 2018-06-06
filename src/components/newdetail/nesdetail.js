
import * as J from '../../../static/ajax'
export default {
    components: {
        TempDetail: 'TempDetail'
    },
    data () {
        return {
            info:{},
            isnotify:false,
            info2:{}
        }
    },
    methods: {
    },
    mounted:function () {
        let t =this;
        let ajax=new J.A();
        let id = this.$route.params.id;
        console.log(id);
        ajax.ajaxs('/system/news/applist',{id:id},'GET').then(function (res) {
            console.log(res);
            t.info=res
        })


        ajax.ajaxs('/oa/notify/readmobile',{id:id},'GET').then(function (res) {
            console.log(res);
            t.info2=res;
            t.notify=true
        })
    },

}