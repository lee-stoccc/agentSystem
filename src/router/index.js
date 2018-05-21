import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/Index.vue'
import Mine from '@/components/mine/Mine.vue'
import Login from '@/components/login/Login.vue'
import CompanyList from '@/components/companyList/CompanyList.vue'
import CompanyDetail from '@/components/companyDetail/CompanyDetail.vue'
import Trade from '@/components/Trade/Trade.vue'
import Regist from '@/components/regist/Regist.vue'
import Template from '@/components/template/Template.vue'
import TempDetail from '@/components/tempDetail/TempDetail.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/mine',
            name: 'Mine',
            component: Mine
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/companyList',
            name: 'CompanyList',
            component: CompanyList
        },
        {
            path: '/CompanyDetail',
            name: 'CompanyDetail',
            component: CompanyDetail
        },
        {
            path: '/trade',
            name: 'Trade',
            component: Trade
        },
        {
            path: '/regist',
            name: 'Regist',
            component: Regist
        },
        {
            path: '/template',
            name: 'Template',
            component: Template
        }
        ,
        {
            path: '/TempDetail',
            name: 'TempDetail',
            component: TempDetail
        }

    ]
})
