/**
 * Created by Administrator on 2018/5/18 0018.
 */
export default {
    components: {
        Trade: 'Trade'
    },
    data () {
        return {
            msg: 'Welcome to Your Vue.js App',
            type: 2,
            area: [
                {id: 10, name: '花都'},
                {id: 12, name: '美利坚'},
                {id: 11, name: '运营'},
            ],
            aid:'',
            dot:true,
            aname:'',
            src:''
        }
    },
    methods: {
        show: function (e) {
            this.type = e.target.dataset.s
        },
        choarea:function (e) {
            this.dot=!this.dot;
        },
        chos:function (e) {
            this.dot=!this.dot;
            this.aid=e.target.dataset.sid;
            this.aname=e.target.dataset.na;
            this.type=e.target.dataset.sid
        }

    },
    mounted:function () {
            console.log(this)
    }
}