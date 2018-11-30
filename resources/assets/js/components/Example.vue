<template>
    <!-- Always shows a header, even in smaller screens. -->
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header class="mdl-layout__header">
            <div class="mdl-layout__header-row">
                <span class="mdl-layout-title">打榜数据</span>
            </div>
            <div class="mdl-layout__tab-bar mdl-js-ripple-effect">
                <a href="#scroll-tab-1" class="mdl-layout__tab">微博榜单</a>
                <a href="#scroll-tab-2" class="mdl-layout__tab is-active" v-on:click="onSwitchTabs(1)">由你音乐榜</a>
                <!--<a href="#scroll-tab-3" class="mdl-layout__tab">View uploaded Projects</a>-->
                <!--<a href="#scroll-tab-4" class="mdl-layout__tab">Miscellaneous Tools</a>-->
            </div>
        </header>
        <div class="mdl-layout__drawer">
            <span class="mdl-layout-title"><a href="..">主页</a></span>
            <nav class="mdl-navigation">
                <a class="mdl-navigation__link" href="#">敬请期待</a>
                <a class="mdl-navigation__link" href="#">打榜数据</a>
                <a class="mdl-navigation__link" href="#">敬请期待</a>
            </nav>
        </div>
        <main class="mdl-layout__content mdl-demo">
            <section class="mdl-layout__tab-panel" id="scroll-tab-1">
                <!--<div class="page-content" style="padding-top:50px">-->
                    <!--<section class="section&#45;&#45;center mdl-grid mdl-grid&#45;&#45;no-spacing mdl-shadow&#45;&#45;2dp">-->
                        <!--<div class="mdl-card mdl-cell mdl-cell&#45;&#45;12-col">-->
                            <!--<div class="mdl-card__supporting-text">-->
                                <!--<h4>命名规则</h4>-->
                                <!--命名的风格能立刻告诉我们这个名字代表的实体到底是什么东西：类型，变量，函数，常量，宏，等等，而不需要我们去寻找-->
                                <!--该实体的声明。我们头脑中的模式匹配引擎大量依赖于这些命名规则。-->
                            <!--</div>-->
                            <!--<div class="mdl-card__actions mdl-card&#45;&#45;border">-->
                                <!--<a class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button&#45;&#45;colored"-->
                                   <!--v-show="!showCodeStyleNaming" v-on:click="showCodeStyleNaming = true">-->
                                    <!--Button-->
                                <!--</a>-->
                            <!--</div>-->
                            <!--<div class="mdl-card__supporting-text" v-show="showCodeStyleNaming">-->
                                <!--<h4 class="mdl-cell mdl-cell&#45;&#45;12-col">Details</h4>-->
                                <!--<div class="section__text mdl-cell mdl-cell&#45;&#45;12-col">-->
                                    <!--<h5>通用命名规则</h5>-->
                                    <!--函数名，变量名，和文件名应该是描述性的；不要过度缩写。类型名和变量名应该是名词，而函数名应该是命令式的动词。-->
                                    <!--尽量有理由的起一个描述性的名字。别担心行空间的问题，让你的代码能被新读者很快理解远远比这更重要。-->
                                    <!--<br>-->
                                    <!--类型名和变量名通常应该是名词。<br>-->
                                    <!--不要使用缩写，除非这个缩写在你的项目之外也被广泛使用。<br>-->
                                    <!--永远不要用省略字母的缩写。-->
                                <!--</div>-->
                                <!--<div class="section__text mdl-cell mdl-cell&#45;&#45;12-col">-->
                                    <!--<h5>通用命名规则</h5>-->
                                    <!--函数名，变量名，和文件名应该是描述性的；不要过度缩写。类型名和变量名应该是名词，而函数名应该是命令式的动词。-->
                                    <!--尽量有理由的起一个描述性的名字。别担心行空间的问题，让你的代码能被新读者很快理解远远比这更重要。-->
                                <!--</div>-->
                            <!--</div>-->
                        <!--</div>-->

                    <!--</section>-->
                <!--</div>-->
                <div class="page-content">
                    <div class="flex-center position-ref full-height">
                        <div class="content">
                            <div class="title m-b-md">
                                敬请期待...
                            </div>
                            <p @click="downloadFile('txt')">下载</p>
                        </div>
                    </div>
                </div>


            </section>
            <section class="mdl-layout__tab-panel is-active" id="scroll-tab-2">
                <div class="page-content demo-layout mdl-layout mdl-layout--fixed-header
                        mdl-js-layout mdl-color--grey-100">
                    <div class="demo-ribbon"></div>
                    <main class="demo-main mdl-layout__content">
                        <div class="demo-container mdl-grid">
                            <div class="mdl-cell mdl-cell--2-col mdl-cell--hide-tablet mdl-cell--hide-phone"></div>
                            <div class="demo-content mdl-color--white mdl-shadow--4dp content mdl-color-text--grey-800 mdl-cell mdl-cell--8-col">
                                <!--<div class="demo-crumbs mdl-color-text&#45;&#45;grey-500">-->
                                    <!--Google &gt; Material Design Lite &gt; How to install MDL-->
                                <!--</div>-->
                                <div class="self-wrapper" v-show="!projectInfoLocked">
                                    <h3>打榜歌曲：SING-千年</h3>
                                    <p>当前排行：第<span style="font-size: 3em;">{{ youniCurrentRank }}</span>名 <a v-on:click="loadRankingData">刷新数据</a></p>
                                    <h5>榜单名：{{ youniIssueTitle }}</h5>
                                    <p>榜单开始时间：{{ youniStartTime }}</p>
                                    <p>榜单结束时间：{{ youniEndTime }}</p>
                                    <h5>更新时间：{{ youniUpdateTime }}</h5>
                                    <br>
                                <!--<a class="mdl-button mdl-js-button mdl-button&#45;&#45;raised-->
                                            <!--mdl-js-ripple-effect mdl-button&#45;&#45;colored" @click="saveInfo"-->
                                   <!--v-show="!compiling">Save project info</a>-->

                                </div>
                                <div class="self-wrapper" v-show="!projectInfoLocked">
                                    <h4>可视化数据</h4>
                                    <h5>千年数据</h5>
                                    <!-- MDL Spinner Component -->
                                    <div class="mdl-spinner mdl-js-spinner is-active" v-show="youniRankPointLoading"></div>
                                    <div id="chart-rank" style="height: 400px; width: 100%;" v-on-echart-resize></div>
                                    <div><br></div>
                                    <h5>前后几名的数据</h5>
                                    <p>输入区间过大可能导致浏览器卡死或报错！</p>
                                    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                        <input class="mdl-textfield__input" type="text" id="lowerBound" v-model="lowerBound" required>
                                        <label class="mdl-textfield__label" for="lowerBound">查找的排名上限</label>
                                    </div>
                                    <br>
                                    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                        <input class="mdl-textfield__input" type="text" id="upperBound" v-model="upperBound" required>
                                        <label class="mdl-textfield__label" for="lowerBound">查找的排名下限</label>
                                    </div>
                                    <br>
                                    <!-- MDL Spinner Component -->
                                    <div class="mdl-spinner mdl-js-spinner is-active" v-show="loadingOthersRank"></div>
                                    <a class="mdl-button mdl-js-button mdl-button--raised
                                            mdl-js-ripple-effect mdl-button--colored" @click="searchRank"
                                       v-show="!loadingOthersRank">查找</a>
                                    <div id="chart-compare" style="height: 400px; width: 100%;" v-on-echart-resize></div>
                                </div>
                                <div class="self-wrapper" v-show="projectInfoLocked">
                                <h3>Project Files</h3>
                                <p>
                                    请根据提示上传相关附件。代码可以在网页中直接编辑，将文件拖入编辑框，或者选择上传。
                                </p>
                                <p>Please upload all required files. You can either edit code on this page,
                                    drag-and-drop a file into the input-box, or upload directly.
                                    Don't forget to upload the assignment description.
                                    Uploading zip files is currently not supported.
                                </p>
                                <form>
                                    <h4>Your code</h4>
                                    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                        <input class="mdl-textfield__input" type="text" id="codeFileName" v-model="codeFileName" required>
                                        <label class="mdl-textfield__label" for="codeFileName">File Name</label>
                                    </div>
                                    <!--<div id="codeTextArea"></div>-->
                                    <br>
                                    <pre>{{ compileError }}</pre>
                                    <pre id="runningResult" v-show="runningResult !== ''">{{ runningResult }}</pre>
                                    <div class="mdl-grid mdl-grid--no-spacing">
                                        <div class="mdl-cell mdl-cell--4-col">
                                            <a class="mdl-button mdl-js-button mdl-button--raised
                                            mdl-js-ripple-effect mdl-button--accent" @click="saveCode"
                                               v-show="!compiling">Save and add another file</a>
                                        </div>
                                        <div class="mdl-cell mdl-cell--4-col">
                                            <a class="mdl-button mdl-js-button mdl-button--raised
                                            mdl-js-ripple-effect mdl-button--colored" @click="submitCode"
                                               v-show="!compiling">Compile all submitted files</a>
                                        </div>
                                        <!-- Add spacer, to align navigation to the right -->
                                        <div class="mdl-layout-spacer"></div>
                                        <div class="mdl-cell mdl-cell--1-col">
                                            <a class="mdl-button mdl-js-button mdl-button--raised
                                            mdl-js-ripple-effect mdl-button--colored show-dialog-input" @click="runButton"
                                               v-show="!compiling">Run</a>
                                        </div>
                                    </div>
                                    <!-- MDL Spinner Component -->
                                    <div class="mdl-spinner mdl-js-spinner is-active" v-show="compiling"></div>
                                </form>
                                </div>
                            </div>
                        </div>
                        <footer class="demo-footer mdl-mini-footer">
                            <div class="mdl-mini-footer--left-section">
                                <ul class="mdl-mini-footer--link-list">
                                    <li><a href="#">Help</a></li>
                                    <li><a href="#">Privacy and Terms</a></li>
                                    <li><a href="#">User Agreement</a></li>
                                </ul>
                            </div>
                        </footer>
                    </main>
                </div>
            </section>
            <!--<section class="mdl-layout__tab-panel" id="scroll-tab-3">-->
                <!--<div class="page-content">-->
                    <!--<div class="flex-center position-ref full-height">-->
                        <!--<div class="content">-->
                            <!--<div class="title m-b-md">-->
                                <!--敬请期待...-->
                            <!--</div>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</section>-->

            <!--<section class="mdl-layout__tab-panel" id="scroll-tab-4">-->
                <!--<div class="page-content demo-layout mdl-layout mdl-layout&#45;&#45;fixed-header-->
                        <!--mdl-js-layout mdl-color&#45;&#45;grey-100">-->
                    <!--<div class="demo-ribbon"></div>-->
                    <!--<main class="demo-main mdl-layout__content">-->
                        <!--<div class="demo-container mdl-grid">-->
                            <!--<div class="mdl-cell mdl-cell&#45;&#45;2-col mdl-cell&#45;&#45;hide-tablet mdl-cell&#45;&#45;hide-phone"></div>-->
                            <!--<div class="demo-content mdl-color&#45;&#45;white mdl-shadow&#45;&#45;4dp content mdl-color-text&#45;&#45;grey-800 mdl-cell mdl-cell&#45;&#45;8-col">-->
                                <!--&lt;!&ndash;<div class="demo-crumbs mdl-color-text&#45;&#45;grey-500">&ndash;&gt;-->
                                <!--&lt;!&ndash;Google &gt; Material Design Lite &gt; How to install MDL&ndash;&gt;-->
                                <!--&lt;!&ndash;</div>&ndash;&gt;-->
                                <!--<div class="self-wrapper">-->
                                    <!--<h3>Yet Another Compressor to Tar</h3>-->
                                    <!--<p>-->
                                        <!--请上传需要被压缩的文件-->
                                    <!--</p>-->
                                    <!--<p>-->
                                        <!--Please upload all files need to be compressed.-->
                                    <!--</p>-->
                                    <!--<form id="uploadForm" enctype="multipart/form-data">-->
                                        <!--Files: <input type="file" name="file" id="uploadFiles" multiple="multiple"/><br>-->
                                    <!--</form>-->
                                    <!--<br>-->
                                    <!--<button class="mdl-button mdl-js-button mdl-button&#45;&#45;raised-->
                                            <!--mdl-js-ripple-effect mdl-button&#45;&#45;colored" id="upload" @click="uploadFile"-->
                                            <!--v-show="!compiling">Compress files</button>-->
                                    <!--&lt;!&ndash;<a class="mdl-button mdl-js-button mdl-button&#45;&#45;raised&ndash;&gt;-->
                                            <!--&lt;!&ndash;mdl-js-ripple-effect mdl-button&#45;&#45;colored" @click="saveInfo"&ndash;&gt;-->
                                       <!--&lt;!&ndash;v-show="!compiling">Save project info</a>&ndash;&gt;-->
                                    <!--&lt;!&ndash; MDL Spinner Component &ndash;&gt;-->
                                    <!--<div class="mdl-spinner mdl-js-spinner is-active" v-show="compiling"></div>-->
                                <!--</div>-->
                            <!--</div>-->
                        <!--</div>-->
                        <!--<footer class="demo-footer mdl-mini-footer">-->
                            <!--<div class="mdl-mini-footer&#45;&#45;left-section">-->
                                <!--<ul class="mdl-mini-footer&#45;&#45;link-list">-->
                                    <!--<li><a href="#">Help</a></li>-->
                                    <!--<li><a href="#">Privacy and Terms</a></li>-->
                                    <!--<li><a href="#">User Agreement</a></li>-->
                                <!--</ul>-->
                            <!--</div>-->
                        <!--</footer>-->
                    <!--</main>-->
                <!--</div>-->
            <!--</section>-->
        </main>

        <!--输入数据对话框-->
        <!--<dialog class="mdl-dialog" id="dialogInput">-->
            <!--<h5 class="mdl-dialog__title">运行参数</h5>-->
            <!--<div class="mdl-dialog__content">-->
                <!--<p>-->
                    <!--请输入将要被重定向到std::cin的数据-->
                    <!--<br>如果没有请留空-->
                <!--</p>-->
                <!--&lt;!&ndash; Floating Multiline Textfield &ndash;&gt;-->
                <!--<form action="#">-->
                    <!--<div class="mdl-textfield mdl-js-textfield mdl-textfield&#45;&#45;floating-label">-->
                        <!--<textarea class="mdl-textfield__input" type="text" rows= "5" id="runningParameter" v-model="runningParameter"></textarea>-->
                        <!--<label class="mdl-textfield__label" for="runningParameter">Your input here...</label>-->
                    <!--</div>-->
                <!--</form>-->
            <!--</div>-->
            <!--<div class="mdl-dialog__actions">-->
                <!--<button type="button" class="submit mdl-button mdl-js-button mdl-button&#45;&#45;raised-->
                    <!--mdl-js-ripple-effect mdl-button&#45;&#45;colored" @click="parameterOK">OK</button>-->
                <!--<button type="button" class="mdl-button close" @click="dialogInput.close();">Cancel</button>-->
            <!--</div>-->
        <!--</dialog>-->
    </div>
</template>



<script>
//    import '@/directive/echartResizeHelper.js';
    export default {

        mounted: function() {
            this.projectName = (this.$cookies.get("projectName") === null ? "" : this.$cookies.get("projectName"));
            this.projectDdl = (this.$cookies.get("projectDdl") === null ? "" : this.$cookies.get("projectDdl"));
            this.projectType = (this.$cookies.get("projectType") === null ? "" : this.$cookies.get("projectType"));
            this.loadRankingData();
            this.loadJs('https://cdn.bootcss.com/echarts/4.2.0-rc.2/echarts.common.min.js',this.echartsLoaded);
            this.loadYouniGraph();
        },
        updated: function() {
            if (this.projectInfoLocked && !this.codingAreaCreated) {
                this.createCodingArea();
            }
        },
        methods: {
            greet: function (event) {
                // `this` 在方法里指向当前 Vue 实例
                alert('Hello !');
                // `event` 是原生 DOM 事件
                if (event) {
                    alert(event.target.tagName)
                }
            },
            loadRankingData: function() {
                this.youniCurrentRank = "";
                let that = this;
                axios.get('/api/youni/getLatest', {
                    //
                })
                    .then(function (response) {
                        let data = response.data.data
                        that.youniUpdateTime = data.updateTime;
                        that.youniIssueTitle = data.issueTitle;
                        that.youniStartTime = data.issueStart;
                        that.youniEndTime = data.issueEnd;
//                        that.youniRankData = data.chartsList;
                        that.processRankingData(data.chartsList);
                    })
                    .catch(function (error) {
                        alert(error);
                    });
            },
            processRankingData: function(rankingData) {
                this.youniCurrentRank = this.getRank(rankingData);
            },
            getRank: function (rankingData) {
                for (var i = 0; i<rankingData.length; ++i) {
                    let eachItem = rankingData[i];
                    if (eachItem.songId === "221452950") {
                        return eachItem.rank;
                    }
                }
            },
            getPoint: function (rankingData) {
                for (var i = 0; i<rankingData.length; ++i) {
                    let eachItem = rankingData[i];
                    if (eachItem.songId === "221452950") {
                        return eachItem.uniIndex;
                    }
                }
            },
            searchRank: function () {
                var re = /^[0-9]+.?[0-9]*/;
                if (!re.test(this.upperBound) || !re.test(this.lowerBound)) {
                    alert("请输入正确的正整数");
                } else {
                    this.loadingOthersRank = true;
                    this.youniOtherRanks.length = 0;
                    this.loadYouniOthersGraph();
                }

            },
            onSwitchTabs: function(tabIndex) {
                switch (tabIndex) {
                    case 0:
                        return;
                    case 1:
                        if (!this.isYouniGraphLoaded) {
                            this.loadYouniGraph();
                        }
                        return;
                    default:
                        return;
                }

            },
            loadYouniGraph: function() {
                this.isYouniGraphLoaded = true;
                console.log("Graph loaded");
                let that = this;
                this.hideLoading();
                axios.get('/api/youni/get/all', {
                    //
                })
                    .then(function (response) {
                        if (response.status === 200) {
                            let rankData = response.data;
                            console.log(response.data);
                            for (let i = rankData.length-1; i >=0 ; --i) {

                                that.youniAllRanks.push(rankData[i].charts.rank);
                                that.youniAllTimes.push(rankData[i].updateTime);
                                that.youniAllPoints.push(rankData[i].charts.uniIndex);
                            }
                            let waitForLibsJs = setInterval(function(){
                                if (that.libsJsLoadComplete) {
                                    clearInterval(waitForLibsJs);
                                    that.createChartRank();
                                } else {
                                    console.log("wait for js");
                                }
                            }, 50);
                        }
                    })
                    .catch(function (error) {
                        alert(error);
                    });

            },
            loadYouniOthersGraph: function () {
                let that = this;
                axios.post('/api/youni/getOthers', {
                    lb: this.lowerBound,
                    ub: this.upperBound
                })
                    .then(function (response) {
                        if (response.status === 200) {
                            let data = response.data;
                            for (var key in data) {
                                // check if the property/key is defined in the object itself, not in parent
                                if (data.hasOwnProperty(key)) {
                                    console.log(key, data[key]);
                                    var oneSeries = {
                                        name: key,
                                        type:'line',
                                        smooth:false,
                                        showAllSymbol: true,
                                        symbolSize: 5,
                                        sampling: 'average',
                                        data: (function () {
                                            let d = [];
                                            let len = 0;
                                            let value;
                                            while (len < data[key].length) {
                                                d.push([
                                                    that.convertTimeString(data[key][len]["t"]),
                                                    data[key][len]["r"]
                                                ]);
                                                len++;
                                            }
                                            return d;
                                        })()
                                    };
                                    that.youniOtherRanks.push(oneSeries);
                                }
                            }
                            let waitForLibsJs = setInterval(function(){
                                if (that.libsJsLoadComplete) {
                                    clearInterval(waitForLibsJs);
                                    that.createChartCompare();
                                } else {
                                    console.log("wait for js");
                                }
                            }, 50);
                        }
                    })
                    .catch(function (error) {
                        alert(error);
                    });
            },
            createChartRank: function() {
                let that = this;
                var dom = document.getElementById("chart-rank");
                var myChart = echarts.init(dom, 'debbie');
                var app = {};

                var option = {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            label: {
                                backgroundColor: '#6a7985'
                            },
                            snap: true
                        }
                    },
                    title: {
                        left: 'center',
                        text: '千年排名分数变化',
                    },
                    xAxis: [{
                        type: 'time',
                        boundaryGap: false,
                        splitNumber:10
                    }],
                    yAxis: [{
                        name: '排名',
                        nameLocation: 'start',
                        type: 'value',
                        inverse: true,
                        scale: true,
                        minInterval: 1,
                        splitNumber: 5,
                        min: function(value) {
                            return value.min - 2;
                        },
                        max: function(value) {
                            return value.max + 2;
                        }
                    },{
                        name: '分数',
                        nameLocation: 'end',
                        type: 'value',
                        scale: true,
                    }],
                    dataZoom: {
                        type: 'slider',
                        show: true,
                        start : 70,
                        bottom: 0
                    },
                    series: [
                        {
                            name:'排名',
                            type:'line',
                            smooth:false,
                            showAllSymbol: true,
                            symbolSize: 5,
                            sampling: 'average',
                            data: (function () {
                                var d = [];
                                var len = 0;
                                var now = new Date();
                                var value;
                                while (len < that.youniAllTimes.length) {
                                    d.push([
                                        that.convertTimeString(that.youniAllTimes[len]),
                                        that.youniAllRanks[len]
                                    ]);
                                    len++;
                                }
                                return d;
                            })()
                        },
                        {
                            name:'分数',
                            type:'line',
                            yAxisIndex:1,
                            showAllSymbol: true,
                            symbolSize: 5,
                            data: (function () {
                                var d = [];
                                var len = 0;
                                var now = new Date();
                                var value;
                                while (len < that.youniAllTimes.length) {
                                    d.push([
                                        that.convertTimeString(that.youniAllTimes[len]),
                                        that.youniAllPoints[len]
                                    ]);
                                    len++;
                                }
                                return d;
                            })()
                        }
                    ]
                };
                if (option && typeof option === "object") {
                    myChart.setOption(option, true);
                    that.youniRankPointLoading = false;
                }

            },
            createChartCompare: function() {
                let that = this;
                var dom = document.getElementById("chart-compare");
                var myChart = echarts.init(dom, 'debbie');
                var app = {};

                var option = {
                    tooltip: {
                        trigger: 'axis',
                    },
                    title: {
                        left: 'center',
                        text: '前后几名排名变化',
                    },
                    xAxis: [{
                        type: 'time',
                        boundaryGap: false,
                        splitNumber:10
                    }],
                    yAxis: [{
                        name: '排名',
                        nameLocation: 'start',
                        type: 'value',
                        inverse: true,
                        scale: true,
                        minInterval: 1,
                        splitNumber: 5,
                        min: function(value) {
                            return value.min - 2;
                        },
                        max: function(value) {
                            return value.max + 2;
                        }
                    }],
                    dataZoom: {
                        type: 'slider',
                        show: true,
                        start : 70
                    },
                    series: that.youniOtherRanks
                };
                if (option && typeof option === "object") {
                    myChart.setOption(option, true);
                    that.loadingOthersRank = false;
                }

            },
            convertTimeString: function (timeString) {
                let firstDash = timeString.indexOf(".");
                let secondDash = timeString.indexOf(".",firstDash+1);
                let space = timeString.indexOf(" ");
                let colon = timeString.indexOf(":");
                let year = timeString.substring(0,firstDash);
                let month = timeString.substring(firstDash+1,secondDash)-1;
                let day = timeString.substring(secondDash+1,space);
                let hour = timeString.substring(space+1,colon);
                let minute = timeString.substring(colon+1);
                return new Date(year,month,day,hour,minute);
            },
            downloadFile: function (filetype) {
                axios.post('../api/downloadFile', {
                    nothing: "nothing"
                })
                    .then(function (response) {
                        let link = document.createElement('a');
                        link.download = '练习生榜数据.'+filetype;
                        link.href = '../storage/weiboData/'+response.data;
                        link.click();
                    })
                    .catch(function (error) {
                        console.log("error: " + error);
                    });
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
            echartsLoaded: function () {
                this.echartsLoadComplete = true;
                this.loadJs('/js/libs.js',this.libsJsLoaded);
            },
            libsJsLoaded: function () {
                this.libsJsLoadComplete = true;
            },
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
            saveInfo: function() {
                if (
                    this.projectName === "" ||
                    this.projectDdl === "" ||
                    this.projectType === ""
                ) {
                    alert("Please fill out all these information!")
                } else {
                    this.$cookies.set("projectName",this.projectName,-1);
                    this.$cookies.set("projectDdl",this.projectDdl,-1);
                    this.$cookies.set("projectType",this.projectType,-1);
                    this.compiling = true;
                    this.readCodes();
                }
            },
            readCodes: function() {
                var that = this;
                axios.get('../api/readCode/'+this.projectName, {
                    //
                })
                    .then(function (response) {
                        that.compiling = false;
                        var data = response.data;
                        if (data === "not found") {
                            console.log("false");
                        } else {
                            that.codeArray = data;
//                            that.projectInfoLocked = true;
                        }
                        that.projectInfoLocked = true;
                    })
                    .catch(function (error) {
                        that.compiling = false;
                        alert(error);
                    });
            },
            saveCode: function() {
                if (this.codeFileName.replace(/(^\s*)|(\s*$)/g, "") === "") {
                    return false;
                }
                if (this.myCodeMirror.getValue().replace(/(^\s*)|(\s*$)/g, "") === "") {
                    return false;
                }
                this.compiling = true;
                var that = this;
//                axios.get('../api/saveCode', {
//                    params: {
//                        code: this.myCodeMirror.getValue(),
//                        codeFileName: this.codeFileName
//                    }
//                })
//                    .then(function (response) {
//                        that.compiling = false;
//                        if (response.data === "success") {
//                            alert("Successfully saved!");
//                            that.codeFileName = "";
//                            that.myCodeMirror.setValue("");
//                        } else {
//                            alert(response.data);
//                        }
//                    })
//                    .catch(function (error) {
//                        alert(error);
//                    });
                axios.post('../api/saveCode', {
                    projectName: this.projectName,
                    code: this.myCodeMirror.getValue(),
                    codeFileName: this.codeFileName
                })
                    .then(function (response) {
                        that.compiling = false;
                        if (response.data === "success") {
                            alert("Successfully saved!");
                            that.codeFileName = "";
                            that.myCodeMirror.setValue("");
                        } else {

                            alert(response.data);
                        }
                    })
                    .catch(function (error) {
                        alert(error);
                    });
            },
            submitCode: function() {
                this.compiling = true;
                var that = this;
                axios.get('../api/submitCode', {
                    params: {
                        projectName: this.projectName
                    }
                })
                    .then(function (response) {
                        that.compiling = false;
                        if (response.data === "") {
                            that.compileError = "";
                            alert("Compile success!");
                        } else {
                            let str = "storage/"+that.projectName+"/";
                            that.compileError = response.data.replace(new RegExp(str,'g'),"")
                                .replace(/ generated./g," generated.\n\n");
                            console.log(response.data);
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            runCode: function () {
                let param = this.runningParameter;
                let that = this;
                axios.post('../api/runCode', {
                    projectName: this.projectName,
                    param: param
                })
                    .then(function (response) {
                        that.compiling = false;
                        that.runningResult = response.data;
                        console.log(response.data);
                    })
                    .catch(function (error) {
                        alert(error);
                    });
            },
            runButton: function () {
                this.dialogInput = document.querySelector('#dialogInput');
                if (! this.dialogInput.showModal) {
                    dialogPolyfill.registerDialog(this.dialogInput);
                }
                this.dialogInput.showModal();
            },
            parameterOK: function () {
                this.dialogInput.close();
                this.compiling = true;
                this.runCode();
            },
            uploadFile: function () {
                this.compiling = true;
                let that = this;
                let form = new FormData();
                let files = $("#uploadFiles").get(0).files;
                if ($("#uploadFiles").val() != "") {
                    for (let i = 0; i < files.length; i++) {
                        form.append("file["+i+"]",files[i]);
                    }
                    axios.post('../api/uploadTarFile', form)
                        .then(function (response) {
                            that.compiling = false;
                            console.log(response.data);
                            if (response.data === "success") {
                                let link = document.createElement('a');
                                link.download = '.tar';
                                link.href = '../storage/tmpTAR/tmp.tar';
                                link.click();
                            }
                        })
                        .catch(function (error) {
                            that.compiling = false;
                            console.log("error: " + error);
                        });
                }
            }
        },
        data() {
            return {
                echartsLoadComplete: false,
                libsJsLoadComplete: false,
                youniUpdateTime: "加载中",
                youniIssueTitle: "加载中",
                youniStartTime: "加载中",
                youniEndTime: "加载中",
                youniRankData: {},
                youniCurrentRank: "",
                isYouniGraphLoaded: false,
                youniAllRanks: [],
                youniRankPointLoading: true,
                youniAllTimes: [],
                youniAllPoints: [],
                youniOtherRanks: [],
                lowerBound: "",
                upperBound: "",
                loadingOthersRank: false,
                showCodeStyleNaming: false,
                myCodeMirror: null,
                compiling: false,
                projectName: "",
                projectDdl: "",
                projectType: "",
                compileError: "",
                codeFileName: "",
                projectInfoLocked: false,
                codingAreaCreated: false,
                runningParameter: "",
                codeArray: {},
                dialogInput: null,
                runningResult: ""
            }
        }
    }
</script>

<style scoped>
    #runningResult {
        border: solid red 3px;
        padding: 10px;
    }
</style>
