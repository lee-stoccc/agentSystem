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
            list:[]

        }

    },
    // 路由传递参数
    methods:{
        swiper () {
            new Swiper('.swiper-container', {
                autoplay: 1000,
                loop: true,
                observer: true
            })
        },
    },
    mounted:function () {
        let t=this;
        let ajax=new J.A();
        //轮播图
        ajax.ajaxs('/blog/bContent/list','','GET').then(function (res) {
            console.log(res);
            t.list=res.rows
        })
    },

}