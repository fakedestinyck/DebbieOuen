/**
 * Created by Fakedestinyck on Jan/28/2019.
 */
require('./bootstrap');
Vue.component('smurf',require('./components/Smurf.vue'));

import ElementUI from 'element-ui';
import JsEncrypt from 'jsencrypt'
Vue.use(require('vue-cookies'));
Vue.use(ElementUI);

// import './echartResizeHelper.js';
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);
Vue.prototype.$jsEncrypt = JsEncrypt;
const smurf = new Vue({
    el: '#smurf',
    template: '<smurf/>',
});