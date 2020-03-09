<!--  -->
<template>
  <div id="filesUploadDown" class="listPage">
    <div class="bigtitle" v-if="upDateFlag">
      <el-button
        type="primary"
        size="small"
        class="titleBtn"
        @click="addIndex"
        v-if="upDateFlag"
      >
        新增</el-button
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
          style="width: 100%"
        >
          <el-table-column type="index" width="50" label="序号" align="center">
          </el-table-column>
          <el-table-column
            prop="fieldChinese"
            label="提交日期"
            width="180px"
            align="center"
          >
          </el-table-column>
          <el-table-column prop="fieldName" label="文件名">
            <template slot-scope="scope">
              <div
                :style="
                  scope.row.fieldName
                    ? 'text-align:center;'
                    : 'text-align:center;'
                "
              >
              <a :href="scope.row.url" target="_blank">{{scope.row.fieldName}}</a>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="fieldxuqiu" label="提交人">
            <template slot-scope="scope">
              <div
                :style="
                  scope.row.fieldxuqiu
                    ? 'text-align:center;'
                    : 'text-align:center;'
                "
              >
                <span
                  v-html="scope.row.fieldxuqiu ? scope.row.fieldxuqiu : '/'"
                ></span>
              </div>
            </template>
          </el-table-column>
          <el-table-column
            prop=""
            label="操作"
            width="100px"
            align="center"
            v-if="upDateFlag"
          >
            <template slot-scope="scope">
              <span
                class="hanleBtns"
                @click="handleEdit(scope.$index, scope.row)"
                >修改</span
              >
              <span
                class="hanleBtns"
                @click="handleDelete(scope.$index, scope.row)"
                >删除
              </span>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <el-dialog
      :title="title"
      :visible.sync="addIndexVisible"
      id="addNewdialog"
      width="50%"
    >
      <div class="files_content">
        <el-upload
          class="upload-demo"
          ref="upload"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          :auto-upload="false"
        >
          <el-button slot="trigger" size="small" type="primary"
            >选取文件</el-button
          >
          <el-button
            style="margin-left: 10px;"
            size="small"
            type="success"
            @click="submitUpload"
            >上传到服务器</el-button
          >
        </el-upload>
      </div>
    </el-dialog>

    <!-- <div class="downLoadFile">下载附件：</div>
    <ul class="files_content">
      <li v-for="(item, index) in fileList" :key="index">
        <a :href="item.url" target="_blank">{{ item.name }}</a>
      </li>
    </ul> -->
  </div>
</template>

<script>
import "../../assets/css/public.scss";
export default {
  data() {
    return {
      fileList: [
        {
          name: "food.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        },
        {
          name: "food2.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        }
      ],
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
        zcClass: [
          {
            value: "1",
            label: "Ⅰ类市重大项目（12项）"
          },
          {
            value: "2",
            label: "2类市场景政策（14项）"
          },
          {
            value: "2",
            label: "3类土地政策（12项）"
          }
        ],
        unableFlag: ""
      },
      addForm: {
        zcClass: "",
        duijiebumen: "",
        id: "",
        userId: "",
        companyId: "",
        fieldChinese: "",
        fieldName: "111",
        unableFlag: ""
      },
      rules: {
        zcClass: [
          {
            required: true,
            message: "请选择政策分类",
            trigger: "change"
          }
        ],
        duijiebumen: [
          {
            required: true,
            message: "请输入对接部门",
            trigger: "blur"
          }
        ],
        fieldChinese: [
          {
            required: true,
            message: "请输入字段名称",
            trigger: "blur"
          }
        ],
        fieldName: [
          {
            required: true,
            message: "请输入字段取值",
            trigger: "blur"
          }
        ],
        unableFlag: [
          {
            required: true,
            message: "请选择是否有效",
            trigger: "change"
          }
        ]
      },
      tableData: [
        {
          fieldChinese: "2020-03-09",
          fieldName: "xxx.png",
          fieldxuqiu: "张三",
          url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        },
        {
          fieldChinese: "2020-03-09",
          fieldName: "xxx.xlsx",
          fieldxuqiu: "李四",
          url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        }
      ],
      loading: false,
      interfaceId: this.$route.query.id,
      upDateFlag: true
    };
  },
  methods: {
    submitUpload() {
      this.$refs.upload.submit();
      setTimeout(() => {
        this.fileList = [];
      }, 1000);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
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
      if (type && type == "1") {
        _that.currentPage1 = 1;
      }
      let searchData = {
        userId: sessionStorage.getItem("userId"),
        companyId: sessionStorage.getItem("companyId"),
        pageNo: _that.currentPage1,
        pageSize: _that.pageSize,
        fieldChinese: _that.searchForm.fieldChinese,
        unableFlag: _that.searchForm.unableFlag,
        interfaceId: this.interfaceId
      };
      getFieldPageData(searchData)
        .then(res => {
          if (res.data.result.length > 0) {
            _that.tableData = res.data.result;
            _that.tableTotal = res.data.rowCount;
            _that.loading = false;
            let allsearchData = {
              userId: sessionStorage.getItem("userId"),
              companyId: sessionStorage.getItem("companyId"),
              pageNo: _that.currentPage1,
              pageSize: _that.pageSize,
              interfaceId: _that.interfaceId
            };
            getFieldAllData(allsearchData).then(data => {
              let arr = data.data.result;
              _that.searchForm.fieldArr = [
                {
                  id: "",
                  value: "",
                  label: "全部"
                }
              ];
              for (let i = 0; i < arr.length; i++) {
                _that.searchForm.fieldArr.push({
                  id: arr[i].id,
                  value: arr[i].fieldChinese,
                  label: arr[i].fieldChinese
                });
              }
            });
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

      this.title = "上传附件";
      this.$nextTick(() => {
        this.$refs.addForm.resetFields(); //等弹窗里的form表单的dom渲染完在执行this.$refs.addForm.resetFields()，去除验证
        this.addForm = {
          zcClass: "",
          id: "",
          userId: sessionStorage.getItem("userId"),
          companyId: sessionStorage.getItem("companyId"),
          fieldChinese: "",
          fieldName: "1111",
          unableFlag: "",
          interfaceId: this.interfaceId
        };
      });
    },
    //   修改
    handleEdit(index, row) {
      this.addIndexVisible = true;
      this.title = "修改信息";
      this.$nextTick(() => {
        this.addForm = {
          id: row.id,
          userId: sessionStorage.getItem("userId"),
          companyId: sessionStorage.getItem("companyId"),
          fieldChinese: row.fieldChinese,
          fieldName: row.fieldName,
          unableFlag: row.unableFlag,
          interfaceId: this.interfaceId
        };
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
      this.$refs[formName].validate(valid => {
        if (valid) {
          const formData = _that.addForm;
          if (_that.addForm.id != "") {
            updateFieldData(formData).then(res => {
              if (res.data.success) {
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
            addFieldData(formData).then(res => {
              if (res.data.success) {
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
    }
  }
};
</script>
<style lang="scss" scoped>
.el-form-item__content {
  margin-left: 0 !important;
}

#filesUploadDown {
  padding-top: 10px;
  height: calc(100% - 48px);
  .uplaodFile,
  .downLoadFile {
    padding: 10px 0;
  }
  a {
    color: #409eff;
    text-decoration: underline;
  }
  .files_content {
    width: 300px;
    padding-left: 60px;
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
