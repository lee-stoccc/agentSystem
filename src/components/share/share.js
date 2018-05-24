/**
 * Created by Administrator on 2018/5/22 0022.
 */
/**
 * Created by Administrator on 2018/5/18 0018.
 */

import QRCode from 'qrcode'
export default {
    components: {
        Trade: 'Trade'
    },
    data () {
        return {
            type: 0
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
        qrcode:function () {
            function qrcode () {
                let qrcode = new QRCode('qrcode', {
                    width: 1000,
                    height: 1000, // 高度
                    text: '56663159',
                    render: 'canvas',
                    background: '#f0f',
                    foreground: '#ff0'
                });
                console.log(qrcode)
            }

        }
    },
    mounted: function () {
        this.qrcode()
    }
}