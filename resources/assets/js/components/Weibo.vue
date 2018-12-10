<template>
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header class="mdl-layout__header">
            <div class="mdl-layout__header-row">
                <span class="mdl-layout-title">微博相关</span>
            </div>
            <div class="mdl-layout__tab-bar mdl-js-ripple-effect">
                <a href="#scroll-tab-1" class="mdl-layout__tab is-active">呆呆近30天微博链接</a>
                <a href="#scroll-tab-2" class="mdl-layout__tab">我也不知道还有啥</a>
                <!--<a href="#scroll-tab-3" class="mdl-layout__tab">View uploaded Projects</a>-->
                <!--<a href="#scroll-tab-4" class="mdl-layout__tab">Miscellaneous Tools</a>-->
            </div>
        </header>
        <div class="mdl-layout__drawer">
            <span class="mdl-layout-title"><a href="..">主页</a></span>
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
                <!--<section class="page-content demo-layout mdl-layout mdl-layout&#45;&#45;fixed-header mdl-color&#45;&#45;grey-100">-->
                    <!--<div class="demo-ribbon" style="background-color: white"></div>-->
                    <!--<main class="demo-main mdl-layout__content">-->
                        <!--<div class="demo-container mdl-grid">-->
                            <!--<div class="mdl-cell mdl-cell&#45;&#45;2-col mdl-cell&#45;&#45;hide-tablet mdl-cell&#45;&#45;hide-phone"></div>-->
                            <!--<div class="demo-content mdl-color&#45;&#45;white mdl-shadow&#45;&#45;4dp content mdl-color-text&#45;&#45;grey-800 mdl-cell mdl-cell&#45;&#45;8-col">-->
                                <!--&lt;!&ndash;<div class="demo-crumbs mdl-color-text&#45;&#45;grey-500">&ndash;&gt;-->
                                <!--&lt;!&ndash;Google &gt; Material Design Lite &gt; How to install MDL&ndash;&gt;-->
                                <!--&lt;!&ndash;</div>&ndash;&gt;-->
                                <!--<div class="self-wrapper" v-show="!projectInfoLocked">-->
                                    <!--<h3>打榜歌曲：SING-千年</h3>-->
                                    <!--<p>当前排行：第<span style="font-size: 3em;">{{ youniCurrentRank }}</span>名 <a v-on:click="loadRankingData">刷新数据</a></p>-->
                                    <!--<h5>榜单名：{{ youniIssueTitle }}</h5>-->
                                    <!--<p>榜单开始时间：{{ youniStartTime }}</p>-->
                                    <!--<p>榜单结束时间：{{ youniEndTime }}</p>-->
                                    <!--<h5>更新时间：{{ youniUpdateTime }}</h5>-->
                                    <!--<br>-->
                                    <!--&lt;!&ndash;<a class="mdl-button mdl-js-button mdl-button&#45;&#45;raised&ndash;&gt;-->
                                    <!--&lt;!&ndash;mdl-js-ripple-effect mdl-button&#45;&#45;colored" @click="saveInfo"&ndash;&gt;-->
                                    <!--&lt;!&ndash;v-show="!compiling">Save project info</a>&ndash;&gt;-->

                                <!--</div>-->
                                <!--<div class="self-wrapper" v-show="!projectInfoLocked">-->
                                    <!--<h4>可视化数据</h4>-->
                                    <!--<h5>千年排名/分数数据</h5>-->
                                    <!--<label class="mdl-switch mdl-js-switch mdl-js-ripple-effect" for="switch-show-mark-point">-->
                                        <!--<input type="checkbox" id="switch-show-mark-point" class="mdl-switch__input"-->
                                               <!--checked @change="onShowMarkPointSwitchChanged" v-model="youniIsShowMarkPoint">-->
                                        <!--<span class="mdl-switch__label">显示每小时分数标记</span>-->
                                    <!--</label>-->
                                    <!--&lt;!&ndash; MDL Spinner Component &ndash;&gt;-->
                                    <!--<div class="mdl-spinner mdl-js-spinner is-active" v-show="youniRankPointLoading"></div>-->
                                    <!--<div id="chart-rank" style="height: 400px; width: 100%;" v-on-echart-resize></div>-->
                                    <!--<div><br></div>-->
                                    <!--<h5>千年单位分数涨幅数据</h5>-->
                                    <!--&lt;!&ndash; MDL Spinner Component &ndash;&gt;-->
                                    <!--<div class="mdl-spinner mdl-js-spinner is-active" v-show="youniUniChangeLoading"></div>-->
                                    <!--<div id="chart-uni-change" style="height: 400px; width: 100%;" v-on-echart-resize></div>-->
                                    <!--<div><br></div>-->
                                    <!--<h5>前后几名的数据</h5>-->
                                    <!--<p>输入区间过大可能导致浏览器卡死或报错！</p>-->
                                    <!--<div class="mdl-textfield mdl-js-textfield mdl-textfield&#45;&#45;floating-label">-->
                                        <!--<input class="mdl-textfield__input" type="text" id="lowerBound" v-model="lowerBound" required>-->
                                        <!--<label class="mdl-textfield__label" for="lowerBound">查找的排名上限</label>-->
                                    <!--</div>-->
                                    <!--<br>-->
                                    <!--<div class="mdl-textfield mdl-js-textfield mdl-textfield&#45;&#45;floating-label">-->
                                        <!--<input class="mdl-textfield__input" type="text" id="upperBound" v-model="upperBound" required>-->
                                        <!--<label class="mdl-textfield__label" for="lowerBound">查找的排名下限</label>-->
                                    <!--</div>-->
                                    <!--<br>-->
                                    <!--&lt;!&ndash; MDL Spinner Component &ndash;&gt;-->
                                    <!--<div class="mdl-spinner mdl-js-spinner is-active" v-show="loadingOthersRank"></div>-->
                                    <!--<div v-show="loadingOthersRank">{{ getOthersProgress }}%获取完成</div>-->
                                    <!--<a class="mdl-button mdl-js-button mdl-button&#45;&#45;raised-->
                                            <!--mdl-js-ripple-effect mdl-button&#45;&#45;colored" @click="searchRank"-->
                                       <!--v-show="!loadingOthersRank">查找</a>-->
                                    <!--<div id="chart-compare" style="height: 400px; width: 100%;" v-on-echart-resize></div>-->
                                <!--</div>-->
                            <!--</div>-->
                        <!--</div>-->

                    <!--</main>-->


                <!--</section>-->
                <div class="page-content">
                    <div class="flex-center position-ref full-height">
                        <div class="content">
                            <div class="title m-b-md">
                                敬请期待...
                            </div>
                        </div>
                    </div>
                </div>
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

        components: {

        },

        mounted: function() {
            this.hideLoading();
            this.getRecentWeibo();
        },
        updated: function() {

        },
        methods: {
            hideLoading: function () {
                $('#loading_all').delay(500).hide(0);
                setTimeout(function(){
                    $('body').removeClass("scoll_dis");
                    document.removeEventListener("touchmove", myFunction);
                    $('html, body, main').css({
                        overflow: 'auto',
                        height: 'auto'
                    });
                },500);
                console.log("hide");
            },

            getRecentWeibo: function () {
                let that = this;
                axios.get('/api/weibo/getRecent/all', {
                    //
                })
                    .then(function (response) {
                        let data = response.data;
                        console.log(data);
                        that.recent_weibo = data;
                        that.recentWeiboLoading = false;
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