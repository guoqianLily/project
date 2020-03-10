<template>
    <div class="frame taskfeedback listPage" id="taskFeedback">
        <div class="queryRow search_content">
            <el-form :model="formInline">
                <el-form-item label="平台">
                    <el-select v-model="formInline.terraceValue" placeholder="请选择">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="项目">
                    <el-input v-model="formInline.projectName" placeholder="请输入内容"></el-input>
                </el-form-item>
                <el-form-item label="达成时间"  label-width="80px">
                    <el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期"
                        end-placeholder="结束日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="search()">查询</el-button>
                    <el-button type="primary" @click="addnewly()">新建</el-button>
                    <el-button type="primary" @click="derive()">导出</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="listBox">
            <div class="tableBox table_search">
                <el-table ref="searchMulTable" v-loading="loading" element-loading-text="数据加载..." :data="tableData"
                    element-loading-spinner="el-icon-loading" border style="width: 100%">
                    <el-table-column align="center" type="index" label="序号" width="50"></el-table-column>
                    <el-table-column prop="id" label="id" align="center" v-if='show'></el-table-column>
                    <el-table-column prop="orgName" label="平台" align="center"></el-table-column>
                    <el-table-column prop="projectCode" label="编号" align="center"></el-table-column>
                    <el-table-column prop="projectName" label="项目名称" align="center"></el-table-column>
                    <el-table-column prop="deadLine" label="达成时间" align="center"></el-table-column>
                    <el-table-column label="操作" align="center">
                        <template slot-scope="scope">
                            <span class="btn" @click="declareSth(scope.$index, scope.row)">申报</span>
                            <span class="btn">导出</span>
                            <span class="btn" @click="datailQuery(scope.$index, scope.row)">详情</span>
                            <span class="btn" @click="revise(scope.$index, scope.row)">修改</span>
                            <span class="btn">删除</span>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div class="pagination">
                <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange"
                    :current-page="currentPage" :page-size="pageSize" layout="prev, pager, next" :total="tableTotal"
                    style="margin-top:5px;">
                </el-pagination>
            </div>

        </div>

        <el-dialog title="新建" :visible.sync="dialogFormVisible">
            <el-form :model="addform">
                <el-form-item label="文本编辑">
                    <quillEditor @content="getcontent" style="height:200px;"></quillEditor>
                </el-form-item>
                <el-form-item>
                    <div v-html="str"></div>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>

</template>

<script>
    import quillEditor from '../../components/ue'
        import {
        getAlldeclaresthData,
    } from '../../services/declaresth'
    export default {
        components: {
            quillEditor
        },
        data() {
            return {
                loading: false,
                str: '',
                addform: {
                    name: ''
                },
                dialogFormVisible: false,
                show: false,
                currentPage: 1,
                tableTotal: 0,
                pageSize: 8,
                tableData: [{
                    id: '',
                    engineerName: '海尔智家平台(智慧家庭)',
                    departmantName: '1-XM02',
                    titleName: '原28家互联工厂升级提效并满负荷',
                    actualCompletionTime: '2020年9月',
                }],
                tableHeight: window.innerHeight - 210,
                cellStyle: {
                    padding: '7px 0',
                    color: '#5d5d5d',
                    lineHeight: '35px',
                    fontWeight: 500
                },
                headerCellStyle: {
                    padding: '5px 0',
                    color: '#898989',
                    backgroundColor: '#fafbfa',
                    fontWeight: 500
                },
                value1: '',
                formInline: {
                    terraceValue: '',
                    projectName: ''
                },
                options: [{
                    value: '1',
                    label: '海尔智家平台(智慧家庭)'
                }, {
                    value: '1',
                    label: 'COSMO平台(工业互联网平台)'
                }, {
                    value: '1)',
                    label: '海纳云平台(智慧社区/园区)'
                }, {
                    value: '1',
                    label: '盈康一生(生命健康/生态健康)'
                }, {
                    value: '1',
                    label: '海创汇平台(创业孵化平台)'
                }],
                terraceValue: '',
                itemValue: ''
            }
        },
        mounted() {
        },
        methods: {
            //申报页面
            declareSth(index, row) {
                this.$router.push({
                    name: "detail",
                    query: {
                        state: '1', //1可编辑,
                    }
                })
                //   this.$router.replace('/detail')
            },
            //详情页面查看
            datailQuery(index, row) {
                this.$router.push({
                    name: "/detail",
                    query: {
                        state: '0', //1可编辑,

                    }
                })
            },
            getcontent(data) {
                this.str = data;
            },
            //新建
            addnewly() {
                this.$router.push({
                    name: "newModification",
                    query: {
                        state: '1', //1可编辑,
                        type: 'add' //新增，还是修改up
                    }
                });
            },
            //修改
            revise(index, row) {
                this.$router.push({
                    name: "newModification",
                    params: {
                        state: '1', //1可编辑,
                        type: 'updata' //新增，还是修改up
                    }
                });

            },
            //查询
            search() {
                let  userid=this.$store.state.user.userId;
                let orgId=this.formInline.terraceValue;
                // let projectCode='';//项目编码
                let projectName=this.formInline.projectName//项目名称
                getAlldeclaresthData(userid,orgId,projectName).then((res) => {
                    this.tableData=res.result;
                    // this.transferUserdata = data.data.result.filter(item => item.userName != "").filter(item =>
                    //     item.userName != null);
                    // this.getRolesGjuserid(id);

                });
                console.log("查询事件")
            },
            //导出
            derive() {
                console.log("导出事件")
            },
            handleSizeChange() {
                console.log(this)
                this.search()
            },
            handleCurrentChange() {
                console.log(this)
                this.search()
            },
        },

    }
</script>
<style lang="scss">
    .el-table th.gutter {
        display: table-cell !important;
    }

    #taskFeedback {
        position: relative;
        float: left;
        padding: 0 15px 20px 15px;
        border-radius: 10px;
        height: calc(100% - 48px);
        overflow: hidden;
        width: 100%;
        box-sizing: border-box;

        .search_content {
            width: calc(100% - 20px);
            height: 35px;
            line-height: 35px;
            padding: 15px 0px 9px 20px;

            .el-form {
                height: 100%;
                width: 100%;
                display: flex;

                .el-form-item {
                    margin: 0 .1rem 0 0;
                    float: left;
                    display: flex;
                    .el-form-item__label {
                        width: 62px;
                        text-align: right;
                        height: 35px;
                        line-height: 35px;
                        font-size: 12px;
                        padding-left: 0%;
                    }
                    .el-form-item__content {
                        // width: 80%;
                        height: 35px;
                        line-height: 35px;
                        float: left;
                        display: flex;
                        margin-left: 0px !important;
                        .el-select,
                        .el-input {
                            width: 100%;
                        }
                    }
                }
            }
        }

        .listBox {
            // padding: 2px 16px 0px 16px;
            height: calc(100% - 65px);
            position: relative;
            float: left;
            width: 100%;
            margin-top: 30px;
            .tableBox {
                max-height: calc(100% - 63px);
                width: 100%;

                .el-table {
                    font-size: 12px;

                    th {
                        background-color: #409eff !important;
                        color: #fff !important;
                    }

                    .btn {
                        color: #409eff !important;
                        cursor: pointer;
                        padding: 5px;
                        text-decoration: underline
                    }

                    .btn:hover {
                        color: #000 !important;
                    }
                }
            }

            .pagination {
                text-align: center;
            }


        }




    }
</style>