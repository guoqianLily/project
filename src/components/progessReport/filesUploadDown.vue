<!--  -->
<template>
  <div id="filesUploadDown" class="listPage">
    <div class="bigtitle" v-show="qxdata.insert" v-if="upDateFlag == '1'">
      <el-button type="primary" size="small" class="titleBtn" @click="addIndex">
        新增</el-button>
    </div>
    <div class="listBox">
      <div class="tableBox">
        <el-table v-loading="loading" element-loading-text="数据加载..." element-loading-spinner="el-icon-loading"
          :data="tableData" border style="width: 100%">
          <el-table-column type="index" width="50" label="序号" align="center">
          </el-table-column>
          <el-table-column prop="fieldChinese" label="提交日期" width="180px" align="center">
            <template slot-scope="scope">
              <span v-html="dealWidthTime(scope.row.updateTime)"></span>
            </template>
          </el-table-column>
          <el-table-column prop="fileDescription" label="文件说明" align="center">
          </el-table-column>
          <el-table-column prop="fileName" label="文件名">
            <template slot-scope="scope">
              <div :style="
                  scope.row.fileName
                    ? 'text-align:center;'
                    : 'text-align:center;'
                ">
                <a :href="scope.row.fileUrl" target="_blank">{{
                  scope.row.fileName
                }}</a>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="userName" label="提交人" width="180px">
            <template slot-scope="scope">
              <div :style="
                  scope.row.userName
                    ? 'text-align:center;'
                    : 'text-align:center;'
                ">
                <span v-html="scope.row.userName ? scope.row.userName : '/'"></span>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="" label="操作" width="100px" align="center" v-if="upDateFlag == 1">
            <template slot-scope="scope">
              <span v-show="qxdata.update" class="hanleBtns" @click="handleEdit(scope.$index, scope.row)">修改</span>
              <span v-show="qxdata.delete" class="hanleBtns" @click="handleDelete(scope.$index, scope.row)">删除
              </span>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <el-dialog :title="title" :visible.sync="addIndexVisible" id="addNewdialog" width="50%">
      <el-form :model="upLoadObj" ref="upLoadObj" :rules="rules" label-position="right">
        <el-form-item label="文件说明" prop="fileDescription">
          <el-input v-model="upLoadObj.fileDescription" placeholder="请输入文件说明"></el-input>
        </el-form-item>
        <el-form-item label="文件" class="autoElform">
          <el-upload :action="uploadUrl" ref="upload" :on-preview="handlePreview" :on-remove="handleRemove"
            :on-success="handleSuccess" :on-change="handleChange" multiple :limit="2" :file-list="fileList"
            :data="upLoadObj" :auto-upload="false">
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
        </el-form-item>
        <el-form-item class="btnItem">
          <el-button type="primary" @click="submitForm('upLoadObj')">提交</el-button>
          <el-button @click="closeForm('upLoadObj')">取消</el-button>
        </el-form-item>
      </el-form>
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
  import {
    getFileListAllData,
    deleteFileListData,
    updateFileListData
  } from '../../services/policyPage.js'
  import "../../assets/css/public.scss";
  import {
    getLocalTime
  } from "../../services/declaresth";
  import {
    getBtnsPermissionsData
  } from '../../services/Manage/postManage.js'
  export default {
    data() {
      return {
        fileList: [],
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
          zcClass: [{
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
          fileDescription: ''
        },
        rules: {
          fileDescription: [{
            required: true,
            message: "请输入文件说明",
            trigger: "blur"
          }],
        },
        tableData: [],
        loading: false,
        interfaceId: this.$route.query.id,
        upDateFlag: this.$route.query.state,
        upLoadObj: {
          fileBusinessId: this.$route.query.id,
          fileDescription: '',
          userId: this.$store.state.user.userId
        },
        uploadUrl: 'http://10.138.25.189:8088/chouChing/businessFileController/saveData',
        formType: '',
        qxdata: {
          insert: false,
          update: false,
          delete: false,
        }
      };
    },
    created() {
      this.getqx()
      this.searchMessage();
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
              if (result[i] == "business:report:accessory:insert") {
                this.qxdata.insert = true;
              } else if (result[i] == "business:report:accessory:update") {
                this.qxdata.update = true;
              } else if (result[i] == "business:report:accessory:delete") {
                this.qxdata.delete = true;
              }
            }
          }
          //console.log(this.formData)
        });
      },
      submitUpload() {
        // this.$refs.upload.submit();
        // setTimeout(() => {
        //   this.fileList = [];
        // }, 1000);
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
        let searchData = {
          userId: this.$store.state.user.userId,
          fileBusinessId: this.$route.query.id,
        };

        getFileListAllData(searchData)
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
        this.fileList = [];
        this.addIndexVisible = true;
        this.title = "上传附件";
        this.$nextTick(() => {
          this.$refs.upLoadObj.resetFields(); //等弹窗里的form表单的dom渲染完在执行this.$refs.addForm.resetFields()，去除验证
          this.upLoadObj = {
            fileBusinessId: this.$route.query.id,
            fileDescription: ' ',
            userId: this.$store.state.user.userId
          }
          this.formType = "addForm"
          this.uploadUrl = 'http://10.138.25.189:8088/chouChing/businessFileController/saveData'
        });
      },
      //   修改
      handleEdit(index, row) {
        this.fileList = []
        this.fileList = [{
          name: row.fileName,
          url: row.fileUrl
        }]
        setTimeout(() => {
          this.addIndexVisible = true;
        }, 400)
        this.title = "修改附件";
        this.$nextTick(() => {
          this.upLoadObj = {
            fileBusinessId: this.$route.query.id,
            fileDescription: row.fileDescription,
            userId: this.$store.state.user.userId,
            ableFlag: '1',
            id: row.id,
          }
          this.formType = "updateForm";
          this.uploadUrl = 'http://10.138.25.189:8088/chouChing/businessFileController/updateData'
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
              id: row.id
            };
            deleteFileListData(deleteData).then(res => {
              if (res.success) {
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
            const formData = _that.upLoadObj;
            if (_that.formType == "updateForm") {
              this.$refs.upload.submit();
              // updateFileListData(formData).then(res => {
              //   if (res.data.success) {
              //     this.$message({
              //       type: "success",
              //       message: "操作成功!"
              //     });
              //     this.addIndexVisible = false;
              //     this.searchMessage();
              //   } else {
              //     this.$message({
              //       type: "error",
              //       message: "操作失败!"
              //     });
              //     this.addIndexVisible = false;
              //     this.searchMessage();
              //   }
              // });
            } else if (_that.formType == "addForm") {
              this.$refs.upload.submit();
              // this.addIndexVisible = false;
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
      handleExceed(files, fileList) {
        console.log(fileList);
        // this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      handleSuccess() {
        this.addIndexVisible = false;
        this.searchMessage();
      },
      dealWidthTime(val) {
        let time = getLocalTime(val, 'yyyy-MM-dd hh:mm:ss');
        return time;
      },
      handleChange(file, fileList) {
        this.fileList = fileList.slice(-1);
      }
    }
  };
</script>
<style lang="scss" scoped>
  .el-form-item__content {
    margin-left: 0 !important;
  }

  #filesUploadDown {
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
<style lang="scss">
  .el-upload-list__item {
    transition: none !important;
  }
</style>