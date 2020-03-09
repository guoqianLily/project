<template>
    <div class="projectDetails">
        <el-row>
            <div class="bigTitle">{{name}}</div>
        </el-row>
        <div class="Detailscontent">
            <el-form :model="detailForm" :rules="rules" ref="ruleForm" label-width="120px">
                <el-form-item label="项目编码" prop="" style="width:50%">
                    <template v-show="!show"><span>{{detailForm.code}}</span></template>
                    <el-input v-model="detailForm.code" v-show="show"></el-input>
                </el-form-item>
                <el-form-item label="项目名称" prop="" style="width:50%">
                    <template v-show="!show"><span>{{detailForm.name}}</span></template>
                    <el-input v-model="detailForm.name" v-show="show"></el-input>
                </el-form-item>
                <el-form-item label="所属平台" prop="" style="width:50%">
                    <template v-show="!show"><span>{{detailForm.platform}}</span></template>
                    <el-input v-model="detailForm.platform" v-show="show"></el-input>
                </el-form-item>
                <el-form-item label="达成时间" prop="" style="width:50%">
                    <template v-show="!show"><span>{{detailForm.time}}</span></template>
                    <el-input v-model="detailForm.time" v-show="show"></el-input>
                </el-form-item>
                <el-form-item label="对接部门" prop="">
                    <quillEditor @on-change-cantent="getcontent" :content="detailForm.dockingDepartment"
                        style="height:150px;">
                    </quillEditor>
                </el-form-item>
                <el-form-item label="路径/内容" prop="">
                    <quillEditor @on-change-cantent="getcontent2" :content="detailForm.wayAddcontent"
                        style="height:150px;">
                    </quillEditor>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
    import quillEditor from '../ue'
    export default {
        components: {
            quillEditor,
        },
        data() {
            return {
                name: '项目详情',
                detailForm: {
                    code: '1-XM01',
                    name: '原28家互联工厂升级提效并满负荷',
                    platform: '海尔智家平台(智慧家庭)',
                    time: '2020年9月',
                    dockingDepartment: 'DDD',
                    wayAddcontent: 'AAAAAA',
                },
                type: 1,
                rules: {},
                str: '',
                show: false,
            }
        },
        methods: {
            //获取文本编辑器的内容
            getcontent(val) {
                this.detailForm.dockingDepartment = val;
            },
            getcontent2(val) {
                this.detailForm.wayAddcontent = val;
            },
        },
    }
</script>
<style lang="scss">
    .projectDetails {
        width: 100%;

        .el-row {
            width: 100%;
            height: 35px;
            line-height: 35px;
            display: flex;

            .bigTitle {
                color: #02A7F0;
                font-size: 14px;
                float: left;
                position: relative;
                width: 95%;
            }

            .returnBtn {
                color: #02A7F0;
                font-size: 14px;
                float: right;
            }
        }

        .Detailscontent {
            width: 100%;
            height: calc(100% - 35px);

            .el-form {
                .el-form-item {
                    position: relative;
                    float: left;
                    width: 100%;

                    .el-form-item__label {
                        color: #02A7F0;
                    }

                    .el-form-item__content {
                        /* margin-left: 0 !important; */
                        width: calc(100% - 120px);
                        display: flex;
                        float: left;
                    }
                }
            }
        }
    }
</style>