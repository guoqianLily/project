<template>
    <div id="Newmodification">
        <el-row>
            <div class="returnBtn" @click="returnMonth"><span class="indic-icon el-icon-back"></span>返回</div>
        </el-row>
        <div id="projectDetails" class="content">
            <projectDetails></projectDetails>
        </div>
        <div id="projectrequirement" class="content">
            <policyRequire></policyRequire>
        </div>
    </div>
</template>
<script>
    import projectDetails from '../../components/Progressdeclaration/projectDetails';
    import policyRequire from '../../components/progessReport/policyRequire'
    export default {
        components: {
            projectDetails,
            policyRequire,
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
    #Newmodification {
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