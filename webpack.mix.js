const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.webpackConfig({
    externals: {
        "vue": "Vue",
        "element-ui": "ELEMENT",
        "jsencrypt": "JSEncrypt",
        "vue-router": "VueRouter"
    }
});

mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css')
    .js('resources/assets/js/weibo.js','public/js')
    .js('resources/assets/js/homepage.js','public/js')
    .js('resources/assets/js/smurf.js','public/js')
    .js('resources/assets/js/ownsmurf.js','public/js')
    .js('resources/assets/js/userdashboard.js','public/js')
    .js('resources/assets/js/admindashboard.js','public/js')
    .js('resources/assets/js/fanclub.js','public/js')
    .js('resources/assets/js/fanclubregister.js','public/js');

mix.styles([

    // 'resources/assets/css/codemirror.css',
    'resources/assets/css/styles.css',
    'resources/assets/css/main.css',
    'resources/assets/css/custom.css',
    'resources/assets/css/mobirise-icons.css',
    'resources/assets/css/socicon.css',
    'resources/assets/theme/css/style.css',
    'resources/assets/css/mbr-additional.css',
    // 'resources/assets/css/mdn-like.css'

], 'public/css/libs.css');

mix.scripts([
    // 'resources/assets/js/codemirror.js',
    // 'resources/assets/js/clike.js',
    // 'resources/assets/js/echarts.js',
    // 'resources/assets/js/echarts.min.js',
    'resources/assets/js/echartsdebbietheme.js',
    'resources/assets/theme/js/script.js',
    'resources/assets/js/referrer-killer.js',
    'resources/assets/js/chplayer.min.js'

], 'public/js/libs.js');

// mix.scripts([
//     'resources/assets/js/weibo.js'
// ], 'public/js/weibo.js');
