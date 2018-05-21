
export default {
    name:'Index',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App',
            type:1,
        }
    },
    methods:{

    },
    mounted:function () {
        console.log(this.$route.params.id)

    }
}