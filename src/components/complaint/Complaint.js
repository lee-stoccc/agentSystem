/**
 * Created by Administrator on 2018/5/30 0030.
 */
import * as J from '../../../static/ajax'
export default {
    components: {
        TempDetail: 'TempDetail'
    },
    data () {
        return {
            list:[],
            content:'',
            tips:'',
            show:'',
            author:''
        }
    },
    methods: {
        sub:function () {
            let t=this;
            t.isshow=0;
            let ajax=new J.A();
            ajax.ajaxs('/blog/bContent/save',{content:t.content,title:'投诉通知',author:t.author},'POST').then(function (res) {
                if(res.code==0){
                    t.show=1;
                    t.tips='提交成功';
                    setTimeout(function () {
                        t.show=0;
                        t.go('Index')
                    },2000)

                }
            })
        }
    },
    mounted:function () {
        let t=this;
        let ajax=new J.A();
        ajax.ajaxs('/blog/bContent/mobileadd',{},'GET').then(function (res) {
           t.author=res.msg
        })
    },

}