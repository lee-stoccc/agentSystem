/**
 * Created by Administrator on 2018/5/18 0018.
 */
import * as J from '../../../static/ajax.js'
export default {
    name: 'CompanyDetail',

    data () {
        return {
            msg: 'Welcome to Your Vue.js App',
            type:1,
            id:'',
            l:''
        }
    },
    methods: {
        show: function(e) {
            console.log(e)
            if(e.target.dataset.s==1){
                this.type=1
            }else {
                this.type=2
            }
        }
    },
    created:function (e) {
        console.log(e)
    },
    mounted:function (e) {
        var t=this;
        this.id=this.$route.params.id;
        var ajax =new J.A();
        ajax.ajaxs('/system/company/getById',{id:this.id},'GET').then(function (res) {
            console.log(res);
            t.l=res
        })

    }
}