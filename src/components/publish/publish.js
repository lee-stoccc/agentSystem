export default {
    components: {
        Publish: 'Publish'
    },
    data () {
        return {
            msg: 'Welcome to Your Vue.js App',
            area: [
                {id: 10, name: '广告合作'},
                {id: 11, name: '合作经营'},
                {id: 12, name: '运营商'},
                {id: 13, name: '商家'},
                {id: 14, name: '小程序模板'},
            ],
            dot:true,
            name:'广告合作',
            aid:10
        }
    },
    methods:{
        choarea:function () {
            this.dot=!this.dot;
        },
        chos:function (e) {
            this.dot=!this.dot;
            this.aid=e.target.dataset.sid;
            this.name=e.target.dataset.na
        }
    },
    mounted:function () {
        console.log(this.$route.params.id)
    }
}