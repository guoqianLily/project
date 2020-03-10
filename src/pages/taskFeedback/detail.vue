<template>
    <div id="detail">
        <el-row>
            <div class="bigTitle"><span></span>{{name}}</div>
            <div class="returnBtn" @click="returnMonth"><span class="indic-icon el-icon-back"></span>返回</div>
        </el-row>
        <div id="projectDetails" class="content">
            <projectDetails></projectDetails>
        </div>
        <div id="projectrequirement" class="content">
            <policyRequire></policyRequire>
        </div>
        <div id="projectTab" class="content">
            <el-tabs v-model="activeName" @tab-click="handleClick" class="el-tabs">
                <el-tab-pane label="项目进度申报" name="first">
                    <projectprogressfeedback v-if="activeName=='first'"></projectprogressfeedback>
                </el-tab-pane>
                <el-tab-pane label="政策进度申报" name="second">
                    <policyProfeedback v-if="activeName=='second'" class="projectDetails"></policyProfeedback>
                </el-tab-pane>
                <el-tab-pane label="月度目标" name="third">
                    <monthlytarget v-if="activeName=='third'"></monthlytarget>
                </el-tab-pane>
                <!-- <el-tab-pane label="项目回顾" name="four"> -->
                <!-- <listofIndicators v-if="activeName=='third'"></listofIndicators> -->
                <!-- </el-tab-pane> -->
                <el-tab-pane label="附件" name="five">
                    <filesUploadDown v-if="activeName=='five'"></filesUploadDown>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>
<script>
    import projectDetails from '../../components/Progressdeclaration/projectDetails';
    import projectprogressfeedback from '../../components/Progressdeclaration/projectprogressfeedback';
    import policyProfeedback from '../../components/progessReport/policyProfeedback'
    import policyRequire from '../../components/progessReport/policyRequire'
    import monthlytarget from '../../components/Progressdeclaration/monthlytarget'
    import filesUploadDown from '../../components/progessReport/filesUploadDown'
    import 'quill/dist/quill.core.css'
    import 'quill/dist/quill.snow.css'
    import 'quill/dist/quill.bubble.css'
    export default {
        components: {
            projectDetails,
            projectprogressfeedback,
            policyProfeedback,
            policyRequire,
            monthlytarget,
            filesUploadDown
        },
        data() {
            return {
                name: '项目详情',
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
            width: 94%;
            padding: 10px 0% 10px 8%;
            height: 44px;
            line-height: 44px;
            display: flex;

            .bigTitle {
                color: #409eff;
                font-size: 16px;
                float: left;
                position: relative;
                width: 95%;
                // padding-left: 60px;
                span {
                    width: 2px;
                    height: 34px;
                    padding: 0px 3px 1px 0px;
                    background-color: #409eff;
                    margin-right: 5px;
                }
            }

            .returnBtn {
                color: #409eff;
                font-size: 14px;
                float: right;
                width: 50px;

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

        // .projectDetails {
        //     height: 400px;
        // }

    }
</style>