import $ from 'jquery'
// 公开一个封装的ajax类
export class A {
    ajaxs(url, data,method) {
        url='http://192.168.1.162'+url;
        var p = new Promise(function (suc, err) {
            $.ajax({
                url: url,
                data: data,
                dataType: 'json',
                type: method,
                xhrFields: {withCredentials: true},
                success: suc,
                error:err,
                header:{
                    "Content-Type": "multipart/form-data"
                }
            })
        });
        return p
    }
}

