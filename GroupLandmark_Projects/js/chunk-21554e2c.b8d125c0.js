(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21554e2c"],{"1a6c":function(t,e,a){var n=a("3c77");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=a("85cb").default;r("3005a152",n,!0,{sourceMap:!1,shadowMode:!1})},"1e5b":function(t,e,a){var n=a("fb68"),r=a("859b").set;t.exports=function(t,e,a){var o,i=e.constructor;return i!==a&&"function"==typeof i&&(o=i.prototype)!==a.prototype&&n(o)&&r&&r(t,o),t}},"3b5d":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"departmentPage"}},[a("el-row",{staticClass:"elrow"},[t.qxdata.add?a("el-button",{staticClass:"elbutton addbtn",attrs:{type:"primary",size:"mini",icon:"el-icon-circle-plus"},on:{click:t.addDepartment}},[t._v("增加\n        ")]):t._e(),t.qxdata.updata?a("el-button",{staticClass:"elbutton addbtn",attrs:{type:"primary",size:"mini",icon:"el-icon-edit"},on:{click:t.updataDepartment}},[t._v("\n            修改\n        ")]):t._e(),t.qxdata.delete?a("el-button",{staticClass:"elbutton addbtn",attrs:{type:"danger",size:"mini",icon:"el-icon-delete"},on:{click:t.deleteclick}},[t._v(" 删除\n        ")]):t._e(),a("el-dialog",{attrs:{title:t.title,visible:t.dialogFormVisible,"close-on-click-modal":!1,id:"departmentdialog"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"resultData",attrs:{model:t.resultData,rules:t.rules}},[a("el-form-item",{staticClass:"formitem",attrs:{label:"部门编号","label-width":t.formLabelWidth,prop:"departmant"}},[a("el-input",{model:{value:t.resultData.departmant,callback:function(e){t.$set(t.resultData,"departmant",e)},expression:"resultData.departmant"}})],1),a("el-form-item",{staticClass:"formitem",attrs:{label:"部门名称","label-width":t.formLabelWidth,prop:"departmantName"}},[a("el-input",{model:{value:t.resultData.departmantName,callback:function(e){t.$set(t.resultData,"departmantName",e)},expression:"resultData.departmantName"}})],1),a("el-form-item",{staticClass:"formitem",attrs:{label:"父级部门编号","label-width":t.formLabelWidth,prop:"parentId"}},[a("el-select",{attrs:{placeholder:"请选择父级部门编号"},model:{value:t.resultData.parentId,callback:function(e){t.$set(t.resultData,"parentId",e)},expression:"resultData.parentId"}},[a("el-option",{key:"#",attrs:{label:"根节点",value:"#"}}),t._l(t.options,(function(t){return a("el-option",{key:t.id,attrs:{label:t.departmantName,value:t.id}})}))],2)],1),a("el-form-item",{staticClass:"formitem",attrs:{label:"部门负责人","label-width":t.formLabelWidth}},[a("el-input",{model:{value:t.resultData.departmantOwner,callback:function(e){t.$set(t.resultData,"departmantOwner",e)},expression:"resultData.departmantOwner"}})],1),a("el-form-item",{staticClass:"formitem",attrs:{label:"部门排序","label-width":t.formLabelWidth,prop:"sortNo"}},[a("el-input",{model:{value:t.resultData.sortNo,callback:function(e){t.$set(t.resultData,"sortNo",t._n(e))},expression:"resultData.sortNo"}})],1),a("el-form-item",{staticClass:"formitem",attrs:{label:"是否有效","label-width":t.formLabelWidth}},[(t.resultData.enabled=1)?a("el-checkbox",{attrs:{checked:"checked"},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}},[t._v("是否有效")]):t._e()],1),a("el-form-item",{staticClass:"formitem_btn"},[a("el-button",{staticClass:"elbutton2",attrs:{type:"primary"},on:{click:function(e){return t.onSubmit("resultData")}}},[t._v("提交")]),a("el-button",{staticClass:"elbutton2",staticStyle:{"margin-right":".1rem"},on:{click:function(e){return t.callOf("rules")}}},[t._v("取消\n                    ")])],1)],1)],1)],1),a("app-content",[a("el-form",{ref:"formData",attrs:{data:t.formData}},[a("el-form-item",{attrs:{label:"部门编号","label-width":t.formLabelWidth}},[a("el-input",{attrs:{disabled:!0},model:{value:t.formData.departmant,callback:function(e){t.$set(t.formData,"departmant",e)},expression:"formData.departmant"}})],1),a("el-form-item",{attrs:{label:"部门名称","label-width":t.formLabelWidth}},[a("el-input",{attrs:{disabled:!0},model:{value:t.formData.departmantName,callback:function(e){t.$set(t.formData,"departmantName",e)},expression:"formData.departmantName"}})],1),a("el-form-item",{attrs:{label:"父级部门编号","label-width":t.formLabelWidth}},[a("el-select",{staticStyle:{width:"50%"},attrs:{placeholder:"请选择父级部门编号",disabled:!0},model:{value:t.formData.parentId,callback:function(e){t.$set(t.formData,"parentId",e)},expression:"formData.parentId"}},[a("el-option",{key:"#",attrs:{label:"根节点",value:"#"}}),t._l(t.options,(function(t){return a("el-option",{key:t.id,attrs:{label:t.departmantName,value:t.id}})}))],2)],1),a("el-form-item",{attrs:{label:"排序编码","label-width":t.formLabelWidth}},[a("el-input",{attrs:{disabled:!0},model:{value:t.formData.sortNo,callback:function(e){t.$set(t.formData,"sortNo",e)},expression:"formData.sortNo"}})],1),a("el-form-item",{attrs:{label:"部门负责人","label-width":t.formLabelWidth}},[a("el-input",{attrs:{disabled:!0},model:{value:t.formData.departmantOwner,callback:function(e){t.$set(t.formData,"departmantOwner",e)},expression:"formData.departmantOwner"}})],1),a("el-form-item",{attrs:{label:"是否有效","label-width":t.formLabelWidth}},[(t.resultData.enabled=1)?a("el-checkbox",{attrs:{checked:"checked",disabled:!0},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}},[t._v(" 是否有效\n                ")]):t._e()],1)],1)],1)],1)},r=[],o=(a("5ab2"),a("6d57"),a("e10e"),a("9dd9"),a("ac9f")),i=a("3c7a"),l=a("6e72"),s=a("8876");function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach((function(e){Object(o["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var u={data:function(){return{formData:{},resultData:{id:"",departmant:"",departmantName:"",parentId:"",departmantType:"",departmantOwner:"",sortNo:"",enabled:"",userId:""},title:"部门新增",rules:{departmant:[{required:!0,message:"请输入部门编码",trigger:"blur"}],departmantName:[{required:!0,message:"请输入部门名称",trigger:"blur"}],parentId:[{required:!0,message:"请输入父级部门编码",trigger:"blur"}],departmantType:[{required:!0,message:"请输入部门类型",trigger:"blur"}],sortNo:[{required:!0,message:"请输入部门编码"},{type:"number",message:"必须是数字"}],enabled:[{required:!0,message:"请选择是否有效",trigger:"change"}]},dialogFormVisible:!1,checked:!1,formLabelWidth:"120px",id:"",options:[],qxdata:{add:!0,updata:!0,delete:!0}}},computed:Object(s["b"])({dataId:function(t){return t.department.treeid}}),mounted:function(){var t=this,e=this.$store.state.user.userId,a=this.$store.state.muneId;Object(l["n"])(a,e).then((function(e){if(e.success)for(var a=e.result,n=0;n<a.length;n++)"system:sysDepartment:delete"==a[n]?t.qxdata.delete=!0:"system:sysDepartment:add"==a[n]?t.qxdata.add=!0:"system:sysDepartment:update"==a[n]&&(t.qxdata.addQX=!0)}));var n=this.$store.state.department.treeid;this.getDepartmentData(n),this.getUserDataParent()},methods:{getDepartmentData:function(t){var e=this;this.formData={},Object(i["m"])(t).then((function(t){e.formData=d({},t.data.result)})),this.testHeight=document.querySelector("body").offsetHeight-90},getUserDataParent:function(){var t=this;Object(i["k"])().then((function(e){for(var a=[],n=0;n<e.data.result.length;n++)t.resultData.id!=e.data.result[n].id&&a.push(e.data.result[n]);t.options=a}))},addDepartment:function(){this.title="部门新增",this.dialogFormVisible=!0,this.resultData.id="",this.resultData.parentId=this.$store.state.department.treeid,this.options=[],this.resultData.departmant="",this.resultData.departmantName="",this.resultData.departmantType="",this.resultData.departmantOwner="",this.resultData.enabled="",this.resultData.sortNo="",this.getUserDataParent()},updataDepartment:function(){this.title="部门修改",this.dialogFormVisible=!0,this.options=[],this.resultData.id=this.formData.id,this.resultData.departmant=this.formData.departmant,this.resultData.departmantName=this.formData.departmantName,this.resultData.parentId=this.formData.parentId,this.resultData.departmantType=this.formData.sortNo,this.resultData.departmantOwner=this.formData.departmantOwner,this.resultData.enabled=this.formData.enabled,this.resultData.sortNo=this.formData.sortNo,this.getUserDataParent()},getTreeData:function(){var t=this;Object(i["n"])().then((function(e){t.$emit("headCallBack",e.data.result),t.getDepartmentData(e.data.result[0].id)}))},onSubmit:function(t){var e=this;1==this.checked?this.resultData.enabled=1:this.resultData.enabled=0,this.resultData.userId="1";var a=this.resultData;this.$refs[t].validate((function(t){if(!t)return console.log("error submit!!"),!1;Object(i["b"])(a).then((function(t){e.$message({type:"success",message:"操作成功!"}),e.dialogFormVisible=!1,e.getTreeData()}))}))},deleteclick:function(){var t=this;this.id=this.$store.state.department.treeid,this.$confirm("此操作将永久删除该条数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(e){Object(i["i"])(t.id).then((function(e){e.data.success?Object(i["j"])(t.id).then((function(e){e.data.success?Object(i["f"])(t.id).then((function(e){e.data.success?(t.$message({type:"success",message:"删除成功"}),t.getTreeData()):t.$message({type:"info",message:"删除失败"})})):t.$message({type:"info",message:e.data.message})})):t.$message({type:"info",message:e.data.message})}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},callOf:function(t){this.$refs["resultData"].resetFields(),this.dialogFormVisible=!1,this.options=[],this.resultData.id="",this.resultData.departmant="",this.resultData.departmantName="",this.resultData.parentId="",this.resultData.departmantType="",this.resultData.departmantOwner="",this.resultData.enabled="",this.resultData.sortNo="",this.getDepartmentData(this.$store.state.department.treeid)},proving1:function(t){var e=new RegExp("^+?[1-9][0-9]*$").test(t.target.value);e||(alert("请输入正整数"),t.target.value="")}},watch:{dataId:function(t){this.id=t,this.getDepartmentData(t)}}},m=u,f=(a("f3c5"),a("623f")),h=Object(f["a"])(m,n,r,!1,null,"c11035dc",null);e["default"]=h.exports},"3c77":function(t,e,a){var n=a("abd8");e=n(!1),e.push([t.i,"#departmentPage .elrow[data-v-c11035dc]{padding-left:4px;border-bottom:1px solid #ebe9e9;height:40px;padding-top:5px}#departmentPage .elbutton[data-v-c11035dc]{margin-top:2px}#departmentPage .formitem[data-v-c11035dc]{width:50%;position:relative;float:left;z-index:11}#departmentPage .formitem_btn[data-v-c11035dc]{width:100%;text-align:right}#departmentPage .elbutton2[data-v-c11035dc]{height:30px;line-height:7px;margin-left:10px}#departmentPage .addbtn[data-v-c11035dc]{width:58px;text-align:center;padding:6px}#departmentPage .el-select[data-v-c11035dc]{display:inline-block;position:relative;width:100%}#departmentPage .el-input[data-v-c11035dc]{position:relative;font-size:14px;display:inline-block;width:50%}#departmentPage .el-dialog .el-input[data-v-c11035dc]{width:100%!important}#departmentPage #departmentdialog .el-select[data-v-c11035dc]{width:100%}",""]),t.exports=e},"3c7a":function(t,e,a){"use strict";a.d(e,"m",(function(){return T})),a.d(e,"n",(function(){return R})),a.d(e,"b",(function(){return N})),a.d(e,"f",(function(){return S})),a.d(e,"s",(function(){return $})),a.d(e,"a",(function(){return q})),a.d(e,"g",(function(){return B})),a.d(e,"o",(function(){return U})),a.d(e,"p",(function(){return L})),a.d(e,"e",(function(){return M})),a.d(e,"h",(function(){return W})),a.d(e,"q",(function(){return F})),a.d(e,"c",(function(){return V})),a.d(e,"d",(function(){return z})),a.d(e,"u",(function(){return E})),a.d(e,"r",(function(){return J})),a.d(e,"k",(function(){return Q})),a.d(e,"l",(function(){return G})),a.d(e,"v",(function(){return H})),a.d(e,"t",(function(){return K})),a.d(e,"i",(function(){return X})),a.d(e,"j",(function(){return Y}));var n=a("751a"),r=(a("365c"),"/chouChing/feedbackInfoController/saveData"),o="/chouChing/sysDepartmantController/selectByPrimaryKey",i="/chouChing/sysDepartmantController/searchTreeAllData",l="/chouChing/sysDepartmantController/saveData",s="/chouChing/sysDepartmantController/deleteById",c="/chouChing/sysMenuController/selectByPrimaryKey",d="/chouChing/sysMenuController/saveData",u="/chouChing/sysMenuController/deleteById",m="/chouChing/sysMenuController/searchTreeAllData",f="/chouChing/sysRoleController/searchAllData",h="/chouChing/sysRoleController/saveData",p="/chouChing/sysRoleController/deleteById",b="/chouChing/sysUserController/searchAllData",g="/chouChing/sysRoleController/insertRoleMenuList",D="/chouChing/sysRoleController/insertRoleUserList",y="/chouChing/sysMenuController/searchAllDataByRoleId",P="/chouChing/sysUserController/searchAllDataByRoleId",v="/chouChing/sysDepartmantController/searchAllData",O="/chouChing/sysMenuController/searchAllData",w="/chouChing/sysDepartmantController/verificationIncidenceRelationByChildren",I="/chouChing/sysMenuController/verificationIncidenceRelationByChildren",C="/chouChing/feedbackInfoController/searchData",_="/chouChing/feedbackInfoController/deleteById",k="/chouChing/sysMenuController/verificationRepeat",A="/chouChing/sysDepartmantController/verificationIncidenceRelationByChildren",j="/chouChing/sysDepartmantController/verificationIncidenceRelationByTitle",x={taskFk_API:r,department_API:o,departmentTree_API:i,departmentAddandUpdata_API:l,departmentDelete_API:s,menuQuery_API:c,menuAddandUpdata_API:d,menudelete_API:u,menuTree_API:m,Roledata_API:f,addAndupdataRole_API:h,deleteRole_API:p,getuserData_API:b,AddAndUpdaturoleData_API:g,AddAndUpdatuUserData_API:D,qxtreeDatachecked:y,getroleGJjsID:P,getAlldepartsinfo:v,getAllmenuinfo:O,sysDepartmant_yz:w,sysMenu_yz:I,taskFeedback_api:C,deleteTask:_,menuVerificationRepeat:k,verificationIncidenceRelationbm:A,verificationIncidenceRelationByTitlebm:j};function T(t){return new Promise((function(e,a){Object(n["a"])({url:x.department_API,method:"POST",data:{id:t}}).then((function(t,a){e(t)})).catch((function(t){console.log(data)}))}))}function R(){return new Promise((function(t,e){Object(n["a"])({url:x.departmentTree_API,method:"POST"}).then((function(e,a){t(e)})).catch((function(t){console.log(data)}))}))}function N(t){return new Promise((function(e,a){Object(n["a"])({url:x.departmentAddandUpdata_API,method:"POST",data:t}).then((function(t,a){e(t)})).catch((function(t){console.log(data)}))}))}function S(t){return new Promise((function(e,a){Object(n["a"])({url:x.departmentDelete_API,method:"POST",data:{id:t}}).then((function(t,a){e(t)})).catch((function(t){console.log(data)}))}))}function $(t){return new Promise((function(e,a){Object(n["a"])({url:x.menuQuery_API,method:"POST",data:{id:t}}).then((function(t,a){e(t)})).catch((function(t){console.log(data)}))}))}function q(t){return new Promise((function(e,a){Object(n["a"])({url:x.menuAddandUpdata_API,method:"POST",data:t}).then((function(t,a){e(t)})).catch((function(t){console.log(data)}))}))}function B(t){return new Promise((function(e,a){Object(n["a"])({url:x.menudelete_API,method:"POST",data:{id:t}}).then((function(t,a){e(t)})).catch((function(t){console.log(data)}))}))}function U(){return new Promise((function(t,e){Object(n["a"])({url:x.menuTree_API,method:"POST"}).then((function(e,a){t(e)})).catch((function(t){console.log(data)}))}))}function L(){return new Promise((function(t,e){Object(n["a"])({url:x.Roledata_API,method:"POST"}).then((function(e,a){t(e)})).catch((function(t){console.log(data)}))}))}function M(t){return new Promise((function(e,a){Object(n["a"])({url:x.addAndupdataRole_API,method:"POST",data:t}).then((function(t,a){e(t)})).catch((function(t){console.log(data)}))}))}function W(t){return new Promise((function(e,a){Object(n["a"])({url:x.deleteRole_API,method:"POST",data:{id:t}}).then((function(t,a){e(t)})).catch((function(t){console.log(data)}))}))}function F(){return new Promise((function(t,e){Object(n["a"])({url:x.getuserData_API,method:"POST"}).then((function(e,a){t(e)})).catch((function(t){console.log(data)}))}))}function V(t,e){return new Promise((function(a,r){Object(n["a"])({url:x.AddAndUpdaturoleData_API,method:"POST",data:{roleId:t,menuIds:e}}).then((function(t,e){a(t)})).catch((function(t){console.log(data)}))}))}function z(t,e){return new Promise((function(a,r){Object(n["a"])({url:x.AddAndUpdatuUserData_API,method:"POST",data:{roleId:t,userIds:e}}).then((function(t,e){a(t)})).catch((function(t){console.log(data)}))}))}function E(t){return new Promise((function(e,a){Object(n["a"])({url:x.qxtreeDatachecked,method:"POST",data:{roleId:t}}).then((function(t,a){e(t)})).catch((function(t){console.log(data)}))}))}function J(t){return new Promise((function(e,a){Object(n["a"])({url:x.getroleGJjsID,method:"POST",data:{roleId:t}}).then((function(t,a){e(t)})).catch((function(t){console.log(data)}))}))}function Q(t){return new Promise((function(e,a){Object(n["a"])({url:x.getAlldepartsinfo,method:"POST",data:{roleId:t}}).then((function(t,a){e(t)})).catch((function(t){console.log(data)}))}))}function G(t){return new Promise((function(e,a){Object(n["a"])({url:x.getAllmenuinfo,method:"POST",data:{roleId:t,type:"menu"}}).then((function(t,a){e(t)})).catch((function(t){console.log(data)}))}))}function H(t){return new Promise((function(e,a){Object(n["a"])({url:x.sysMenu_yz,method:"POST",data:{id:t}}).then((function(t,a){e(t)})).catch((function(t){console.log(data)}))}))}function K(t,e){return new Promise((function(a,r){Object(n["a"])({url:x.menuVerificationRepeat,method:"POST",data:{menuCode:t,id:e}}).then((function(t,e){a(t)})).catch((function(t){console.log(data)}))}))}function X(t){return new Promise((function(e,a){Object(n["a"])({url:x.verificationIncidenceRelationbm,method:"POST",data:{id:t}}).then((function(t,a){e(t)})).catch((function(t){console.log(data)}))}))}function Y(t){return new Promise((function(e,a){Object(n["a"])({url:x.verificationIncidenceRelationByTitlebm,method:"POST",data:{id:t}}).then((function(t,a){e(t)})).catch((function(t){console.log(data)}))}))}},"859b":function(t,e,a){var n=a("fb68"),r=a("69b3"),o=function(t,e){if(r(t),!n(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,n){try{n=a("4ce5")(Function.call,a("dcb7").f(Object.prototype,"__proto__").set,2),n(t,[]),e=!(t instanceof Array)}catch(r){e=!0}return function(t,a){return o(t,a),e?t.__proto__=a:n(t,a),t}}({},!1):void 0),check:o}},"9dd9":function(t,e,a){var n=a("e7ad"),r=a("1e5b"),o=a("064e").f,i=a("2ea2").f,l=a("2fd4"),s=a("f1fe"),c=n.RegExp,d=c,u=c.prototype,m=/a/g,f=/a/g,h=new c(m)!==m;if(a("149f")&&(!h||a("238a")((function(){return f[a("cb3d")("match")]=!1,c(m)!=m||c(f)==f||"/a/i"!=c(m,"i")})))){c=function(t,e){var a=this instanceof c,n=l(t),o=void 0===e;return!a&&n&&t.constructor===c&&o?t:r(h?new d(n&&!o?t.source:t,e):d((n=t instanceof c)?t.source:t,n&&o?s.call(t):e),a?this:u,c)};for(var p=function(t){t in c||o(c,t,{configurable:!0,get:function(){return d[t]},set:function(e){d[t]=e}})},b=i(d),g=0;b.length>g;)p(b[g++]);u.constructor=c,c.prototype=u,a("bf16")(n,"RegExp",c)}a("1157")("RegExp")},f3c5:function(t,e,a){"use strict";var n=a("1a6c"),r=a.n(n);r.a}}]);
//# sourceMappingURL=chunk-21554e2c.b8d125c0.js.map