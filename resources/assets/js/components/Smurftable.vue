<template>
    <div>
        <el-table :data="smurfData" style="width: 100%; font-size: 13px; font-weight: 400;" :header-row-style="{height:'40px'}" :row-style="{height:'10px'}"
                  @selection-change="handleSelectionChange" :row-class-name="tableRowClassName">
            <el-table-column align="center" :selectable="checkboxSelectable" type="selection" :width="columnSmallWidth" fixed>
            </el-table-column>
            <el-table-column align="center" prop="item" label="账号类别" :width="columnLargeWidth"
                             :filters="[{ text: '微博', value: '微博' }, { text: 'QQ', value: 'QQ' }]"
                             :filter-method="filterItem"
                             filter-placement="top-end">
            </el-table-column>
            <el-table-column align="center" prop="uap" label="账号数据" :width="column2XLargeWidth">
            </el-table-column>
            <el-table-column align="center" prop="last_operation" label="最后一次操作" :width="columnLargeWidth"
                             :filters="[{ text: '获取', value: '获取' }, { text: '退号', value: '退号' }, { text: '管理员上传', value: '管理员上传' }]"
                             :filter-method="filterLastOperation"
                             filter-placement="top-end"
                             v-if="isShowAll">
            </el-table-column>
            <el-table-column align="center" prop="last_qqid" label="最后一次操作人qq" :width="columnXLargeWidth" v-if="isShowAll">
            </el-table-column>
            <el-table-column align="center" prop="updated_at" :label="isShowAll ? '最后一次操作时间' : '获取时间'" :width="columnXLargeWidth" sortable>
            </el-table-column>



            <!--<el-table-column align="center" fixed="right" label="操作" width="120">-->
            <!--<template slot-scope="scope">-->
            <!--<el-button @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text" size="small">-->
            <!--移除-->
            <!--</el-button>-->
            <!--</template>-->
            <!--</el-table-column>-->
        </el-table>
        <!-- MDL Spinner Component -->
        <div class="mdl-spinner mdl-js-spinner is-active" v-show="deleting"></div>
        <template v-if="isShowAll">
            <a class="mdl-button mdl-js-button mdl-button--raised
            mdl-js-ripple-effect mdl-button--colored" @click="deleteUaps"
               v-show="!deleting">删除选中行账号数据</a>
        </template>
        <template v-else>
            <a class="mdl-button mdl-js-button mdl-button--raised
            mdl-js-ripple-effect mdl-button--colored" @click="deleteUaps"
               v-show="!deleting">退号</a>
        </template>

    </div>

</template>

<script>
    export default {
        props: ['ownSmurfData'],
        name: "Smurftable",
        mounted: function() {
            if (this.ownSmurfData === "admin") {
                this.isShowAll = true;
            }
            if (this.isShowAll) {
                this.loadData();
            } else {
                this.loadOwnData();
            }

        },
        methods: {
            manageData(uaps) {
                console.log(uaps);
                for (let i = 0; i < uaps.length; ++i) {
                    if (uaps[i]["item"] === "weibo") {
                        uaps[i]["item"] = "微博";
                    } else if (uaps[i]["item"] === "qq") {
                        uaps[i]["item"] = "QQ";
                    }

                    if (uaps[i]["last_operation"] === "get") {
                        uaps[i]["last_operation"] = "获取";
                    } else if (uaps[i]["last_operation"] === "return") {
                        uaps[i]["last_operation"] = "退号"
                    } else if (uaps[i]["last_operation"] === null) {
                        uaps[i]["last_operation"] = "管理员上传";
                        uaps[i]["last_qqid"] = "-";
                    }
                }
//                        that.smurfData = that.smurfData.concat(response.data);
                this.smurfData = uaps;
            },
            loadData: function () {
                let that = this;
                axios.get('/api/smurf/admin/getSmurf', {
                    //
                })
                    .then(function (response) {
                        let uaps = response.data;
                        that.manageData(uaps);
                    })
                    .catch(function (error) {
                        alert(error);
                    });
            },
            loadOwnData() {
                this.manageData(JSON.parse(this.ownSmurfData));
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            filterItem(value, row) {
                return row.item === value;
            },
            filterLastOperation(value, row) {
                return row.last_operation === value;
            },
            tableRowClassName({row, rowIndex}) {
                if (row.last_operation === "获取") {
                    return 'get-row';
                }
                return '';
            },
            deleteUaps() {
                this.deleting = true;
                let uaps_index = this.multipleSelection;
                let msgHtml = "";
                let delete_ids = [];
                for (let i = 0; i < uaps_index.length; ++i) {
                    if (this.isShowAll && uaps_index[i]["last_operation"] === "获取") {
                        msgHtml ="不能删除&nbsp;<i>最后一次操作</i>&nbsp;为&nbsp;<b><i>获取</i></b>&nbsp;的账号数据<br>请重新选择";
                        this.$alert(msgHtml, '失败', {
                            dangerouslyUseHTMLString: true,
                            type: 'error'
                        });
                        this.deleting = false;
                        break;
                    } else {
                        delete_ids.push(uaps_index[i]["id"]);
                    }
                }
                if (msgHtml === "") {
                    let that = this;
                    let postUrl = '';
                    if (this.isShowAll) {
                        postUrl = '/api/smurf/admin/delete';
                    } else {
                        postUrl = '/api/smurf/user/return'
                    }
                    axios.post(postUrl, {
                        delete_ids: delete_ids
                    })
                        .then(function (response) {
                            if (response.data.status === 1) {
                                msgHtml = response.data.msg;
                                that.$alert(msgHtml, '成功', {
                                    dangerouslyUseHTMLString: true,
                                    type: 'success'
                                });
                            } else {
                                that.$message({
                                    type: 'error',
                                    message: response.data
                                });
                            }
                            console.log(delete_ids);
                            for (let i = that.smurfData.length-1; i >= 0; --i ){
                                if (delete_ids.indexOf(that.smurfData[i]["id"]) !== -1) {
                                    console.log(delete_ids.indexOf(that.smurfData[i]["id"]));
                                    that.smurfData.splice(i,1);
                                } else {

                                }
                            }
                            that.deleting = false;
                        })
                        .catch(function (error) {
                            that.$message({
                                type: 'error',
                                message: error
                            });
                            that.deleting = false;
                        });
                }


            },
            checkboxSelectable(row, index) {
                if (this.isShowAll && row.last_operation === "获取") {
                    return false;
                } else {
                    return true;
                }
            }

        },
        data() {
            return {
                isShowAll: false,
                columnSmallWidth: 80,
                columnLargeWidth: 112,
                columnXLargeWidth: 176,
                column2XLargeWidth: 400,
                smurfData:[],
                multipleSelection: [],
                deleting: false,
            }
        }
    }
</script>

<style>
    .el-table td{
        padding: 6px 0;
    }

    .el-table th {
        padding: 0;
    }

    .el-table .get-row {
        background: oldlace;
    }
</style>