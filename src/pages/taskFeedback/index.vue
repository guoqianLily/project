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
                <el-form-item label="项目名称" label-width="80px">
                    <el-input v-model="formInline.projectName" placeholder="请输入内容"></el-input>
                </el-form-item>
                <!-- <el-form-item label="达成时间" label-width="80px">
                    <el-date-picker v-model="formInline.date" type="daterange" range-separator="至" format="yyyy-MM"
                        start-placeholder="开始日期" end-placeholder="结束日期">
                    </el-date-picker>
                </el-form-item> -->
                <el-form-item>
                    <el-button type="primary" @click="search()">查询</el-button>
                    <el-button type="primary" @click="addnewly()" v-show="qxdata.new">新建</el-button>
                    <el-button type="primary" @click="derive()" v-show="qxdata.exportall">导出</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="listBox">
            <div class="tableBox table_search">
                <el-table ref="searchMulTable" v-loading="loading" element-loading-text="数据加载..." :data="tableData"
                    element-loading-spinner="el-icon-loading" border height="98%">
                    <el-table-column align="center" type="index" label="序号" width="50"></el-table-column>
                    <el-table-column prop="id" label="id" align="center" v-if='show'></el-table-column>
                    <el-table-column prop="departmantName" label="平台" align="center" width="120"></el-table-column>
                    <el-table-column prop="projectCode" label="编号" align="center" width="120"></el-table-column>
                    <el-table-column prop="projectName" label="项目名称" align="center"></el-table-column>
                    <el-table-column prop="deadLine" label="达成时间" align="center">
                        <!-- <template slot-scope="scope">
                            <span>{{getLocalTime(scope.row.deadLine,"yyyy-MM")}}
                            </span>
                        </template> -->
                    </el-table-column>
                    <el-table-column label="操作" align="center" width="220">
                        <template slot-scope="scope">
                             <!-- v-show="qxdata.report" -->
                            <span class="btn" @click="declareSth(scope.$index, scope.row)" v-show="qxdata.report">协同</span>
                            <span class="btn" v-show="qxdata.export">导出</span>
                            <span class="btn" @click="datailQuery(scope.$index, scope.row)" v-show="qxdata.detail">详情</span>
                            <span class="btn" @click="revise(scope.$index, scope.row)"  v-show="qxdata.update">修改</span>
                            <span class="btn"   v-show="qxdata.delete">删除</span>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <!-- <div class="pagination">
                <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange"
                    :current-page="currentPage" :page-size="pageSize" layout="prev, pager, next" :total="tableTotal"
                    style="margin-top:5px;">
                </el-pagination>
            </div> -->

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
        getOrgData,
        getLocalTime
    } from '../../services/declaresth'
    import {
        getBtnsPermissionsData
    } from '../../services/Manage/postManage.js'
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
                tableData: [],
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
                    date: '',
                    terraceValue: '',
                    projectName: ''
                },
                options: [],
                terraceValue: '',
                itemValue: '',
                qxdata: {
                    new: false,
                    exportall: false,
                    report: false,
                    export: false,
                    detail: false,
                    update: false,
                    delete: false,
                },
                muneId:'',

            }
        },
        mounted() {
            this.options = [];
            let userid = this.$store.state.user.userId;
            this.getqx()
            getOrgData(userid).then((res) => {
                if (res.data.result.length > 0) {
                    for (var i = 0; i < res.data.result.length; i++) {
                        this.options.push({
                            value: res.data.result[i].id,
                            label: res.data.result[i].departmantName,
                        })
                    }
                    this.formInline.terraceValue = res.data.result[0].id;
                    // this.options = res.data.result;
                }
                this.search();
               
            });
              

        },
        methods: {
            //按钮权限
            getqx() {
                let userId = this.$store.state.user.userId;
                // console.log(this.$store.state)
                let id = this.$store.state.muneId;
                this.muneId=id;
                getBtnsPermissionsData(id, userId).then((data) => {
                    if (data.result.length > 0) {
                        console.log(data.result);
                        let result = data.result;
                        for (var i = 0; i < result.length; i++) {
                            if (result[i] == "business:progressreport:new") {
                                this.qxdata.new = true;
                            } else if (result[i] == "business:progressreport:exportall") {
                                this.qxdata.exportall = true;
                            } else if (result[i] == "business:progressreport:report") {
                                this.qxdata.report = true;
                            } else if (result[i] == "business:progressreport:export") {
                                this.qxdata.export = true;
                            }
                            else if (result[i] == "business:progressreport:detail") {
                                this.qxdata.detail = true;
                            }
                              else if (result[i] == "business:progressreport:update") {
                                this.qxdata.update = true;
                            }
                              else if (result[i] == "business:progressreport:delete") {
                                this.qxdata.delete = true;
                            }
                        }
                    }

                    //console.log(this.formData)
                });
            },
            //申报页面
            declareSth(index, row) {
                this.$router.push({
                    name: "detail",
                    query: {
                        state: '1', //1可编辑,
                        id: row.id,
                        muneId:this.muneId
                    }
                })
                //   this.$router.replace('/detail')
            },
            //详情页面查看
            datailQuery(index, row) {
                this.$router.push({
                    name: "detail",
                    query: {
                        state: '0', //1可编辑,
                        id: row.id,
                        muneId:this.muneId

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
                        type:'add',//新增，还是修改up
                        muneId:this.muneId
                    }
                });
            },
            //修改
            revise(index, row) {
                this.$router.push({
                    name: "newModification",
                    query: {
                        state: '1', //1可编辑,
                        type: 'updata', //新增，还是修改up
                        id: row.id,
                        muneId:this.muneId
                    }
                });
            },
            //查询
            search() {
                let userid = this.$store.state.user.userId;
                let orgId = this.formInline.terraceValue;
                // let projectCode='';//项目编码
                let projectName = this.formInline.projectName //项目名称
                getAlldeclaresthData(userid, orgId, projectName).then((res) => {
                    if (res.data.result.length > 0) {
                        // for (var i = 0; i < res.data.result.length; i++) {
                        //     res.data.result[i].deadLine = getLocalTime(res.data.result[0].deadLine, 'yyyy-MM')
                        // }
                        this.tableData = res.data.result;
                    }
                });
                // console.log("查询事件")
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

    .el-button--primary {
        // height: 35px;
        line-height: 12px;
        margin-left: 10px;
    }

    .el-input__inner {
        height: 34px !important;
        line-height: 34px !important;
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
                    padding-left: 0%;

                    .el-form-item__label {
                        width: 62px;
                        text-align: right;
                        height: 35px;
                        line-height: 35px;
                        font-size: 12px;
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
            margin-top: 19px;

            .tableBox {
                // max-height: calc(100% - 63px);
                height: 100%;
                width: 100%;
                /*.el-table__body-wrapper table{*/
                /*    height: auto;*/
                /*}*/
                .el-table {
                    font-size: 12px;
                    width: 100%;
                    height: 98% !important;

                    th {
                        background-color: #E1EFFA !important;
                        color: #000 !important;
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