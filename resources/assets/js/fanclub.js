require('./bootstrap');
Vue.component('fanclub',require('./components/Fanclub.vue'));

import ElementUI from 'element-ui';
Vue.use(require('vue-cookies'));
Vue.use(ElementUI);

// import './echartResizeHelper.js';
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);
// Vue.prototype.$jsEncrypt = JsEncrypt;
const fanclub = new Vue({
    el: '#fanclub',
    template: '<fanclub/>',
});