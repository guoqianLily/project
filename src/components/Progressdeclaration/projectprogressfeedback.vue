<template>
    <div class="projectprogressfeedback">
        <div class="feedbackcontent">
            <el-form :model="projectdetailForm" :rules="rules" ref="ruleForm" label-width="120px">
                <el-form-item label="当前时间" prop="">
                    <!-- <template v-show="!show"><span>{{projectdetailForm.code}}</span></template> -->
                    <!-- <el-input v-model="projectdetailForm.code" v-show="show"></el-input> -->
                    <!-- <el-date-picker v-if="state==1" v-model="nowTime" @change="getNowTime" type="week"
                        format="yyyy年MM月第WW周" value-format="yyyy-MM-dd" placeholder="选择周">
                    </el-date-picker> -->
                    <template><span v-html="nowTimeValue"></span></template>
                </el-form-item>
                <el-form-item label="当周预算" prop="">
                    <!-- <quillEditor v-if="state==1" @on-change-content="getcontent" :content="projectdetailForm.dockingDepartment"
                        style="height:150px;">
                    </quillEditor> -->
                    <div class="department" v-html="projectdetailForm.projectContext"></div>
                </el-form-item>
                <el-form-item label="本周进展" prop="">
                    <quillEditor v-if="state==1" ref="childMethod" :content="projectdetailForm.content"
                        style="height:150px;">
                    </quillEditor>
                    <div class="department" v-else v-html="projectdetailForm.content"></div>
                </el-form-item>
                <el-form-item label="下周预算" prop="">
                    <quillEditor v-if="state==1" ref="childMethod1" :content="projectdetailForm.nextProjectContext"
                        style="height:150px;">
                    </quillEditor>
                    <div class="department" v-else v-html="projectdetailForm.nextProjectContext"></div>
                </el-form-item>
                <el-form-item label="项目进展分类" prop="">
                    <el-select v-if="state==1" v-model="projectdetailForm.proProgressType" @change="getVal"
                        placeholder="请选择">
                        <el-option v-for="item in options " :key="item.id" :label="item.value" :value="item.key">
                        </el-option>
                    </el-select>
                    <template v-else>
                        <span v-if="projectdetailForm.proProgressType=='completionStatus1'">Ⅰ已达成</span>
                        <span v-else-if="projectdetailForm.proProgressType=='completionStatus2'">Ⅱ按阶段目标，预实零差</span>
                        <span v-else-if="projectdetailForm.proProgressType=='completionStatus3'">Ⅲ按阶段目标，预实有差</span>
                    </template>
                </el-form-item>
                <el-form-item class="btnItem" v-if="state==1">
                    <el-button type="primary clear" @click="closeForm('ruleForm')" v-show="qxdata.cancel">取消</el-button>
                    <el-button type="primary" @click="submitForm('ruleForm')" v-show="qxdata.sure">确定</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
    import quillEditor from '../ue'
    import {
        GetWeekByDate
    } from "../../utils/validate.js"
    import {
        getBtnsPermissionsData
    } from '../../services/Manage/postManage.js'
    import {
        getWeek,
        getMonthMessage,
        getWeekMessage,
        addNewWeekMessage,
        upDataNewWeekMessage,
        deleteWeekEvolveData,
        getLocalTime
    } from '../../services/declaresth'
    import {
        getweekProgressClassData
    } from "../../services/policyPage.js";
    export default {
        components: {
            quillEditor,
        },
        data() {
            return {
                nowTime: '2020-03-09',
                nowTimeValue: '',
                name: '项目详情',
                weekobj: [],
                weekData: {},
                weekId: '',
                projectdetailForm: {
                    week: '',
                    projectContext: '',
                    content: '',
                    nextProjectContext: '',
                    proProgressType: '',
                    time: '',
                },
                rules: {},
                state: this.$route.query.state,
                type: this.$route.query.type,
                searchData: {},
                options: [],
                qxdata: {
                    sure: false,
                    cancel: false,
                }
            }
        },
        mounted() {
            window.scrollTo(0, 0);
            // 获取申报政策进展分类得下拉框值
            getweekProgressClassData({
                type: 'taskProgress',
                userId: this.$store.state.user.user
            }).then(res => {
                // console.log(res)
                this.options = res.result;
            })
            this.getqx();
            this.getweek();
            this.scrollM()
        },
        methods: {
            //按钮权限
            getqx() {
                let userId = this.$store.state.user.userId;
                let id = this.$route.query.muneId;
                getBtnsPermissionsData(id, userId).then((data) => {
                    if (data.result.length > 0) {
                        console.log(data.result);
                        let result = data.result;
                        for (var i = 0; i < result.length; i++) {
                            if (result[i] == "business:report:projectprogressreport:sure") {
                                this.qxdata.sure = true;
                            } else if (result[i] == "business:report:projectprogressreport:cancel ") {
                                this.qxdata.cancel = true;
                            }
                        }
                    }
                    this.scrollM()
                    //console.log(this.formData)
                });
            },
            getVal() {
                this.projectdetailForm.content = this.$refs.childMethod.newContent
            },
            //获取文本编辑器的内容
            getcontent(data) {
                this.projectdetailForm.projectContext = data;
            },
            getcontent2(data) {
                this.projectdetailForm.content = data;
            },
            getNowTime(val) {
                console.log(this.nowTime);
                console.log(val);
            },
            //默认查询周次
            getweek() {
                let userid = this.$store.state.user.userId;
                let currentTime = getLocalTime(new Date(), 'yyyy-MM-dd') //项目名称
                getWeek(userid, currentTime).then((res) => {
                    if (res.data.result.length) {
                        this.weekobj = res.data.result;
                        let newdata = res.data.result[0];
                        let newValDate = this.nowTime.split("-").join("");
                        this.nowTimeValue =
                            newdata.year +
                            "年" +
                            (newdata.month < 10 ? "0" + newdata.month : newdata.month) +
                            "月第" +
                            newdata.week +
                            "周";
                        let time = newdata.year +
                            "-" +
                            (newdata.month < 10 ? "0" + newdata.month : newdata.month);
                        this.getMonthData(userid, time, newdata.week);
                        this.getWeekData(userid, time, newdata.week);
                    }
                });
            },
            //查询当周目标
            getMonthData(userId, month, week) {
                var _that=this;
                let projectId = this.$route.query.id;
                getMonthMessage(userId, projectId, month, week).then((res) => {
                    if (res.data.result.length > 0) {
                        _that.projectdetailForm.projectContext=res.data.result[0].projectContext;
                        _that.projectdetailForm.nextProjectContext = (res.data.result[0].nextProjectContext ? res
                            .data.result[0].nextProjectContext : '');
                        // console.log(res.data)
                        _that.scrollM()
                    } else {
                        _that.projectdetailForm.projectContext = '';
                        _that.projectdetailForm.nextProjectContext = '';
                            _that.scrollM()
                    }
                });
                 this.scrollM()
            },
            //查询当前周目标
            getWeekData(userId, month, week) {
                var _that=this;
                let businessId = this.$route.query.id;
                let businessType = "project";
                getWeekMessage(userId, businessId, businessType, month, week).then((res) => {
                    if (res.data.result.length > 0) {
                        _that.weekData = res.data.result[0];
                        _that.projectdetailForm.content = res.data.result[0].content; //.replace("&nbsp;"," ");
                        _that.projectdetailForm.proProgressType = res.data.result[0].proProgressType;
                        _that.weekId = res.data.result[0].id
                        // console.log(res.data)
                        // _that.scrollM()
                    } else {
                        _that.weekData = [];
                        _that.projectdetailForm.content = ''; //.replace("&nbsp;"," ");
                        _that.projectdetailForm.proProgressType = '';
                        _that.weekId = ''
                        // _that.scrollM()
                    }
                });
                 this.scrollM()
            },
            //确定
            submitForm(formName) {
                console.log(this.formName)
                this.searchData = {
                    userId: this.$store.state.user.userId,
                    businessId: this.$route.query.id,
                    businessType: "project",
                    month: this.weekobj[0].year + "-" + (this.weekobj[0].month < 10 ? "0" + this.weekobj[0].month :
                        this.weekobj[0].month),
                    week: this.weekobj[0].week,
                    content: this.$refs.childMethod.newContent, //.replace(" ","&nbsp;"),
                    nextWeekTargetContent: this.$refs.childMethod1.newContent,
                    proProgressType: this.projectdetailForm.proProgressType,
                    status: '1',
                    ableFlag: '1',
                    id: this.weekId
                }
                let _that = this;
                this.$refs[formName].validate(valid => {
                    if (valid) {
                        if (_that.weekId) {
                            upDataNewWeekMessage(_that.searchData).then((res) => {
                                // console.log(res)
                                if (res.data.success) {
                                    this.$message({
                                        type: "success",
                                        message: "操作成功!"
                                    });
                                    _that.getWeekData(_that.searchData.userId, _that.searchData.month,
                                        _that.searchData
                                        .week)
                                         _that.getMonthData(_that.searchData.userId, _that.searchData.month,
                                        _that.searchData
                                        .week)
                                } else {
                                    this.$message({
                                        type: "error",
                                        message: res.data.message
                                    });
                                    _that.getWeekData(_that.searchData.userId, _that.searchData.month,
                                        _that.searchData
                                        .week)
                                    _that.getMonthData(_that.searchData.userId, _that.searchData.month,
                                        _that.searchData
                                        .week)
                                }
                            });

                        } else {
                            addNewWeekMessage(_that.searchData).then((res) => {
                                // console.log(res)
                                if (res.data.success) {
                                    this.$message({
                                        type: "success",
                                        message: "操作成功!"
                                    });
                                    _that.getWeekData(_that.searchData.userId, _that.searchData.month,
                                        _that.searchData
                                        .week)
                                         _that.getMonthData(_that.searchData.userId, _that.searchData.month,
                                        _that.searchData
                                        .week)
                                } else {
                                    this.$message({
                                        type: "error",
                                        message: res.data.message
                                    });
                                    _that.getWeekData(_that.searchData.userId, _that.searchData.month,
                                        _that.searchData
                                        .week);
                                    _that.getMonthData(_that.searchData.userId, _that.searchData.month,
                                        _that.searchData
                                        .week)
                                }
                            });

                        }
                    } else {
                        console.log("error submit!!");
                        return false;
                    }
                });
            },
            //取消
            closeForm(formName) {
                var _that = this;
                const userId = _that.$store.state.user.userId;
                const month = _that.weekobj[0].year + "-" + (_that.weekobj[0].month < 10 ? "0" + _that.weekobj[0].month :
                _that.weekobj[0].month)
                const week = _that.weekobj[0].week;
                _that.projectdetailForm.content = ''
                _that.projectdetailForm.nextProjectContext="";
                _that.getweek(); 
            },
            //返回到顶部 this.scrollM()
            scrollM() {
                window.scrollTo(0, 0);
                document.body.scrollTop = 0
                document.documentElement.scrollTop = 0
            }
        },
        watch: {
            projectdetailForm(val, oldVal) {
                console.log(val)
            }
        }
    }
</script>
<style lang="scss">
    .projectprogressfeedback {
        width: 100%;

        .feedbackcontent {
            width: 100%;
            height: calc(100% -20px);

            .el-form {
                .el-form-item {
                    position: relative;
                    float: left;
                    width: 100%;

                    .el-form-item__label {
                        color: #409eff;
                    }

                    .el-form-item__content {
                        /* margin-left: 0 !important; */
                        width: calc(100% - 120px);
                        display: flex;
                        float: left;

                        .department,
                        .ljcontent {
                            line-height: 17px;
                            overflow: auto;
                            width: 100%;
                            border-radius: 10px;
                            border: 1px solid #DCDFE6;
                            padding: 10px;
                                min-height: 50px;
                        }
                    }
                }

                .btnItem {
                    padding-left: 40%;

                    .clear {
                        background-color: #fff;
                        color: #409eff;
                    }
                }
            }
        }
    }
</style>