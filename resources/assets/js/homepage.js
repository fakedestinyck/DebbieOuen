
Vue.component('homepage',require('./components/Homepage.vue'));

import ElementUI from 'element-ui';
Vue.use(require('vue-cookies'));
Vue.use(ElementUI);

// import './echartResizeHelper.js';
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);

const homepage = new Vue({
    el: '#homepage',
    template: '<homepage/>',
});