<template>
    <div class="projectDetails">
        <el-row>
            <div class="query">
                <el-button type="primary" size="small" class="titleBtn" @click="addIndex" v-if="state==1">
                    提交</el-button>
            </div>
        </el-row>
        <div class="Detailscontent">
            <el-form :model="detailForm" :rules="rules" ref="ruleForm" label-width="80px">
                <el-form-item label="项目编码" prop="" style="width:50%">
                    <el-input v-if="state==1" v-model="detailForm.projectCode"></el-input>
                    <template v-else><span>{{detailForm.projectCode}}</span></template>
                </el-form-item>
                <el-form-item label="项目名称" prop="" style="width:50%">
                    <el-input v-if="state==1" v-model="detailForm.projectName"></el-input>
                    <template v-else><span>{{detailForm.projectName}}</span></template>
                </el-form-item>
                <el-form-item label="所属平台" prop="" style="width:50%">
                    <el-input v-if="state==1" v-model="detailForm.departmantName"></el-input>
                    <template v-else><span>{{detailForm.departmantName}}</span></template>
                </el-form-item>
                <el-form-item label="达成时间" prop="" style="width:50%">
                    <el-input v-if="state==1" v-model="detailForm.deadLine"></el-input>
                    <template v-else><span>{{detailForm.deadLine}}</span></template>
                </el-form-item>
                <el-form-item label="对接部门" prop="">
                    <!-- @on-change-content="getcontent" :content="detailForm.dockingDepartment" -->
                    <quillEditor v-if="state==1" ref="childMethod1" :content="detailForm.dockingDepartment" style="height:150px;" >
                    </quillEditor>
                    <div v-else class="department" style="height:50px;">
                        {{detailForm.dockingDepartment}}
                    </div>
                </el-form-item>
                <el-form-item label="路径/内容" prop="">
                    <!-- @on-change-content="getcontent2" :content="detailForm.wayAddcontent" -->
                    <quillEditor v-if="state==1" ref="childMethod" :content="detailForm.content"  style="height:150px;">
                    </quillEditor>
                    <div v-else class="ljcontent">
                        {{detailForm.content}}
                    </div>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
    import quillEditor from '../ue'
    import {
        getBaseMessage,
        getLocalTime
    } from '../../services/declaresth'
    export default {
        components: {
            quillEditor,
        },
        data() {
            return {
                name: '项目详情',
                detailForm: {
                    projectCode: '1-XM01',
                    projectName: '原28家互联工厂升级提效并满负荷',
                    departmantName: '海尔智家平台(智慧家庭)',
                    deadLine: '2020-09',
                    dockingDepartment: 'DDD',
                    content: 'AAAAAA',
                },
                newdetailForm: {
                    projectCode: '1-XM01',
                    projectName: '原28家互联工厂升级提效并满负荷',
                    departmantName: '海尔智家平台(智慧家庭)',
                    deadLine: '2020-09',
                    dockingDepartment: 'DDD',
                    content: 'AAAAAA',
                },
                rules: {},
                str: '',
                show: false,
                state: this.$route.query.state,
                type: this.$route.query.type
            }
        },
        mounted() {
            if (this.type == "add") {
                this.detailForm = {
                    code: '',
                    name: '',
                    platform: '',
                    time: '',
                    dockingDepartment: '',
                    wayAddcontent: '',
                }
            }
            console.log(this.$store.state.user.userId);
            if (this.type == "add" || this.type == "updata") {
                this.state = 1
            } else {
                this.state = 0
            }
            if (this.state == 0) {
                this.searchBaseMessage()
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
            addIndex() {
                console(this.$refs.childMethod);
            },
            //查询基本信息
            searchBaseMessage() {
                let userid = this.$store.state.user.userId;
                let projectId = this.$route.query.id //项目名称
                getBaseMessage(userid, projectId).then((res) => {
                    if (res.data.result) {
                        res.data.result.deadLine = getLocalTime(res.data.result.deadLine, 'yyyy-MM')
                        this.detailForm = res.data.result;
                    }
                });

            }
        },
    }
</script>
<style lang="scss">
    .projectDetails {
        width: 100%;

        .el-row {
            width: 100%;
            height: 45px;
            line-height: 45px;
            display: flex;

            .query {
                width: 100%;
                font-size: 12px;
                float: right;
                text-align: right;
                margin-right: 42px;
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
                    margin-bottom: 5px;

                    .el-form-item__label {
                        color: #02A7F0;
                    }

                    .el-form-item__content {
                        /* margin-left: 0 !important; */
                        width: calc(100% - 120px);
                        display: flex;
                        float: left;

                        .department,
                        .ljcontent {
                            height: 150px;
                            line-height: 20px;
                            overflow: auto;
                            width: 100%;
                            border-radius: 10px;
                            border: 1px solid #ccc;
                            padding: 10px 10px 10px 10px;
                        }
                    }
                }
            }
        }
    }
</style>