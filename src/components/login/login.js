
export default {
    name:'Login',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App',
            type:2
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
    }
}