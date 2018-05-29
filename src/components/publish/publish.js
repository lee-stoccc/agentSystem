import * as J from '../../../static/ajax'
const url='http://192.168.1.141';
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
        publicSuccess:function () {
            var t=this;
            t.show=1;
            t.tips='发布成功';
            setTimeout(function () {
                t.show=0;
            },2000)
        },
        //广告合作发布
        sub:function () {
            var t=this;
            var formData = new FormData($('#signupForm1')[0]);
            $.ajax({
                url : url+"/system/advertising/save",
                type : "post",
                processData: false,
                contentType: false,
                data : formData,// 你的formid
                success:function (data) {
                    t.publicSuccess()
                },
                error:function () {
                    t.publicSuccess()
                }
            })

        },


        // 合作经营发布
        sub2:function () {
            var t=this;
            var formData = new FormData($('#signupForm2')[0]);
            $.ajax({
                url : url+"/system/manage/save",
                type : "post",
                processData: false,
                contentType: false,
                data : formData,// 你的formid
                success:function (data) {
                    t.publicSuccess()
                },
                error:function () {
                    t.publicSuccess()
                }
            })

        },

        //小程序发布
        sub3:function () {
            var t =this;
            var formData = new FormData($('#signupForm3')[0]);
            $.ajax({
                url : url+"/system/miniappDetails/save",
                type : "post",
                processData: false,
                contentType: false,
                data : formData,// 你的formid
                success:function (data) {
                    t.publicSuccess()
                },
                error:function () {
                    t.publicSuccess()
                }
            })
        },

        // 运营商
        sub4:function () {
            var t =this;
            var formData = new FormData($('#signupForm4')[0]);
            $.ajax({
                url : url+"/system/operator/save",
                type : "post",
                processData: false,
                contentType: false,
                data : formData,// 你的formid
                success:function (data) {
                    t.publicSuccess()
                },
                error:function () {
                    t.publicSuccess()
                }
            })
        },

        // 商家
        sub5:function () {
            var t =this;
            var formData = new FormData($('#signupForm5')[0]);
            $.ajax({
                url : url+"/system/merchant/save",
                type : "post",
                processData: false,
                contentType: false,
                data : formData,// 你的formid
                success:function (data) {
                    t.publicSuccess()
                },
                error:function () {
                    t.publicSuccess()
                }
            })
        }
    },
    mounted:function () {
        console.log(this);
        document.getElementById('input-area').style.minHeight='130px'
    },

}


