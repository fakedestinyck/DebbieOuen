require('./bootstrap');
Vue.component('fcregister',require('./components/FanclubRegister.vue'));

import ElementUI from 'element-ui';
Vue.use(require('vue-cookies'));
Vue.use(ElementUI);

// import './echartResizeHelper.js';
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);
// Vue.prototype.$jsEncrypt = JsEncrypt;
const fcregister = new Vue({
    el: '#fcregister',
    template: '<fcregister/>',
});