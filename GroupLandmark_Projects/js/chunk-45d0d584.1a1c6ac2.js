(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-45d0d584"],{"00b6":function(e,t,n){var a=n("abd8");t=a(!1),t.push([e.i,"#rolemanegePage .elrow[data-v-e7fe66e8]{padding-left:4px;border-bottom:1px solid #ebe9e9;height:40px;padding-top:5px}#rolemanegePage .elbutton[data-v-e7fe66e8]{margin-top:2px}#rolemanegePage .formitem[data-v-e7fe66e8]{width:50%;position:relative;float:left;z-index:11}#rolemanegePage .formitem_btn[data-v-e7fe66e8]{width:100%;text-align:right}#rolemanegePage .elbutton2[data-v-e7fe66e8]{height:30px;line-height:5px;margin-left:10px}#rolemanegePage .addbtn[data-v-e7fe66e8]{width:58px;text-align:center;padding:6px}#rolemanegePage .el-input[data-v-e7fe66e8],#rolemanegePage .el-select[data-v-e7fe66e8]{display:inline-block;position:relative;width:50%}#rolemanegePage .el-input[data-v-e7fe66e8]{font-size:14px}#rolemanegePage .el-dialog .el-input[data-v-e7fe66e8]{width:100%!important}",""]),e.exports=t},"281c":function(e,t,n){"use strict";var a=n("708d"),o=n.n(a);o.a},"3c7a":function(e,t,n){"use strict";n.d(t,"m",(function(){return R})),n.d(t,"n",(function(){return S})),n.d(t,"b",(function(){return T})),n.d(t,"f",(function(){return q})),n.d(t,"s",(function(){return U})),n.d(t,"a",(function(){return N})),n.d(t,"g",(function(){return L})),n.d(t,"o",(function(){return M})),n.d(t,"p",(function(){return B})),n.d(t,"e",(function(){return F})),n.d(t,"h",(function(){return $})),n.d(t,"q",(function(){return E})),n.d(t,"c",(function(){return V})),n.d(t,"d",(function(){return z})),n.d(t,"u",(function(){return H})),n.d(t,"r",(function(){return J})),n.d(t,"k",(function(){return G})),n.d(t,"l",(function(){return Q})),n.d(t,"v",(function(){return X})),n.d(t,"t",(function(){return W})),n.d(t,"i",(function(){return K})),n.d(t,"j",(function(){return Y}));var a=n("751a"),o=(n("365c"),"/chouChing/feedbackInfoController/saveData"),i="/chouChing/sysDepartmantController/selectByPrimaryKey",r="/chouChing/sysDepartmantController/searchTreeAllData",l="/chouChing/sysDepartmantController/saveData",c="/chouChing/sysDepartmantController/deleteById",s="/chouChing/sysMenuController/selectByPrimaryKey",d="/chouChing/sysMenuController/saveData",u="/chouChing/sysMenuController/deleteById",f="/chouChing/sysMenuController/searchTreeAllData",h="/chouChing/sysRoleController/searchAllData",m="/chouChing/sysRoleController/saveData",g="/chouChing/sysRoleController/deleteById",p="/chouChing/sysUserController/searchAllData",b="/chouChing/sysRoleController/insertRoleMenuList",y="/chouChing/sysRoleController/insertRoleUserList",x="/chouChing/sysMenuController/searchAllDataByRoleId",v="/chouChing/sysUserController/searchAllDataByRoleId",w="/chouChing/sysDepartmantController/searchAllData",P="/chouChing/sysMenuController/searchAllData",k="/chouChing/sysDepartmantController/verificationIncidenceRelationByChildren",I="/chouChing/sysMenuController/verificationIncidenceRelationByChildren",A="/chouChing/feedbackInfoController/searchData",D="/chouChing/feedbackInfoController/deleteById",C="/chouChing/sysMenuController/verificationRepeat",O="/chouChing/sysDepartmantController/verificationIncidenceRelationByChildren",_="/chouChing/sysDepartmantController/verificationIncidenceRelationByTitle",j={taskFk_API:o,department_API:i,departmentTree_API:r,departmentAddandUpdata_API:l,departmentDelete_API:c,menuQuery_API:s,menuAddandUpdata_API:d,menudelete_API:u,menuTree_API:f,Roledata_API:h,addAndupdataRole_API:m,deleteRole_API:g,getuserData_API:p,AddAndUpdaturoleData_API:b,AddAndUpdatuUserData_API:y,qxtreeDatachecked:x,getroleGJjsID:v,getAlldepartsinfo:w,getAllmenuinfo:P,sysDepartmant_yz:k,sysMenu_yz:I,taskFeedback_api:A,deleteTask:D,menuVerificationRepeat:C,verificationIncidenceRelationbm:O,verificationIncidenceRelationByTitlebm:_};function R(e){return new Promise((function(t,n){Object(a["a"])({url:j.department_API,method:"POST",data:{id:e}}).then((function(e,n){t(e)})).catch((function(e){console.log(data)}))}))}function S(){return new Promise((function(e,t){Object(a["a"])({url:j.departmentTree_API,method:"POST"}).then((function(t,n){e(t)})).catch((function(e){console.log(data)}))}))}function T(e){return new Promise((function(t,n){Object(a["a"])({url:j.departmentAddandUpdata_API,method:"POST",data:e}).then((function(e,n){t(e)})).catch((function(e){console.log(data)}))}))}function q(e){return new Promise((function(t,n){Object(a["a"])({url:j.departmentDelete_API,method:"POST",data:{id:e}}).then((function(e,n){t(e)})).catch((function(e){console.log(data)}))}))}function U(e){return new Promise((function(t,n){Object(a["a"])({url:j.menuQuery_API,method:"POST",data:{id:e}}).then((function(e,n){t(e)})).catch((function(e){console.log(data)}))}))}function N(e){return new Promise((function(t,n){Object(a["a"])({url:j.menuAddandUpdata_API,method:"POST",data:e}).then((function(e,n){t(e)})).catch((function(e){console.log(data)}))}))}function L(e){return new Promise((function(t,n){Object(a["a"])({url:j.menudelete_API,method:"POST",data:{id:e}}).then((function(e,n){t(e)})).catch((function(e){console.log(data)}))}))}function M(){return new Promise((function(e,t){Object(a["a"])({url:j.menuTree_API,method:"POST"}).then((function(t,n){e(t)})).catch((function(e){console.log(data)}))}))}function B(){return new Promise((function(e,t){Object(a["a"])({url:j.Roledata_API,method:"POST"}).then((function(t,n){e(t)})).catch((function(e){console.log(data)}))}))}function F(e){return new Promise((function(t,n){Object(a["a"])({url:j.addAndupdataRole_API,method:"POST",data:e}).then((function(e,n){t(e)})).catch((function(e){console.log(data)}))}))}function $(e){return new Promise((function(t,n){Object(a["a"])({url:j.deleteRole_API,method:"POST",data:{id:e}}).then((function(e,n){t(e)})).catch((function(e){console.log(data)}))}))}function E(){return new Promise((function(e,t){Object(a["a"])({url:j.getuserData_API,method:"POST"}).then((function(t,n){e(t)})).catch((function(e){console.log(data)}))}))}function V(e,t){return new Promise((function(n,o){Object(a["a"])({url:j.AddAndUpdaturoleData_API,method:"POST",data:{roleId:e,menuIds:t}}).then((function(e,t){n(e)})).catch((function(e){console.log(data)}))}))}function z(e,t){return new Promise((function(n,o){Object(a["a"])({url:j.AddAndUpdatuUserData_API,method:"POST",data:{roleId:e,userIds:t}}).then((function(e,t){n(e)})).catch((function(e){console.log(data)}))}))}function H(e){return new Promise((function(t,n){Object(a["a"])({url:j.qxtreeDatachecked,method:"POST",data:{roleId:e}}).then((function(e,n){t(e)})).catch((function(e){console.log(data)}))}))}function J(e){return new Promise((function(t,n){Object(a["a"])({url:j.getroleGJjsID,method:"POST",data:{roleId:e}}).then((function(e,n){t(e)})).catch((function(e){console.log(data)}))}))}function G(e){return new Promise((function(t,n){Object(a["a"])({url:j.getAlldepartsinfo,method:"POST",data:{roleId:e}}).then((function(e,n){t(e)})).catch((function(e){console.log(data)}))}))}function Q(e){return new Promise((function(t,n){Object(a["a"])({url:j.getAllmenuinfo,method:"POST",data:{roleId:e,type:"menu"}}).then((function(e,n){t(e)})).catch((function(e){console.log(data)}))}))}function X(e){return new Promise((function(t,n){Object(a["a"])({url:j.sysMenu_yz,method:"POST",data:{id:e}}).then((function(e,n){t(e)})).catch((function(e){console.log(data)}))}))}function W(e,t){return new Promise((function(n,o){Object(a["a"])({url:j.menuVerificationRepeat,method:"POST",data:{menuCode:e,id:t}}).then((function(e,t){n(e)})).catch((function(e){console.log(data)}))}))}function K(e){return new Promise((function(t,n){Object(a["a"])({url:j.verificationIncidenceRelationbm,method:"POST",data:{id:e}}).then((function(e,n){t(e)})).catch((function(e){console.log(data)}))}))}function Y(e){return new Promise((function(t,n){Object(a["a"])({url:j.verificationIncidenceRelationByTitlebm,method:"POST",data:{id:e}}).then((function(e,n){t(e)})).catch((function(e){console.log(data)}))}))}},"54d0":function(e,t,n){"use strict";function a(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function o(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function r(e){return a(e)||o(e)||i()}n.d(t,"a",(function(){return r}))},"60b9":function(e,t,n){"use strict";var a=n("b096"),o=n.n(a);o.a},"67cf":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%",height:"100%"},attrs:{"element-loading-text":"拼命加载中","element-loading-background":"rgba(255, 255, 255, 1)",id:"rolemanegePage"}},[n("el-row",{staticClass:"elrow"},[e.qxdata.add?n("el-button",{staticClass:"elbutton addbtn",attrs:{type:"primary",size:"mini",icon:"el-icon-circle-plus"},on:{click:e.addRole}},[e._v("增加\n        ")]):e._e(),n("el-dialog",{attrs:{title:e.title,visible:e.dialogFormVisible,"close-on-click-modal":!1,id:"roledialog"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[n("el-form",{ref:"resultData",attrs:{model:e.resultData,rules:e.rules}},[n("el-form-item",{staticClass:"formitem",attrs:{label:"角色名称","label-width":e.formLabelWidth,prop:"roleName"}},[n("el-input",{model:{value:e.resultData.roleName,callback:function(t){e.$set(e.resultData,"roleName",t)},expression:"resultData.roleName"}})],1),n("el-form-item",{staticClass:"formitem",attrs:{label:"是否有效","label-width":e.formLabelWidth}},[n("el-select",{staticStyle:{width:"100%"},model:{value:e.resultData.enabled,callback:function(t){e.$set(e.resultData,"enabled",t)},expression:"resultData.enabled"}},[n("el-option",{attrs:{value:"0",label:"无效"}}),n("el-option",{attrs:{value:"1",label:"有效",checked:"checked"}})],1)],1),n("el-form-item",{staticClass:"formitem_btn"},[n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.onSubmit("resultData")}}},[e._v("提交")]),n("el-button",{attrs:{size:"mini"},on:{click:function(t){return e.callOf("rules")}}},[e._v("取消")])],1)],1)],1)],1),n("div",{staticStyle:{height:"60%","margin-top":"5px"},attrs:{id:"tableId1"}},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,height:e.heightItem,"max-height":e.heightItem,border:"","header-cell-style":{padding:"8px 0"},"cell-style":{padding:"5px 0"}}},[n("el-table-column",{attrs:{type:"index",index:e.indexMethod(1),label:"序列号",width:"120",height:"10"}}),n("el-table-column",{attrs:{prop:"roleName",label:"角色名称"}}),n("el-table-column",{attrs:{prop:"enabled",label:"是否有效"}}),n("el-table-column",{attrs:{label:"操作",width:"250"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.qxdata.updata?n("el-button",{staticStyle:{width:"57px",padding:"5px 0px 5px 0px"},attrs:{size:"mini",type:"primary",icon:"el-icon-edit"},on:{click:function(n){return e.handleEdit(t.$index,t.row)}}},[e._v("\n                        修改\n                    ")]):e._e(),e.qxdata.delete?n("el-button",{staticStyle:{width:"57px",padding:"5px 0px 5px 0px"},attrs:{size:"mini",type:"danger",icon:"el-icon-delete"},on:{click:function(n){return e.handleDelete(t.$index,t.row)}}},[e._v("删除\n                    ")]):e._e(),e.qxdata.addQX?n("el-button",{staticStyle:{width:"57px",padding:"5px 0px 5px 0px"},attrs:{type:"primary",size:"mini",icon:"el-icon-edit"},on:{click:function(n){return e.addRoleqx(t.$index,t.row)}}},[e._v("权限\n                    ")]):e._e()]}}])})],1),n("el-dialog",{attrs:{title:"权限设置",visible:e.dialogFormVisibleqx,"close-on-click-modal":!1,id:"roledialogqxxg"},on:{"update:visible":function(t){e.dialogFormVisibleqx=t}}},[n("el-tabs",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"},on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[n("el-tab-pane",{staticStyle:{"min-height":"200px"},attrs:{label:"菜单权限",name:"first"}},[n("el-tree",{ref:"tree",attrs:{data:e.treedata,"show-checkbox":"","default-expand-all":"","node-key":"id","highlight-current":"",props:e.defaultProps,"default-checked-keys":e.defaultcheckedkeys,"check-strictly":e.checkstrictly},on:{"node-click":e.eltreeCheckchange,"check-change":e.eltreeCheckchange,check:e.eltreeCheckchange}})],1),n("el-tab-pane",{staticStyle:{"min-height":"200px"},attrs:{label:"分配用户",name:"second"}},[n("el-transfer",{attrs:{props:{key:"id",label:"userName"},titles:["选择用户","已选用户"],data:e.transferUserdata,id:"transfer"},model:{value:e.Uservalue,callback:function(t){e.Uservalue=t},expression:"Uservalue"}})],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{size:"small"},on:{click:function(t){return e.qxtiqx()}}},[e._v("取 消")]),n("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.submitqx}},[e._v("确 定")])],1)],1)],1)],1)},o=[],i=(n("47e7"),n("cc57"),n("54d0")),r=n("3c7a"),l=n("6e72"),c=(n("7b04"),n("ce69"),n("ecc0"),{data:function(){return{loading:!0,tableData:[],resultData:{roleName:"",enabled:"",id:"",userId:""},title:"角色新增",rules:{roleName:[{required:!0,message:"请输入角色名称",trigger:"blur"}]},spanArr:[],multipleSelection:[],dialogFormVisible:!1,dialogFormVisibleqx:!1,formLabelWidth:"80px",form:{},value6:"",currentIndex:"",formIndex:-1,activeName:"first",treedata:[],defaultProps:{children:"childrenList",label:"menuName"},transferUserdata:[],Uservalue:[],defaultcheckedkeys:[],heightItem:window.innerHeight-160,checkstrictly:!0,qxdata:{add:!0,updata:!0,delete:!0,addQX:!0}}},mounted:function(){this.getRoledata(),this.getqx()},methods:{getqx:function(){var e=this,t=this.$store.state.user.userId,n=this.$store.state.muneId;Object(l["n"])(n,t).then((function(t){if(t.result.length>0){console.log(t.result);for(var n=t.result,a=0;a<n.length;a++)"system:sysRole:delete"==n[a]?e.qxdata.delete=!0:"system:sysRole:add"==n[a]?e.qxdata.add=!0:("system:sysRole:update"==n[a]||"system:sysRole:auth"==n[a])&&(e.qxdata.addQX=!0)}}))},getRoledata:function(){var e=this;Object(r["p"])("1",this.pagesize).then((function(t){e.tableData=t.data.result;for(var n=0;n<t.data.result.length;n++)1==t.data.result[n].enabled?e.tableData[n].enabled="有效":e.tableData[n].enabled="无效";e.loading=!1}))},getUserManList:function(e){var t=this;Object(r["q"])().then((function(n){t.transferUserdata=n.data.result.filter((function(e){return""!=e.userName})).filter((function(e){return null!=e.userName})),t.getRolesGjuserid(e)}))},indexMethod:function(e){return e++},addRole:function(){this.title="菜单新增",this.dialogFormVisible=!0,this.resultData.id="",this.resultData.roleName="",this.resultData.enabled=""},handleEdit:function(e,t){this.title="菜单修改",this.form=t,this.formIndex=e,this.currentIndex=e,this.resultData.id=t.id,this.resultData.roleName=t.roleName,"有效"==t.enabled||"1"==t.enabled?this.resultData.enabled="1":this.resultData.enabled="0",this.dialogFormVisible=!0},handleDelete:function(e,t){var n=this;this.$confirm("此操作将永久删除该条数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(r["h"])(t.id).then((function(e){n.$message({type:"success",message:"删除成功!"}),n.getRoledata()}))})).catch((function(){n.$message({type:"info",message:"已取消删除"})}))},onSubmit:function(e){var t=this;this.resultData.userId=this.$store.state.user.userId;var n=this.resultData;this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;Object(r["e"])(n).then((function(e){e.data.result&&(t.$message({type:"success",message:"操作成功!"}),t.dialogFormVisible=!1,t.getRoledata())}))}))},closeDialog:function(e){this.$confirm("确认关闭？").then((function(t){e(),location.reload()})).catch((function(e){}))},getALLmenuData:function(e){var t=this;Object(r["o"])().then((function(n){t.treedata=n.data.result,t.getTreeDatagj_id(e)}))},addRoleqx:function(e,t){this.resultData.id=t.id,this.dialogFormVisibleqx=!0,this.getALLmenuData(this.resultData.id)},getTreeDatagj_id:function(e){var t=this;Object(r["u"])(e).then((function(e){var n=e.data.result,a=[];if(n.length>0){for(var o=0;o<n.length;o++)a.push(n[o].id);t.defaultcheckedkeys=a,t.loading=!1}else t.defaultcheckedkeys=[],t.loading=!1}))},getRolesGjuserid:function(e){var t=this;Object(r["r"])(e).then((function(e){for(var n=e.data.result,a=[],o=0;o<n.length;o++)a.push(n[o].id);t.Uservalue=a}))},submitqx:function(){var e=this,t=this.resultData.id;if("first"==this.activeName){for(var n=this.$refs.tree.getCheckedNodes(),a=this.$refs.tree.getHalfCheckedNodes(),o=[],l=0;l<n.length;l++)o.push(n[l].id);for(var c=0;c<a.length;c++)o.push(a[c].id);var s=JSON.stringify(o);Object(r["c"])(t,s).then((function(t){1==t.data.success&&(e.$message({type:"success",message:"操作成功！"}),e.getRoledata(),e.qxtiqx())}))}else{var d=JSON.stringify(Object(i["a"])(this.Uservalue));Object(r["d"])(t,d).then((function(t){1==t.data.success&&(e.$message({type:"success",message:"操作成功！"}),e.getRoledata(),e.qxtiqx())}))}this.activeName="first",this.checkstrictly=!0},qxtiqx:function(){this.dialogFormVisibleqx=!1,this.treedata=[],this.defaultcheckedkeys=[],this.transferUserdata=[],this.Uservalue=[],this.activeName="first",this.checkstrictly=!0},handleClick:function(e,t){"second"==e.name?this.getUserManList(this.resultData.id):(this.getALLmenuData(this.resultData.id),this.transferUserdata=[])},callOf:function(e){this.dialogFormVisible=!1,this.resultData.id="",this.resultData.roleName="",this.resultData.enabled="",this.getRoledata()},cancelHandel:function(){this.$refs["resultData"].resetFields(),this.dialogFormVisibleqx=!1,this.activeName="first",this.treedata=[]},eltreeCheckchange:function(){this.checkstrictly=!1},objectSpanMethod:function(e){e.row,e.column;var t=e.rowIndex,n=e.columnIndex;if(0===n)return this.spanArr[t]?{rowspan:this.spanArr[t],colspan:1}:{rowspan:0,colspan:0}},s2ab:function(e){if("undefind"!==typeof ArrayBuffer){for(var t=new ArrayBuffer(e.length),n=new Uint8Array(t),a=0;a!=e.length;++a)n[a]=255&e.charCodeAt(a);return t}for(t=new Array(e.length),a=0;a!=e.length;++a)t[a]=255&e.charCodeAt(a);return t},switchChange:function(){this.istag=!this.istag}}}),s=c,d=(n("281c"),n("60b9"),n("623f")),u=Object(d["a"])(s,a,o,!1,null,"e7fe66e8",null);t["default"]=u.exports},"708d":function(e,t,n){var a=n("d45e");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var o=n("85cb").default;o("746694e6",a,!0,{sourceMap:!1,shadowMode:!1})},b096:function(e,t,n){var a=n("00b6");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var o=n("85cb").default;o("33c899a3",a,!0,{sourceMap:!1,shadowMode:!1})},d45e:function(e,t,n){var a=n("abd8");t=a(!1),t.push([e.i,"#tableId1{padding:0 20px}#tableId1 table{border:none;border-collapse:collapse!important}#tableId1 table td{border:1px solid #ebeef5}#tableId1 .el-table thead{background-color:red}#tableId1 .el-dialog__body{padding:5px 30px}#tableId1 .el-checkbox{margin-right:0}#tableId1 .el-tab-paneFour .el-form{width:288px!important}#tableId1 .el-input--suffix .el-input__inner{padding-right:15px}#roledialogqxxg .el-dialog__body{padding:5px 30px}#roledialogqxxg .el-transfer-panel{width:42%}#roledialogqxxg .el-transfer-panel__item.el-checkbox{width:90%}#roledialogqxxg .el-checkbox{margin-right:0}#roledialogqxxg .el-tab-paneFour .el-form{width:288px!important}#roledialogqxxg .el-input--suffix .el-input__inner{padding-right:15px}#roledialogqxxg .el-checkbox:last-child{margin-right:0;width:95%}",""]),e.exports=t},ecc0:function(e,t,n){(function(n){var a,o,i;(function(n,r){o=[],a=r,i="function"===typeof a?a.apply(t,o):a,void 0===i||(e.exports=i)})(0,(function(){"use strict";function t(e,t){return"undefined"==typeof t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function a(e,t,n){var a=new XMLHttpRequest;a.open("GET",e),a.responseType="blob",a.onload=function(){l(a.response,t,n)},a.onerror=function(){console.error("could not download file")},a.send()}function o(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function i(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(a){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var r="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n&&n.global===n?n:void 0,l=r.saveAs||("object"!=typeof window||window!==r?function(){}:"download"in HTMLAnchorElement.prototype?function(e,t,n){var l=r.URL||r.webkitURL,c=document.createElement("a");t=t||e.name||"download",c.download=t,c.rel="noopener","string"==typeof e?(c.href=e,c.origin===location.origin?i(c):o(c.href)?a(e,t,n):i(c,c.target="_blank")):(c.href=l.createObjectURL(e),setTimeout((function(){l.revokeObjectURL(c.href)}),4e4),setTimeout((function(){i(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,r){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,r),n);else if(o(e))a(e,n,r);else{var l=document.createElement("a");l.href=e,l.target="_blank",setTimeout((function(){i(l)}))}}:function(e,t,n,o){if(o=o||open("","_blank"),o&&(o.document.title=o.document.body.innerText="downloading..."),"string"==typeof e)return a(e,t,n);var i="application/octet-stream"===e.type,l=/constructor/i.test(r.HTMLElement)||r.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||i&&l)&&"object"==typeof FileReader){var s=new FileReader;s.onloadend=function(){var e=s.result;e=c?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=e:location=e,o=null},s.readAsDataURL(e)}else{var d=r.URL||r.webkitURL,u=d.createObjectURL(e);o?o.location=u:location.href=u,o=null,setTimeout((function(){d.revokeObjectURL(u)}),4e4)}});r.saveAs=l.saveAs=l,e.exports=l}))}).call(this,n("77e5"))}}]);
//# sourceMappingURL=chunk-45d0d584.1a1c6ac2.js.map