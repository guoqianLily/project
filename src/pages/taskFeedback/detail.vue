<template>
    <div id="detail">
        <el-row>
            <div class="returnBtn" @click="returnMonth"><span class="indic-icon el-icon-back"></span>返回</div>
        </el-row>
        <div id="projectDetails" class="content">
            <projectDetails></projectDetails>
        </div>
        <div id="projectrequirement" class="content">sss</div>
        <div id="projectTab" class="content">
            <el-tabs v-model="activeName" @tab-click="handleClick" class="el-tabs">
                <el-tab-pane label="项目进度反馈" name="first">
                    <!-- <indexClassIfication v-if="activeName=='first'"></indexClassIfication> -->
                </el-tab-pane>
                <el-tab-pane label="政策进度反馈" name="second">
                    <!-- <indexOrganizationList v-if="activeName=='second'"></indexOrganizationList> -->
                </el-tab-pane>
                <el-tab-pane label="月度目标" name="third">
                    <!-- <listofIndicators v-if="activeName=='third'"></listofIndicators> -->
                </el-tab-pane>
                <el-tab-pane label="项目回顾" name="four">
                    <!-- <listofIndicators v-if="activeName=='third'"></listofIndicators> -->
                </el-tab-pane>
                <el-tab-pane label="附件" name="five">
                    <!-- <listofIndicators v-if="activeName=='third'"></listofIndicators> -->
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>
<script>
    import projectDetails from '../../components/Progressdeclaration/projectDetails';
    export default {
        components: {
            projectDetails
        },
        data() {
            return {
                activeName: 'first'
            }

        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            },
             //返回
            returnMonth() {
                this.$router.replace('/taskfeedback')
            },
        }

    }
</script>
<style lang="scss">
    #detail {
        width: 100%;
        height: calc(100% - 53px);
        position: relative;
        float: left;
        overflow: auto;

        .el-row {
            width: 100%;
            height: 35px;
            line-height: 35px;
            display: flex;

            .returnBtn {
                color: #02A7F0;
                font-size: 14px;
                float: right;
                    margin-left: 90%;
            }
        }

        .content {
            position: relative;
            float: left;
            min-height: 240px;
            width: 84%;
            margin-bottom: 10px;
            padding: 10px 8% 10px 8%;

            .el-tabs__item.is-active {
                background: none !important;
                color: #409EFF !important;
            }
        }

    }
</style>