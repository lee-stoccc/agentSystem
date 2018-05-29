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
            advertisingName:'',
            cooperationType:'',
            cooperationBusiness:'',
            advertisingFans:'',
            advertisingMoney:'',
            advertisingPhone:'',
            advertisingDetails:'',
            file1:'',
            file2:''

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
        sub:function () {
            var t=this;
            var formData = new FormData($('#signupForm')[0]);
            $.ajax({
                url : url+"/system/advertising/save",
                type : "post",
                processData: false,
                contentType: false,
                data : formData,// 你的formid
                success:function (data) {
                        t.show=1;
                        t.show='发布成功';
                    setTimeout(function () {
                        t.show=0;
                    },2000)
                }
            })

        },
        sub2:function () {
            var formData = new FormData($('#signupForm2')[0]);
            $.ajax({
                url : url+"/system/manage/save",
                type : "post",
                processData: false,
                contentType: false,
                data : formData,// 你的formid
                success:function (data) {
                    t.show=1;
                    t.show='发布成功';
                    setTimeout(function () {
                        t.show=0;
                    },2000)
                }
            })

        }
    },
    mounted:function () {
        console.log(this);
        document.getElementById('input-area').style.minHeight='130px'
    },

}


