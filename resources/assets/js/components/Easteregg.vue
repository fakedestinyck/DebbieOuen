<template>
    <div>


        <h1>SING什么时候解散？</h1>
        <div class="main-switch">
            <h2>SING女团</h2>
            <el-switch
                    v-model="value"
                    active-color="#ff4949"
                    @change="switchOn"
                    :disabled="value">
            </el-switch>
            <h2>一键解散</h2>
        </div>
<!--        <div><iframe src="/strip/s.html" frameborder="0" v-if="value"></iframe></div>-->
        <el-image
                src="https://lg-bus1kzl6-1251693677.file.myqcloud.com/debbie/jiesan.jpeg"
                fit="contain"
                v-if="!value"></el-image>
        <el-image
                src="https://lg-bus1kzl6-1251693677.file.myqcloud.com/debbie/jiesan2.jpeg"
                fit="contain"
                v-else></el-image>
    </div>
</template>

<script>
    import {axios} from "../axios/api";

    export default {
        name: "Easteregg",
        data() {
            return {
                value: false
            }
        },
        mounted() {
            this.hideLoading();
        },
        computed: {

        },
        methods: {

            hideLoading: function () {
                $('#loading_all').delay(500).hide(0);
                setTimeout(function () {
                    $('body').removeClass("scoll_dis");
                    document.removeEventListener("touchmove", myFunction);
                    $('html, body, main').css({
                        overflow: 'auto',
                        height: 'auto'
                    });
                }, 500);
                // console.log("hide");
            },
            loadJs: function loadScript(url, callback){
                var script = document.createElement ("script");
                script.type = "text/javascript";
                if (script.readyState){ //IE
                    script.onreadystatechange = function(){
                        if (script.readyState === "loaded" || script.readyState === "complete"){
                            script.onreadystatechange = null;
                            callback();
                        }
                    };
                } else { //Others
                    script.onload = function(){
                        callback();
                    };
                }
                script.src = url;
                document.getElementsByTagName("head")[0].appendChild(script);
            },
            libsJsLoaded: function () {
                // this.hideLoading();
            },
            switchOn() {
                this.loadJs('/strip/js/vendors.js',this.libsJsLoaded);
            },

        }
    }
</script>

<style>
    h1 {
        text-align: center;
        margin-top: 20px;
        font-size: 60px;
    }
    h2 {
        text-align: center;
        margin-top: 40px;
        font-size: 36px;
        color: #ff4949;
    }
    .el-switch {
        margin-top: 20px;
        display: inherit;
        text-align: center;
    }
    .el-switch__core {
        width: 120px!important;
        height: 40px;
        border-radius: 40px;
        line-height: 40px;
    }
    .el-switch__core:after {
        height: 36px;
        width: 36px;
    }
    .el-switch.is-checked .el-switch__core::after {
        left: 100%;
        margin-left: -36px;
        height: 36px;
        width: 36px;
    }
    .el-image {
        width: 90%;
        max-width: 540px;
        margin: auto;
        display: block;
    }
    iframe {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 0;
    }
</style>