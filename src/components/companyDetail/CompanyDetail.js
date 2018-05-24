/**
 * Created by Administrator on 2018/5/18 0018.
 */
export default {
    name: 'CompanyDetail',

    data () {
        return {
            msg: 'Welcome to Your Vue.js App',
            type:1
        }
    },
    methods: {
        show: function(e) {
            if(e.target.dataset.s==1){
                this.type=1
            }else {
                this.type=2
            }
        }
    },
    created:function (e) {
        console.log(e)
    }
}