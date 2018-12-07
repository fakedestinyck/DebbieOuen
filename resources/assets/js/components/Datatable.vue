<template>
    <el-table :data="weiboRankData" style="width: 100%; font-size: 13px; font-weight: 400;" :header-row-style="{height:'10px'}"  :row-style="{height:'10px'}">
        <el-table-column align="center" fixed prop="date" label="日期" :width="columnLargeWidth">
        </el-table-column>
        <el-table-column align="center" label="总分">
            <el-table-column align="center" prop="myTotalScore" label="总分" :width="columnSmallWidth">
            </el-table-column>
            <el-table-column align="center" prop="myTotalRank" label="排名" :width="columnSmallWidth">
            </el-table-column>
            <el-table-column align="center" prop="firstName" label="第一名" :width="columnLargeWidth">
            </el-table-column>
            <el-table-column align="center" prop="firstScore" label="得分" :width="columnSmallWidth">
            </el-table-column>
            <el-table-column align="center" prop="beforeName" label="前一位" :width="columnLargeWidth">
            </el-table-column>
            <el-table-column align="center" prop="beforeScore" label="得分" :width="columnSmallWidth">
            </el-table-column>
            <el-table-column align="center" prop="afterName" label="后一位" :width="columnLargeWidth">
            </el-table-column>
            <el-table-column align="center" prop="afterScore" label="得分" :width="columnSmallWidth">
            </el-table-column>
        </el-table-column>

        <el-table-column align="center" label="阅读数">
            <el-table-column align="center" prop="readingValue" label="阅读数" :width="columnLargeWidth">
            </el-table-column>
            <el-table-column align="center" prop="readingScore" label="得分" :width="columnSmallWidth">
            </el-table-column>
            <el-table-column align="center" prop="readingRank" label="排名" :width="columnSmallWidth">
            </el-table-column>
            <el-table-column align="center" prop="tweetsNumber" label="发博" :width="columnSmallWidth">
            </el-table-column>
            <el-table-column align="center" label="第一名">
                <el-table-column align="center" prop="readingFirstName" label="姓名" :width="columnLargeWidth">
                </el-table-column>
                <el-table-column align="center" prop="readingFirstValue" label="阅读数" :width="columnLargeWidth">
                </el-table-column>
            </el-table-column>
        </el-table-column>

        <el-table-column align="center" label="互动数">
            <el-table-column align="center" prop="interactionValue" label="互动数" :width="columnLargeWidth">
            </el-table-column>
            <el-table-column align="center" prop="interactionScore" label="得分" :width="columnSmallWidth">
            </el-table-column>
            <el-table-column align="center" prop="interactionRank" label="排名" :width="columnSmallWidth">
            </el-table-column>
            <el-table-column align="center" prop="interactionRepostCount" label="微博被互动" :width="columnSmallWidth">
            </el-table-column>
            <el-table-column align="center" prop="interactionCommentCount" label="评论被互动" :width="columnSmallWidth">
            </el-table-column>
            <el-table-column align="center" prop="interactionStoryCount" label="微博故事被互动" :width="columnSmallWidth">
            </el-table-column>
            <el-table-column align="center" label="第一名">
                <el-table-column align="center" prop="interactionFirstName" label="姓名" :width="columnLargeWidth">
                </el-table-column>
                <el-table-column align="center" prop="interactionFirstValue" label="互动数" :width="columnLargeWidth">
                </el-table-column>
            </el-table-column>
        </el-table-column>

        <el-table-column align="center" label="社会影响力">
            <el-table-column align="center" prop="impactValue" label="影响力" :width="columnLargeWidth">
            </el-table-column>
            <el-table-column align="center" prop="impactScore" label="得分" :width="columnSmallWidth">
            </el-table-column>
            <el-table-column align="center" prop="impactRank" label="排名" :width="columnSmallWidth">
            </el-table-column>
            <el-table-column align="center" prop="impactSearchCount" label="搜索量" :width="columnSmallWidth">
            </el-table-column>
            <el-table-column align="center" prop="impactMentionCount" label="提及她的微博阅读数" :width="columnLargeWidth">
            </el-table-column>
            <el-table-column align="center" label="第一名">
                <el-table-column align="center" prop="impactFirstName" label="姓名" :width="columnLargeWidth">
                </el-table-column>
                <el-table-column align="center" prop="impactFirstValue" label="影响力" :width="columnLargeWidth">
                </el-table-column>
            </el-table-column>
        </el-table-column>

        <el-table-column align="center" label="爱慕值">
            <el-table-column align="center" prop="flowerValue" label="爱慕值" :width="columnLargeWidth">
            </el-table-column>
            <el-table-column align="center" prop="flowerScore" label="得分" :width="columnSmallWidth">
            </el-table-column>
            <el-table-column align="center" prop="flowerRank" label="排名" :width="columnSmallWidth">
            </el-table-column>
            <el-table-column align="center" prop="flowerPersonCount" label="送花人数" :width="columnSmallWidth">
            </el-table-column>
            <el-table-column align="center" prop="flowerTotalNumCount" label="送花次数" :width="columnSmallWidth">
            </el-table-column>
            <el-table-column align="center" label="第一名">
                <el-table-column align="center" prop="flowerFirstName" label="姓名" :width="columnLargeWidth">
                </el-table-column>
                <el-table-column align="center" prop="flowerFirstValue" label="爱慕值" :width="columnLargeWidth">
                </el-table-column>
            </el-table-column>
        </el-table-column>

        <el-table-column align="center" label="正能量值">
            <el-table-column align="center" prop="energyValue" label="正能量" :width="columnLargeWidth">
            </el-table-column>
            <el-table-column align="center" prop="energyScore" label="得分" :width="columnSmallWidth">
            </el-table-column>
            <el-table-column align="center" prop="energyRank" label="排名" :width="columnSmallWidth">
            </el-table-column>
            <el-table-column align="center" label="主动行为正能量">
                <el-table-column align="center" prop="energyActiveValue" label="值" :width="columnSmallWidth">
                </el-table-column>
                <el-table-column align="center" prop="energyActiveScore" label="得分" :width="columnSmallWidth">
                </el-table-column>
                <el-table-column align="center" prop="energyActiveRank" label="排名" :width="columnSmallWidth">
                </el-table-column>
            </el-table-column>
            <el-table-column align="center" label="被动影响正能量">
                <el-table-column align="center" prop="energyPassiveValue" label="值" :width="columnLargeWidth">
                </el-table-column>
                <el-table-column align="center" prop="energyPassiveScore" label="得分" :width="columnSmallWidth">
                </el-table-column>
                <el-table-column align="center" prop="energyPassiveRank" label="排名" :width="columnSmallWidth">
                </el-table-column>
            </el-table-column>

            <el-table-column align="center" label="第一名">
                <el-table-column align="center" prop="energyFirstName" label="姓名" :width="columnLargeWidth">
                </el-table-column>
                <el-table-column align="center" prop="energyFirstValue" label="正能量" :width="columnLargeWidth">
                </el-table-column>
            </el-table-column>
        </el-table-column>

        <!--<el-table-column align="center" fixed="right" label="操作" width="120">-->
        <!--<template slot-scope="scope">-->
        <!--<el-button @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text" size="small">-->
        <!--移除-->
        <!--</el-button>-->
        <!--</template>-->
        <!--</el-table-column>-->
    </el-table>
</template>

<script>
    export default {
        name: "Datatable",
        mounted: function() {
            this.loadData();
        },
        methods: {
            loadData: function () {
                let that = this;
                axios.get('/api/weibo/getRankData', {
                    //
                })
                    .then(function (response) {
                        console.log(response.data);
                        that.weiboRankData = that.weiboRankData.concat(response.data);
                    })
                    .catch(function (error) {
                        alert(error);
                    });
            },

        },
        data() {
            return {
                columnSmallWidth: 60,
                columnLargeWidth: 100,
                columnXLargeWidth: 183,
                weiboRankData:[],
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
</style>