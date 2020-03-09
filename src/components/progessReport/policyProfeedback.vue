<template>
  <div id="policyProfeedback" class="listPage">
    <div class="queryRow">
        <el-form :model="searchForm">
            <el-form-item label="当前时间">
                <el-select v-model="searchForm.fieldChinese" filterable>
                    <el-option
                    v-for="item in searchForm.fieldArr"
                    :key="item.id"
                    :label="item.label"
                    :value="item.value"
                    >
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="当月目标">
                <quillEditor
                    @content="getcontent"
                    v-bind:content="searchForm.monthBud"
                    style="height:150px;"
                    v-model="searchForm.monthBud"
                >
                </quillEditor>
            </el-form-item>
        </el-form>
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
          height="100%"
        >
          <el-table-column prop="fieldChinese" label="政策分类" width="180px">
          </el-table-column>
          <el-table-column prop="fieldName" label="政策内容"> </el-table-column>
          <el-table-column prop="fieldxuqiu" label="进度需求" width="260px">
          </el-table-column>
          <el-table-column prop="" label="操作" width="80px">
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
        <el-form-item label="政策分类" prop="zcClass">
          <el-select v-model="addForm.zcClass" placeholder="请选择">
            <el-option
              v-for="item in searchForm.zcClass"
              :key="item.id"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="对接部门" prop="duijiebumen">
          <el-input
            v-model="addForm.duijiebumen"
            placeholder="请输入对接部门"
          ></el-input>
        </el-form-item>
        <el-form-item label="政策内容" prop="fieldChinese" class="autoElform">
          <quillEditor
            @content="getcontent"
            v-bind:content="addForm.fieldChinese"
            style="height:150px;"
            v-model="addForm.fieldChinese"
          >
          </quillEditor>
        </el-form-item>
        <el-form-item label="进度需求" prop="fieldName" class="autoElform">
           <quillEditor
            @content="getcontent"
            v-bind:content="addForm.fieldName"
            style="height:150px;"
            v-model="addForm.fieldName"
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
// import {
//   getFieldAllData,
//   getFieldPageData,
//   addFieldData,
//   updateFieldData,
//   deleteFieldData
// } from "../../utils/request_grid";
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
        monthBud:"",
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
          fieldChinese: "Ⅰ类市重大项目（12项）",
          fieldName:
            "Ⅰ-4：入选政府采购目录：支持海纳云参与住建局2020年数字照明系统项目计划目录中的新建项目建设和老旧项目改造",
          fieldxuqiu: "3月给到项目计划目录；5月政策出台；7月启动"
        },
        {
          fieldChinese: "Ⅰ类市重大项目（12项）",
          fieldName:
            "Ⅰ-4：入选政府采购目录：支持海纳云参与住建局2020年数字照明系统项目计划目录中的新建项目建设和老旧项目改造",
          fieldxuqiu: "3月给到项目计划目录；5月政策出台；7月启动"
        },
        {
          fieldChinese: "Ⅰ类市重大项目（12项）",
          fieldName:
            "Ⅰ-4：入选政府采购目录：支持海纳云参与住建局2020年数字照明系统项目计划目录中的新建项目建设和老旧项目改造",
          fieldxuqiu: "3月给到项目计划目录；5月政策出台；7月启动"
        },
        {
          fieldChinese: "Ⅰ类市重大项目（12项）",
          fieldName:
            "Ⅰ-4：入选政府采购目录：支持海纳云参与住建局2020年数字照明系统项目计划目录中的新建项目建设和老旧项目改造",
          fieldxuqiu: "3月给到项目计划目录；5月政策出台；7月启动"
        },
        {
          fieldChinese: "Ⅰ类市重大项目（12项）",
          fieldName:
            "Ⅰ-4：入选政府采购目录：支持海纳云参与住建局2020年数字照明系统项目计划目录中的新建项目建设和老旧项目改造",
          fieldxuqiu: "3月给到项目计划目录；5月政策出台；7月启动"
        },
        {
          fieldChinese: "Ⅰ类市重大项目（12项）",
          fieldName:
            "Ⅰ-4：入选政府采购目录：支持海纳云参与住建局2020年数字照明系统项目计划目录中的新建项目建设和老旧项目改造",
          fieldxuqiu: "3月给到项目计划目录；5月政策出台；7月启动"
        },
        {
          fieldChinese: "Ⅰ类市重大项目（12项）",
          fieldName:
            "Ⅰ-4：入选政府采购目录：支持海纳云参与住建局2020年数字照明系统项目计划目录中的新建项目建设和老旧项目改造",
          fieldxuqiu: "3月给到项目计划目录；5月政策出台；7月启动"
        },
        {
          fieldChinese: "Ⅰ类市重大项目（12项）",
          fieldName:
            "Ⅰ-4：入选政府采购目录：支持海纳云参与住建局2020年数字照明系统项目计划目录中的新建项目建设和老旧项目改造",
          fieldxuqiu: "3月给到项目计划目录；5月政策出台；7月启动"
        },
        {
          fieldChinese: "Ⅰ类市重大项目（12项）",
          fieldName:
            "Ⅰ-4：入选政府采购目录：支持海纳云参与住建局2020年数字照明系统项目计划目录中的新建项目建设和老旧项目改造",
          fieldxuqiu: "3月给到项目计划目录；5月政策出台；7月启动"
        },
        {
          fieldChinese: "Ⅰ类市重大项目（12项）",
          fieldName:
            "Ⅰ-4：入选政府采购目录：支持海纳云参与住建局2020年数字照明系统项目计划目录中的新建项目建设和老旧项目改造",
          fieldxuqiu: "3月给到项目计划目录；5月政策出台；7月启动"
        },
        {
          fieldChinese: "Ⅰ类市重大项目（12项）",
          fieldName:
            "Ⅰ-4：入选政府采购目录：支持海纳云参与住建局2020年数字照明系统项目计划目录中的新建项目建设和老旧项目改造",
          fieldxuqiu: "3月给到项目计划目录；5月政策出台；7月启动"
        },
        {
          fieldChinese: "Ⅰ类市重大项目（12项）",
          fieldName:
            "Ⅰ-4：入选政府采购目录：支持海纳云参与住建局2020年数字照明系统项目计划目录中的新建项目建设和老旧项目改造",
          fieldxuqiu: "3月给到项目计划目录；5月政策出台；7月启动"
        },
        {
          fieldChinese: "Ⅰ类市重大项目（12项）",
          fieldName:
            "Ⅰ-4：入选政府采购目录：支持海纳云参与住建局2020年数字照明系统项目计划目录中的新建项目建设和老旧项目改造",
          fieldxuqiu: "3月给到项目计划目录；5月政策出台；7月启动"
        },
        {
          fieldChinese: "Ⅰ类市重大项目（12项）",
          fieldName:
            "Ⅰ-4：入选政府采购目录：支持海纳云参与住建局2020年数字照明系统项目计划目录中的新建项目建设和老旧项目改造",
          fieldxuqiu: "3月给到项目计划目录；5月政策出台；7月启动"
        },
        {
          fieldChinese: "Ⅰ类市重大项目（12项）",
          fieldName:
            "Ⅰ-4：入选政府采购目录：支持海纳云参与住建局2020年数字照明系统项目计划目录中的新建项目建设和老旧项目改造",
          fieldxuqiu: "3月给到项目计划目录；5月政策出台；7月启动"
        },
        {
          fieldChinese: "Ⅰ类市重大项目（12项）",
          fieldName:
            "Ⅰ-4：入选政府采购目录：支持海纳云参与住建局2020年数字照明系统项目计划目录中的新建项目建设和老旧项目改造",
          fieldxuqiu: "3月给到项目计划目录；5月政策出台；7月启动"
        },
        {
          fieldChinese: "Ⅰ类市重大项目（12项）",
          fieldName:
            "Ⅰ-4：入选政府采购目录：支持海纳云参与住建局2020年数字照明系统项目计划目录中的新建项目建设和老旧项目改造",
          fieldxuqiu: "3月给到项目计划目录；5月政策出台；7月启动"
        },
        {
          fieldChinese: "Ⅰ类市重大项目（12项）",
          fieldName:
            "Ⅰ-4：入选政府采购目录：支持海纳云参与住建局2020年数字照明系统项目计划目录中的新建项目建设和老旧项目改造",
          fieldxuqiu: "3月给到项目计划目录；5月政策出台；7月启动"
        },
        {
          fieldChinese: "Ⅰ类市重大项目（12项）",
          fieldName:
            "Ⅰ-4：入选政府采购目录：支持海纳云参与住建局2020年数字照明系统项目计划目录中的新建项目建设和老旧项目改造",
          fieldxuqiu: "3月给到项目计划目录；5月政策出台；7月启动"
        },
        {
          fieldChinese: "Ⅰ类市重大项目（12项）",
          fieldName:
            "Ⅰ-4：入选政府采购目录：支持海纳云参与住建局2020年数字照明系统项目计划目录中的新建项目建设和老旧项目改造",
          fieldxuqiu: "3月给到项目计划目录；5月政策出台；7月启动"
        },
        {
          fieldChinese: "Ⅰ类市重大项目（12项）",
          fieldName:
            "Ⅰ-4：入选政府采购目录：支持海纳云参与住建局2020年数字照明系统项目计划目录中的新建项目建设和老旧项目改造",
          fieldxuqiu: "3月给到项目计划目录；5月政策出台；7月启动"
        },
        {
          fieldChinese: "Ⅰ类市重大项目（12项）",
          fieldName:
            "Ⅰ-4：入选政府采购目录：支持海纳云参与住建局2020年数字照明系统项目计划目录中的新建项目建设和老旧项目改造",
          fieldxuqiu: "3月给到项目计划目录；5月政策出台；7月启动"
        },
        {
          fieldChinese: "Ⅰ类市重大项目（12项）",
          fieldName:
            "Ⅰ-4：入选政府采购目录：支持海纳云参与住建局2020年数字照明系统项目计划目录中的新建项目建设和老旧项目改造",
          fieldxuqiu: "3月给到项目计划目录；5月政策出台；7月启动"
        },
        {
          fieldChinese: "Ⅰ类市重大项目（12项）",
          fieldName:
            "Ⅰ-4：入选政府采购目录：支持海纳云参与住建局2020年数字照明系统项目计划目录中的新建项目建设和老旧项目改造",
          fieldxuqiu: "3月给到项目计划目录；5月政策出台；7月启动"
        },
        {
          fieldChinese: "Ⅰ类市重大项目（12项）",
          fieldName:
            "Ⅰ-4：入选政府采购目录：支持海纳云参与住建局2020年数字照明系统项目计划目录中的新建项目建设和老旧项目改造",
          fieldxuqiu: "3月给到项目计划目录；5月政策出台；7月启动"
        },
        {
          fieldChinese: "Ⅰ类市重大项目（12项）",
          fieldName:
            "Ⅰ-4：入选政府采购目录：支持海纳云参与住建局2020年数字照明系统项目计划目录中的新建项目建设和老旧项目改造",
          fieldxuqiu: "3月给到项目计划目录；5月政策出台；7月启动"
        },
        {
          fieldChinese: "Ⅰ类市重大项目（12项）",
          fieldName:
            "Ⅰ-4：入选政府采购目录：支持海纳云参与住建局2020年数字照明系统项目计划目录中的新建项目建设和老旧项目改造",
          fieldxuqiu: "3月给到项目计划目录；5月政策出台；7月启动"
        },
        {
          fieldChinese: "Ⅰ类市重大项目（12项）",
          fieldName:
            "Ⅰ-4：入选政府采购目录：支持海纳云参与住建局2020年数字照明系统项目计划目录中的新建项目建设和老旧项目改造",
          fieldxuqiu: "3月给到项目计划目录；5月政策出台；7月启动"
        },
        {
          fieldChinese: "Ⅰ类市重大项目（12项）",
          fieldName:
            "Ⅰ-4：入选政府采购目录：支持海纳云参与住建局2020年数字照明系统项目计划目录中的新建项目建设和老旧项目改造",
          fieldxuqiu: "3月给到项目计划目录；5月政策出台；7月启动"
        },
        {
          fieldChinese: "Ⅰ类市重大项目（12项）",
          fieldName:
            "Ⅰ-4：入选政府采购目录：支持海纳云参与住建局2020年数字照明系统项目计划目录中的新建项目建设和老旧项目改造",
          fieldxuqiu: "3月给到项目计划目录；5月政策出台；7月启动"
        },
        {
          fieldChinese: "Ⅰ类市重大项目（12项）",
          fieldName:
            "Ⅰ-4：入选政府采购目录：支持海纳云参与住建局2020年数字照明系统项目计划目录中的新建项目建设和老旧项目改造",
          fieldxuqiu: "3月给到项目计划目录；5月政策出台；7月启动"
        },
        {
          fieldChinese: "Ⅰ类市重大项目（12项）",
          fieldName:
            "Ⅰ-4：入选政府采购目录：支持海纳云参与住建局2020年数字照明系统项目计划目录中的新建项目建设和老旧项目改造",
          fieldxuqiu: "3月给到项目计划目录；5月政策出台；7月启动"
        },
        {
          fieldChinese: "Ⅰ类市重大项目（12项）",
          fieldName:
            "Ⅰ-4：入选政府采购目录：支持海纳云参与住建局2020年数字照明系统项目计划目录中的新建项目建设和老旧项目改造",
          fieldxuqiu: "3月给到项目计划目录；5月政策出台；7月启动"
        },
        {
          fieldChinese: "Ⅰ类市重大项目（12项）",
          fieldName:
            "Ⅰ-4：入选政府采购目录：支持海纳云参与住建局2020年数字照明系统项目计划目录中的新建项目建设和老旧项目改造",
          fieldxuqiu: "3月给到项目计划目录；5月政策出台；7月启动"
        },
        {
          fieldChinese: "Ⅰ类市重大项目（12项）",
          fieldName:
            "Ⅰ-4：入选政府采购目录：支持海纳云参与住建局2020年数字照明系统项目计划目录中的新建项目建设和老旧项目改造",
          fieldxuqiu: "3月给到项目计划目录；5月政策出台；7月启动"
        },
        {
          fieldChinese: "Ⅰ类市重大项目（12项）",
          fieldName:
            "Ⅰ-4：入选政府采购目录：支持海纳云参与住建局2020年数字照明系统项目计划目录中的新建项目建设和老旧项目改造",
          fieldxuqiu: "3月给到项目计划目录；5月政策出台；7月启动"
        },
        {
          fieldChinese: "Ⅰ类市重大项目（12项）",
          fieldName:
            "Ⅰ-4：入选政府采购目录：支持海纳云参与住建局2020年数字照明系统项目计划目录中的新建项目建设和老旧项目改造",
          fieldxuqiu: "3月给到项目计划目录；5月政策出台；7月启动"
        },
        {
          fieldChinese: "Ⅰ类市重大项目（12项）",
          fieldName:
            "Ⅰ-4：入选政府采购目录：支持海纳云参与住建局2020年数字照明系统项目计划目录中的新建项目建设和老旧项目改造",
          fieldxuqiu: "3月给到项目计划目录；5月政策出台；7月启动"
        },
        {
          fieldChinese: "Ⅰ类市重大项目（12项）",
          fieldName:
            "Ⅰ-4：入选政府采购目录：支持海纳云参与住建局2020年数字照明系统项目计划目录中的新建项目建设和老旧项目改造",
          fieldxuqiu: "3月给到项目计划目录；5月政策出台；7月启动"
        },
        {
          fieldChinese: "Ⅰ类市重大项目（12项）",
          fieldName:
            "Ⅰ-4：入选政府采购目录：支持海纳云参与住建局2020年数字照明系统项目计划目录中的新建项目建设和老旧项目改造",
          fieldxuqiu: "3月给到项目计划目录；5月政策出台；7月启动"
        },
        {
          fieldChinese: "Ⅰ类市重大项目（12项）",
          fieldName:
            "Ⅰ-4：入选政府采购目录：支持海纳云参与住建局2020年数字照明系统项目计划目录中的新建项目建设和老旧项目改造",
          fieldxuqiu: "3月给到项目计划目录；5月政策出台；7月启动"
        },
        {
          fieldChinese: "Ⅰ类市重大项目（12项）",
          fieldName:
            "Ⅰ-4：入选政府采购目录：支持海纳云参与住建局2020年数字照明系统项目计划目录中的新建项目建设和老旧项目改造",
          fieldxuqiu: "3月给到项目计划目录；5月政策出台；7月启动"
        },
        {
          fieldChinese: "Ⅰ类市重大项目（12项）",
          fieldName:
            "Ⅰ-4：入选政府采购目录：支持海纳云参与住建局2020年数字照明系统项目计划目录中的新建项目建设和老旧项目改造",
          fieldxuqiu: "3月给到项目计划目录；5月政策出台；7月启动"
        },
        {
          fieldChinese: "Ⅰ类市重大项目（12项）",
          fieldName:
            "Ⅰ-4：入选政府采购目录：支持海纳云参与住建局2020年数字照明系统项目计划目录中的新建项目建设和老旧项目改造",
          fieldxuqiu: "3月给到项目计划目录；5月政策出台；7月启动"
        },
        {
          fieldChinese: "Ⅰ类市重大项目（12项）",
          fieldName:
            "Ⅰ-4：入选政府采购目录：支持海纳云参与住建局2020年数字照明系统项目计划目录中的新建项目建设和老旧项目改造",
          fieldxuqiu: "3月给到项目计划目录；5月政策出台；7月启动"
        },
        {
          fieldChinese: "Ⅰ类市重大项目（12项）",
          fieldName:
            "Ⅰ-4：入选政府采购目录：支持海纳云参与住建局2020年数字照明系统项目计划目录中的新建项目建设和老旧项目改造",
          fieldxuqiu: "3月给到项目计划目录；5月政策出台；7月启动"
        },
        {
          fieldChinese: "Ⅰ类市重大项目（12项）",
          fieldName:
            "Ⅰ-4：入选政府采购目录：支持海纳云参与住建局2020年数字照明系统项目计划目录中的新建项目建设和老旧项目改造",
          fieldxuqiu: "3月给到项目计划目录；5月政策出台；7月启动"
        },
        {
          fieldChinese: "Ⅰ类市重大项目（12项）",
          fieldName:
            "Ⅰ-4：入选政府采购目录：支持海纳云参与住建局2020年数字照明系统项目计划目录中的新建项目建设和老旧项目改造",
          fieldxuqiu: "3月给到项目计划目录；5月政策出台；7月启动"
        },
        {
          fieldChinese: "Ⅰ类市重大项目（12项）",
          fieldName:
            "Ⅰ-4：入选政府采购目录：支持海纳云参与住建局2020年数字照明系统项目计划目录中的新建项目建设和老旧项目改造",
          fieldxuqiu: "3月给到项目计划目录；5月政策出台；7月启动"
        },
        {
          fieldChinese: "Ⅰ类市重大项目（12项）",
          fieldName:
            "Ⅰ-4：入选政府采购目录：支持海纳云参与住建局2020年数字照明系统项目计划目录中的新建项目建设和老旧项目改造",
          fieldxuqiu: "3月给到项目计划目录；5月政策出台；7月启动"
        },
        {
          fieldChinese: "Ⅰ类市重大项目（12项）",
          fieldName:
            "Ⅰ-4：入选政府采购目录：支持海纳云参与住建局2020年数字照明系统项目计划目录中的新建项目建设和老旧项目改造",
          fieldxuqiu: "3月给到项目计划目录；5月政策出台；7月启动"
        },
        {
          fieldChinese: "Ⅰ类市重大项目（12项）",
          fieldName:
            "Ⅰ-4：入选政府采购目录：支持海纳云参与住建局2020年数字照明系统项目计划目录中的新建项目建设和老旧项目改造",
          fieldxuqiu: "3月给到项目计划目录；5月政策出台；7月启动"
        },
        {
          fieldChinese: "Ⅰ类市重大项目（12项）",
          fieldName:
            "Ⅰ-4：入选政府采购目录：支持海纳云参与住建局2020年数字照明系统项目计划目录中的新建项目建设和老旧项目改造",
          fieldxuqiu: "3月给到项目计划目录；5月政策出台；7月启动"
        },
        {
          fieldChinese: "Ⅰ类市重大项目（12项）",
          fieldName:
            "Ⅰ-4：入选政府采购目录：支持海纳云参与住建局2020年数字照明系统项目计划目录中的新建项目建设和老旧项目改造",
          fieldxuqiu: "3月给到项目计划目录；5月政策出台；7月启动"
        },
        {
          fieldChinese: "Ⅰ类市重大项目（12项）",
          fieldName:
            "Ⅰ-4：入选政府采购目录：支持海纳云参与住建局2020年数字照明系统项目计划目录中的新建项目建设和老旧项目改造",
          fieldxuqiu: "3月给到项目计划目录；5月政策出台；7月启动"
        },
        {
          fieldChinese: "Ⅰ类市重大项目（12项）",
          fieldName:
            "Ⅰ-4：入选政府采购目录：支持海纳云参与住建局2020年数字照明系统项目计划目录中的新建项目建设和老旧项目改造",
          fieldxuqiu: "3月给到项目计划目录；5月政策出台；7月启动"
        },
        {
          fieldChinese: "Ⅰ类市重大项目（12项）",
          fieldName:
            "Ⅰ-4：入选政府采购目录：支持海纳云参与住建局2020年数字照明系统项目计划目录中的新建项目建设和老旧项目改造",
          fieldxuqiu: "3月给到项目计划目录；5月政策出台；7月启动"
        },
        {
          fieldChinese: "Ⅰ类市重大项目（12项）",
          fieldName:
            "Ⅰ-4：入选政府采购目录：支持海纳云参与住建局2020年数字照明系统项目计划目录中的新建项目建设和老旧项目改造",
          fieldxuqiu: "3月给到项目计划目录；5月政策出台；7月启动"
        },
        {
          fieldChinese: "Ⅰ类市重大项目（12项）",
          fieldName:
            "Ⅰ-4：入选政府采购目录：支持海纳云参与住建局2020年数字照明系统项目计划目录中的新建项目建设和老旧项目改造",
          fieldxuqiu: "3月给到项目计划目录；5月政策出台；7月启动"
        },
        {
          fieldChinese: "Ⅰ类市重大项目（12项）",
          fieldName:
            "Ⅰ-4：入选政府采购目录：支持海纳云参与住建局2020年数字照明系统项目计划目录中的新建项目建设和老旧项目改造",
          fieldxuqiu: "3月给到项目计划目录；5月政策出台；7月启动"
        },
        {
          fieldChinese: "Ⅰ类市重大项目（12项）",
          fieldName:
            "Ⅰ-4：入选政府采购目录：支持海纳云参与住建局2020年数字照明系统项目计划目录中的新建项目建设和老旧项目改造",
          fieldxuqiu: "3月给到项目计划目录；5月政策出台；7月启动"
        },
        {
          fieldChinese: "Ⅰ类市重大项目（12项）",
          fieldName:
            "Ⅰ-4：入选政府采购目录：支持海纳云参与住建局2020年数字照明系统项目计划目录中的新建项目建设和老旧项目改造",
          fieldxuqiu: "3月给到项目计划目录；5月政策出台；7月启动"
        },
        {
          fieldChinese: "Ⅰ类市重大项目（12项）",
          fieldName:
            "Ⅰ-4：入选政府采购目录：支持海纳云参与住建局2020年数字照明系统项目计划目录中的新建项目建设和老旧项目改造",
          fieldxuqiu: "3月给到项目计划目录；5月政策出台；7月启动"
        },
        {
          fieldChinese: "Ⅰ类市重大项目（12项）",
          fieldName:
            "Ⅰ-4：入选政府采购目录：支持海纳云参与住建局2020年数字照明系统项目计划目录中的新建项目建设和老旧项目改造",
          fieldxuqiu: "3月给到项目计划目录；5月政策出台；7月启动"
        },
        {
          fieldChinese: "Ⅰ类市重大项目（12项）",
          fieldName:
            "Ⅰ-4：入选政府采购目录：支持海纳云参与住建局2020年数字照明系统项目计划目录中的新建项目建设和老旧项目改造",
          fieldxuqiu: "3月给到项目计划目录；5月政策出台；7月启动"
        }
      ],
      loading: false,
      interfaceId: this.$route.query.id
    };
  },
  mounted() {
    // this.searchMessage();
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

      this.title = "新增接口字段";
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
      this.title = "修改接口字段信息";
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
<style lang="scss">
.el-form-item__content {
  margin-left: 0 !important;
}

#policyProfeedback {
  height: calc(100% - 48px);
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
