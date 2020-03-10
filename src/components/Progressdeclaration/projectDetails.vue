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
                    <el-input v-if="state==1" v-model="detailForm.code"></el-input>
                    <template v-else><span>{{detailForm.code}}</span></template>
                </el-form-item>
                <el-form-item label="项目名称" prop="" style="width:50%">
                    <el-input v-if="state==1" v-model="detailForm.name"></el-input>
                    <template v-else><span>{{detailForm.name}}</span></template>
                </el-form-item>
                <el-form-item label="所属平台" prop="" style="width:50%">
                    <el-input v-if="state==1" v-model="detailForm.platform"></el-input>
                    <template v-else><span>{{detailForm.platform}}</span></template>
                </el-form-item>
                <el-form-item label="达成时间" prop="" style="width:50%">
                    <el-input v-if="state==1" v-model="detailForm.time"></el-input>
                    <template v-else><span>{{detailForm.time}}</span></template>
                </el-form-item>
                <el-form-item label="对接部门" prop="">
                    <quillEditor v-if="state==1" @on-change-content="getcontent" :content="detailForm.dockingDepartment"
                        style="height:150px;">
                    </quillEditor>
                    <div v-else class="department">
                        {{detailForm.dockingDepartment}}
                    </div>
                </el-form-item>
                <el-form-item label="路径/内容" prop="">
                    <quillEditor v-if="state==1" @on-change-content="getcontent2" :content="detailForm.wayAddcontent"
                        style="height:150px;">
                    </quillEditor>
                    <div v-else class="ljcontent">
                        {{detailForm.wayAddcontent}}
                    </div>
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
                rules: {},
                str: '',
                show: false,
                state: this.$route.query.state,
                type: this.$route.query.type
            }
        },
        mounted() {
            console.log(this.$store.state.user.userId);
            if (this.type == "add" || this.type == "updata") {
                this.state = 1
            } else {
                this.state = 0
            }
            if(this.type=="add"){
                this.detailForm= {
                    code: '',
                    name: '',
                    platform: '',
                    time: '',
                    dockingDepartment: '',
                    wayAddcontent: '',
                }
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
                console(this.detailForm);
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