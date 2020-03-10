<template>
    <div id="Newmodification">
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
                name:this.$route.params.type=="add"?'新增项目详情':'修改项目详情',
                activeName: 'first',
                type:this.$route.params.type
            }
        },
        methods(){
            

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

    }
</style>