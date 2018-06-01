/**
 * Created by Administrator on 2018/5/22 0022.
 */
import * as J from '../../../static/ajax'
export default {
    components:{
        Collect:'Collect',

    },
    data () {
        return {
            msg: 'Welcome to Your Vue.js App',
            type:1,
            list:[]
        }
    },
    methods:{
      godetail:function (id,type) {
          var t =this;
          console.log(id,type);
          switch (type){
              case 0:
                  t.go('TempDetail',{id:id},);
                  break;
              case 1:
                  t.go('TradeDetail',{id:id,types:type});
                  break;
              case 2:
                  t.go('TradeDetail',{id:id,types:type});
                  break;
              case 3:
                  t.go('TradeDetail',{id:id,types:type});
                  break;
              case 4:
                  t.go('TradeDetail',{id:id,types:type});
                  break;
              case 5:
                  t.go('TradeDetail',{id:id,types:type});
                  break;
          }
      }  
    },
    mounted:function () {
        let t=this;
        let ajax=new J.A();
        ajax.ajaxs('/system/wechat/myCollectionList',{},'GET').then(function (res) {
            t.list =res
        });
    },
}