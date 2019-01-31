/**
 * Created by Fakedestinyck on Jan/31/2019.
 */
require('./bootstrap');
Vue.component('ownsmurf',require('./components/Ownsmurf.vue'));

import ElementUI from 'element-ui';
import JsEncrypt from 'jsencrypt'
Vue.use(require('vue-cookies'));
Vue.use(ElementUI);

// import './echartResizeHelper.js';
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);
Vue.prototype.$jsEncrypt = JsEncrypt;
const ownsmurf = new Vue({
    propData:{
        propOne: "interestingData"
    },
    el: '#ownsmurf',
    // template: '<ownsmurf/>',
});