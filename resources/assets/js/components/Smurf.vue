<template>
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header class="mdl-layout__header">
            <div class="mdl-layout__header-row">
                <span class="mdl-layout-title">小号管理</span>
            </div>
            <div class="mdl-layout__tab-bar mdl-js-ripple-effect">
                <a href="#scroll-tab-1" class="mdl-layout__tab is-active">添加账号数据</a>
                <a href="#scroll-tab-2" class="mdl-layout__tab">查看账号数据状态</a>
                <a href="#scroll-tab-3" class="mdl-layout__tab">查看人员状态</a>
                <!--<a href="#scroll-tab-4" class="mdl-layout__tab">补录数据 - 无法识别</a>-->
                <!--<a href="#scroll-tab-3" class="mdl-layout__tab">View uploaded Projects</a>-->
                <!--<a href="#scroll-tab-4" class="mdl-layout__tab">Miscellaneous Tools</a>-->
            </div>
        </header>
        <div class="mdl-layout__drawer">
            <span class="mdl-layout-title"><a href="../data">主页</a></span>
            <nav class="mdl-navigation">
                <!--<a class="mdl-navigation__link" href="#">敬请期待</a>-->
                <a class="mdl-navigation__link" href="/ranks/ranking">打榜数据</a>
                <a class="mdl-navigation__link" href="/weibo">微博相关</a>
                <a class="mdl-navigation__link" href="#">小号管理</a>
            </nav>
        </div>
        <main class="mdl-layout__content mdl-demo">
            <section class="mdl-layout__tab-panel is-active" id="scroll-tab-1">
                <section class="section--center mdl-grid mdl-grid--no-spacing">
                    <div class="mdl-cell mdl-cell--12-col">
                        <h4>添加账号数据</h4>
                        <!--<pre>{{ recent_weibo }}</pre>-->
                        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                            <textarea class="mdl-textfield__input" type="text" rows="20" maxrows="1000"
                                      id="uaps" v-model="uaps"></textarea>
                            <label class="mdl-textfield__label" for="uaps">账号密码对（每行一个，最多1000个）</label>
                        </div>
                        <!-- MDL Spinner Component -->
                        <div class="mdl-spinner mdl-js-spinner is-active" v-show="loading"></div>
                        <a class="mdl-button mdl-js-button mdl-button--raised
            mdl-js-ripple-effect mdl-button--colored" @click="uploadUaps"
                           v-show="!loading">上传</a>
                    </div>
                </section>
            </section>

            <section class="mdl-layout__tab-panel" id="scroll-tab-2">
                <section class="section--center mdl-grid mdl-grid--no-spacing">
                    <div class="mdl-cell mdl-cell--12-col">
                        <h4>账号数据状态</h4>
                        <!--&lt;!&ndash; MDL Spinner Component &ndash;&gt;-->
                        <!--<div class="mdl-spinner mdl-js-spinner is-active" v-show="loadingAnliData"></div>-->
                        <!--<pre>{{anliYesturdayData}}</pre>-->
                        <!--<a class="mdl-button mdl-js-button mdl-button&#45;&#45;raised-->
                        <!--mdl-js-ripple-effect mdl-button&#45;&#45;colored" @click="getAnliDay"-->
                        <!--v-show="!loadingAnliData">获取昨天的数据</a>-->
                        <div id="smurftable">
                            <smurftable></smurftable>
                        </div>
                    </div>
                </section>
            </section>

            <!--<section class="mdl-layout__tab-panel" id="scroll-tab-3">-->
            <!--<section class="page-content demo-layout mdl-layout mdl-layout&#45;&#45;fixed-header mdl-color&#45;&#45;grey-100">-->
            <!--<div class="demo-ribbon" style="background-color: white"></div>-->
            <!--<main class="demo-main mdl-layout__content">-->
            <!--<div class="demo-container mdl-grid">-->
            <!--<div class="mdl-cell mdl-cell&#45;&#45;2-col mdl-cell&#45;&#45;hide-tablet mdl-cell&#45;&#45;hide-phone"></div>-->
            <!--<div class="demo-content mdl-color&#45;&#45;white mdl-shadow&#45;&#45;4dp content mdl-color-text&#45;&#45;grey-800 mdl-cell mdl-cell&#45;&#45;8-col">-->
            <!--&lt;!&ndash;<div class="demo-crumbs mdl-color-text&#45;&#45;grey-500">&ndash;&gt;-->
            <!--&lt;!&ndash;Google &gt; Material Design Lite &gt; How to install MDL&ndash;&gt;-->
            <!--&lt;!&ndash;</div>&ndash;&gt;-->
            <!--<div class="self-wrapper">-->
            <!--<h3>30天安利蒋申 - 人工补录DayX</h3>-->
            <!--<h5 v-html="thirtyDaysTweetsText"></h5>-->
            <!--<h5 v-show="!loadingNextTweets">{{ thirtyDaysTweetsDate }}</h5>-->
            <!--<a :href="'https://m.weibo.cn/detail/'+thirtyDaysTweetsTweetId" target="_blank"-->
            <!--v-show="!loadingNextTweets">链接</a>-->
            <!--<div class="mdl-textfield mdl-js-textfield mdl-textfield&#45;&#45;floating-label"-->
            <!--v-show="!loadingNextTweets">-->
            <!--<input class="mdl-textfield__input" type="text" id="thirtyDaysDayXInput"-->
            <!--v-model="thirtyDaysDayXInput" required @keyup.enter="onSubmitDayX" ref="thirtyDaysDayXInput">-->
            <!--<label class="mdl-textfield__label" for="thirtyDaysDayXInput">天数</label>-->
            <!--</div>-->
            <!--<br>-->
            <!--<br>-->
            <!--<a class="mdl-button mdl-js-button mdl-button&#45;&#45;raised-->
            <!--mdl-js-ripple-effect mdl-button&#45;&#45;colored" @click="onSubmitDayX"-->
            <!--v-show="!loadingNextTweets">确定</a>-->

            <!--</div>-->
            <!--</div>-->
            <!--</div>-->

            <!--</main>-->


            <!--</section>-->
            <!--</section>-->


            <!--<section class="mdl-layout__tab-panel" id="scroll-tab-4">-->
            <!--<section class="page-content demo-layout mdl-layout mdl-layout&#45;&#45;fixed-header mdl-color&#45;&#45;grey-100">-->
            <!--<div class="demo-ribbon" style="background-color: white"></div>-->
            <!--<main class="demo-main mdl-layout__content">-->
            <!--<div class="demo-container mdl-grid">-->
            <!--<div class="mdl-cell mdl-cell&#45;&#45;2-col mdl-cell&#45;&#45;hide-tablet mdl-cell&#45;&#45;hide-phone"></div>-->
            <!--<div class="demo-content mdl-color&#45;&#45;white mdl-shadow&#45;&#45;4dp content mdl-color-text&#45;&#45;grey-800 mdl-cell mdl-cell&#45;&#45;8-col">-->
            <!--&lt;!&ndash;<div class="demo-crumbs mdl-color-text&#45;&#45;grey-500">&ndash;&gt;-->
            <!--&lt;!&ndash;Google &gt; Material Design Lite &gt; How to install MDL&ndash;&gt;-->
            <!--&lt;!&ndash;</div>&ndash;&gt;-->
            <!--<div class="self-wrapper">-->
            <!--<h3>30天安利蒋申 - 人工补录DayX - 无法识别</h3>-->
            <!--<h5 v-html="thirtyDaysTweetsTextBad"></h5>-->
            <!--<h5 v-show="!loadingNextTweetsBad">{{ thirtyDaysTweetsDateBad }}</h5>-->
            <!--<a :href="'https://m.weibo.cn/detail/'+thirtyDaysTweetsTweetIdBad" target="_blank"-->
            <!--v-show="!loadingNextTweetsBad">链接</a>-->
            <!--<div class="mdl-textfield mdl-js-textfield mdl-textfield&#45;&#45;floating-label" v-show="!loadingNextTweetsBad">-->
            <!--<input class="mdl-textfield__input" type="text" id="thirtyDaysDayXInputBad"-->
            <!--v-model="thirtyDaysDayXInputBad" required @keyup.enter="onSubmitDayXBad" ref="thirtyDaysDayXInputBad">-->
            <!--<label class="mdl-textfield__label" for="thirtyDaysDayXInputBad">天数</label>-->
            <!--</div>-->
            <!--<br>-->
            <!--<br>-->
            <!--<a class="mdl-button mdl-js-button mdl-button&#45;&#45;raised-->
            <!--mdl-js-ripple-effect mdl-button&#45;&#45;colored" @click="onSubmitDayXBad"-->
            <!--v-show="!loadingNextTweetsBad">确定</a>-->

            <!--</div>-->
            <!--</div>-->
            <!--</div>-->

            <!--</main>-->


            <!--</section>-->
            <!--</section>-->

            <footer class="demo-footer mdl-mini-footer">
                <div class="mdl-mini-footer--left-section">
                    <ul class="mdl-mini-footer--link-list">
                        <li><a href="#">帮助</a></li>
                        <li><a href="#">隐私政策</a></li>
                        <li><a href="#">用户协议</a></li>
                        <li><a href="http://www.miibeian.gov.cn/">沪ICP备16029354号-2</a></li>
                    </ul>
                </div>
            </footer>
        </main>


    </div>
</template>

<script>
    import Smurftable from './Smurftable.vue';
    export default {

        components: {
            'smurftable':Smurftable
        },

        mounted: function () {
            this.hideLoading();
//            this.getRecentWeibo();
//            this.loadNextThirtyDaysTweets();
//            this.loadNextThirtyDaysTweetsBad();
        },
        updated: function () {

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
                console.log("hide");
            },
            uploadUaps: function() {
                this.loading = true;
                this.openUploadConfirm();
            },
            openUploadConfirm: function() {
                this.uaps = this.uaps.replace(/ /g,"").replace(/[\n]+/g,"\n").replace(/^[\n]+/g,"").replace(/[\n]+$/g,"");
                if (this.uaps.replace(/[\n]/g,"") === "") {
                    this.$message({
                        type: 'warning',
                        message: "请不要提交空白"
                    });
                    this.loading = false;
                    return false;
                }
                let uaps_list = this.uaps.split("\n");
                let uaps_num = uaps_list.length;

                this.$confirm('确认上传'+uaps_num+'条账号数据?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'info'
                }).then(() => {
                    this.uploadSmurf(uaps_list);
                }).catch(() => {
//                    this.$message({
//                        type: 'info',
//                        message: '已取消删除'
//                    });
                    this.loading = false;
                });
            },
            encryptRsa: function(original) {
                let jse = this.$jsEncrypt;
                jse.prototype.setPublicKey(`
                    -----BEGIN PUBLIC KEY-----
                    MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCeqNYy4y8fZTY2pQ7729KjK9vL
                    68g0CvauJf0W4I6s3reEoiE12wLAf/5gTFE9rfvhPwwCvVE4UJed/f7+T/SObXz/
                    MvMexEYQjD2B6CWQShpH5mpq1IIgWqKlzSLvotUZzhLtdKQCkYU2nVnRLtMexPX9
                    ivNzc32Xw/bn1v67iwIDAQAB
                    -----END PUBLIC KEY-----
                `);
                return jse.prototype.encrypt(original);
            },
            decryptRsa: function(original) {
                let jse = this.$jsEncrypt;
                jse.prototype.setPublicKey(`
                    -----BEGIN PUBLIC KEY-----
                    MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCeqNYy4y8fZTY2pQ7729KjK9vL
                    68g0CvauJf0W4I6s3reEoiE12wLAf/5gTFE9rfvhPwwCvVE4UJed/f7+T/SObXz/
                    MvMexEYQjD2B6CWQShpH5mpq1IIgWqKlzSLvotUZzhLtdKQCkYU2nVnRLtMexPX9
                    ivNzc32Xw/bn1v67iwIDAQAB
                    -----END PUBLIC KEY-----
                `);
                return jse.prototype.decrypt(original);
            },
            uploadSmurf: function(uaps_list){
                var wholeString = "";
                var success_num = 0;
                var fail_num = 0;
                for (let i = 0; i < uaps_list.length; ++i) {
                    let encrypted = this.encryptRsa(uaps_list[i]+"||||");
                    if (encrypted !== false) {
                        success_num += 1;
                        wholeString += encrypted;
                    } else {
                        fail_num += 1;
                    }
                }

                let that = this;
                axios.post('/smurf/upload', {
                    wholeString: wholeString
                })
                    .then(function (response) {
                        if (response.data.status === 1) {
                            that.$message({
                                type: 'success',
                                message: response.data.msg
                            });
                        } else {
                            that.$message({
                                type: 'error',
                                message: response.data.msg
                            });
                        }
                        that.loading = false;
                    })
                    .catch(function (error) {
                        that.$message({
                            type: 'error',
                            message: error.response.data
                        });
                        that.loading = false;
                    });
            }


        },
        data() {
            return {
                uaps:"",
                loading: false
            }
        }
    }
</script>

<style scoped>
    section.section--center {
        max-width: 83.0%;
    }

    @media screen and (max-width: 1024px) {
        section.section--center {
            max-width: 97%;
        }
    }

    .mdl-textfield {
        width: 100%;
    }
</style>