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
            showImg:false,
            isshow:false,
            showInput:false
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
            this.showImg = true
            this.isshow = true
            console.log(this.showImg,this.isshow)
        },
        getsdf:function (datas) {
            this.isshow=datas.isshow;
            this.showImg=datas.showImg
        }
    }
}