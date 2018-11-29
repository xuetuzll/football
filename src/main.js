// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import './style/mint.css'
import BScroll from 'better-scroll'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//引入Element-ui
Vue.use(ElementUI)
//引入mint-ui
Vue.use(Mint)

Vue.config.productionTip = false
//引入mui样式
// import './lib/mui/css/mui.min.css'
// import './lib/mui/css/iconfont.css'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
