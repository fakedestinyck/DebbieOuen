<template>
    <div>
        <section class="header1 cid-rcfCVkx06l mbr-parallax-background" id="header1-8" data-rv-view="24">



            <div class="mbr-overlay" style="opacity: 0; background-color: rgb(0, 0, 0);">
            </div>

            <div class="container">
                <div class="row justify-content-md-center">
                    <div class="mbr-white col-md-10">
                        <h1 class="mbr-section-title align-center mbr-bold pb-3 mbr-fonts-style display-1">蒋申应援站</h1>

                        <p class="mbr-text align-center pb-3 mbr-fonts-style display-5"><strong>蒋心独具，不负此申</strong></p>


                    </div>
                </div>
            </div>

        </section>

        <section class="features18 popup-btn-cards cid-rgiNlgWInX" id="features18-o" data-rv-view="54">




            <div class="container">
                <h2 class="mbr-section-title pb-3 align-center mbr-fonts-style display-2">FanClub入会</h2>

                <div class="form-center form-login" v-if="token === ''" v-loading="loading">
                    <h3 class="mbr-section-subtitle display-5 align-center mbr-fonts-style mbr-light">请先登录</h3>
                    <p style="margin-bottom: 10px;">用户名</p>
                    <el-input placeholder="请输入用户名" v-model="inputUsername"></el-input>
                    <p style="margin-top: 20px; margin-bottom: 10px;">密码</p>
                    <el-input placeholder="请输入密码" v-model="inputPassword" show-password></el-input>

                    <el-button style="display: block; margin: auto; margin-top: 30px; text-align: center" type="primary" :disabled="inputUsername === '' || inputPassword === ''" @click="doLogin">登陆</el-button>
                </div>
                <div class="form-center form-step2" v-else-if="pic === ''" v-loading="loading">
                    <h3 class="mbr-section-subtitle display-5 align-center mbr-fonts-style mbr-light">请填写粉丝铭牌信息</h3>
                    <p style="margin-bottom: 10px;">你的id(8个字符以内)</p>
                    <el-input placeholder="请输入id，这会显示在粉丝铭牌上" v-model="inputId"></el-input>
                    <p style="margin-top: 20px; margin-bottom: 10px;" v-if="csfi">你希望自己的粉丝编号是多少？</p>
                    <el-input placeholder="请输入自选编号(1-9999)" v-model="inputFid" v-if="csfi"></el-input>


                    <el-button style="display: block; margin: auto; margin-top: 30px; text-align: center" type="primary" :disabled="inputId === '' || inputFid === '' && csfi" @click="doSubmitInfo">提交</el-button>
                </div>
                <div class="form-center form-badge" v-if="pic !== ''">
                    <h3 class="mbr-section-subtitle display-5 align-center mbr-fonts-style mbr-light">这是你的粉丝铭牌</h3>
                    <div class="badge-canvas">
                        <el-image fit="contain" :src="pic" style="width: 100%;" @error="badgeError"></el-image>
                    </div>

                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import {axios} from "../axios/api";

    export default {
        name: "FanclubRegister",
        data() {
            return {
                inputUsername: '',
                inputPassword: '',
                loading: false,
                token: '',
                inputFid: '',
                csfi: false,
                fid: null,
                inputId: '',
                pic: '',
            }
        },
        mounted() {
            this.hideLoading();
        },
        computed: {
            formatedFid() {
                return (Array(4).join("0") + this.fid).slice(-4)
            }
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
            doLogin() {
                this.loading = true;
                axios('/api/login','POST',{
                    email: this.inputUsername,
                    password: this.inputPassword
                })
                .then((response) => {
                    if (response.data.token) {
                        let data = response.data;
                        this.token = data.token;
                        this.$message({
                            type: 'success',
                            message: '登陆成功'
                        });
                        if (data.csfi === 1) {
                            // 可以自定义粉丝编号
                            this.csfi = true
                        } else {
                            if (data.fid) {
                                this.pic=`https://lg-bus1kzl6-1251693677.image.myqcloud.com/debbie/fc/badge/badge${data.fid}.jpg/small`
                            } else {
                                // 不能自定义
                                this.csfi = false
                            }
                        }
                    }

                })
                .catch((error) => {
                    if (error.code === 406) {
                        this.$message({
                            type: 'error',
                            message: error.data
                        })
                    } else {
                        if (error.code === 414) {
                            this.$message({
                                type: 'error',
                                message: error.data
                            })
                        }
                    }
                })
                .then(() => {
                    this.loading = false;
                })

            },
            getFansId() {
                this.loading = true;
                axios('/api/fc/getfid','GET',{}, this.token)
                    .then((response) => {
                        if (response.data.fid) {
                            let data = response.data;
                            this.$message({
                                type: 'success',
                                message: `成功！你的粉丝编号为：${data.fid}`
                            });
                            this.fid = data.fid
                        }

                    })
                    .catch((error) => {
                        this.$message({
                            type: 'error',
                            message: `[E${error.code}] ${error.data}`
                        })
                    })
                    .then(() => {
                        this.loading = false;
                    })
            },
            doSubmitInfo() {
                this.loading = true;
                axios('/api/fc/postinfo','POST',{
                    fans_id: this.inputFid,
                    username: this.inputId,
                }, this.token)
                    .then((response) => {
                        console.log(response);
                        if (response.data.pic_url) {
                            let data = response.data;
                            this.$message({
                                type: 'success',
                                message: `成功！这是你的粉丝铭牌。可以直接保存或截图}`
                            });
                            this.pic = "https://"+data.pic_url+"/small"
                        }

                    })
                    .catch((error) => {
                        if (error.code) {
                            this.$message({
                                type: 'error',
                                message: `[E${error.code}]\n${error.data}`
                            })
                        } else {
                            let msg = [];
                            for (let key in error) {
                                let item = error[key];
                                item.forEach((each) => {
                                    msg.push(each);
                                })
                            }
                            this.$message({
                                type: 'error',
                                message: `[E422]\n${msg.join('\n')}`
                            })
                        }

                    })
                    .then(() => {
                        this.loading = false;
                    })
            },
            badgeError(error) {
                if (error.path[0].src !== '') {
                    // 重新生成
                }
            }
        }
    }
</script>

<style>
    .form-center {
        width: 90%;
        max-width: 768px;
        margin: auto;
    }
    .form-badge {
        max-width: 500px;
        position: relative;
    }
    .badge-canvas {
        width: 100%;
    }
    .el-message__content {
        word-break: break-all;
        white-space: pre-wrap;
    }

</style>