(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3ab9f6b5"],{"9e76":function(e,t,a){"use strict";var r=a("69b3"),n=a("eafa"),i=a("e754"),l=a("7108");a("0aed")("match",1,(function(e,t,a,o){return[function(a){var r=e(this),n=void 0==a?void 0:a[t];return void 0!==n?n.call(a,r):new RegExp(a)[t](String(r))},function(e){var t=o(a,e,this);if(t.done)return t.value;var s=r(e),c=String(this);if(!s.global)return l(s,c);var d=s.unicode;s.lastIndex=0;var u,m=[],p=0;while(null!==(u=l(s,c))){var f=String(u[0]);m[p]=f,""===f&&(s.lastIndex=i(c,n(s.lastIndex),d)),p++}return 0===p?null:m}]}))},aac7:function(e,t,a){"use strict";var r=a("c441"),n=a.n(r);n.a},b561:function(e,t,a){var r=a("abd8");t=r(!1),t.push([e.i,".postmanage .postButtons{width:100%;height:30px;padding:5px 10px;border-bottom:1px solid #ebeef5}.postmanage .postButtons .el-input{width:12%}.postmanage .postButtons .el-input .el-input__inner{height:28px}.postmanage .postButtons .el-button--mini,.postmanage .postButtons .el-button--mini.is-round{padding:6px;margin-left:10px}.postmanage .postTable,.postmanage .postTable .el-button--mini,.postmanage .postTable .el-button--mini.is-round{padding:6px}.postmanage .el-table th.gutter{display:table-cell!important}.el-input--suffix .el-input__inner{padding-right:15px}",""]),e.exports=t},b57f:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"postmanage",staticStyle:{width:"100%",height:"100%"},attrs:{"element-loading-text":"拼命加载中","element-loading-background":"rgba(255, 255, 255, 1)"}},[a("div",{staticClass:"postButtons"},[a("label",[e._v("岗位:")]),a("el-input",{attrs:{placeholder:"名称"},model:{value:e.titleSearchStr,callback:function(t){e.titleSearchStr=t},expression:"titleSearchStr"}}),a("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:function(t){e.titleNameLike=e.titleSearchStr}}},[e._v("查询")]),e._l(e.allBtns,(function(t,r){return a("el-button",{key:r,attrs:{type:"primary",icon:"el-icon-circle-plus",size:"mini"},on:{click:function(a){return e.toggle(t.name)}}},[e._v(e._s(t.value))])}))],2),a("div",{staticClass:"postTable"},[a("el-table",{attrs:{data:e.tableDataFilter,height:e.heightItem,"max-height":e.heightItem,border:"","header-cell-style":{padding:"8px 0"},"cell-style":{padding:"5px 0"}},scopedSlots:e._u([{key:"default",fn:function(t){return 0!=t.isMatched?[a("el-table-column",{attrs:{type:"index",label:"序号",width:"100"}}),a("el-table-column",{attrs:{prop:"titleName",label:"岗位名称"}}),a("el-table-column",{attrs:{prop:"departmantName",label:"所属部门"}}),a("el-table-column",{attrs:{prop:"titleType",label:"岗位类型"}}),a("el-table-column",{attrs:{prop:"hierarchy",label:"岗位类别"}}),a("el-table-column",{attrs:{label:"是否有效"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e.setTableHandle(t.row.enabled)))])]}}],null,!0)}),e.handlesActive?a("el-table-column",{attrs:{label:"操作",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑\n                    ")]),a("el-button",{attrs:{size:"mini",type:"danger",icon:"el-icon-delete"},on:{click:function(a){return e.handleDelete(t.$index,t.row)}}},[e._v("删除\n                    ")])]}}],null,!0)}):e._e()]:void 0}}],null,!0)}),a("el-dialog",{attrs:{title:"岗位信息",visible:e.dialogFormVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogFormVisible=t},close:e.cancelHandel}},[a("el-form",{ref:"postManageFormLog",attrs:{"label-position":e.labelPosition,inline:!0,model:e.form,size:"small","label-width":"100px",rules:e.rules}},[a("el-form-item",{attrs:{label:"岗位名称",prop:"titleName"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.titleName,callback:function(t){e.$set(e.form,"titleName",t)},expression:"form.titleName"}})],1),a("el-form-item",{attrs:{label:"岗位类型",prop:"titleType"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.titleType,callback:function(t){e.$set(e.form,"titleType",t)},expression:"form.titleType"}})],1),a("el-form-item",{attrs:{label:"岗位类别",prop:"hierarchy"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.hierarchy,callback:function(t){e.$set(e.form,"hierarchy",t)},expression:"form.hierarchy"}})],1),a("el-form-item",{attrs:{label:"父级岗位",prop:"parentId"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.parentId,callback:function(t){e.$set(e.form,"parentId",t)},expression:"form.parentId"}},e._l(e.parentIdSelectArr,(function(e,t){return a("el-option",{key:t,attrs:{label:e.value,value:e.id}})})),1)],1),a("el-form-item",{attrs:{label:"所属部门",prop:"departmantId"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.departmantId,callback:function(t){e.$set(e.form,"departmantId",t)},expression:"form.departmantId"}},e._l(e.departmantIdArr,(function(e){return a("el-option",{key:e.id,attrs:{label:e.value,value:e.id}})})),1)],1),a("el-form-item",{attrs:{label:"是否有效",prop:"enabled"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.enabled,callback:function(t){e.$set(e.form,"enabled",t)},expression:"form.enabled"}},[a("el-option",{attrs:{label:"有效",value:"1"}}),a("el-option",{attrs:{label:"无效",value:"0"}})],1)],1),a("el-form-item",{attrs:{label:"排序字段",prop:"sortNo"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.sortNo,callback:function(t){e.$set(e.form,"sortNo",t)},expression:"form.sortNo"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:e.cancelHandel}},[e._v("取 消")]),a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){return e.submitForm("postManageFormLog")}}},[e._v("确 定")])],1)],1)],1)])},n=[],i=(a("5ab2"),a("6d57"),a("e10e"),a("cc57"),a("9e76"),a("ac9f")),l=a("6e72"),o=a("8876");function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){Object(i["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var d={props:{treeData:Array},data:function(){return{loading:!0,titleSearchStr:"",titleNameLike:"",minBtns:["Add"],allBtns:[],pageNo:"",pageSize:"",depId:"",key:"",type:"",departmantId:"",enabled:"",tableData:[],heightItem:window.innerHeight-150,handlesActive:!0,form:{},dialogFormVisible:!1,formIndex:-1,oldform:{},dataModel:[],timer:!1,updateIndex:"",parentIdSelectArr:[{id:"#",value:"根节点"}],departmantIdArr:[],labelPosition:"right",rules:{titleName:[{required:!0,message:"请输入岗位名称",trigger:"blur"}],titleType:[{required:!0,message:"请输入岗位类型",trigger:"blur"}],hierarchy:[{required:!0,message:"请输入岗位级别",trigger:"blur"}],parentId:[{required:!0,message:"请选择父级岗位",trigger:"change"}],sortNo:[{required:!0,message:"请输入排序号",trigger:"blur"}]}}},computed:c({},Object(o["b"])({btns:function(e){return e.btns},userId:function(e){return e.user.userId}}),{tableDataFilter:{get:function(){var e=this;return this.tableData.filter((function(t){return t.titleName.match(e.titleNameLike)}))}}}),watch:{heightItem:function(e){if(!this.timer){this.heightItem=e,this.timer=!0;var t=this;setTimeout((function(){t.timer=!1}),400)}}},created:function(){var e=this;this.btns.map((function(t,a){-1!=e.minBtns.indexOf(t.name)&&e.allBtns.push({name:t.name,value:t.value})})),this.$center.$on("dep-event",(function(t){e.parentIdSelectArr=[{id:"#",value:"根节点"}],t!=e.departmantId&&(e.departmantId=t,Object(l["s"])(e.departmantId,"CHILDS").then((function(t){t.success?(e.tableData=t.result,Object(l["s"])(e.departmantId,"PARENT").then((function(t){t.success?(t.result.map((function(t,a){e.parentIdSelectArr.push({id:t.id,value:t.titleName})})),e.loading=!1):(e.loading=!1,e.$message({type:"error",message:"加载失败!"}))}))):(e.loading=!1,e.$message({type:"error",message:"加载失败!"}))})))})),Object(l["o"])().then((function(t){t.success&&t.result.map((function(t,a){e.departmantIdArr.push({id:t.id,value:t.departmantName})}))}))},methods:{activeUsers:function(e){for(var t=0;t<this.departmantIdArr.length;t++)if(this.departmantIdArr[t].key==e)return this.departmantIdArr[t].name},toggle:function(e){"Add"==e&&this.addTaskHandle()},addTaskHandle:function(){var e=this;this.form={titleName:"",titleType:"",enabled:"1",sortNo:"",hierarchy:"",parentId:"#",departmantId:this.departmantId},this.dialogFormVisible=!0,this.updateIndex="",this.parentIdSelectArr=[{id:"#",value:"根节点"}],Object(l["s"])(this.departmantId,"PARENT").then((function(t){t.success&&t.result.map((function(t,a){e.parentIdSelectArr.push({id:t.id,value:t.titleName})}))}))},setTableHandle:function(e){return 1==e?"有效":0==e?"无效":void 0},cancelHandel:function(){for(var e in this.dialogFormVisible=!1,this.$refs["postManageFormLog"].resetFields(),this.form)this.form[e]=this.oldform[e]},submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return t.$message({type:"error",message:"验证失败!"}),!1;var a={titleName:t.form.titleName,titleType:t.form.titleType,enabled:t.form.enabled,sortNo:t.form.sortNo,hierarchy:t.form.hierarchy,parentId:t.form.parentId,departmantId:t.form.departmantId,id:t.updateIndex?t.updateIndex:"",userId:t.userId};t.dialogFormVisible=!1,t.form.departmantId=t.departmantId,Object(l["g"])(a).then((function(e){e.success?(Object(l["s"])(t.departmantId).then((function(e){t.tableData=e.result})),t.$message({type:"success",message:"成功!"})):t.$message({type:"error",message:"失败!"})}))}))},handleEdit:function(e,t){var a=this;this.updateIndex=t.id,this.form=t,this.oldform=c({},t),this.formIndex=e,this.dialogFormVisible=!0,this.parentIdSelectArr=[{id:"#",value:"根节点"}],Object(l["s"])(this.departmantId,"PARENT").then((function(e){e.success&&(e.result.map((function(e,t){a.parentIdSelectArr.push({id:e.id,value:e.titleName})})),a.parentIdSelectArr.map((function(e,t){e.id==a.updateIndex&&a.parentIdSelectArr.splice(t,1)})))}))},handleDelete:function(e,t){var a=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(l["j"])(t.id).then((function(e){e.success?Object(l["m"])(t.id).then((function(e){e.success?Object(l["l"])(t.id).then((function(e){e.success?(Object(l["s"])(a.departmantId).then((function(e){a.tableData=e.result})),a.$message({type:"success",message:"删除成功!"})):a.$message({type:"error",message:"删除失败!"})})):a.$message({type:"error",message:e.message})})):a.$message({type:"error",message:e.message})}))})).catch((function(){a.$message({type:"info",message:"已取消删除"})}))}},mounted:function(){var e=this;window.onresize=function(){return function(){e.heightItem=window.innerHeight-185}()}}},u=d,m=(a("aac7"),a("623f")),p=Object(m["a"])(u,r,n,!1,null,null,null);t["default"]=p.exports},c441:function(e,t,a){var r=a("b561");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var n=a("85cb").default;n("3b0dbb9f",r,!0,{sourceMap:!1,shadowMode:!1})}}]);
//# sourceMappingURL=chunk-3ab9f6b5.87dc35e0.js.map