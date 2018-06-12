<template>
    <!-- Always shows a header, even in smaller screens. -->
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header class="mdl-layout__header">
            <div class="mdl-layout__header-row">
                <span class="mdl-layout-title">VE280</span>
            </div>
            <div class="mdl-layout__tab-bar mdl-js-ripple-effect">
                <a href="#scroll-tab-1" class="mdl-layout__tab">C++ Coding Style</a>
                <a href="#scroll-tab-2" class="mdl-layout__tab is-active">Upload My Project</a>
                <a href="#scroll-tab-3" class="mdl-layout__tab">View uploaded Projects</a>
            </div>
        </header>
        <div class="mdl-layout__drawer">
            <span class="mdl-layout-title"><a href="..">主页</a></span>
            <nav class="mdl-navigation">
                <a class="mdl-navigation__link" href="">VE280</a>
                <a class="mdl-navigation__link show-dialog" href="#">敬请期待</a>
                <a class="mdl-navigation__link show-dialog" href="#">敬请期待</a>
            </nav>
        </div>
        <main class="mdl-layout__content mdl-demo">
            <section class="mdl-layout__tab-panel" id="scroll-tab-1">
                <div class="page-content" style="padding-top:50px">
                    <section class="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
                        <div class="mdl-card mdl-cell mdl-cell--12-col">
                            <div class="mdl-card__supporting-text">
                                <h4>命名规则</h4>
                                命名的风格能立刻告诉我们这个名字代表的实体到底是什么东西：类型，变量，函数，常量，宏，等等，而不需要我们去寻找
                                该实体的声明。我们头脑中的模式匹配引擎大量依赖于这些命名规则。
                            </div>
                            <div class="mdl-card__actions mdl-card--border">
                                <a class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--colored"
                                   v-show="!showCodeStyleNaming" v-on:click="showCodeStyleNaming = true">
                                    Button
                                </a>
                            </div>
                            <div class="mdl-card__supporting-text" v-show="showCodeStyleNaming">
                                <h4 class="mdl-cell mdl-cell--12-col">Details</h4>
                                <div class="section__text mdl-cell mdl-cell--12-col">
                                    <h5>通用命名规则</h5>
                                    函数名，变量名，和文件名应该是描述性的；不要过度缩写。类型名和变量名应该是名词，而函数名应该是命令式的动词。
                                    尽量有理由的起一个描述性的名字。别担心行空间的问题，让你的代码能被新读者很快理解远远比这更重要。
                                    <br>
                                    类型名和变量名通常应该是名词。<br>
                                    不要使用缩写，除非这个缩写在你的项目之外也被广泛使用。<br>
                                    永远不要用省略字母的缩写。
                                </div>
                                <div class="section__text mdl-cell mdl-cell--12-col">
                                    <h5>通用命名规则</h5>
                                    函数名，变量名，和文件名应该是描述性的；不要过度缩写。类型名和变量名应该是名词，而函数名应该是命令式的动词。
                                    尽量有理由的起一个描述性的名字。别担心行空间的问题，让你的代码能被新读者很快理解远远比这更重要。
                                </div>
                            </div>
                        </div>

                    </section>
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
                                <h3>Project Details</h3>
                                <p>
                                    请根据提示依次填写项目信息。
                                </p>
                                <p>
                                    Please fill out these project information.
                                </p>
                                <form action="#">
                                    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                        <input class="mdl-textfield__input" type="text" id="projectName" v-model="projectName" required>
                                        <label class="mdl-textfield__label" for="projectName">Project Name</label>
                                    </div>
                                    <br>
                                    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                        <input class="mdl-textfield__input" type="text" id="projectDdl" v-model="projectDdl" required>
                                        <label class="mdl-textfield__label" for="projectDdl">Project Due</label>
                                    </div>
                                    <br><br>
                                    <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="option-1">
                                        <input type="radio" id="option-1" class="mdl-radio__button" name="options"
                                               v-model="projectType" value="individual" >
                                        <span class="mdl-radio__label">Individual Project</span>
                                    </label>
                                    <span>&nbsp;&nbsp;&nbsp;</span>
                                    <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="option-2">
                                        <input type="radio" id="option-2" class="mdl-radio__button" name="options"
                                               v-model="projectType" value="group">
                                        <span class="mdl-radio__label">Group Project</span>
                                    </label>
                                </form>
                                <br>
                                <a class="mdl-button mdl-js-button mdl-button--raised
                                            mdl-js-ripple-effect mdl-button--colored" @click="saveInfo"
                                   v-show="!compiling">Save project info</a>
                                <!-- MDL Spinner Component -->
                                <div class="mdl-spinner mdl-js-spinner is-active" v-show="compiling"></div>
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
                                    <div id="codeTextArea"></div>
                                    <br>
                                    <pre>{{ compileError }}</pre>
                                    <a class="mdl-button mdl-js-button mdl-button--raised
                                            mdl-js-ripple-effect mdl-button--accent" @click="saveCode"
                                       v-show="!compiling">Save and add another file</a>
                                    <a class="mdl-button mdl-js-button mdl-button--raised
                                            mdl-js-ripple-effect mdl-button--colored" @click="submitCode"
                                            v-show="!compiling">Compile all submitted files</a>
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
            <section class="mdl-layout__tab-panel" id="scroll-tab-3">
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
        </main>
    </div>
</template>



<script>
    export default {
        mounted: function() {
            this.projectName = (this.$cookies.get("projectName") === null ? "" : this.$cookies.get("projectName"));
            this.projectDdl = (this.$cookies.get("projectDdl") === null ? "" : this.$cookies.get("projectDdl"));
            this.projectType = (this.$cookies.get("projectType") === null ? "" : this.$cookies.get("projectType"));
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
            createCodingArea: function() {
                this.codingAreaCreated = true;
                this.myCodeMirror = CodeMirror(document.getElementById("codeTextArea"), {
                    value: "#include <iostream>\nusing namespace std;\n\nint main(){\n    //...Your code here\n    \n    return 0;\n}\n",
                    mode:  "text/x-c++src",
                    lineNumbers: true,
                    scrollbarStyle: "native",
                    theme: "mdn-like"
                });
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
                            that.projectInfoLocked = true;
                        }
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
            }
        },
        data() {
            return {
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
                codeArray: {}
            }
        }
    }

</script>
