<template>
    <div id="monthlytarget" class="listPage">
        <!-- <div class="queryRow">
            <el-form :model="searchForm">
                <el-form-item style="margin-bottom:10px;">
                    <el-button v-if="state==1" type="primary" @click="addIndex()" class="addBtn">新增月度目标</el-button>
                </el-form-item>
            </el-form>
        </div> -->
        <div class="listBox">
            <div class="tableBox">
                <el-table v-loading="loading" element-loading-text="数据加载..." element-loading-spinner="el-icon-loading"
                    :data="tableData" border style="width:100%">
                    <el-table-column label="序号" prop="" width="80">
                        <template slot-scope="scope">
                            <span v-text="getIndex(scope.$index)"> </span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="month" label="周次" width="200">
                    </el-table-column>
                    <el-table-column prop="" label="项目周度目标">
                        <template slot-scope="scope">
                            <div v-html="scope.row.projectContext">
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column prop="" label="政策周度目标">
                           <template slot-scope="scope">
                            <div v-html="scope.row.policyContext">
                            </div>
                        </template>
                    </el-table-column>
                    <!-- <el-table-column prop="" label="操作" v-if="state==1" width="120">
                        <template slot-scope="scope">
                            <span @click="handleEdit(scope.$index, scope.row)" class="upBtns">修改</span>
                        </template>
                    </el-table-column> -->
                </el-table>
            </div>
        </div>
        <el-dialog :title="title" :visible.sync="addIndexVisible" id='addNewdialog'>
            <el-form :model="addForm" ref="addForm" :rules="rules" label-position="right">
                <el-form-item class="currenttime" label="周次" prop="month" label-width="120px">
                    <el-date-picker v-model="addForm.month" type="month" format="yyyy年MM月" value-format="yyyy-MM">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="项目周度目标" prop="projectContext" label-width="120px">
                    <quillEditor ref="childMethod" :content="addForm.projectContext" style="height:150px;">
                    </quillEditor>
                </el-form-item>
                <el-form-item label="政策周度目标" prop="policyContext" label-width="120px">
                    <quillEditor ref="childMethod1" :content="addForm.policyContext" style="height:150px;">
                    </quillEditor>
                </el-form-item>
                <el-form-item class="btnItem">
                    <el-button type="primary" @click="submitForm('addForm')">提交</el-button>
                    <el-button @click="closeForm('addForm')">取消</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>
<script>
    import quillEditor from '../ue'
    import {
        getMonthMessage,
        getWeek,
        upDataNewMonthlytarget,
        addNewMonthlytarget,
        getLocalTime
    } from '../../services/declaresth'
    import 'quill/dist/quill.core.css'
    import 'quill/dist/quill.snow.css'
    import 'quill/dist/quill.bubble.css'
    export default {
        components: {
            quillEditor,
        },
        data() {
            return {
                state: this.$route.query.state,
                type: this.$route.query.type,
                currenttime: '',
                stripe: true,
                title: '新增',
                typeName: '',
                addIndexVisible: false,
                currentPage1: 1,
                tableTotal: 0,
                pageSize: 8,
                searchForm: {},
                addForm: {
                    id: '',
                    month: '',
                    projectContext: '',
                    policyContext: '',
                },
                rules: {
                    month: [{
                        required: true,
                        message: '请选择月份',
                        trigger: 'change'
                    }],
                    projectContext: [{
                        required: true,
                        message: '请输入项目月度目标',
                        trigger: 'blur'
                    }, ],
                    policyContext: [{
                        required: true,
                        message: '政策月度目标',
                        trigger: 'blur'
                    }],

                },
                tableData: [],
                layout: 'menuPage',
                loading: true,
                weekobj:{},
                nowTimeValue:'',
            }
        },
        mounted() {
            // document.getElementById('detail').scrollTop = 0; // 父级容器
             this.getweek() 
          
        },
        methods: {
                  //默认查询周次
            getweek() {
                let userid = this.$store.state.user.userId;
                let currentTime = getLocalTime(new Date(), 'yyyy-MM-dd') //项目名称
                getWeek(userid, currentTime).then((res) => {
                    if (res.data.result.length) {
                        this.weekobj = res.data.result;
                        let newdata = res.data.result[0];
                        // let newValDate = this.nowTime.split("-").join("");
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
                        this.searchMessage(time,newdata.week);
                        // this.getMonthData(userid, time,newdata.week);
                        // this.getWeekData(userid, time, newdata.week);
                    }
                });
            },
            //查询
            searchMessage(month,week) {
                //查询当月目标
                let userid = this.$store.state.user.userId;
                let projectId = this.$route.query.id;
                getMonthMessage(userid, projectId, month,week).then((res) => {
                    if (res.data.result.length > 0) {
                        let datalist=res.data.result;
                        for(var i=0;i<datalist.length;i++){
                            this.nowTimeValue =
                            datalist[i].month.split("-")[0] +
                            "年第" +
                            datalist[i].week +
                            "周";
                            res.data.result[i].month=this.nowTimeValue;
                        }
                        this.tableData = res.data.result;
                        this.loading = false
                    }else{
                        this.tableData = [];
                         this.loading = false
                    }
                });
            },
            //获取文本编辑器的内容
            getcontent(val) {
                this.addForm.configName = val;
            },
            getcontent2(val) {
                this.addForm.indicatorTypeName = val;
            },
            //分页查询的事件
            // 分页功能
            // 每页显示的条数
            handleSizeChange(val) {
                this.pageSize = val
                this.currentPage1 = 1
                this.searchMessage();

            },
            // 显示第几页
            handleCurrentChange(val) {
                // 改变默认的页数
                this.currentPage1 = parseInt(val);
                this.tableData = [];
                this.searchMessage();
            },
            // //获取表格序号
            getIndex($index) {
                //表格序号
                return (this.currentPage1 - 1) * this.pageSize + $index + 1
            },
            // 新增
            addIndex() {
                this.addIndexVisible = true;
                this.title = "新增月度目标"
                this.$nextTick(() => {
                    this.$refs.addForm
                .resetFields(); //等弹窗里的form表单的dom渲染完在执行this.$refs.addForm.resetFields()，去除验证
                    this.addForm = {
                        id:'',
                        projectId: this.$route.query.id,
                        month: '',
                        userId :this.$store.state.user.userId,
                        ableFlag:'1',
                        projectContext: '',
                        policyContext: '',
                    }
                });

            },
            //   修改
            handleEdit(index, row) {
                this.addIndexVisible = true;
                this.title = "修改月度目标";
                this.$nextTick(() => {
                    this.addForm = {
                        id:row.id,
                        projectId: this.$route.query.id,
                        month: row.month,
                        userId :this.$store.state.user.userId,
                        ableFlag:'1',
                        projectContext: row.projectContext,//.replace("&nbsp;"," ")
                        policyContext: row.policyContext,//.replace("&nbsp;"," ")
                    }
                });
            },
            //   删除
            handleDelete(index, row) {
                this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {

                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    })
                })
            },
            //新增修改提交事件
            submitForm(formName) {
                this.addForm.projectContext=this.$refs.childMethod.newContent;
                this.addForm.policyContext=this.$refs.childMethod1.newContent;  
                // console.log(this.$refs.childMethod.newContent)
                let _that = this
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        const formData = _that.addForm;
                        if(_that.addForm.id==""){
                            addNewMonthlytarget(formData).then((res) => {
                                // console.log(res)
                                if (res.data.success) {
                                    _that.$message({
                                        type: "success",
                                        message: "操作成功!"
                                    });
                                    this.addIndexVisible =false;
                                    _that.searchMessage();
                                } else {
                                    _that.$message({
                                        type: "error",
                                        message: res.data.message
                                    });
                                      this.addIndexVisible =false;
                                    _that.searchMessage();
                                }
                            });

                        }else{
                             upDataNewMonthlytarget(formData).then((res) => {
                                // console.log(res)
                                if (res.data.success) {
                                    _that.$message({
                                        type: "success",
                                        message: "操作成功!"
                                    });
                                    this.addIndexVisible =false;
                                    _that.searchMessage();
                                } else {
                                    _that.$message({
                                        type: "error",
                                        message: res.data.message
                                    });
                                      this.addIndexVisible =false;
                                    _that.searchMessage();
                                }
                            });
                        }
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            closeForm(formName) {
                this.addIndexVisible = false;
                this.searchMessage();
                // this.$refs[formName].resetFields();
            }
        }
    }
</script>
<style lang="scss">
.ql-editor .ql-size-huge {
    font-size: 2.5em !important;
}
    .el-form-item__content {
        margin-left: 0 !important;
    }

    #monthlytarget {
        .queryRow {
            .el-form {
                .el-form-item {
                    .el-form-item__content {
                        width: 100%;
                        float: left;
                        text-align: right;
                        display: flex;
                        justify-content: flex-end;
                        .addBtn {
                            margin-left: 90.5%;
                            height: 26px;
                            line-height: 7px;
                            font-size: 12px;
                            padding: 0px 5px 0px 5px;
                        }

                    }
                }
            }
        }

        .tableBox {
            .el-table {
                .el-table__body {
                    .upBtns {
                        cursor: pointer;
                        color: #409eff;
                        text-decoration: underline;
                    }
                }

                td {
                    text-align: center;
                }
            }

        }

        #addNewdialog {
            .el-select {
                width: 100%;
            }

            .el-dialog__body {
                padding: 0 0.2rem 0.2rem 0.2rem;
                width: 100%;
                display: inline-flex;
                text-align: right;

                .el-form {
                    .el-form-item {
                        width: 95%;
                        float: left;
                        margin: 0 0 18px 0;
                        padding-left: 3%;
                        display: flex;
                        height: auto;

                        .el-form-item__content {
                            min-height: 40px;
                        }
                    }

                    .currenttime {
                        width: 95%;
                        float: left;
                        margin: 0 0 18px 0;
                        padding-left: 3%;
                        display: flex;
                        height: 40px;
                    }

                }
            }


        }
    }
</style>