<template>
    <div class="projectprogressfeedback">
        <div class="feedbackcontent">
            <el-form :model="detailForm" :rules="rules" ref="ruleForm" label-width="120px">
                <el-form-item label="当前时间" prop="">
                    <!-- <template v-show="!show"><span>{{detailForm.code}}</span></template> -->
                    <!-- <el-input v-model="detailForm.code" v-show="show"></el-input> -->
                    <!-- <el-date-picker v-if="state==1" v-model="nowTime" @change="getNowTime" type="week"
                        format="yyyy年MM月第WW周" value-format="yyyy-MM-dd" placeholder="选择周">
                    </el-date-picker> -->
                    <template><span>{{nowTimeValue}}</span></template>
                </el-form-item>
                <el-form-item label="当月目标" prop="">
                    <!-- <quillEditor v-if="state==1" @on-change-content="getcontent" :content="detailForm.dockingDepartment"
                        style="height:150px;">
                    </quillEditor> -->
                    <div class="department" v-html="detailForm.dockingDepartment"></div>
                </el-form-item>
                <el-form-item label="本周进展" prop="">
                    <quillEditor v-if="state==1"  ref="childMethod"
                        style="height:150px;">
                    </quillEditor>
                    <div class="department" v-else v-html="detailForm.wayAddcontent"></div>
                </el-form-item>
                <el-form-item label="项目进展分类" prop="">
                    <el-select v-if="state==1" v-model="detailForm.typeValue" placeholder="请选择">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                    <template v-else><span>{{detailForm.typeValue}}</span></template>
                </el-form-item>
                <el-form-item class="btnItem" v-if="state==1">
                    <el-button @click="closeForm('ruleForm')">取消</el-button>
                    <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
    import quillEditor from '../ue'
    import { GetWeekByDate } from "../../utils/validate.js"
    export default {
        components: {
            quillEditor,
        },
        data() {
            return {
                nowTime: '2020-03-09',
                nowTimeValue:'',
                name: '项目详情',
                detailForm: {
                    week: '2020年03月第W11周',
                    name: '原28家互联工厂升级提效并满负荷',
                    platform: '海尔智家平台(智慧家庭)',
                    time: '2020年9月',
                    dockingDepartment: 'dddddd',
                    wayAddcontent: 'ttttt',
                    typeValue: '海尔智家平台(智慧家庭)',
                },
                rules: {},
                state: this.$route.query.state,
                type: this.$route.query.type,
                options: [{
                    value: '海尔智家平台(智慧家庭)',
                    label: '海尔智家平台(智慧家庭)'
                }, {
                    value: 'COSMO平台(工业互联网平台)',
                    label: 'COSMO平台(工业互联网平台)'
                }, {
                    value: '海纳云平台(智慧社区/园区)',
                    label: '海纳云平台(智慧社区/园区)'
                }, {
                    value: '盈康一生(生命健康/生态健康)',
                    label: '盈康一生(生命健康/生态健康)'
                }, {
                    value: '海创汇平台(创业孵化平台)',
                    label: '海创汇平台(创业孵化平台)'
                }]
            }
        },
        mounted() {
            
            let newValDate = this.nowTime.split("-").join("");
            this.nowTimeValue =
                newValDate.substring(0, 4) +
                "年" +
                (newValDate.substring(4, 6) < 10 ?
                    newValDate.substring(5, 6) :
                    newValDate.substring(4, 6)) +
                "月第" +
                GetWeekByDate(this.nowTime) +
                "周";
        },
        methods: {
            //获取文本编辑器的内容
            getcontent(data) {
                this.detailForm.dockingDepartment = data;
            },
            getcontent2(data) {
                this.detailForm.wayAddcontent = data;
            },
            getNowTime(val) {
                console.log(this.nowTime);
                console.log(val);
            },
            //确定
            submitForm(formName) {
                console.log(this.formName)
                let _that = this;
                this.$refs[formName].validate(valid => {
                    if (valid) {} else {
                        console.log("error submit!!");
                        return false;
                    }
                });
            },
            //取消
            closeForm(formName) {
                // this.addIndexVisible = false;
                // this.$refs[formName].resetFields();
            },
        },
        watch: {
            detailForm(val, oldVal) {
                console.log(val)
            }
        }
    }
</script>
<style lang="scss">
    .projectprogressfeedback {
        width: 100%;

        .feedbackcontent {
            margin-top: 20px;
            width: 100%;
            height: calc(100% -20px);

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

                .btnItem {
                    padding-left: 40%;
                }
            }
        }
    }
</style>