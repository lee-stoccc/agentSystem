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
            src: ['../../../app/f-1.png', '../../../app/f-2.png', '../../../app/f-3.png', '../../../app/f-4.png', '../../../app/fc-1.png', '../../../app/fc-2.png', '../../../app/fc-3.png', '../../../app/fc-4.png'],
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