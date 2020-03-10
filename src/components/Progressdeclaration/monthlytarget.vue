<template>
    <div id="monthlytarget" class="listPage">
        <div class="queryRow">
            <el-form :model="searchForm">
                <el-form-item>
                    <el-button v-if="state==1" type="primary" @click="addIndex()" class="addBtn">新增月度目标</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="listBox">
            <div class="tableBox">
                <el-table v-loading="loading" element-loading-text="数据加载..." element-loading-spinner="el-icon-loading"
                    :data="tableData" border style="width: 100%" height="98%">
                    <el-table-column label="序号" prop="" width="80">
                        <template slot-scope="scope">
                            <span v-text="getIndex(scope.$index)"> </span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="configType" label="月份">
                    </el-table-column>
                    <el-table-column prop="configName" label="项目月度目标">
                    </el-table-column>
                    <el-table-column prop="indicatorTypeName" label="政策月度目标">
                    </el-table-column>
                    <el-table-column prop="" label="操作" v-if="state==1">
                        <template slot-scope="scope">
                            <span @click="handleEdit(scope.$index, scope.row)" class="upBtns">修改</span>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div class="pagination">
                <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange"
                    :current-page="currentPage1" :page-size="pageSize" layout="prev, pager, next" :total="tableTotal"
                    style="margin-top:5px;">
                </el-pagination>
            </div>
        </div>
        <el-dialog :title="title" :visible.sync="addIndexVisible" id='addNewdialog'>
            <el-form :model="addForm" ref="addForm" :rules="rules" label-position="right">
                <el-form-item class="currenttime" label="月份" prop="configType" label-width="120px">
                    <el-date-picker v-model="addForm.configType" type="month" format="yyyy年MM月">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="项目月度目标" prop="configName" label-width="120px">
                    <quillEditor @on-change-cantent="getcontent" :content="addForm.configName" style="height:150px;">
                    </quillEditor>
                </el-form-item>
                <el-form-item label="政策月度目标" prop="indicatorTypeName" label-width="120px">
                    <quillEditor @on-change-cantent="getcontent2" :content="addForm.indicatorTypeName"
                        style="height:150px;">
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
                    currenttime: '',
                    configType: '',
                    configName: '',
                    indicatorTypeName: '',
                    unableFlag: ''
                },
                rules: {
                    configType: [{
                        required: true,
                        message: '请选择大类名称',
                        trigger: 'change'
                    }],
                    indicatorTypeName: [{
                        required: true,
                        message: '请输入分类名称',
                        trigger: 'blur'
                    }, ],
                    unableFlag: [{
                        required: true,
                        message: '请输入分类名称',
                        trigger: 'blur'
                    }, ],

                },
                tableData: [],
                layout: 'menuPage',
                loading: true
            }
        },
        mounted() {
            this.searchMessage()
        },
        methods: {
            //获取文本编辑器的内容
            getcontent(val) {
                this.addForm.indicatorTypeName = val;
            },
            getcontent2(val) {
                this.addForm.unableFlag = val;
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
            //查询
            searchMessage(type) {
                console.log(type)
                this.tableData = [{
                        configType: '2020年3月',
                        configName: 'Ⅱ-17：参与标准制定：青岛智慧灯杆、智慧照明系统行业标准制定;Ⅱ-17：承接青岛市数字照明大数据管理平台搭建',
                        indicatorTypeName: 'Ⅱ-17：参与标准制定：青岛智慧灯杆、智慧照明系统行业标准制定;Ⅱ-17：承接青岛市数字照明大数据管理平台搭建',
                    },
                    {
                        configType: '2020年4月',
                        configName: 'Ⅱ-17：参与标准制定：青岛智慧灯杆、智慧照明系统行业标准制定;Ⅱ-17：承接青岛市数字照明大数据管理平台搭建',
                        indicatorTypeName: 'Ⅱ-17：参与标准制定：青岛智慧灯杆、智慧照明系统行业标准制定;Ⅱ-17：承接青岛市数字照明大数据管理平台搭建',
                    },
                    {
                        configType: '2020年5月',
                        configName: 'Ⅱ-17：参与标准制定：青岛智慧灯杆、智慧照明系统行业标准制定;Ⅱ-17：承接青岛市数字照明大数据管理平台搭建',
                        indicatorTypeName: 'Ⅱ-17：参与标准制定：青岛智慧灯杆、智慧照明系统行业标准制定;Ⅱ-17：承接青岛市数字照明大数据管理平台搭建',
                    }
                ]
                this.loading = false
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
                        id: '',
                        configType: '',
                        configName: '',
                        indicatorTypeName: '',
                    }
                });

            },
            //   修改
            handleEdit(index, row) {
                this.addIndexVisible = true;
                this.title = "修改月度目标";
                this.$nextTick(() => {
                    this.addForm = {
                        id: row.id,
                        configType: row.configType,
                        configName: row.configName,
                        indicatorTypeName: row.indicatorTypeName,
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
                let _that = this
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        const formData = _that.addForm;


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

                        .addBtn {
                            margin-left: 88.5%;
                            height: 30px;
                            line-height: 7px;
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