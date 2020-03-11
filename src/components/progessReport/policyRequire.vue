<template>
  <div id="policyRequire" class="listPage">
    <div class="bigtitle">
      <div class="bigtitleName">
        政策需求
      </div>
      <el-button type="primary" size="small" class="titleBtn" @click="addIndex" v-if="upDateFlag == '1'">
        新增政策需求</el-button
      >
    </div>
    <div class="listBox">
      <div class="tableBox">
        <el-table
          v-loading="loading"
          element-loading-text="数据加载..."
          element-loading-spinner="el-icon-loading"
          :data="tableData"
          border
          style="width: 99.8%;"
        >
          <el-table-column prop="policyTypeName" label="政策分类" width="180px" align='center'>
          </el-table-column>
          <el-table-column prop="deadLine" label="政策内容">
               <template slot-scope="scope">
                     <div :style="(scope.row.content ? '' : 'text-align:center;')">
                        <span v-html="(scope.row.content ? scope.row.content : '/')"></span>
                    </div>
                </template>
          </el-table-column>
          <el-table-column prop="fieldxuqiu" label="进度需求" width="160px">
              <template slot-scope="scope">
                    <div :style="(scope.row.deadLine ? '' : 'text-align:center;')">
                        <span v-html="(scope.row.deadLine ? scope.row.deadLine : '/')"></span>
                    </div>
                </template>
          </el-table-column>
          <el-table-column prop="fieldxuqiu" label="对接部门" width="140px">
              <template slot-scope="scope">
                    <div :style="(scope.row.dockingDepartment ? '' : 'text-align:center;')">
                        <span v-html="(scope.row.dockingDepartment ? scope.row.dockingDepartment : '/')"></span>
                    </div>
                </template>
          </el-table-column>
          <el-table-column prop="" label="操作" width="100px" align='center' v-if="upDateFlag == '1'">
            <template slot-scope="scope">
              <span
                class="hanleBtns"
                @click="handleEdit(scope.$index, scope.row)"
                >优化</span
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
    <el-dialog :title="title" :visible.sync="addIndexVisible" id="addNewdialog" width="60%">
      <el-form
        :model="addForm"
        ref="addForm"
        :rules="rules"
        label-position="right"
      >
        <el-form-item label="政策分类" prop="policyType">
          <el-select v-model="addForm.policyType" placeholder="请选择" @change="getVal">
            <el-option
              v-for="item in searchForm.policyType"
              :key="item.id"
              :label="item.value"
              :value="item.key"
            >
            </el-option>
          </el-select>
        </el-form-item>
        
        <el-form-item label="政策内容" prop="content" class="autoElform">
          <quillEditor
            @on-change-content="getcontent1"
            :content="addForm.content"
            style="height:160px;"
            ref="content"
          >
          </quillEditor>
        </el-form-item>
        <el-form-item label="进度需求" prop="deadLine" class="autoElform">
           <quillEditor
            @on-change-content="getcontent2"
            :content="addForm.deadLine"
            style="height:120px;"
            ref="deadLine"
          >
          </quillEditor>
        </el-form-item>
        <el-form-item label="对接部门" prop="dockingDepartment" class="autoElform">
          <quillEditor
            @on-change-content="getcontent3"
            :content="addForm.dockingDepartment"
            style="height:120px;"
            ref="dockingDepartment"
            >
          </quillEditor>
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
import {
  getpolicyRequireAllData,
  addpolicyRequireData,
  updatepolicyRequireData,
  getweekProgressClassData
} from '../../services/policyPage.js'
import { getUserId} from '@/utils/auth'
import "../../assets/css/public.scss";
import quillEditor from "../ue";
export default {
  components: {
    quillEditor
  },
  data() {
    return {
      stripe: true,
      title: "新增",
      typeName: "",
      addIndexVisible: false,
      currentPage1: 1,
      tableTotal: 0,
      pageSize: 8,
      searchForm: {
        fieldArr: [],
        fieldChinese: "",
        policyType: [],
        unableFlag: ""
      },
      addForm: {
        policyType:'', //政策分类
        content:'',// 政策内容
        deadLine:'', //进度需求
        dockingDepartment:'', // 对接部门
        ableFlag:'1'
      },
      rules: {
        policyType: [
          {
            required: true,
            message: "请选择政策分类",
            trigger: "change"
          }
        ],
        content: [
          {
            required: true,
            message: "请输入政策内容",
            trigger: "blur"
          }
        ],
        deadLine: [
          {
            required: true,
            message: "请输入进度需求",
            trigger: "blur"
          }
        ],
        dockingDepartment: [
          {
            required: true,
            message: "请输入字对接部门",
            trigger: "blur"
          }
        ],
      },
      tableData: [],
      loading: false,
      upDateFlag:this.$route.query.state,
      FormType:'',
    };
  },
  mounted() {
    this.searchMessage();
    // 获取政策分类得下拉框值
    getweekProgressClassData({
      type:'policy_type',
      userId:this.$store.state.user.user
    }).then(res => {
      this.searchForm.policyType = res.result;
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
      let searchData = {
        userId:this.$store.state.user.userId,
        projectId:this.$route.query.id
      };
      getpolicyRequireAllData(searchData)
        .then(res => {
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

      this.title = "新增政策需求";
      this.$nextTick(() => {
        this.$refs.addForm.resetFields(); //等弹窗里的form表单的dom渲染完在执行this.$refs.addForm.resetFields()，去除验证
        this.addForm = {
          userId:this.$store.state.user.userId,
          policyType:"",
          content:"",
          deadLine:"",
          dockingDepartment:"",
          ableFlag:'1',
          projectId:this.$route.query.id
        };
        this.FormType = 'addForm'
      });
    },
    //   修改
    handleEdit(index, row) {
      this.addIndexVisible = true;
      this.title = "优化政策需求";
      console.log(row)
      this.$nextTick(() => {
        this.$refs.addForm.resetFields();
        this.addForm = {
          userId:this.$store.state.user.userId,
          id: row.id,
          policyType:row.policyType,
          content:row.content,
          deadLine:row.deadLine,
          dockingDepartment:row.dockingDepartment,
          ableFlag:'1'
        };
        this.FormType = 'updateForm'
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
      _that.addForm.content = _that.$refs.content.newContent;
      _that.addForm.deadLine = _that.$refs.deadLine.newContent;
      _that.addForm.dockingDepartment = _that.$refs.dockingDepartment.newContent;
      this.$refs[formName].validate(valid => {
        if (valid) {
          
          const formData = _that.addForm;
          if (_that.FormType == "updateForm") {
            updatepolicyRequireData(formData).then(res => {
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
          } else if(_that.FormType == 'addForm'){
            addpolicyRequireData(formData).then(res => {
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
    getcontent1(val) {
      this.addForm.content = val;
    },
    getcontent2(val) {
      this.addForm.deadLine = val;
    },
    getcontent3(val) {
      this.addForm.dockingDepartment = val;
    },
    getVal(){
      this.addForm.content = this.$refs.content.newContent
      this.addForm.deadLine = this.$refs.deadLine.newContent;
      this.addForm.dockingDepartment = this.$refs.dockingDepartment.newContent; 
    }
  }
};
</script>
<style lang="scss">
.el-form-item__content {
  margin-left: 0 !important;
}

#policyRequire {
  height: calc(100% - 48px);
  .el-dialog{
    margin-top: 10vh !important;
  }
  .el-row {
    height: 0.4rem;
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
