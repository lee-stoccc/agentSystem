/**
 * Created by Administrator on 2018/5/22 0022.
 */
/**
 * Created by Administrator on 2018/5/18 0018.
 */
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
            this.type = 1
        },
        save: function () {
            this.type=0
        }
    },
    mounted: function () {

    }
}