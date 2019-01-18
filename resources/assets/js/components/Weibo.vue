<template>
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header class="mdl-layout__header">
            <div class="mdl-layout__header-row">
                <span class="mdl-layout-title">微博相关</span>
            </div>
            <div class="mdl-layout__tab-bar mdl-js-ripple-effect">
                <a href="#scroll-tab-1" class="mdl-layout__tab is-active">呆呆近30天微博链接</a>
                <a href="#scroll-tab-2" class="mdl-layout__tab">30天安利蒋申</a>
                <a href="#scroll-tab-3" class="mdl-layout__tab">补录数据</a>
                <a href="#scroll-tab-4" class="mdl-layout__tab">补录数据 - 无法识别</a>
                <!--<a href="#scroll-tab-3" class="mdl-layout__tab">View uploaded Projects</a>-->
                <!--<a href="#scroll-tab-4" class="mdl-layout__tab">Miscellaneous Tools</a>-->
            </div>
        </header>
        <div class="mdl-layout__drawer">
            <span class="mdl-layout-title"><a href="../data">主页</a></span>
            <nav class="mdl-navigation">
                <!--<a class="mdl-navigation__link" href="#">敬请期待</a>-->
                <a class="mdl-navigation__link" href="/ranks/ranking">打榜数据</a>
                <a class="mdl-navigation__link" href="#">微博相关</a>
            </nav>
        </div>
        <main class="mdl-layout__content mdl-demo">
            <section class="mdl-layout__tab-panel is-active" id="scroll-tab-1">
                <section class="section--center mdl-grid mdl-grid--no-spacing">
                    <div class="mdl-cell mdl-cell--12-col">
                        <h4>近30天微博链接</h4>
                        <!-- MDL Spinner Component -->
                        <div class="mdl-spinner mdl-js-spinner is-active" v-show="recentWeiboLoading"></div>
                        <pre>{{ recent_weibo }}</pre>
                    </div>
                </section>
            </section>

            <section class="mdl-layout__tab-panel" id="scroll-tab-2">
                <section class="page-content demo-layout mdl-layout mdl-layout--fixed-header mdl-color--grey-100">
                    <div class="demo-ribbon" style="background-color: white"></div>
                    <main class="demo-main mdl-layout__content">
                        <div class="demo-container mdl-grid">
                            <div class="mdl-cell mdl-cell--2-col mdl-cell--hide-tablet mdl-cell--hide-phone"></div>
                            <div class="demo-content mdl-color--white mdl-shadow--4dp content mdl-color-text--grey-800 mdl-cell mdl-cell--8-col">
                                <!--<div class="demo-crumbs mdl-color-text--grey-500">-->
                                <!--Google &gt; Material Design Lite &gt; How to install MDL-->
                                <!--</div>-->
                                <div class="self-wrapper">
                                    <h3>30天安利蒋申 - 数据</h3>
                                    <!-- MDL Spinner Component -->
                                    <div class="mdl-spinner mdl-js-spinner is-active" v-show="loadingAnliData"></div>
                                    <pre>{{anliYesturdayData}}</pre>
                                    <a class="mdl-button mdl-js-button mdl-button--raised
                                        mdl-js-ripple-effect mdl-button--colored" @click="getAnliDay"
                                       v-show="!loadingAnliData">获取昨天的数据</a>
                                </div>
                            </div>
                        </div>
                    </main>
                </section>
            </section>

            <section class="mdl-layout__tab-panel" id="scroll-tab-3">
                <section class="page-content demo-layout mdl-layout mdl-layout--fixed-header mdl-color--grey-100">
                    <div class="demo-ribbon" style="background-color: white"></div>
                    <main class="demo-main mdl-layout__content">
                        <div class="demo-container mdl-grid">
                            <div class="mdl-cell mdl-cell--2-col mdl-cell--hide-tablet mdl-cell--hide-phone"></div>
                            <div class="demo-content mdl-color--white mdl-shadow--4dp content mdl-color-text--grey-800 mdl-cell mdl-cell--8-col">
                                <!--<div class="demo-crumbs mdl-color-text--grey-500">-->
                                <!--Google &gt; Material Design Lite &gt; How to install MDL-->
                                <!--</div>-->
                                <div class="self-wrapper">
                                    <h3>30天安利蒋申 - 人工补录DayX</h3>
                                    <h5 v-html="thirtyDaysTweetsText"></h5>
                                    <h5 v-show="!loadingNextTweets">{{ thirtyDaysTweetsDate }}</h5>
                                    <a :href="'https://m.weibo.cn/detail/'+thirtyDaysTweetsTweetId" target="_blank"
                                       v-show="!loadingNextTweets">链接</a>
                                    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label"
                                         v-show="!loadingNextTweets">
                                        <input class="mdl-textfield__input" type="text" id="thirtyDaysDayXInput"
                                               v-model="thirtyDaysDayXInput" required @keyup.enter="onSubmitDayX" ref="thirtyDaysDayXInput">
                                        <label class="mdl-textfield__label" for="thirtyDaysDayXInput">天数</label>
                                    </div>
                                    <br>
                                    <br>
                                    <a class="mdl-button mdl-js-button mdl-button--raised
                                        mdl-js-ripple-effect mdl-button--colored" @click="onSubmitDayX"
                                       v-show="!loadingNextTweets">确定</a>

                                </div>
                            </div>
                        </div>

                    </main>


                </section>
            </section>


            <section class="mdl-layout__tab-panel" id="scroll-tab-4">
                <section class="page-content demo-layout mdl-layout mdl-layout--fixed-header mdl-color--grey-100">
                    <div class="demo-ribbon" style="background-color: white"></div>
                    <main class="demo-main mdl-layout__content">
                        <div class="demo-container mdl-grid">
                            <div class="mdl-cell mdl-cell--2-col mdl-cell--hide-tablet mdl-cell--hide-phone"></div>
                            <div class="demo-content mdl-color--white mdl-shadow--4dp content mdl-color-text--grey-800 mdl-cell mdl-cell--8-col">
                                <!--<div class="demo-crumbs mdl-color-text--grey-500">-->
                                <!--Google &gt; Material Design Lite &gt; How to install MDL-->
                                <!--</div>-->
                                <div class="self-wrapper">
                                    <h3>30天安利蒋申 - 人工补录DayX - 无法识别</h3>
                                    <h5 v-html="thirtyDaysTweetsTextBad"></h5>
                                    <h5 v-show="!loadingNextTweetsBad">{{ thirtyDaysTweetsDateBad }}</h5>
                                    <a :href="'https://m.weibo.cn/detail/'+thirtyDaysTweetsTweetIdBad" target="_blank"
                                       v-show="!loadingNextTweetsBad">链接</a>
                                    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" v-show="!loadingNextTweetsBad">
                                        <input class="mdl-textfield__input" type="text" id="thirtyDaysDayXInputBad"
                                               v-model="thirtyDaysDayXInputBad" required @keyup.enter="onSubmitDayXBad" ref="thirtyDaysDayXInputBad">
                                        <label class="mdl-textfield__label" for="thirtyDaysDayXInputBad">天数</label>
                                    </div>
                                    <br>
                                    <br>
                                    <a class="mdl-button mdl-js-button mdl-button--raised
                                        mdl-js-ripple-effect mdl-button--colored" @click="onSubmitDayXBad"
                                       v-show="!loadingNextTweetsBad">确定</a>

                                </div>
                            </div>
                        </div>

                    </main>


                </section>
            </section>

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
    export default {

        components: {},

        mounted: function () {
            this.hideLoading();
            this.getRecentWeibo();
            this.loadNextThirtyDaysTweets();
            this.loadNextThirtyDaysTweetsBad();
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

            getRecentWeibo: function () {
                let that = this;
                axios.get('/api/weibo/getRecent/all', {
                    //
                })
                    .then(function (response) {
                        let data = response.data;
                        that.recent_weibo = data;
                        that.recentWeiboLoading = false;
                    })
                    .catch(function (error) {
                        alert(error);
                    });
            },

            getAnliDay: function () {
                this.loadingAnliData = true;
                let that = this;
                this.anliYesturdayData = "";
                axios.get('/weibo/anli/day', {
                    //
                })
                    .then(function (response) {
                        let data = response.data;
                        console.log(data);
                        that.anliYesturdayData += `昨天共有${data.user_count}名护申符在#sing蒋申[超话]#里发了${data.total}条微博\n`;
                        that.anliYesturdayData += `参与了 #30天安利蒋申# 的微博有${data.tag_anli}条\n`;
                        that.anliYesturdayData += `带有#祝福时刻#的微博有${data.tag_shiny}条\n`;
                        that.anliYesturdayData += `最早发帖的符符是 @${data.earliest.username} ，发帖时间：${data.earliest.tweets_time}\n`;
                        that.anliYesturdayData += `@${data.top_tweet.username} 发的微博最具有真情实感，获得了最多的${data.max_zzp}个转赞评\n`;
                        that.anliYesturdayData += `膜拜链接：https://m.weibo.cn/${data.top_tweet.user_id}/${data.top_tweet.tweets_id}\n\n`;

                        that.anliYesturdayData += `12月${data.day}日 祝福时刻链接汇总\n`;
                        for (let i = 0; i<data.shiny_url.length; ++i) {
                            that.anliYesturdayData += `${i+1}.\t${data.shiny_url[i]}\n`;
                        }
                        that.loadingAnliData = false;
                    })
                    .catch(function (error) {
                        if (error.response.status === 403) {
                            alert(error.response.data);
                        } else {
                            alert(error);
                        }
                    });
            },


            getCompletenessData: function () {
                let that = this;
                axios.get('/weibo/anli/stats/completeness', {
                    //
                })
                    .then(function (response) {

                    })
                    .catch(function (error) {
                        alert(error);
                    });
            },


            loadNextThirtyDaysTweets: function () {
                let that = this;
                axios.get('/weibo/nextThirtyDays', {
                    //
                })
                    .then(function (response) {
                        let data = response.data;
//                        console.log(response);
                        if (data === "") {
                            that.thirtyDaysTweetsText = "没有更新的了";
                            that.thirtyDaysTweetsId = null;
                            that.$refs.thirtyDaysDayXInput.style.display = 'none';
                            return;
                        }
                        that.thirtyDaysTweetsText = data.text.replace(/\n/g, "<br>");
                        that.thirtyDaysTweetsDate = data.tweets_time;
                        that.thirtyDaysTweetsId = data.id;
                        that.thirtyDaysTweetsTweetId = data.tweets_id;
                        that.loadingNextTweets = false;
                        setTimeout(function(){
                            that.$refs.thirtyDaysDayXInput.focus();
                        }, 1);
                    })
                    .catch(function (error) {
                        alert(error);
                    });
            },

            onSubmitDayX: function () {
                if (this.thirtyDaysTweetsId === null) {
                    return;
                }
                this.loadingNextTweets = true;
                this.thirtyDaysTweetsText = "";
                let that = this;
                axios.post('/weibo/sendDayX', {
                    id: this.thirtyDaysTweetsId,
                    day_x: this.thirtyDaysDayXInput
                })
                    .then(function (response) {
                        console.log(response);
                        if (response.data === "success") {
                            that.loadingNextTweets = true;
                            that.loadNextThirtyDaysTweets();
                        }
                    })
                    .catch(function (error) {
                        alert(error);
                    });
            },

            loadNextThirtyDaysTweetsBad: function () {
                let that = this;
                axios.get('/weibo/nextThirtyDays/bad', {
                    //
                })
                    .then(function (response) {
                        let data = response.data;
                        console.log(response);
                        if (data === "") {
                            that.thirtyDaysTweetsTextBad = "没有更新的了";
                            that.thirtyDaysTweetsIdBad = null;
                            that.$refs.thirtyDaysDayXInputBad.style.display = 'none';
                            return;
                        }
                        that.thirtyDaysTweetsTextBad = data.text.replace(/\n/g, "<br>");
                        that.thirtyDaysTweetsDateBad = data.tweets_time;
                        that.thirtyDaysTweetsIdBad = data.id;
                        that.thirtyDaysTweetsTweetIdBad = data.tweets_id;
                        that.loadingNextTweetsBad = false;
                        setTimeout(function(){
                            that.$refs.thirtyDaysDayXInputBad.focus();
                        }, 1);

                    })
                    .catch(function (error) {
                        alert(error);
                    });
            },

            onSubmitDayXBad: function () {
                if (this.thirtyDaysTweetsIdBad === null) {
                    return;
                }
                this.loadingNextTweetsBad = true;
                this.thirtyDaysTweetsTextBad = "";
                let that = this;
                axios.post('/weibo/sendDayX', {
                    id: this.thirtyDaysTweetsIdBad,
                    day_x: this.thirtyDaysDayXInputBad,
                })
                    .then(function (response) {
                        console.log(response);
                        if (response.data === "success") {
                            that.loadingNextTweetsBad = true;
                            that.loadNextThirtyDaysTweetsBad();
                        }
                    })
                    .catch(function (error) {
                        alert(error);
                    });
            },
        },
        data() {
            return {
                recent_weibo: "",
                recentWeiboLoading: true,
                loadingAnliData: false,
                anliYesturdayData: "",
                thirtyDaysTweetsText: "",
                thirtyDaysTweetsDate: "",
                thirtyDaysDayXInput: "",
                thirtyDaysDayXInputBad: "",
                thirtyDaysTweetsTextBad: "",
                thirtyDaysTweetsDateBad: "",
                thirtyDaysTweetsId: "",
                thirtyDaysTweetsTweetId: "",
                thirtyDaysTweetsIdBad: "",
                thirtyDaysTweetsTweetIdBad: "",
                loadingNextTweets: true,
                loadingNextTweetsBad: true
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
</style>