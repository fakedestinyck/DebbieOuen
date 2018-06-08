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

mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css');

mix.styles([

    'resources/assets/css/codemirror.css',
    'resources/assets/css/styles.css',
    'resources/assets/css/mdn-like.css'

], 'public/css/libs.css');

mix.scripts([
    'resources/assets/js/codemirror.js',
    'resources/assets/js/clike.js'

], 'public/js/libs.js');
