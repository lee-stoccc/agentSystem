/**
 * Created by Administrator on 2018/5/22 0022.
 */
import Vue from 'vue'
import VeeValidate, {Validator} from 'vee-validate'
import zh from 'vee-validate/dist/locale/zh_CN';//引入中文文件

// 配置中文
Validator.localize(zh);

const config = {
    locale: 'zh_CN'
};

Vue.use(VeeValidate,config);

// 自定义validate
const dictionary = {
        zh_CN: {
            messages: {
                phone: () => '请输入正确的手机号码',
                email: () => '请输入正确的邮箱格式',
                companyName:()=>'请输入正确的用户名',
                code:()=>'请输入正确的验证码',
            required: ( field )=> ''
    },
    attributes:{
    email:'邮箱',
        password:'密码',
        name: '账号',
        phone: '手机'
}
}
};

Validator.localize(dictionary);

Validator.extend('phone', {
        messages: {
            zh_CN:field => field + '必须是11位手机号码',
    },
    validate: value => {
    return value.length == 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
}
});

Validator.extend('companyName', {
        messages: {
            zh_CN:field => field + '必须是11位手机号码',
    },
    validate: value => {
    return /^[^0-9][A-Za-z0-9_\u4e00-\u9fa5]{1,16}$/.test(value)
}
});

Validator.extend('code', {
        messages: {
            zh_CN:field => field + '必须是11位手机号码',
    },
    validate: value => {
    return /^[0-9]{1,}$/.test(value)
}
});