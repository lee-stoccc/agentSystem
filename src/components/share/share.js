/**
 * Created by Administrator on 2018/5/22 0022.
 */
/**
 * Created by Administrator on 2018/5/18 0018.
 */
import * as J from '../../../static/ajax.js'
import Qrcode from '@xkeshi/vue-qrcode';
export default {
    components: {
        Trade: 'Trade',
        qrcode: Qrcode,

    },
    data () {
        return {
            type: 0,
            qrcodeUrl:"",
            codes:'',
            coin:'',
        }
    },
    methods: {
        share: function () {
            this.type = 1;
             this.qrcode()

        },
        save: function () {
            this.type=0
        },

    },
    mounted: function () {
        var t=this;
        var ajax=new J.A();
        ajax.ajaxs('/mobileshare',{},'GET').then(function (res) {
            t.codes=res.code;
            t.coin=res.coin;
            t.qrcodeUrl=res.url;
        })
    }
}