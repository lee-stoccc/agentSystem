/**
 * Created by Administrator on 2018/5/22 0022.
 */
/**
 * Created by Administrator on 2018/5/18 0018.
 */

import Qrcode from '@xkeshi/vue-qrcode';
export default {
    components: {
        Trade: 'Trade',
        qrcode: Qrcode
    },
    data () {
        return {
            type: 0,
            qrcodeUrl:"www.baidu.com"
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
    }
}