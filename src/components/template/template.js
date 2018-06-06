import * as J from '../../../static/ajax.js'
export default {
    name:'Index',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App',
            type:1,
            list:[],
            cut:'',
            url:''
        }
    },
    methods:{

    },
    mounted:function () {
        this.cut=this.$route.params.cut;
        console.log(this.cut);
        var t=this;
        let datas={};
        t.url='';
        switch (t.cut){
            case 0:
                t.url='/system/wechat/list';
                break;
            case 1:
                t.url='/system/sowingmap/addjoinpolicylist';
                break;
            case 2:
                t.url='/system/sowingmap/addtrainlist';
                break;
            case 3:
                t.url='/system/sowingmap/addemploylist';
                break;
            case 4:
                t.url='/system/sowingmap/addintroducelist';
                break;
            case 5:
                t.url='/system/sowingmap/addpaylist';
                break;
            case 6:
                t.url='/system/sowingmap/addchatlist';
                break;
            case 7:
                t.url='/system/sowingmap/addworklist';
                break;
            default:
                t.url='';
        }
        var ajax=new J.A();
        ajax.ajaxs(t.url,datas,"GET").then(
            function (res) {
                t.list=res.rows;
            }
        )
    }
}