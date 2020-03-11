<template>
    <div class="projectDetails">
        <el-row v-if="state==1" style="width: 95%; height: 100%;">
            <div class="query">
                <el-button type="primary" size="small" class="titleBtn" @click="addIndex" v-if="state==1">
                    提交</el-button>
            </div>
        </el-row>
        <div class="Detailscontent">
            <el-form :model="detailForm" :rules="rules" ref="ruleForm" label-width="80px">
                <!-- <el-form-item class="btnItem" v-if="state==1" style="width:100%">
                    <el-button type="primary" size="small" @click="addIndex" v-if="state==1">
                    提交</el-button>
                </el-form-item> -->
                <el-form-item label="项目编码" prop="" style="width:50%">
                    <el-input v-if="state==1" v-model="newdetailForm.projectCode"></el-input>
                    <template v-else><span v-html="detailForm.projectCode"></span></template>
                </el-form-item>
                <el-form-item label="项目名称" prop="" style="width:50%">
                    <el-input v-if="state==1" v-model="newdetailForm.projectName"></el-input>
                    <template v-else><span v-html="detailForm.projectName"></span></template>
                </el-form-item>
                <el-form-item label="所属平台" prop="" style="width:50%">
                    <el-select v-if="state==1" v-model="newdetailForm.orgId" placeholder="请选择" style="width: 100%;">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                    <!-- <el-input v-if="state==1" v-model="detailForm.departmantName"></el-input> -->
                    <template v-else><span v-html="detailForm.departmantName"></span></template>
                </el-form-item>
                <el-form-item label="达成时间" prop="" style="width:50%">
                    <el-input v-if="state==1" v-model="newdetailForm.deadLine"></el-input>
                    <template v-else><span v-html="detailForm.deadLine"></span></template>
                </el-form-item>
                <el-form-item label="对接部门" prop="">
                    <!-- @on-change-content="getcontent" :content="detailForm.dockingDepartment" -->
                    <quillEditor v-if="state==1" ref="childMethod" :content="newdetailForm.dockingDepartment"
                        style="height:150px;">
                    </quillEditor>
                    <div v-else class="department" style="height:50px;" v-html="detailForm.dockingDepartment">
                    </div>
                </el-form-item>
                <el-form-item label="路径/内容" prop="">
                    <!-- @on-change-content="getcontent2" :content="detailForm.wayAddcontent" -->
                    <quillEditor v-if="state==1" ref="childMethod1" :content="newdetailForm.content"
                        style="height:150px;">
                    </quillEditor>
                    <div v-else class="ljcontent" v-html="detailForm.content">
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
        getLocalTime,
        getOrgData,
        AddNewprojectInfo,
        updataNewprojectInfo
    } from '../../services/declaresth'
    export default {
        components: {
            quillEditor,
        },
        data() {
            return {
                name: '项目详情',
                detailForm: {
                    orgId: '',
                    id: '',
                    projectCode: '',
                    projectName: '',
                    departmantName: '',
                    deadLine: '',
                    dockingDepartment: '',
                    content: '',
                    status: '1',
                    ableFlag: '1',
                    userId: this.$store.state.user.userId,
                },
                newdetailForm: {
                    orgId: '',
                    id: '',
                    projectCode: '',
                    projectName: '',
                    departmantName: '',
                    deadLine: '',
                    dockingDepartment: '',
                    content: '',
                    status: '1',
                    ableFlag: '1',
                    userId: this.$store.state.user.userId,
                },
                rules: {},
                str: '',
                show: false,
                state: this.$route.query.state,
                type: this.$route.query.type,
                options: [],

            }
        },
        mounted() {
            if (this.type == "add" || this.type == "updata") {
                this.state = 1
            } else {
                this.state = 0
            }
            if (this.state == 0) {
                this.searchBaseMessage()
            } else {
                this.options = [];
                let userid = this.$store.state.user.userId;
                getOrgData(userid).then((res) => {
                    if (res.data.result.length > 0) {
                        for (var i = 0; i < res.data.result.length; i++) {
                            this.options.push({
                                value: res.data.result[i].id,
                                label: res.data.result[i].departmantName,
                            })
                        }
                        // this.detailForm.orgId = res.data.result[0].id;
                        if (this.type == "add") {
                            this.newdetailForm = {
                                orgId: res.data.result[0].id,
                                id: '',
                                projectCode: '',
                                projectName: '',
                                departmantName: '',
                                deadLine: '',
                                dockingDepartment: '',
                                content: '',
                                status: '1',
                                ableFlag: '1',
                                userId: this.$store.state.user.userId,
                            }
                        } else {
                            this.searchBaseMessage()
                        }
                    }
                });

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
                this.newdetailForm.dockingDepartment = this.$refs.childMethod.newContent;
                this.newdetailForm.content = this.$refs.childMethod1.newContent;
                if (this.newdetailForm.id == '') {
                    AddNewprojectInfo(this.newdetailForm).then((res) => {
                        // console.log(res)
                        if (res.data.success) {
                            this.$message({
                                type: "success",
                                message: "新增成功!"
                            });
                            console.log(res.data.result)
                            this.$router.push({
                                name: "newModification",
                                query: {
                                    state: '1', //1可编辑,
                                    type: 'updata', //新增，还是修改up
                                    id: res.data.result,
                                    muneId:this.muneId

                                }
                            });
                        } else {
                            this.$message({
                                type: "error",
                                message: res.data.message
                            });
                        }
                    });
                } else {
                    updataNewprojectInfo(this.newdetailForm).then((res) => {
                        // console.log(res)
                        if (res.data.success) {
                            this.$message({
                                type: "success",
                                message: "修改成功!"
                            });
                            console.log(res.data.result)
                        } else {
                            this.$message({
                                type: "error",
                                message: res.data.message
                            });
                        }
                    });
                }

            },
            //查询基本信息
            searchBaseMessage() {
                let userid = this.$store.state.user.userId;
                let projectId = this.$route.query.id //项目名称
                getBaseMessage(userid, projectId).then((res) => {
                    if (res.data.result) {
                        this.detailForm = res.data.result;
                        this.newdetailForm = {
                            orgId: this.detailForm.orgId,
                            id: this.detailForm.id,
                            projectCode: this.detailForm.projectCode,
                            projectName: this.detailForm.projectName,
                            departmantName: this.detailForm.departmantName,
                            deadLine: this.detailForm.deadLine,
                            dockingDepartment: this.detailForm.dockingDepartment,
                            content: this.detailForm.content,
                            status: '1',
                            ableFlag: '1',
                            userId: this.$store.state.user.userId,
                        }
                        // this.detailForm.parentId=res.data.result
                    }
                });

            },
        },
    }
</script>
<style lang="scss">
    .projectDetails {
        width: 100%;
        height: 58px;

        .el-row {
            width: 89%;
            height: 45px;
            line-height: 45px;
            display: flex;

            .query {
                width: 100%;
                font-size: 12px;
                float: right;
                text-align: right;
                // margin-right: 42px;
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
                        color: #409eff;
                        // line-height: 20px;
                    }

                    .el-form-item__content {
                        /* margin-left: 0 !important; */
                        width: calc(100% - 120px);
                        display: flex;
                        float: left;
                        // line-height: 20px;

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

                .btnItem {
                    text-align: right;
                    background-color: aqua;
                }
            }
        }
    }
</style>