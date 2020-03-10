<template>
  <div id="policyProfeedback" class="listPage">
    <div class="queryRow">
      <el-form :model="searchForm">
        <el-form-item label="当前时间">
          <!-- <el-date-picker
            v-model="nowTime"
            type="week"
            placeholder="选择日期"
            @change="getNowTime"
            format="yyyy年M月份第W周"
            value-format="yyyy-MM-dd"
            v-if="updateFlag == '1'"
          >
          </el-date-picker> -->
          <!-- <el-input v-model="nowTimeValue" :disabled="true" v-else> </el-input> -->
          <div class="nowTimeShow">
            <span v-html="nowTimeValue"></span>
          </div>
        </el-form-item>
        <el-form-item label="当月目标" class="autoElform">
          <!-- <quillEditor
            @content="getcontent"
            v-bind:content="searchForm.monthBud"
            style="height:150px;"
            v-model="searchForm.monthBud"
            v-if="updateFlag == '1'"
          >
          </quillEditor> -->
          <div
            style="width:100%;height:150px;border:1px solid #ccc;border-radius:10px;padding-left:10px;"
            v-html="searchForm.monthBud"
          ></div>
        </el-form-item>
      </el-form>
    </div>
    <div class="listBox" style="height:63%;">
      <div class="tableBox" style="height:100%;">
        <el-table
          v-loading="loading"
          element-loading-text="数据加载..."
          element-loading-spinner="el-icon-loading"
          :data="tableData"
          border
          style="width: 95%;margin:0 auto;"
        >
          <el-table-column
            prop="policyType"
            label="政策分类"
            width="180px"
            align="center"
          >
          </el-table-column>
          <el-table-column prop="deadLine" label="政策内容">
            <template slot-scope="scope">
              <div :style="scope.row.content ? '' : 'text-align:center;'">
                <span
                  v-html="scope.row.content ? scope.row.content : '/'"
                ></span>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="weekContent" label="本周进展">
            <template slot-scope="scope">
              <div :style="scope.row.weekContent ? '' : 'text-align:center;'">
                <span
                  v-html="scope.row.weekContent ? scope.row.weekContent : '/'"
                ></span>
              </div>
            </template>
          </el-table-column>
          <el-table-column
            prop="weekproProgressType"
            label="政策进展分类"
            width="200px"
          >
            <template slot-scope="scope">
              <div
                :style="
                  scope.row.weekproProgressType ? '' : 'text-align:center;'
                "
              >
                <span
                  v-html="
                    scope.row.weekproProgressType
                      ? scope.row.weekproProgressType
                      : '/'
                  "
                ></span>
              </div>
            </template>
          </el-table-column>
          <el-table-column
            prop=""
            label="操作"
            width="80px"
            align="center"
            v-if="updateFlag == '1'"
          >
            <template slot-scope="scope">
              <span
                class="hanleBtns"
                @click="handleEdit(scope.$index, scope.row)"
                >申报</span
              >
            </template>
          </el-table-column>
        </el-table>
      </div>

      <!-- <div class="pagination">
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage1"
          :page-size="pageSize"
          layout="prev, pager, next"
          :total="tableTotal"
          style="margin-top:5px;"
        >
        </el-pagination>
      </div> -->
    </div>
    <el-dialog
      :title="title"
      :visible.sync="addIndexVisible"
      id="addNewdialog"
      width="60%"
    >
      <el-form
        :model="addForm"
        ref="addForm"
        :rules="rules"
        label-position="right"
      >
        <el-form-item
          label="本周进展"
          prop="weekContent"
          class="autoElform"
          label-width="120px"
        >
          <quillEditor
            @on-change-content="getcontent1"
            :content="addForm.weekContent"
            style="height:120px;"
            ref="weekContent"
          >
          </quillEditor>
        </el-form-item>
        <el-form-item
          label="政策进展分类"
          prop="weekproProgressType"
          label-width="120px"
        >
          <el-select v-model="addForm.weekproProgressType" placeholder="请选择" @change="getVal">
            <el-option
              v-for="item in searchForm.weekproProgressType"
              :key="item.id"
              :label="item.value"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="btnItem">
          <el-button type="primary" @click="submitForm('addForm')"
            >提交</el-button
          >
          <el-button @click="closeForm('addForm')">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
// import {
//   getFieldAllData,
//   getFieldPageData,
//   addFieldData,
//   updateFieldData,
//   deleteFieldData
// } from "../../utils/request_grid";
import "../../assets/css/public.scss";
import { GetWeekByDate } from "../../utils/validate.js";
import { getLocalTime } from "../../services/declaresth";
import {
  getpolicyRequireAllData,
  addpolicyRequireData,
  updatepolicyRequireData,
  getPolicyProfeedbackAllData,
  updatePolicyProfeedbackData,
  AddPolicyProfeedbackData,
  getweekProgressClassData
} from "../../services/policyPage.js";
import quillEditor from "../ue";
export default {
  components: {
    quillEditor
  },
  data() {
    return {
      stripe: true,
      title: "新增",
      nowTime: "2020-03-09",
      typeName: "",
      nowTimeValue: "",
      addIndexVisible: false,
      currentPage1: 1,
      tableTotal: 0,
      pageSize: 8,
      searchForm: {
        fieldArr: [],
        weekContent: "",
        monthBud: "111111",
        weekproProgressType: [],
        unableFlag: ""
      },
      addForm: {
        policyType: "", //政策分类
        content: "", // 政策内容
        deadLine: "", //进度需求
        dockingDepartment: "", // 对接部门
        ableFlag: "1",
        weekContent: "", //本周进展内容
        weekproProgressType: "" //政策进展分类
      },
      rules: {
        weekproProgressType: [
          {
            required: true,
            message: "请选择政策分类",
            trigger: "change"
          }
        ],
        weekContent: [
          {
            required: true,
            message: "请输入字段名称",
            trigger: "blur"
          }
        ]
      },
      tableData: [],
      loading: false,
      interfaceId: this.$route.query.id,
      updateFlag: this.$route.query.state,
      monthVal:'',
      weekVal:'',
      weekContent:'',
      weekproProgressType:'',
    };
  },
  mounted() {
    this.nowTime = getLocalTime(new Date(), "yyyy-MM-dd");
    let newValDate = this.nowTime.split("-").join("");
    this.nowTimeValue =
      newValDate.substring(0, 4) +
      "年" +
      (newValDate.substring(4, 6) < 10
        ? newValDate.substring(5, 6)
        : newValDate.substring(4, 6)) +
      "月第" +
      GetWeekByDate(this.nowTime) +
      "周";
    this.monthVal = newValDate.substring(0, 4) + '-' + newValDate.substring(4, 6);
    this.weekVal = GetWeekByDate(this.nowTime);
    this.searchMessage();
    // 获取申报政策进展分类得下拉框值
    getweekProgressClassData({
      type:'policyProgress',
      userId:this.$store.state.user.user
    }).then(res => {
      console.log(res)
      this.searchForm.weekproProgressType = res.result;
    })
  },
  methods: {
    //分页查询的事件
    // 分页功能
    // 每页显示的条数
    handleSizeChange(val) {
      // console.log(val)
      // 改变每页显示的条数
      this.pageSize = val;
      // 注意：在改变每页显示的条数时，要将页码显示到第一页
      this.currentPage1 = 1;
      //再次请求数据
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
      var _that = this;
      console.log(this.$store);
      let searchData = {
        userId: this.$store.state.user.userId,
        projectId: this.$route.query.id,
        month:this.monthVal,
        week:this.weekVal
      };
      getPolicyProfeedbackAllData(searchData)
        .then(res => {
          console.log(res);
          if (res.result.length > 0) {
            _that.tableData = res.result;
            _that.loading = false;
          } else {
            _that.tableData = [];
            _that.tableTotal = 0;
            _that.loading = false;
          }
        })
        .catch(err => {
          console.log(err);
          _that.loading = false;
        });
    },
    //获取表格序号
    getIndex($index) {
      //表格序号
      return (this.currentPage1 - 1) * this.pageSize + $index + 1;
    },
    // 新增
    addIndex() {
      this.addIndexVisible = true;

      this.title = "政策进度申报";
      this.$nextTick(() => {
        this.$refs.addForm.resetFields(); //等弹窗里的form表单的dom渲染完在执行this.$refs.addForm.resetFields()，去除验证
        this.addForm = {
          weekproProgressType: "",
          userId: sessionStorage.getItem("userId"),
          weekContent: "",
          
        };
      });
    },
    //   修改
    handleEdit(index, row) {
      this.addIndexVisible = true;
      this.title = "政策反馈";
      this.$nextTick(() => {
        this.addForm = {
          userId:this.$store.state.user.userId,
          businessId: row.id,
          weekId: row.weekId,
          businessType: "policy",
          ableFlag:'1',
          month:this.monthVal,
          week:this.weekVal,
          weekContent:(row.weekContent ? row.weekContent : ''), //本周进展内容
          weekproProgressType: (row.weekproProgressType ? row.weekproProgressType : " "), //政策进展分类
          weekId:row.weekId,
        };
        this.FormType = "updateForm";
      });
    },
    //   删除
    handleDelete(index, row) {
      this.$confirm("此操作将永久删除该数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          const deleteData = {
            userId: sessionStorage.getItem("userId"),
            companyId: sessionStorage.getItem("companyId"),
            id: row.id
          };
          deleteFieldData(deleteData).then(res => {
            if (res.data.success) {
              this.$message({
                type: "success",
                message: "操作成功!"
              });
              this.currentPage1 = 1;
              this.searchMessage();
            } else {
              this.$message({
                type: "error",
                message: "操作失败!"
              });
              this.currentPage1 = 1;
              this.searchMessage();
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    //新增修改提交事件
    submitForm(formName) {
      let _that = this;
      this.addForm.weekContent = this.$refs.weekContent.content;
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (_that.FormType == "updateForm") {
            if (this.addForm.weekId) {
              let data = {
                userId:this.$store.state.user.userId,
                businessId: this.addForm.businessId,
                id: this.addForm.weekId,
                businessType: "policy",
                ableFlag:'1',
                month:this.monthVal,
                week:this.weekVal,
                content:(this.addForm.weekContent ? this.addForm.weekContent : ''), //本周进展内容
                proProgressType: (this.addForm.weekproProgressType ? this.addForm.weekproProgressType :''), //政策进展分类
              }
              updatePolicyProfeedbackData(data).then(res => {
                if (res.success) {
                  this.$message({
                    type: "success",
                    message: "操作成功!"
                  });
                  this.addIndexVisible = false;
                  this.searchMessage();
                } else {
                  this.$message({
                    type: "error",
                    message: "操作失败!"
                  });
                  this.addIndexVisible = false;
                  this.searchMessage();
                }
              });
            } else {
              let data = {
                userId:this.$store.state.user.userId,
                businessId: this.addForm.businessId,
                businessType: "policy",
                ableFlag:'1',
                month:this.monthVal,
                week:this.weekVal,
                content:(this.addForm.weekContent ? this.addForm.weekContent : ''), //本周进展内容
                proProgressType: (this.addForm.weekproProgressType ? this.addForm.weekproProgressType :''), //政策进展分类
              }
              AddPolicyProfeedbackData(data).then(res => {
                if (res.success) {
                  this.$message({
                    type: "success",
                    message: "操作成功!"
                  });
                  this.addIndexVisible = false;
                  this.searchMessage();
                } else {
                  this.$message({
                    type: "error",
                    message: "操作失败!"
                  });
                  this.addIndexVisible = false;
                  this.searchMessage();
                }
              });
            }
          } else {
            addFieldData(formData).then(res => {
              if (res.success) {
                this.$message({
                  type: "success",
                  message: "操作成功!"
                });
                this.addIndexVisible = false;
                this.searchMessage();
              } else {
                this.$message({
                  type: "error",
                  message: "操作失败!"
                });
                this.addIndexVisible = false;
                this.searchMessage();
              }
            });
          }
        } else {
          return false;
        }
      });
    },
    closeForm(formName) {
      this.addIndexVisible = false;
      this.searchMessage();
    },
    //获取文本编辑器的内容
    getcontent(data) {
      console.log(data);
    },
    // 获取当前时间
    getNowTime(val) {
      console.log(this.nowTime);
      console.log(val);
    },
    getcontent1(){

    },
    getVal() {
      console.log(111111)
      console.log(this.$refs.weekContent.content)
      this.addForm.weekContent = this.$refs.weekContent.content;  
    }
  }
};
</script>
<style lang="scss">
.el-form-item__content {
  margin-left: 0 !important;
}

#policyProfeedback {
  height: calc(100% - 48px);
  .el-row {
    height: 0.4rem;
  }
  .nowTimeShow {
    height: 100%;
    padding: 0 30px 0 10px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
  }

  #addNewdialog {
    .el-select {
      width: 100%;
    }

    .el-dialog__body {
      padding: 0 0.2rem 0.2rem 0.2rem;
      width: 100%;
      display: inline-flex;
    }
  }
}
</style>
