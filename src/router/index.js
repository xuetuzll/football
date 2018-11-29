import Vue from 'vue'
import Router from 'vue-router'
import information from '@/pages/information/information'
import my from '@/pages/my/my'
import prospect from '@/pages/prospect/prospect'
import guess from '@/pages/guess/guess'
import aboutadvertising from '@/pages/my/more/aboutadvertising'
import aboutus from '@/pages/my/more/aboutus'
import feedback from '@/pages/my/more/feedback'
import myguess from '@/pages/my/more/myguess'
import pay from '@/pages/my/more/pay'

import aboutme from '@/pages/my/more/aboutme'
import changepassword from '@/pages/my/more/changepassword'
import linkaccount from '@/pages/my/more/linkaccount'
import myinformation from '@/pages/my/more/myinformation'
import prizelog from '@/pages/my/more/prizelog'

import score from '@/pages/score/score'
import qiangdui from  '@/pages/score/shaixuan/qiangdui'
import shuju from '@/pages/score/shaixuan/shuju'
import saishi from '@/pages/score/shaixuan/saishi'
import pankou from '@/pages/score/shaixuan/pankou'
import tiaojian from '@/pages/score/shaixuan/tiaojian'
import zhishu from '@/pages/score/shaixuan/zhishu'
import guojia from '@/pages/score/shaixuan/guojia'
import shezhi from '@/pages/score/shezhi'

Vue.use(Router)


export default new Router({
  routes: [
    {path: '/',redirect: '/score'},
    {path: '/information', name: "information", component: information},
    {path: '/my', name: "my", component: my},
    {path: '/prospect', name: "prospect", component: prospect},
    {path: '/guess', name: "guess", component: guess},
    {path: '/score', name: "score", component: score},
    {path: '/aboutadvertising', name: "aboutadvertising", component: aboutadvertising},
    {path: '/aboutus', name: "aboutus", component: aboutus},
    {path: '/feedback', name: "feedback", component: feedback},
    {path: '/myguess', name: "myguess", component: myguess},
    {path: '/pay', name: "pay", component: pay},
    {path: '/changepassword', name: "changepassword", component: changepassword},
    {path: '/aboutme', name: "aboutme", component: aboutme},
    {path: '/linkaccount', name: "linkaccount", component: linkaccount},
    {path: '/myinformation', name: "myinformation", component: myinformation},
    {path: '/prizelog', name: "prizelog", component: prizelog},
    {path: '/qiangdui', name: "qiangdui", component: qiangdui},
    {path: '/shuju', name: "shuju", component: shuju},
    {path: '/saishi', name: "saishi", component: saishi},
    {path: '/pankou', name: "pankou", component: pankou},
    {path: '/tiaojian', name: "tiaojian", component: tiaojian},
    {path: '/zhishu', name: "zhishu", component: zhishu},
    {path: '/guojia', name: "guojia", component: guojia},
    {path: '/shezhi', name: "shezhi", component: shezhi},
    {path:'*', redirect:'/score'}
  ]
})
