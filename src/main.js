import Vue from 'vue'
import App from './App.vue'



// 引入 view-design 
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);

// 引入数据请求
import axios from 'axios';
Vue.prototype.ajax = axios;

// 引入mock
import './mock'

// 引入vue-router
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 路由用法展示
import Bar from './views/Bar.vue';
import Foo from './views/Foo.vue';
import Echarts from './views/Echarts.vue';
import Map from './views/Map.vue';
import Project from './views/Project';

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
  { path: '/echarts', component: Echarts },
  { path: '/map', component: Map },
  { path: '/project', component: Project },
]

// 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
