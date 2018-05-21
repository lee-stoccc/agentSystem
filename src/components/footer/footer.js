/**
 * Created by Administrator on 2018/5/21 0021.
 */
/**
 * Created by Administrator on 2018/5/18 0018.
 */
export default {
    name: 'Footer',
    props: ['type'],

    data () {
        return {
            msg: 'Welcome to Your Vue.js App',
            src: ['../../../static/f-1.png', '../../../static/f-2.png', '../../../static/f-3.png', '../../../static/f-4.png', '../../../static/fc-1.png', '../../../static/fc-2.png', '../../../static/fc-3.png', '../../../static/fc-4.png'],
        }
    },
    methods: {
        cho: function (e) {
            this.$router.push({
                name: e.target.dataset.n,
            });
            this.type = e.target.dataset.t;

        }
    },
    mounted:function () {
    }
}