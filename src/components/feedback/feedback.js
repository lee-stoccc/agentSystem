/**
 * Created by Administrator on 2018/5/28 0028.
 */
/**
 * Created by Administrator on 2018/5/18 0018.
 */
import * as J from '../../../static/ajax.js'
import Swiper from '../../../static/swiper.min.js'
export default {
    name:'Index',
    data () {
        return {
            list:[],
            isshow:0,
            cid:'',
            title:'',
            content:''
        }

    },
    methods:{
        swiper () {
            new Swiper('.swiper-container', {
                autoplay: 1000,
                loop: true,
                observer: true
            })
        },
        response:function (id,title) {
            let t =this;
            t.isshow=1;
            t.cid=id;
            t.title=title
        },
        sub:function () {
            let t=this;
            t.isshow=0;
            let ajax=new J.A();
            ajax.ajaxs('/blog/bContent/reply',{id:t.cid,content:t.content,title:t.title},'POST').then(function (res) {
                res.code==0?t.content='':''
            })
        }
    },
    mounted:function () {
        let t=this;
        let ajax=new J.A();
        ajax.ajaxs('/blog/bContent/list','','GET').then(function (res) {
            console.log(res);
            t.list=res.rows
        })
    },

}