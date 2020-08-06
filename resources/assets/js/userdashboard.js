/**
 * Created by Fakedestinyck on Feb/4/2019.
 */

require('./bootstrap');
Vue.component('userdashboard',require('./components/Userdashboard.vue'));

import ElementUI from 'element-ui';
import JsEncrypt from 'jsencrypt'
Vue.use(require('vue-cookies'));
Vue.use(ElementUI);

// import './echartResizeHelper.js';
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);
Vue.prototype.$jsEncrypt = JsEncrypt;
const userdashboard = new Vue({
    el: '#userdashboard',
    template: '<userdashboard/>',
});