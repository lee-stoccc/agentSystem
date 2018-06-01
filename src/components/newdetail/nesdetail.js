
import * as J from '../../../static/ajax'
export default {
    components: {
        TempDetail: 'TempDetail'
    },
    data () {
        return {
            info:{}
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
    },

}