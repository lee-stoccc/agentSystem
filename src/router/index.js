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
import Collect from '@/components/Collect/Collect.vue'
import Publish from '@/components/publish/Publish.vue'
import Share from '@/components/share/Share.vue'
import Friends from '@/components/friends/Friends.vue'
import Agent from '@/components/agent/Agent.vue'
import Customer from '@/components/customer/Customer.vue'
import Alert from '@/components/alert/Alert.vue'
import TradeDetail from '@/components/tradeDetail/TradeDetail.vue'
import Feedback from '@/components/feedback/Feedback.vue'
Vue.use(Router);

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
            path: '/companyList',     //分公司
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
        ,
        {
            path: '/Collect',
            name: 'Collect',
            component: Collect
        }
        ,
        {
            path: '/Publish',
            name: 'Publish',
            component: Publish
        }
        ,
        {
            path: '/Share',
            name: 'Share',
            component: Share
        },
        {
            path: '/Friends',
            name: 'Friends',
            component: Friends
        }
        ,
        {
            path: '/Agent',
            name: 'Agent',
            component: Agent
        }
        ,
        {
            path: '/Customer',
            name: 'Customer',
            component: Customer
        }
        ,
        {
            path: '/Alert',
            name: 'Alert',
            component: Alert
        },
        {
            path: '/TradeDetail',
            name: 'TradeDetail',
            component: TradeDetail
        },
        {
            path: '/Feedback',
            name: 'Feedback',
            component: Feedback
        }
    ]
})
