import * as J from '../../../static/ajax'
// const url='http://os.suyongw.com';
// const url='http://os.suyongw.com'
import $ from 'jquery'
export default {
    components: {
        Publish: 'Publish',
    },
    data () {
        return {
            show:0,
            tips:'',
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
            aid:10,
            config: {
                uploadUrl: 'http://localhost:8050',
                uploadName: '',
                uploadParams: {},
                uploadCallback: (data) => {
                    console.log(data)
                },
                uploadFailed: (err) => {
                    console.log(err)
                }
            },
            userId:''
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
        },
        upload1:function ($event) {
            console.log($event);
          this.file1=$event.target.files[0]
        },
        upload2:function ($event) {
            this.file2=$event.target.files[0]
        },

        //发布触发回调
        publicSuccess:function (tips) {
            var t=this;
            t.show=1;
            t.tips=tips;
            setTimeout(function () {
                t.show=0;
                t.go('Mine')
            },2000)
        },
        //广告合作发布
        sub:function () {
            var t=this;
            var formData = new FormData($('#signupForm1')[0]);
            $.ajax({
                url : t.URL+"/system/advertising/save",
                type : "post",
                processData: false,
                contentType: false,
                data : formData,// 你的formid
                success:function (res) {
                    res.msg==='no'?t.publicSuccess('请登录账号'):t.publicSuccess('发布成功');
                },
                error:function () {
                }
            })

        },


        // 合作经营发布
        sub2:function () {
            var t=this;
            var formData = new FormData($('#signupForm2')[0]);
            $.ajax({
                url :t.URL+"/system/manage/save",
                type : "post",
                processData: false,
                contentType: false,
                data : formData,// 你的formid
                success:function (res) {
                    res.msg==='no'?t.publicSuccess('请登录账号'):t.publicSuccess('发布成功');
                },
                error:function () {
                }
            })

        },

        //小程序发布
        sub3:function () {
            var t =this;
            var formData = new FormData($('#signupForm3')[0]);
            $.ajax({
                url :t.URL+"/system/miniappDetails/save",
                type : "post",
                processData: false,
                contentType: false,
                data : formData,// 你的formid
                success:function (res) {
                    res.msg==='no'?t.publicSuccess('请登录账号'):t.publicSuccess('发布成功');
                },
                error:function () {
                }
            })
        },

        // 运营商
        sub4:function () {
            var t =this;
            var formData = new FormData($('#signupForm4')[0]);
            $.ajax({
                url : t.URL+"/system/operator/save",
                type : "post",
                processData: false,
                contentType: false,
                data : formData,// 你的formid
                success:function (res) {
                    res.msg==='no'?t.publicSuccess('请登录账号'):t.publicSuccess('发布成功');
                },
                error:function () {
                }
            })
        },

        // 商家
        sub5:function () {
            var t =this;
            var formData = new FormData($('#signupForm5')[0]);
            $.ajax({
                url :t.URL+"/system/merchant/save",
                type : "post",
                processData: false,
                contentType: false,
                data : formData,// 你的formid
                success:function (res) {
                    res.msg==='no'?t.publicSuccess('请登录账号'):t.publicSuccess('发布成功');
                },
                error:function () {
                }
            })
        }
    },
    mounted:function () {
        this.userId=this.$route.params.userId;
        document.getElementById('input-area').style.minHeight='130px'
    },

}


