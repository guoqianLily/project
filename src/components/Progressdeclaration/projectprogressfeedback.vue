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
                <el-form-item label="当月目标" prop="">
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
                <el-form-item label="项目进展分类" prop="">
                    <el-select v-if="state==1" v-model="projectdetailForm.proProgressType" @change="getVal"
                        placeholder="请选择">
                        <el-option key="completionStatus1" label="Ⅰ已达成" value="completionStatus1">
                        </el-option>
                        <el-option key="completionStatus2" label="Ⅱ按阶段目标，预实零差" value="completionStatus2">
                        </el-option>
                        <el-option key="completionStatus3" label="Ⅲ按阶段目标，预实有差" value="completionStatus3">
                        </el-option>
                    </el-select>
                    <template v-else>
                        <span v-if="projectdetailForm.proProgressType=='completionStatus1'">Ⅰ已达成</span>
                        <span v-else-if="projectdetailForm.proProgressType=='completionStatus2'">Ⅱ按阶段目标，预实零差</span>
                        <span v-else-if="projectdetailForm.proProgressType=='completionStatus3'">Ⅲ按阶段目标，预实有差</span>
                    </template>
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
    import {
        GetWeekByDate
    } from "../../utils/validate.js"
    import {
        getWeek,
        getMonthMessage,
        getWeekMessage,
        addNewWeekMessage,
        upDataNewWeekMessage,
        deleteWeekEvolveData,
        getLocalTime
    } from '../../services/declaresth'
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
                    proProgressType: '',
                    time: '',
                },
                rules: {},
                state: this.$route.query.state,
                type: this.$route.query.type,
                searchData:{},
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
            this.getweek()
        },
        methods: {
            getVal() {
                this.projectdetailForm.content = this.$refs.childMethod.content
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
                        this.getMonthData(userid, time);
                        this.getWeekData(userid, time, newdata.week);
                    }
                });

            },
            //查询当月目标
            getMonthData(userId, month) {
                let projectId = this.$route.query.id;
                getMonthMessage(userId, projectId, month).then((res) => {
                    if (res.data.result.length > 0) {
                        this.projectdetailForm.projectContext = res.data.result[0].projectContext
                        // console.log(res.data)
                    }else{
                         this.projectdetailForm.projectContext = '';
                    }
                });
            },
            //查询当前周目标
            getWeekData(userId, month, week) {
                let businessId = this.$route.query.id;
                let businessType = "project";
                getWeekMessage(userId, businessId, businessType, month, week).then((res) => {
                    if (res.data.result.length > 0) {
                        this.weekData = res.data.result[0];
                        this.projectdetailForm.content = res.data.result[0].content;//.replace("&nbsp;"," ");
                        this.projectdetailForm.proProgressType = res.data.result[0].proProgressType;
                        this.weekId = res.data.result[0].id
                        // console.log(res.data)
                    }else{
                      this.weekData = [];
                        this.projectdetailForm.content = '';//.replace("&nbsp;"," ");
                        this.projectdetailForm.proProgressType ='';
                        this.weekId = ''
                    }
                });
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
                    content: this.$refs.childMethod.content,//.replace(" ","&nbsp;"),
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
                                    _that.getWeekData(_that.searchData.userId, _that.searchData.month, _that.searchData
                                        .week)
                                } else {
                                    this.$message({
                                        type: "error",
                                        message: res.data.message
                                    });
                                    _that.getWeekData(_that.searchData.userId, _that.searchData.month, _that.searchData
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
                                    _that.getWeekData(_that.searchData.userId, _that.searchData.month, _that.searchData
                                        .week)
                                } else {
                                    this.$message({
                                        type: "error",
                                        message: res.data.message
                                    });
                                    _that.getWeekData(_that.searchData.userId,_that.searchData.month, _that.searchData
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
                var _that=this;
                // this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
                //     confirmButtonText: '确定',
                //     cancelButtonText: '取消',
                //     type: 'warning'
                // }).then(() => {
                   
                // }).catch(() => {
                //     this.$message({
                //         type: 'info',
                //         message: '已取消删除'
                //     })
                // })
                //  const deleteData = {
                     const userId=this.$store.state.user.userId;
                     const id= this.weekId ;
                     const month= this.weekobj[0].year + "-" + (this.weekobj[0].month < 10 ? "0" + this.weekobj[0].month :
                        this.weekobj[0].month)
                    const week= this.weekobj[0].week
                    // }
                    deleteWeekEvolveData(userId,id).then((res) => {
                        if (res.data.success) {
                            this.$message({
                                type: 'success',
                                message: '操作成功!'
                            });
                            
                          _that.getWeekData(userId,month,week);

                        } else {
                            this.$message({
                                type: 'error',
                                message: '操作失败!'
                            });
                             _that.getWeekData(userId,month,week);
                        }
                    });
            },
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