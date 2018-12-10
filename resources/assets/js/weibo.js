/**
 * Created by Fakedestinyck on Dec/9/2018.
 */
require('./bootstrap');
Vue.component('weibo',require('./components/Weibo.vue'));

import ElementUI from 'element-ui';
Vue.use(require('vue-cookies'));
Vue.use(ElementUI);

// import './echartResizeHelper.js';
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);

const weibo = new Vue({
    el: '#weibo',
    template: '<weibo/>',
});