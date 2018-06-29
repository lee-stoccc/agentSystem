/**
 * Created by Administrator on 2018/5/23 0023.
 */
import * as J from '../../../static/ajax.js'
export default {
    name: 'HelloWorld',

    data () {
        return {
            msg: 'Welcome to Your Vue.js App',
            num:2,
            list:[],
            src:'',
            showImg:'1',
            isshow:'1',
            showInput:'1'
        }
    },
    mounted:function () {
        var t=this;
        var ajax =new J.A();
        ajax.ajaxs('/friendcircle/friendCircleMessage/list',{},'GET').then(function (res) {
            t.list=res.rows
        })
    },

    methods:{
        updatalike:function (n) {
            var t=this;
            var ajax =new J.A();
            ajax.ajaxs('/friendcircle/friendCircleMessage/updateLikeCount',{id:n},'GET').then(function (res) {
                if(res.code==0){
                    ajax.ajaxs('/friendcircle/friendCircleMessage/list',{},'GET').then(function (res) {
                        t.list=res.rows
                    })
                }
            })
        },

        // 点击放大图片
        getSrc(e) {
            console.log(e);
            this.src = e.target.currentSrc;
            this.showImg = '0'
            this.isshow = '0'
            console.log(this.showImg,this.isshow)
        }
    }
}