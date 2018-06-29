import $ from 'jquery'
// 公开一个封装的ajax类
// const url_1='http://os.suyongw.com'

const url_1='http://192.168.1.161:8866'


export class A {
    ajaxs(url, data,method) {
        url=url_1+url;
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

