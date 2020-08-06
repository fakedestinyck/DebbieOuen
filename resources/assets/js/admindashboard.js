/**
 * Created by Fakedestinyck on Feb/4/2019.
 */
require('./bootstrap');
// Vue.component('admindashboard',require('./components/Admindashboard.vue'));

import ElementUI from 'element-ui';
import JsEncrypt from 'jsencrypt';
import VueRouter from 'vue-router';
Vue.use(require('vue-cookies'));
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.component('admindashboard',require('./components/Admindashboard.vue'));
// import './echartResizeHelper.js';
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);
Vue.prototype.$jsEncrypt = JsEncrypt;

const router = new VueRouter({
    mode: 'hash',
    routes: [
        // TOPページ
        {
            path: '/',
            component: Vue.component('profile',require('./components/Profile.vue')),
            name: 'profile' },
        // 記事投稿フォームページ
        {
            path: '/settings',
            component: Vue.component('user-settings',require('./components/UserSettings.vue')),
            name:'user_settings' },
    ]
});

const admindashboard = new Vue({
    router,
    el: '#admindashboard',

});