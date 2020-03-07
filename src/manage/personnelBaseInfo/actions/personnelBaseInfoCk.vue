<template>
    <div>
        <div class="posennol" v-loading="loading" element-loading-text="拼命加载中"
            element-loading-background="rgba(255, 255, 255, 1)" style="width:100%;height:100%;" v-if="display">
            <header style="height: 127px;">
                <!-- <div class="dictionaryButtons">
                    <el-button type="primary" icon="el-icon-circle-plus" v-for="(item,index) in allBtns"
                        @click="toggle(item.name)" :key="index" size="mini" style="float: left;margin-left: 10px;">
                        {{item.value}}</el-button>
                </div> -->
                <el-row class="header1">
                    <el-col :span="4">
                        <span class="title">姓名:</span>
                        <el-input v-model="inputArr.empName" size="small" placeholder="请输入内容"></el-input>
                    </el-col>
                    <el-col :span="5">
                        <span class="title">所属部门:</span>
                        <el-select class="select" size="small" v-model="inputArr.department" filterable
                            placeholder="请选择" @change="getGWdata()">
                            <el-option key="#" label="请选择" value="#">
                            </el-option>
                            <el-option v-for="item in departmantIdArr" :key="item.id" :label="item.value"
                                :value="item.id">
                            </el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="4">
                        <span class="title">岗位:</span>
                        <el-select class="select" size="small" v-model="inputArr.title" filterable placeholder="请选择">
                            <el-option key="#" label="请选择" value="#">
                            </el-option>
                            <el-option v-for="item in transferDataDep" :key="item.key" :label="item.label"
                                :value="item.key">
                            </el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="6">
                        <span class="title">入职时间:</span>
                        <!-- <el-date-picker v-model="inputArr.hiredate" type="date" size="small" placeholder="入职时间"
                            format="yyyy-MM-dd" value-format="yyyy-MM-dd" style="width: 72% !important;">
                        </el-date-picker> -->
                        <el-date-picker v-model="hiredate" type="daterange" size="small" range-separator="至"
                            start-placeholder="开始日期" end-placeholder="结束日期" format="yyyy-MM-dd"
                            value-format="yyyy-MM-dd" style="width: 72% !important;">
                        </el-date-picker>
                    </el-col>
                    <el-col :span="6">
                        <span class="title">转正日期:</span>
                        <!-- <el-date-picker v-model="leaveDate" type="date" size="small" placeholder="离职日期"
                            format="yyyy-MM-dd" value-format="yyyy-MM-dd" style="width: 72% !important;">
                        </el-date-picker> -->
                        <el-date-picker v-model="conversionDate" type="daterange" size="small" range-separator="至"
                            start-placeholder="开始日期" end-placeholder="结束日期" format="yyyy-MM-dd"
                            value-format="yyyy-MM-dd" style="width: 72% !important;">
                        </el-date-picker>
                    </el-col>

                </el-row>
                <el-row class="header">
                    <el-col :span="4">
                        <span class="title">学历:</span>
                        <el-select v-model="inputArr.firstDegree" size="small" placeholder="请选择学历">
                            <el-option key="#" label="请选择" value="#">
                            </el-option>
                            <el-option v-for="item in selectDataxl" :key="item.key" :label="item.value"
                                :value="item.key">
                            </el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="5">
                        <span class="title">户口性质:</span>
                        <el-select v-model="inputArr.householdRegistration" size="small" placeholder="请选择户口性质">
                            <el-option key="#" label="请选择" value="#">
                            </el-option>
                            <el-option v-for="item in selectDatahkxz" :key="item.key" :label="item.value"
                                :value="item.key">
                            </el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="4">
                        <span class="title">性别:</span>
                        <el-select class="select" size="small" v-model="inputArr.sex" placeholder="请选择">
                            <el-option value="0" label="女"></el-option>
                            <el-option value="1" label="男"></el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="6">
                        <span class="title" style="width: 79px;">所属公司:</span>
                        <el-select v-model="formData.company" size="small" placeholder="请选择所属公司">
                            <el-option key="#" label="请选择" value="#">
                            </el-option>
                            <el-option v-for="item in selectDatassgs" :key="item.key" :label="item.value"
                                :value="item.key">
                            </el-option>
                        </el-select>
                    </el-col>


                    <el-col :span="6">
                        <span class="title">离职日期:</span>
                        <!-- <el-date-picker v-model="leaveDate" type="date" size="small" placeholder="离职日期"
                            format="yyyy-MM-dd" value-format="yyyy-MM-dd" style="width: 72% !important;">
                        </el-date-picker> -->
                        <el-date-picker v-model="leaveDate" type="daterange" size="small" range-separator="至"
                            start-placeholder="开始日期" end-placeholder="结束日期" format="yyyy-MM-dd"
                            value-format="yyyy-MM-dd" style="width: 72% !important;">
                        </el-date-picker>
                    </el-col>

                    <!--<el-button type="primary" icon="el-icon-download" size="small" @click="export2Excel" class="searchBtn">导出</el-button>-->
                </el-row>
                <el-row class="header">
                    <el-col :span="6">
                        <span class="title" style="width: 90px;">合同是否存档:</span>
                        <el-select class="select" size="small" v-model="inputArr.contractFiled" placeholder="请选择"
                            style="width:58%;!important">
                            <el-option key="#" label="请选择" value="#">
                            </el-option>
                            <el-option key="1" label="是" value="1">
                            </el-option>
                            <el-option key="0" label="否" value="0">
                            </el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="1">
                        <el-button type="primary" icon="el-icon-search" size="mini" @click="seachAllData"
                            style="height: 25px;margin-top: 3px;">查询
                        </el-button>

                    </el-col>
                    <el-col :span="2">
                        <el-button type="primary" icon="el-icon-circle-plus" v-for="(item,index) in allBtns"
                            @click="toggle(item.name)" :key="index" size="mini"
                            style="float: left;margin-left: 22px;margin-top: 3px;">
                            {{item.value}}</el-button>
                    </el-col>
                    <el-col :span="2">
                        <el-button type="primary" size="mini" style="height: 25px;margin-top: 3px;"
                            @click="export2Excel"><i class="el-icon-printer"></i> 导出
                        </el-button>
                    </el-col>

                    <!--<el-button type="primary" icon="el-icon-download" size="small" @click="export2Excel" class="searchBtn">导出</el-button>-->
                </el-row>

            </header>
            <section>
                <el-table :data="tableData" :height="heightItem" :max-height="heightItem" border style="width: 100%"
                    id="personnelBaseInfoTable" :header-cell-style="{padding:'8px 0'}" :cell-style="{padding:'5px 0'}">
                    <el-table-column align="center" type="index" label="序号" width="50"></el-table-column>
                    <el-table-column prop="empName" label="姓名"></el-table-column>
                    <el-table-column prop="departmentName" label="所属部门" width="100"></el-table-column>
                    <el-table-column prop="titleName" label="岗位" width="150"></el-table-column>
                    <el-table-column prop="hiredate" label="入职时间" width="150"></el-table-column>
                    <el-table-column prop="conversionDate" label="转正时间" width="150"></el-table-column>
                    <el-table-column prop="idCard" label="身份证" width="200"></el-table-column>
                    <el-table-column label="性别" width="50">
                        <template slot-scope="scope">
                            <span v-if="scope.row.sex=='0'">女</span>
                            <span v-else>男</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="birthday" label="出生日期" width="150"></el-table-column>
                    <el-table-column label="户口性质">
                        <template slot-scope="scope">
                            <span>{{hkxzsjcl(scope.row.householdRegistration)}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="所属公司" width="100">
                        <template slot-scope="scope">
                            <span>{{ssgssjcl(scope.row.company)}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="合同是否存档" width="100">
                        <template slot-scope="scope">
                            <span v-if="scope.row.contractFiled=='0'">是</span>
                            <span v-else>否</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="合同期限" align="center">
                        <el-table-column prop="contractDateFrom" label="开始时间" align="center" width="150">
                        </el-table-column>
                        <el-table-column prop="contractDateTo" label="结束时间" align="center" width="150">
                        </el-table-column>
                    </el-table-column>
                    <el-table-column prop="firstDegreeSchool" label="毕业院校" width="200"></el-table-column>
                    <el-table-column label="学历">
                        <template slot-scope="scope">
                            <span>{{xlsjcl(scope.row.firstDegree)}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="insuranceDate" label="投保日期" width="150"></el-table-column>
                    <el-table-column prop="leaveDate" label="离职日期" width="150"></el-table-column>
                    <el-table-column prop="reasonsForLeaving" label="离职原因" width="200"></el-table-column>
                    <el-table-column prop="contactPhone" label="联系电话" width="150"></el-table-column>
                    <el-table-column prop="emergencyContact" label="紧急联系人" width="150"></el-table-column>
                    <el-table-column prop="nativePlace" label="籍贯" width="150"></el-table-column>
                    <el-table-column prop="currentResidence" label="现居住地" width="200"></el-table-column>
                    <el-table-column label="工种">
                        <template slot-scope="scope">
                            <span>{{gzsjcl(scope.row.typeOfWork)}}</span>

                        </template>
                    </el-table-column>
                    <el-table-column label="证书名称" align="center">
                        <el-table-column prop="certificateName" label="证书名称" align="center" width="90">
                        </el-table-column>
                        <el-table-column prop="certificateNumber" label="证书编号" align="center" width="90">
                        </el-table-column>
                        <el-table-column prop="certificateFile" label="证书附件" align="center" width="90">
                            <template slot-scope="scope">
                                <el-button v-if="scope.row.certificateFile != null" size="mini"
                                    @click="uploadFile(scope.$index, scope.row, scope.row.certificateFile)" type="primary">查看</el-button>
                                <el-button v-if="scope.row.certificateFile == null" size="mini" disabled>查看</el-button>
                            </template>
                        </el-table-column>
                    </el-table-column>
                    <el-table-column prop="annotation" label="备注"></el-table-column>
                    <el-table-column label="操作" width="150">
                        <template slot-scope="scope">
                            <el-button type="primary" icon="el-icon-edit" size="small"
                                @click="handleEdit(scope.$index, scope.row)">编辑
                            </el-button>
                            <el-button type="danger" icon="el-icon-delete" size="small"
                                @click="handleDelete(scope.$index, scope.row)">删除
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </section>
        </div>
        <div class="dictionary" style="width:100%;height:100%;" v-else-if="display2" id="personnelBaseInfo">
            <app-content>
                <el-form :data="formData" ref="formData" :model="formData" :rules="rules">
                    <el-form-item label="姓名" :label-width="formLabelWidth" prop="empName">
                        <el-input v-model="formData.empName"></el-input>
                    </el-form-item>
                    <el-form-item label="所在部门" :label-width="formLabelWidth" prop="department">
                        <el-select v-model="formData.department" filterable placeholder="请选择所在部门" @change="getGWdata()">
                            <el-option key="#" label="请选择" value="#">
                            </el-option>
                            <el-option v-for="item in departmantIdArr" :key="item.id" :label="item.value"
                                :value="item.id">
                            </el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item label="岗位" :label-width="formLabelWidth" prop="title">
                        <el-select v-model="formData.title" filterable placeholder="请选择岗位">
                            <el-option key="#" label="请选择" value="#">
                            </el-option>
                            <el-option v-for="item in transferDataDep" :key="item.key" :label="item.label"
                                :value="item.key">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="入职时间" prop="hiredate" :label-width="formLabelWidth">
                        <el-date-picker v-model="formData.hiredate" type="date" placeholder="入职时间" format="yyyy-MM-dd"
                            value-format="yyyy-MM-dd" @change="changeHandler()"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="转正时间" prop="conversionDate" :label-width="formLabelWidth">
                        <el-date-picker v-model="formData.conversionDate" type="date" placeholder="转正时间"
                            format="yyyy-MM-dd" value-format="yyyy-MM-dd">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="身份证" prop="idCard" :label-width="formLabelWidth">
                        <el-input v-model="formData.idCard"></el-input>
                    </el-form-item>
                    <el-form-item label="性别" :label-width="formLabelWidth">
                        <el-select placeholder="请选择" v-model="formData.sex" disabled="disabled">
                            <el-option key="#" label="请选择" value="#">
                            </el-option>
                            <el-option key="0" label="女" value="0">
                            </el-option>
                            <el-option key="1" label="男" value="1">
                            </el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item label="出生日期" :label-width="formLabelWidth">
                        <el-date-picker v-model="formData.birthday" type="date" disabled="disabled" placeholder="出生日期"
                            format="yyyy-MM-dd" value-format="yyyy-MM-dd"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="户口性质" :label-width="formLabelWidth">
                        <el-select v-model="formData.householdRegistration" placeholder="请选择户口性质">
                            <el-option key="#" label="请选择" value="#">
                            </el-option>
                            <el-option v-for="item in selectDatahkxz" :key="item.key" :label="item.value"
                                :value="item.key">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="所属公司" :label-width="formLabelWidth">
                        <el-select v-model="formData.company" placeholder="请选择所属公司">
                            <el-option key="#" label="请选择" value="#">
                            </el-option>
                            <el-option v-for="item in selectDatassgs" :key="item.key" :label="item.value"
                                :value="item.key">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="合同是否存档" :label-width="formLabelWidth">
                        <el-select placeholder="请选择" v-model="formData.contractFiled">
                            <el-option key="#" label="请选择" value="#">
                            </el-option>
                            <el-option key="1" label="是" value="1">
                            </el-option>
                            <el-option key="0" label="否" value="0">
                            </el-option>
                        </el-select>
                        <!-- <el-checkbox v-if="formData.enabled=1" checked="true" >是否有效</el-checkbox> -->
                    </el-form-item>
                    <el-form-item label="合同期限开始日期" :label-width="formLabelWidth">
                        <el-date-picker v-model="formData.contractDateFrom" type="date" placeholder="开始日期"
                            format="yyyy-MM-dd" value-format="yyyy-MM-dd">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="合同期限结束日期" :label-width="formLabelWidth">
                        <el-date-picker v-model="formData.contractDateTo" type="date" placeholder="结束日期"
                            format="yyyy-MM-dd" value-format="yyyy-MM-dd">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="毕业院校" :label-width="formLabelWidth">
                        <el-input v-model="formData.firstDegreeSchool"></el-input>
                    </el-form-item>
                    <el-form-item label="学历" :label-width="formLabelWidth">
                        <el-select v-model="formData.firstDegree" placeholder="请选择学历">
                            <el-option key="#" label="请选择" value="#">
                            </el-option>
                            <el-option v-for="item in selectDataxl" :key="item.key" :label="item.value"
                                :value="item.key">
                            </el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item label="投保日期" prop="insuranceDate" :label-width="formLabelWidth">
                        <el-date-picker v-model="formData.insuranceDate" type="date" placeholder="开始日期"
                            format="yyyy-MM-dd" value-format="yyyy-MM-dd">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="离职日期" prop="leaveDate" :label-width="formLabelWidth">
                        <el-date-picker v-model="formData.leaveDate" type="date" placeholder="离职日期" format="yyyy-MM-dd"
                            value-format="yyyy-MM-dd"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="离职原因" :label-width="formLabelWidth">
                        <el-input v-model="formData.reasonsForLeaving"></el-input>
                    </el-form-item>
                    <el-form-item label="联系电话" :label-width="formLabelWidth">
                        <el-input v-model="formData.contactPhone"></el-input>
                    </el-form-item>
                    <el-form-item label="紧急联系人" :label-width="formLabelWidth">
                        <el-input v-model="formData.emergencyContact"></el-input>
                    </el-form-item>
                    <el-form-item label="籍贯" :label-width="formLabelWidth">
                        <el-input v-model="formData.nativePlace"></el-input>
                    </el-form-item>
                    <el-form-item label="现居住地" :label-width="formLabelWidth">
                        <el-input v-model="formData.currentResidence"></el-input>
                    </el-form-item>
                    <el-form-item label="工种" :label-width="formLabelWidth">
                        <el-select v-model="formData.typeOfWork" placeholder="请选择工种">
                            <el-option key="#" label="请选择" value="#">
                            </el-option>
                            <el-option v-for="item in selectDatagz" :key="item.key" :label="item.value"
                                :value="item.key">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="证书名称" :label-width="formLabelWidth">
                        <el-input v-model="formData.certificateName"></el-input>
                    </el-form-item>
                    <el-form-item label="证书编号" :label-width="formLabelWidth">
                        <el-input v-model="formData.certificateNumber"></el-input>
                    </el-form-item>
                    <el-form-item label="证书附件" :label-width="formLabelWidth">
                        <el-upload class="upload-demo"
                                   ref="upload"
                                   :action="SavepersonnelBaseInfo_API"
                                   :data="formData"
                                   :file-list="fileListData"
                                   :on-preview="handlePreview"
                                   :before-upload="beforeupload"
                                   :on-change="changeLoad"
                                   :auto-upload="false"
                                   list-type="text">
                            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="备注" :label-width="formLabelWidth">
                        <el-input v-model="formData.annotation"></el-input>
                    </el-form-item>
                    <el-form-item class="formitem_btn" style="    float: right;">
                        <el-button type="primary" class="elbutton2" size="medium " @click="submitForm('formData')">提交
                        </el-button>
                        <el-button type="primary" class="elbutton2" size="medium " @click="cancelHandel">取消</el-button>

                    </el-form-item>
                </el-form>
            </app-content>
        </div>
    </div>

</template>

<script>
    import {
        searchDictionaryManList,
        addUpdateDictionaryManList,
        deleteDictionaryManList,
        searchDictionarySelectList,
        judgeDictionaryKey,

        QuerypersonnelBaseInfo,
        getDepartmentDialogData,
        getpostManageList,
        addpersonnelBaseInfo,
        deletepersonnelBaseInfo
    } from '../../../services/Manage/postManage.js'
    import API from '../../../api'
    import {
        mapState
    } from 'vuex'
    // import saveAs from 'file-saver';
    // var FileSaver = require('file-saver');
    // import XLSX from 'xlsx';
    import 'xlsx-style'
    // import 'xlsx-style'
    export default {
        data() {
            var KeyFlag = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('编码不能为空！'));
                } else {
                    if (this.oldKey != value) {
                        judgeDictionaryKey(this.updateIndex, this.form.type, value).then(result => {
                            if (!result) {
                                return callback(new Error('编码已存在！'));
                            } else {
                                return callback()
                            }
                        })
                    } else {
                        return callback()
                    }

                }
            };
            return {
                SavepersonnelBaseInfo_API:API.PRO_HOST + API.SavepersonnelBaseInfo_API,
                loading: true,
                display: true,
                display2: false,
                formLabelWidth: '130px',
                fileListData: [],
                hiredate: [],
                leaveDate: [],
                conversionDate: [],
                inputArr: {
                    empName: '',
                    // 所在部门       
                    department: '',
                    // 岗位      
                    title: '',
                    // 入职时间  

                    hiredateFrom: '',
                    hiredateTo: '',

                    conversionDateFrom: '',
                    conversionDateTo: '',
                    // 身份证      
                    idCard: '',
                    // 性别         
                    sex: '',
                    // 出生日期      
                    birthday: '',
                    // 户口性质       
                    householdRegistration: '',
                    // 所属公司      
                    company: '',
                    // 合同是否存档       
                    contractFiled: '',

                    // 学历           
                    firstDegree: '',
                    // 投保日期       
                    insuranceDate: '',
                    // 离职日期      
                    leaveDateFrom: '',
                    leaveDateTo: '',
                    deleteFlag: '0'

                },
                // 下拉框数据
                selectDatahkxz: [], //户口性质
                selectDatassgs: [], //所属公司
                selectDataxl: [], //学历
                selectDatagz: [], //工种
                departmantIdArr: [],
                transferDataDep: [],
                selectData: [{
                    name: "type",
                    options: [{
                        value: null,
                        label: '全部'
                    }]
                }],
                // 下拉框集合
                selectObj: {
                    type: "",
                },
                dataModel: [], //下拉框遍历依靠
                minBtns: ['Add'], //本页按钮
                allBtns: [], // 总按钮
                labelPosition: 'right',
                tableData: [],
                heightItem: window.innerHeight - 260, // 计算表格的高度，
                dialogFormVisible: false, //是否显示弹出框
                form: {}, // 新增弹出框
                formData: {
                    id: '',
                    empName: '',
                    // 所在部门       
                    department: '',
                    // 岗位      
                    title: '',
                    // 入职时间  
                    hiredate: '',
                    // 转正时间     
                    conversionDate: '',
                    // 身份证      
                    idCard: '',
                    // 性别         
                    sex: '',
                    // 出生日期      
                    birthday: '',
                    // 户口性质       
                    householdRegistration: '',
                    // 所属公司      
                    company: '',
                    // 合同是否存档       
                    contractFiled: '',
                    // 开始日       
                    contractDateFrom: '',
                    // 结束日       
                    contractDateTo: '',
                    // 毕业院校       
                    firstDegreeSchool: '',
                    // 学历           
                    firstDegree: '',
                    // 投保日期       
                    insuranceDate: '',
                    // 离职日期      
                    leaveDate: '',
                    // 离职原因       
                    reasonsForLeaving: '',
                    // 联系电话      
                    contactPhone: '',
                    // 紧急联系人      
                    emergencyContact: '',
                    // 籍贯       
                    nativePlace: '',
                    // 现居住地      
                    currentResidence: '',
                    // 工种       
                    typeOfWork: '',
                    // 证书名称      
                    certificateName: '',
                    // 证书编号     
                    certificateNumber: '',
                    // 注释     
                    annotation: '',

                    userId: this.$store.state.user.userId // 登录人（用户ID）
                },
                formIndex: -1,
                oldform: {}, // 取消新增后重置
                oldKey: '', // 旧的form表单修改时的key编码值
                updateIndex: '',
                dialogTitle: '', //弹出框的title
                typeSelectArr: [], // 下拉框
                rules: {
                    empName: [{
                        required: true,
                        message: '姓名不能为空',
                        trigger: 'blur'
                    }],
                    department: [{
                        required: true,
                        message: '所在部门不能为空',
                        trigger: 'change'
                    }],
                    title: [{
                        required: true,
                        message: '岗位不能为空',
                        trigger: 'change'
                    }],
                    hiredate: [{
                        type: 'string',
                        required: true,
                        message: '请选择入职时间',
                        trigger: 'change'
                    }],
                    idCard: [{
                            required: true,
                            message: '请输入身份证ID',
                            trigger: 'blur'
                        },
                        {
                            validator: this.validID,
                            trigger: 'blur'
                        }
                        // {
                        //     pattern: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
                        //     message: '你的身份证格式不正确'
                        // }
                    ],

                    // title: [{
                    //     required: true,
                    //     message: '岗位不能为空',
                    //     trigger: 'change'
                    // }, {
                    //     type: 'number',
                    //     message: '必须为数字值',
                    //     trigger: 'blur'
                    // }],

                },
                wopts: {
                    bookType: 'xlsx',
                    bookSST: true,
                    type: 'binary',
                    cellStyles: true
                },
            }

        },
        watch: {
            heightItem(val) {
                if (!this.timer) {
                    this.heightItem = val
                    this.timer = true
                    const that = this
                    setTimeout(function () {
                        that.timer = false
                    }, 400)
                }
                deep: true
            },
        },
        computed: {
            ...mapState({
                btns: state => state.btns,
                userId: state => state.user.userId
            })
        },
        methods: {
            //新增事件
            toggle(val) {
                if (val == "Add") {
                    this.addTaskHandle();
                }
            },
            //点击列表中已上传的文件事的钩子函数
            handlePreview(file) {
                console.log(file);
            },
            beforeupload(file) {
                console.log(file);
            },
            //重新上传图片时的回调钩子
            changeLoad(file, fileList) {
                if (fileList.length > 1) {
                       fileList.splice(0, 1);
                   }
            },
            //提交文件
            submitUpload() {
                var _this = this;
                // if(this.$refs.upload.uploadFiles.length > 0)
                this.$refs.upload.submit();
                // console.log(this.$refs.upload)
                _this.$refs.upload.onSuccess=function () {
                    _this.search();
                    _this.dialogFormVisible = false;
                    _this.$refs['formDate'].resetFields();
                }
            },
            // 下载文件
            uploadFile(index, row, value) {
                var url = API.SAT_HOST + API.seeEnclosure + '/' + value;
                window.open(url)
            },
            addTaskHandle() { //新增功能
                this.display = false;
                this.display2 = true;
                this.formData = {
                    id: '',
                    empName: '',
                    // 所在部门       
                    department: '',
                    // 岗位      
                    title: '',
                    // 入职时间  
                    hiredate: '',
                    // 转正时间     
                    conversionDate: '',
                    // 身份证      
                    idCard: '',
                    // 性别         
                    sex: '',
                    // 出生日期      
                    birthday: '',
                    // 户口性质       
                    householdRegistration: '',
                    // 所属公司      
                    company: '',
                    // 合同是否存档       
                    contractFiled: '',
                    // 开始日       
                    contractDateFrom: '',
                    // 结束日       
                    contractDateTo: '',
                    // 毕业院校       
                    firstDegreeSchool: '',
                    // 学历           
                    firstDegree: '',
                    // 投保日期       
                    insuranceDate: '',
                    // 离职日期      
                    leaveDate: '',
                    // 离职原因       
                    reasonsForLeaving: '',
                    // 联系电话      
                    contactPhone: '',
                    // 紧急联系人      
                    emergencyContact: '',
                    // 籍贯       
                    nativePlace: '',
                    // 现居住地      
                    currentResidence: '',
                    // 工种       
                    typeOfWork: '',
                    // 证书名称      
                    certificateName: '',
                    // 证书编号     
                    certificateNumber: '',
                    // 注释     
                    annotation: '',

                    userId: this.$store.state.user.userId // 登录人（用户ID）
                };
                this.inputArr = {
                    empName: '',
                    // 所在部门       
                    department: '',
                    // 岗位      
                    title: '',
                    // 入职时间  

                    hiredateFrom: '',
                    hiredateTo: '',

                    conversionDateFrom: '',
                    conversionDateTo: '',
                    // 身份证      
                    idCard: '',
                    // 性别         
                    sex: '',
                    // 出生日期      
                    birthday: '',
                    // 户口性质       
                    householdRegistration: '',
                    // 所属公司      
                    company: '',
                    // 合同是否存档       
                    contractFiled: '',

                    // 学历           
                    firstDegree: '',
                    // 投保日期       
                    insuranceDate: '',
                    // 离职日期      
                    leaveDateFrom: '',
                    leaveDateTo: '',
                    deleteFlag: '0'

                };
                // this.selectAll();
                // this.getSSBMData();
            },
            //所属部门
            getSSBMData() {
                getDepartmentDialogData().then(result => {
                    if (result.success) {
                        result.result.map((item, index) => {
                            this.departmantIdArr.push({
                                id: item.id,
                                value: item.departmantName
                            })
                        })
                    }
                })
            },
            //根据部门获取岗位
            getGWdata() {
                this.transferDataDep = [];
                this.formData.title = '';
                this.inputArr.title = '';
                let departmantId = this.formData.department;
                getpostManageList(departmantId).then((result) => { // 获取所有岗位权限
                    result.result.map((item, index) => {
                        if (item.enabled == '1') {
                            this.transferDataDep.push({
                                key: item.id,
                                label: item.departmantName + '-' + item.titleName
                            });
                            // this.formData.title = item.departmantName + '-' + item.titleName;
                        }
                    });
                });
            },
            //下拉属性查询
            selectAll() {
                this.selectDatahkxz = [], //户口性质
                    this.selectDatassgs = [], //所属公司
                    this.selectDataxl = [], //学历
                    this.selectDatagz = [], //工种
                    searchDictionaryManList().then((result) => {
                        var data = result.result;
                        for (var i = 0; i < data.length; i++) {
                            if (data[i].type == "householdRegistration") {
                                this.selectDatahkxz.push({
                                    'key': data[i].key,
                                    'value': data[i].value
                                });
                            } else if (data[i].type == "company") {
                                this.selectDatassgs.push({
                                    'key': data[i].key,
                                    'value': data[i].value
                                });
                            } else if (data[i].type == "firstDegree") {
                                this.selectDataxl.push({
                                    'key': data[i].key,
                                    'value': data[i].value
                                });
                            } else if (data[i].type == "typeOfWork") {
                                this.selectDatagz.push({
                                    'key': data[i].key,
                                    'value': data[i].value
                                });
                            }

                        }

                    })
            },

            //查询所有的数据
            seachAllData() {
                if (this.hiredate && this.hiredate.length > 0) {
                    this.inputArr.hiredateFrom = this.hiredate[0];
                    this.inputArr.hiredateTo = this.hiredate[1];
                } else {
                    this.inputArr.hiredateFrom = '';
                    this.inputArr.hiredateTo = '';
                }
                if (this.leaveDate && this.leaveDate.length > 0) {
                    this.inputArr.leaveDateFrom = this.leaveDate[0];
                    this.inputArr.leaveDateTo = this.leaveDate[1];
                } else {
                    this.inputArr.leaveDateFrom = '';
                    this.inputArr.leaveDateTo = '';
                }
                if (this.conversionDate && this.conversionDate.length > 0) {
                    this.inputArr.conversionDateFrom = this.conversionDate[0];
                    this.inputArr.conversionDateTo = this.conversionDate[1];
                } else {
                    this.inputArr.conversionDateFrom = '';
                    this.inputArr.conversionDateTo = '';
                }

                QuerypersonnelBaseInfo(this.inputArr).then((result) => {
                    this.tableData = [];
                    if (result && result.result.length > 0) {
                        this.tableData = result.result;
                        this.loading = false;
                        // let thead=['序号',	'姓名',	'所在部门',	'岗位',	'入职时间',	'转正时间',	'身份证',	'性别',	'出生日期',	'户口性质',	'所属公司',	'合同是否存档',	'合同期限开始日','合同期限结束日','毕业院校',	'学历',	'投保日期',	'离职日期',	'离职原因',	'联系电话',	'紧急联系人',	'籍贯',	'现居住地',	'工种',	'证书名称',	'证书编号',	'备注',]
                        //  for(let i=0;i<result.result.length;i++){

                        //  }

                    } else {
                        this.loading = false
                    }

                });
            },
            //学历数据处理
            xlsjcl(key) {
                for (var i = 0; i < this.selectDataxl.length; i++) {
                    if (this.selectDataxl[i].key == key) {
                        return this.selectDataxl[i].value
                    }

                }

            },
            //所属公司数据处理
            ssgssjcl(key) {
                for (var i = 0; i < this.selectDatassgs.length; i++) {
                    if (this.selectDatassgs[i].key == key) {
                        return this.selectDatassgs[i].value
                    }

                }

            },

            //学历数据处理
            gzsjcl(key) {
                for (var i = 0; i < this.selectDatagz.length; i++) {
                    if (this.selectDatagz[i].key == key) {
                        return this.selectDatagz[i].value
                    }

                }

            },
            //所属公司数据处理
            hkxzsjcl(key) {
                for (var i = 0; i < this.selectDatahkxz.length; i++) {
                    if (this.selectDatahkxz[i].key == key) {
                        return this.selectDatahkxz[i].value
                    }

                }

            },
            //新增提交
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        if(this.$refs.upload.uploadFiles.length > 0){
                            this.$refs.upload.submit();
                            console.log(this.$refs.upload)
                            var _this = this;
                            _this.$refs.upload.onSuccess=function () {
                                _this.$message({
                                    type: 'success',
                                    message: '成功!'
                                })
                                _this.$refs[formName].resetFields();
                                _this.display = true;
                                _this.display2 = false;
                                _this.seachAllData();
                            }
                            _this.$refs.upload.onError=function () {
                                _this.$message({
                                    type: 'error',
                                    message: '失败!'
                                })
                            }
                        } else {
                            let csdata = this.formData;
                            addpersonnelBaseInfo(csdata).then((result) => {
                                if (result.success) {
                                    this.$message({
                                        type: 'success',
                                        message: '成功!'
                                    })
                            
                                    this.$refs[formName].resetFields();
                                    this.display = true;
                                    this.display2 = false;
                                    this.seachAllData();
                            
                                } else {
                                    this.$message({
                                        type: 'error',
                                        message: '失败!'
                                    })
                                }
                            })
                        }
                    } else {
                        this.$message({
                            type: 'error',
                            message: '验证失败!'
                        })
                        return false;
                    }
                });
            },
            // 表格内部处理
            setTableHandle(res) {
                if (res == 1) {
                    return '有效'
                } else if (res == 0) {
                    return '无效'
                }
            },
            // 表格内部的类型处理
            setTable_TypeHandle(res) {
                let val = ''
                this.typeSelectArr.map((item, index) => {
                    if (res == item.key) {
                        val = item.value;
                    }
                })
                return val
            },
            // select发生变化进行查询表格数据
            selectChangeHandle(val) {
                var _this = this;
                val.map((item, index) => {
                    switch (index) {
                        case 0:
                            _this.selectObj.type = item.value1
                            break;
                    }
                })
                searchDictionaryManList(this.selectObj.type).then((result) => {
                    this.tableData = result.result;
                })
            },
            // 取消新增操作
            cancelHandel() {
                this.display = true;
                this.display2 = false;
                this.formData = {
                    id: '',
                    empName: '',
                    // 所在部门       
                    department: '',
                    // 岗位      
                    title: '',
                    // 入职时间  
                    hiredate: '',
                    // 转正时间     
                    conversionDate: '',
                    // 身份证      
                    idCard: '',
                    // 性别         
                    sex: '',
                    // 出生日期      
                    birthday: '',
                    // 户口性质       
                    householdRegistration: '',
                    // 所属公司      
                    company: '',
                    // 合同是否存档       
                    contractFiled: '',
                    // 开始日       
                    contractDateFrom: '',
                    // 结束日       
                    contractDateTo: '',
                    // 毕业院校       
                    firstDegreeSchool: '',
                    // 学历           
                    firstDegree: '',
                    // 投保日期       
                    insuranceDate: '',
                    // 离职日期      
                    leaveDate: '',
                    // 离职原因       
                    reasonsForLeaving: '',
                    // 联系电话      
                    contactPhone: '',
                    // 紧急联系人      
                    emergencyContact: '',
                    // 籍贯       
                    nativePlace: '',
                    // 现居住地      
                    currentResidence: '',
                    // 工种       
                    typeOfWork: '',
                    // 证书名称      
                    certificateName: '',
                    // 证书编号     
                    certificateNumber: '',
                    // 注释     
                    annotation: '',

                    userId: this.$store.state.user.userId // 登录人（用户ID）
                };
                this.seachAllData();

            },

            // 表格修改
            handleEdit(index, row) {
                this.display = false;
                this.display2 = true;
                this.formData = {
                    id: row.id,
                    empName: row.empName,
                    // 所在部门       
                    department: row.department,
                    // 岗位      
                    title: row.title,
                    // 入职时间  
                    hiredate: row.hiredate,
                    // 转正时间     
                    conversionDate: row.conversionDate,
                    // 身份证      
                    idCard: row.idCard,
                    // 性别         
                    sex: row.sex,
                    // 出生日期      
                    birthday: row.birthday,
                    // 户口性质       
                    householdRegistration: row.householdRegistration,
                    // 所属公司      
                    company: row.company,
                    // 合同是否存档       
                    contractFiled: row.contractFiled,
                    // 开始日       
                    contractDateFrom: row.contractDateFrom,
                    // 结束日       
                    contractDateTo: row.contractDateTo,
                    // 毕业院校       
                    firstDegreeSchool: row.firstDegreeSchool,
                    // 学历           
                    firstDegree: row.firstDegree,
                    // 投保日期       
                    insuranceDate: row.insuranceDate,
                    // 离职日期      
                    leaveDate: row.leaveDate,
                    // 离职原因       
                    reasonsForLeaving: row.reasonsForLeaving,
                    // 联系电话      
                    contactPhone: row.contactPhone,
                    // 紧急联系人      
                    emergencyContact: row.emergencyContact,
                    // 籍贯       
                    nativePlace: row.nativePlace,
                    // 现居住地      
                    currentResidence: row.currentResidence,
                    // 工种       
                    typeOfWork: row.typeOfWork,
                    // 证书名称      
                    certificateName: row.certificateName,
                    // 证书编号     
                    certificateNumber: row.certificateNumber,
                    // 注释     
                    annotation: row.annotation,
                    userId: this.$store.state.user.userId // 登录人（用户ID）
                };

                // this.selectAll();
                // this.getSSBMData();

            },
            // 表格删除数据
            handleDelete(index, row) {
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    let csdata = {
                        id: row.id,
                        userId: this.$store.state.user.userId // 登录人（用户ID）
                    }
                    deletepersonnelBaseInfo(csdata).then((result) => {
                        if (result.success) {

                            this.$message({
                                type: 'success',
                                message: '删除成功!'
                            })
                            this.seachAllData();
                        } else {
                            this.$message({
                                type: 'success',
                                message: '删除失败!'
                            })
                        }
                    })

                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    })
                })
            },
            getStyle(ele) {
                var style = null;

                if (window.getComputedStyle) {
                    style = window.getComputedStyle(ele, null);
                } else {
                    style = ele.currentStyle;
                }

                return style;
            },
            //导出table表格
            export2Excel() {
                // var _this = this;
                // setTimeout(function () {
                //     let vb = XLSX.utils.table_to_book(document.getElementById('personnelBaseInfoTable'));
                //     let vbout = XLSX.write(vb, {
                //         bookType: 'xlsx',
                //         bookSST: true,
                //         type: 'array'
                //     });
                //     try {
                //         FileSaver.saveAs(new Blob([vbout], {
                //             type: 'application/octet-stream'
                //         }), '员工基本信息.xlsx');
                //     } catch (e) {
                //         if (typeof console !== 'undefined') console.log(e, vbout);
                //     }
                //     // _this.search();
                // }, 500)

                let thead = {
                    // ALLNAME:'员工基本信息',
                    员工清单: '员工清单',
                    empName: '姓名',
                    departmentName: '所在部门',
                    titleName: '岗位',
                    hiredate: '入职时间',
                    conversionDate: '转正时间',
                    idCard: '身份证',
                    sex: '性别',
                    birthday: '出生日期',
                    householdRegistration: '户口性质',
                    company: '所属公司',
                    contractFiled: '合同是否存档',
                    contractDateFrom: '合同期限开始日',
                    contractDateTo: '合同期限结束日',
                    firstDegreeSchool: '毕业院校',
                    firstDegree: '学历',
                    insuranceDate: '投保日期',
                    leaveDate: '离职日期',
                    reasonsForLeaving: '离职原因',
                    contactPhone: '联系电话',
                    emergencyContact: '紧急联系人',
                    nativePlace: '籍贯',
                    currentResidence: '现居住地',
                    typeOfWork: '工种',
                    certificateName: '证书名称',
                    certificateNumber: '证书编号',
                    annotation: '备注',
                }
                var json = [{
                        '员工清单': '',
                        '姓名': '',
                        '所在部门': '',
                        '岗位': '',
                        '入职时间': '',
                        '转正时间': '',
                        '身份证': '',
                        '性别': '',
                        '出生日期': '',
                        '户口性质': '',
                        '所属公司': '',
                        '合同是否存档': '',
                        '合同期限开始日': '',
                        '合同期限结束日': '',
                        '毕业院校': '',
                        '学历': '',
                        '投保日期': '',
                        '离职日期': '',
                        '离职原因': '',
                        '联系电话': '',
                        '紧急联系人': '',
                        '籍贯': '',
                        '现居住地': '',
                        '工种': '',
                        '证书名称': '',
                        '证书编号': '',
                        '备注': '',

                    },
                    {
                        '员工清单': '序号',
                        '姓名': '姓名',
                        '所在部门': '所在部门',
                        '岗位': '岗位',
                        '入职时间': '入职时间',
                        '转正时间': '转正时间',
                        '身份证': '身份证',
                        '性别': '性别',
                        '出生日期': '出生日期',
                        '户口性质': '户口性质',
                        '所属公司': '所属公司',
                        '合同是否存档': '合同是否存档',
                        '合同期限开始日': '合同期限开始日',
                        '合同期限结束日': '合同期限结束日',
                        '毕业院校': '毕业院校',
                        '学历': '学历',
                        '投保日期': '投保日期',
                        '离职日期': '离职日期',
                        '离职原因': '离职原因',
                        '联系电话': '联系电话',
                        '紧急联系人': '紧急联系人',
                        '籍贯': '籍贯',
                        '现居住地': '现居住地',
                        '工种': '工种',
                        '证书名称': '证书名称',
                        '证书编号': '证书编号',
                        '备注': '备注',

                    }
                ];
                var data = this.tableData;
                for (var i = 0; i < data.length; i++) {
                    var obj = new Object();
                    // obj['序号']=i+0;
                    for (var j in thead) {
                        var name = thead[j];
                        if (name == "性别") {
                            if (data[i][j] == 0) {
                                obj[name] = '女'; //    name:
                            } else {
                                obj[name] = '男';
                            }
                        } else if (name == "户口性质") {
                            obj[name] = this.hkxzsjcl(data[i][j]) ? this.hkxzsjcl(data[i][j]) : ''; //    name:
                        } else if (name == "所属公司") {
                            obj[name] = this.ssgssjcl(data[i][j]) ? this.ssgssjcl(data[i][j]) : ''; //    name:
                        } else if (name == "合同是否存档") {
                            var sfcd = {
                                1: '是',
                                0: '否'
                            }
                            obj[name] = sfcd[data[i][j]]; //    name:
                        } else if (name == "学历") {
                            obj[name] = this.xlsjcl(data[i][j]) ? this.xlsjcl(data[i][j]) : ''; //    name:
                        } else if (name == "工种") {
                            obj[name] = this.gzsjcl(data[i][j]) ? this.gzsjcl(data[i][j]) : ''; //    name:
                        } else if (name == "员工清单") {
                            obj[name] = (i + 1) + "";
                        } else {
                            obj[name] = data[i][j] ? data[i][j] : ''; //    name:
                        }

                    }
                    json[i + 2] = obj;
                }
                // 模拟数据
                this.downloadExl2(json, 'xlsx');
                // this.downloadExl(jsono, 'xlsx');
            },
            saveAs2(obj, fileName) {
                var tmpa = document.createElement("a");
                tmpa.download = fileName || "未命名";
                // 兼容ie 
                if ("msSaveOrOpenBlob" in navigator) {
                    window.navigator.msSaveOrOpenBlob(obj, "员工基本信息" + ".xlsx");
                } else {
                    tmpa.href = URL.createObjectURL(obj);
                }
                tmpa.click();
                setTimeout(function () {
                    URL.revokeObjectURL(obj);
                }, 100);
            },

            downloadExl2(json, type) {
                var tmpdata = json[0];
                json.unshift({});
                var keyMap = []; //获取keys
                for (var k in tmpdata) {
                    keyMap.push(k);
                    json[0][k] = k;
                }
                var tmpdata = []; //用来保存转换好的json 
                json.map((v, i) => keyMap.map((k, j) => Object.assign({}, {
                    v: v[k],
                    position: (j > 25 ? this.getCharCol(j) : String.fromCharCode(65 + j)) + (i + 1)
                }))).reduce((prev, next) => prev.concat(next)).forEach((v, i) => tmpdata[v.position] = {
                    v: v.v
                });
                var outputPos = Object.keys(tmpdata); //设置区域,比如表格从A1到D10
                tmpdata["!merges"] = [{
                        s: {
                            c: 0,
                            r: 0
                        }, //开始 A1
                        e: {
                            c: 26,
                            r: 1
                        } //结束F1
                    },
                    {
                        s: {
                            c: 0,
                            r: 1
                        }, //开始 A2
                        e: {
                            c: 1,
                            r: 1
                        } //结束B2
                    },

                ]; //合并单元格

                //        边框样式
                let border = {
                    bottom: {
                        style: "thin",
                        color: {
                            rgb: "000000"
                        }
                    },
                    top: {
                        style: "thin",
                        color: {
                            rgb: "000000"
                        }
                    },
                    left: {
                        style: "thin",
                        color: {
                            rgb: "000000"
                        }
                    },
                    right: {
                        style: "thin",
                        color: {
                            rgb: "000000"
                        }
                    }
                };
                //加粗
                let style0 = {
                    border: border,
                    alignment: {
                        horizontal: 'center',
                        wrapText: true,
                        vertical: "center"
                    },
                    font: {
                        name: '宋体',
                        sz: 24,
                        bold: true,
                        color: {
                            rgb: "000000"
                        },
                        outline: true
                    },
                    fill: {
                    fgColor: {
                            rgb: "FFFFFF"
                        },
                        bgColor: {
                            indexed: 64,
                            // rgb: "red"
                        },
                    }
                };
                let style1 = {
                    border: border,
                    alignment: {
                        horizontal: 'center',
                        wrapText: true,
                        vertical: "center"
                    },
                    font: {
                        name: '宋体',
                        sz: 12,
                        bold: true,
                        color: {
                            rgb: "000000"
                        },
                        outline: true
                    },
                    fill: {
                        bgColor: {
                            indexed: 64
                        }
                    }
                };
                //不加粗
                let style2 = {
                    border: border,
                    alignment: {
                        horizontal: 'center',
                        wrapText: true,
                        vertical: "center"
                    },
                    font: {
                        name: '宋体',
                        sz: 12,
                        color: {
                            rgb: "000000"
                        },
                        outline: true
                    }
                };
                //蓝底加粗
                let style3 = {
                    border: border,
                    alignment: {
                        horizontal: 'center',
                        wrapText: true,
                        vertical: "center"
                    },
                    font: {
                        name: '宋体',
                        sz: 12,
                        bold: false,
                        color: {
                            rgb: "000000"
                        },
                        outline: true
                    },
                    fill: {
                        fgColor: {
                            rgb: "B8CCE4"
                        },
                        bgColor: {
                            // indexed: 64,
                            rgb: "red"
                        },
                        // fgColor: {
                        //     rgb: "FFFF00"
                        // }
                    }
                };
                //        第一二行样式


                //第一二行样式
                tmpdata["A1"].s = style0;
                tmpdata["A3"].s = style3;
                tmpdata["B3"].s = style3;
                tmpdata["C3"].s = style3;
                tmpdata["D3"].s = style3;
                tmpdata["E3"].s = style3;
                tmpdata["F3"].s = style3;
                tmpdata["G3"].s = style3;
                tmpdata["H3"].s = style3;
                tmpdata["I3"].s = style3;
                tmpdata["J3"].s = style3;
                tmpdata["K3"].s = style3;
                tmpdata["L3"].s = style3;
                tmpdata["M3"].s = style3;
                tmpdata["N3"].s = style3;
                tmpdata["O3"].s = style3;
                tmpdata["P3"].s = style3;
                tmpdata["Q3"].s = style3;
                tmpdata["R3"].s = style3;
                tmpdata["S3"].s = style3;
                tmpdata["T3"].s = style3;
                tmpdata["U3"].s = style3;
                tmpdata["V3"].s = style3;
                tmpdata["W3"].s = style3;
                tmpdata["X3"].s = style3;
                tmpdata["Y3"].s = style3;
                tmpdata["Z3"].s = style3;
                tmpdata["AA3"].s = style3;
                //  //剩余行样式
                for (let i = 4; i <= this.tableData.length + 3; i++) {
                    tmpdata["A" + i].s = style2;
                    tmpdata["B" + i].s = style2;
                    tmpdata["C" + i].s = style2;
                    tmpdata["D" + i].s = style2;
                    tmpdata["E" + i].s = style2;
                    tmpdata["F" + i].s = style2;
                    tmpdata["G" + i].s = style2;
                    tmpdata["H" + i].s = style2;
                    tmpdata["I" + i].s = style2;
                    tmpdata["J" + i].s = style2;
                    tmpdata["K" + i].s = style2;
                    tmpdata["L" + i].s = style2;
                    tmpdata["M" + i].s = style2;
                    tmpdata["N" + i].s = style2;
                    tmpdata["O" + i].s = style2;
                    tmpdata["P" + i].s = style2;
                    tmpdata["Q" + i].s = style2;
                    tmpdata["R" + i].s = style2;
                    tmpdata["S" + i].s = style2;
                    tmpdata["T" + i].s = style2;
                    tmpdata["U" + i].s = style2;
                    tmpdata["V" + i].s = style2;
                    tmpdata["W" + i].s = style2;
                    tmpdata["X" + i].s = style2;
                    tmpdata["Y" + i].s = style2;
                    tmpdata["Z" + i].s = style2;
                    tmpdata["AA" + i].s = style2;
                }
                tmpdata["!cols"] = [ //设置列宽度
                    {
                        wpx: 50
                    }, //序号
                    {
                        wpx: 100
                    }, //发票抬头
                    {
                        wpx: 130
                    }, //开票内容
                    {
                        wpx: 130
                    }, //发票金额
                    {
                        wpx: 120
                    }, //对应工作量月份
                    {
                        wpx: 120
                    }, //预计回款时间
                    {
                        wpx: 150
                    }, //对应项目名称
                    {
                        wpx:50
                    }, //发票类型
                    {
                        wpx: 80
                    }, //税率
                    {
                        wpx: 80
                    }, //备注
                    {
                        wpx: 120
                    }, //序号
                    {
                        wpx: 100
                    }, //发票抬头
                    {
                        wpx: 100
                    }, //开票内容
                    {
                        wpx: 100
                    }, //发票金额
                    {
                        wpx: 90
                    }, //对应工作量月份
                    {
                        wpx: 80
                    }, //预计回款时间
                    {
                        wpx: 100
                    }, //对应项目名称
                    {
                        wpx: 100
                    }, //发票类型
                    {
                        wpx: 80
                    }, //税率
                    {
                        wpx: 150
                    }, //备注
                    {
                        wpx: 120
                    }, //发票类型
                    {
                        wpx: 100
                    }, //税率
                    {
                        wpx: 100
                    }, //备注
                    {
                        wpx: 50
                    }, //备注
                    {
                        wpx: 120
                    }, //发票类型
                    {
                        wpx: 120
                    }, //税率
                    {
                        wpx: 150
                    }, //备注
                ];
                tmpdata["!rows"] = [ //设置行高度
                    {
                        hpt: 100
                    }, //序号
                    


                ];
                var tmpWB = {
                    SheetNames: ['员工清单'], //保存的表标题
                    Sheets: {
                        '员工清单': Object.assign({},
                            tmpdata, //内容
                            {
                                '!ref': outputPos[0] + ':' + outputPos[outputPos.length - 1] //设置填充区域
                            })
                    }
                };
                var tmpDown = new Blob([this.s2ab(XLSX.write(tmpWB, {
                        bookType: (type == undefined ? 'xlsx' : type),
                        bookSST: false,
                        type: 'binary'
                    } //这里的数据是用来定义导出的格式类型
                ))], {
                    type: ""
                });
                this.saveAs2(tmpDown, '员工清单' + '.' + (this.wopts.bookType == "biff2" ? "xlsx" :
                    this.wopts.bookType))
            },
            // 获取26个英文字母用来表示excel的列
            getCharCol(n) {
                let temCol = '',
                    s = '',
                    m = 0
                while (n > 0) {
                    m = n % 26 + 1
                    s = String.fromCharCode(m + 64) + s
                    n = (n - m) / 26
                }
                return s
            },
            s2ab(s) {
                if (typeof ArrayBuffer !== 'undefined') {
                    var buf = new ArrayBuffer(s.length);
                    var view = new Uint8Array(buf);
                    for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
                    return buf;
                } else {
                    var buf = new Array(s.length);
                    for (var i = 0; i != s.length; ++i) buf[i] = s.charCodeAt(i) & 0xFF;
                    return buf;
                }
            },
            //根据身份证号获取出生日期，和性别
            // 身份证验证
            async validID(rule, value, callback) {
                // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X 
                let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
                if (reg.test(value)) {
                    await this.go(value.length);
                    callback()
                } else {
                    callback(new Error('身份证号码不正确'))
                }
            },

            // 实现自动生成生日，性别，年龄
            go(val) {
                let iden = this.formData.idCard;
                let sex = null;
                let birth = null;
                let myDate = new Date();
                let month = myDate.getMonth() + 1;
                let day = myDate.getDate();
                let age = 0;

                if (val === 18) {
                    age = myDate.getFullYear() - iden.substring(6, 10) - 1;
                    sex = iden.substring(16, 17);
                    birth = iden.substring(6, 10) + "-" + iden.substring(10, 12) + "-" + iden.substring(12, 14);
                    if (iden.substring(10, 12) < month || iden.substring(10, 12) == month && iden.substring(12, 14) <=
                        day) age++;

                }
                if (val === 15) {
                    age = myDate.getFullYear() - iden.substring(6, 8) - 1901;
                    sex = iden.substring(13, 14);
                    birth = "19" + iden.substring(6, 8) + "-" + iden.substring(8, 10) + "-" + iden.substring(10, 12);
                    if (iden.substring(8, 10) < month || iden.substring(8, 10) == month && iden.substring(10, 12) <=
                        day) age++;
                }

                if (sex % 2 === 0)
                    sex = '0';
                else
                    sex = '1';
                this.formData.sex = sex;
                // this.baseInfo.age = age;
                this.formData.birthday = birth;
                // this.formData.birthplace = this.area[iden.substring(0,2)];
            },
            changeHandler() {
                var time = this.formData.hiredate;
                var time1 = new Date(time);
                var date = new Date(time1);
                let Y = date.getFullYear() + '-';
                let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1 + 2) : date.getMonth() + 1 + 2) + '-';
                let D = date.getDate() + ' ';
                this.formData.conversionDate = Y + M + D;
            }

        },
        created() {
            this.display = true;
            this.display2 = false;
            this.btns.map((item, index) => {
                if (this.minBtns.indexOf(item.name) != -1) {
                    this.allBtns.push({
                        'name': item.name,
                        'value': item.value
                    })
                }
            });
            this.selectAll();
            this.getSSBMData();
            this.seachAllData();

        },
        mounted() {
            const that = this
            window.onresize = () => { //用于处理
                return (() => {
                    that.heightItem = window.innerHeight - 160;

                })()
            };



        },


    }
</script>

<style lang="scss">
    .posennol {
        header {
            width: 100%;
            height: 136px;
            padding: 10px 0;
            line-height: 30px;
            border-bottom: 1px solid #ebeef5;

            .dictionaryButtons {
                width: 30%;
                line-height: 30px;
                float: left;
            }

            .el-row {
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
                display: flex;
                margin-bottom: 14px;
            }

            .title {
                width: 80px;
                text-align: right;
            }

            .el-col-6,
            .el-col-5,
            .el-col-1,
            .el-col-4 {

                display: flex;
            }

            .selectbox {
                width: 70%;
                float: right;
                height: 100%;
                line-height: 30px;
                text-align: right;
                padding-right: 10px;
                box-sizing: border-box;

                li {
                    font-size: 14px;
                    color: #333;
                    font-weight: 600;
                    display: inline-block;

                    .el-input__inner {
                        height: 30px;
                        line-height: 30px;
                    }

                    .el-select {
                        width: 150px;
                    }

                    .el-input__icon {
                        line-height: 30px;
                    }

                    label {
                        margin: 0 8px;
                    }
                }

            }
        }

        .el-button--small,
        .el-button--small.is-round {
            padding: 6px
        }

        .el-button--mini,
        .el-button--mini.is-round {
            padding: 6px;
        }

        .el-input--suffix .el-input__inner {
            padding-right: 15px;
        }

        .el-table th.gutter {
            display: table-cell !important;
        }

        .el-input {
            width: auto !important;
        }
    }

    #personnelBaseInfo {
        .el-form-item {
            margin-bottom: 22px;
            width: 32%;
            position: relative;
            float: left;
        }

        .el-input {
            width: 100% !important;
        }

        .el-select {

            width: 100% !important;
        }
    }
</style>