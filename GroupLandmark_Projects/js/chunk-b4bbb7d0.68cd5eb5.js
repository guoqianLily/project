(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b4bbb7d0"],{3144:function(e,t,l){"use strict";var i=l("3609"),a=l.n(i);a.a},3609:function(e,t,l){var i=l("55a9");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=l("85cb").default;a("ef737df8",i,!0,{sourceMap:!1,shadowMode:!1})},"55a9":function(e,t,l){var i=l("abd8");t=i(!1),t.push([e.i,".dictionary header{width:100%;height:30px;padding:10px 0;line-height:30px;border-bottom:1px solid #ebeef5}.dictionary header .dictionaryButtons{width:30%;line-height:30px;float:left}.dictionary header .selectbox{width:70%;float:right;height:100%;line-height:30px;text-align:right;padding-right:10px;-webkit-box-sizing:border-box;box-sizing:border-box}.dictionary header .selectbox li{font-size:14px;color:#333;font-weight:600;display:inline-block}.dictionary header .selectbox li .el-input__inner{height:30px;line-height:30px}.dictionary header .selectbox li .el-select{width:150px}.dictionary header .selectbox li .el-input__icon{line-height:30px}.dictionary header .selectbox li label{margin:0 8px}.dictionary .el-button--mini,.dictionary .el-button--mini.is-round,.dictionary .el-button--small,.dictionary .el-button--small.is-round{padding:6px}.dictionary .el-input--suffix .el-input__inner{padding-right:15px}.dictionary .el-table th.gutter{display:table-cell!important}.dictionary .el-input{width:auto!important}",""]),e.exports=t},d418:function(e,t,l){"use strict";l.r(t);var i=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"dictionary",staticStyle:{width:"100%",height:"100%"},attrs:{"element-loading-text":"拼命加载中","element-loading-background":"rgba(255, 255, 255, 1)"}},[l("header",[l("div",{staticClass:"dictionaryButtons"},e._l(e.allBtns,(function(t,i){return l("el-button",{key:i,attrs:{type:"primary",icon:"el-icon-circle-plus",size:"mini"},on:{click:function(l){return e.toggle(t.name)}}},[e._v(e._s(t.value))])})),1),l("ul",{staticClass:"selectbox"},e._l(e.selectData,(function(t,i){return l("li",{key:i},[l("label",[e._v("系统字典类型")]),l("el-select",{model:{value:e.dataModel[i].value1,callback:function(t){e.$set(e.dataModel[i],"value1",t)},expression:"dataModel[index].value1"}},e._l(t.options,(function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)})),0)]),l("section",[l("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,height:e.heightItem,"max-height":e.heightItem,border:"",id:"taskManTable","header-cell-style":{padding:"8px 0"},"cell-style":{padding:"5px 0"}}},[l("el-table-column",{attrs:{prop:"type",label:"类型"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",[e._v(e._s(e.setTable_TypeHandle(t.row.type)))])]}}])}),l("el-table-column",{attrs:{prop:"key",label:"编码"}}),l("el-table-column",{attrs:{prop:"value",label:"名称"}}),l("el-table-column",{attrs:{label:"是否有效"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",[e._v(e._s(e.setTableHandle(t.row.enabled)))])]}}])}),l("el-table-column",{attrs:{label:"操作",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"small"},on:{click:function(l){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑\n                    ")]),l("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"small"},on:{click:function(l){return e.handleDelete(t.$index,t.row)}}},[e._v("删除\n                    ")])]}}])})],1),l("el-dialog",{attrs:{title:e.dialogTitle,visible:e.dialogFormVisible,"close-on-click-modal":!1,id:"dictionaryDialog"},on:{"update:visible":function(t){e.dialogFormVisible=t},close:e.cancelHandel}},[l("el-form",{ref:"dictionaryFormLog",attrs:{"label-position":e.labelPosition,inline:!0,model:e.form,size:"small","label-width":"100px",rules:e.rules}},[l("el-form-item",{attrs:{label:"类型",prop:"type",width:"200"}},[l("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},e._l(e.typeSelectArr,(function(e){return l("el-option",{key:e.key,attrs:{label:e.value,value:e.key}})})),1)],1),l("el-form-item",{staticClass:"is-required",attrs:{label:"编码",prop:"key",width:"200"}},[l("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.key,callback:function(t){e.$set(e.form,"key",t)},expression:"form.key"}})],1),l("el-form-item",{attrs:{label:"名称",prop:"value",width:"200"}},[l("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.value,callback:function(t){e.$set(e.form,"value",t)},expression:"form.value"}})],1),l("el-form-item",{attrs:{label:"是否有效",prop:"enabled"}},[l("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.enabled,callback:function(t){e.$set(e.form,"enabled",t)},expression:"form.enabled"}},[l("el-option",{attrs:{label:"有效",value:"1"}}),l("el-option",{attrs:{label:"无效",value:"0"}})],1)],1),l("el-form-item",{attrs:{label:"排序",prop:"sortNo",width:"200"}},[l("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.sortNo,callback:function(t){e.$set(e.form,"sortNo",e._n(t))},expression:"form.sortNo"}})],1)],1),l("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{attrs:{size:"mini"},on:{click:e.cancelHandel}},[e._v("取 消")]),l("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){return e.submitForm("dictionaryFormLog")}}},[e._v("确 定")])],1)],1)],1)])},a=[],n=(l("5ab2"),l("6d57"),l("e10e"),l("cc57"),l("ac9f")),o=l("6e72"),r=l("8876");function s(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,i)}return l}function c(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?s(Object(l),!0).forEach((function(t){Object(n["a"])(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):s(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}var u={data:function(){var e=this,t=function(t,l,i){return l?e.oldKey==l?i():void Object(o["t"])(e.updateIndex,e.form.type,l).then((function(e){return e?i():i(new Error("编码已存在！"))})):i(new Error("编码不能为空！"))};return{loading:!0,selectData:[{name:"type",options:[{value:null,label:"全部"}]}],selectObj:{type:""},dataModel:[],minBtns:["Add"],allBtns:[],labelPosition:"right",tableData:[],heightItem:window.innerHeight-160,dialogFormVisible:!1,form:{},formIndex:-1,oldform:{},oldKey:"",updateIndex:"",dialogTitle:"",typeSelectArr:[],rules:{type:[{required:!0,message:"类型不能为空",trigger:"blur"}],value:[{required:!0,message:"名称不能为空",trigger:"blur"}],sortNo:[{required:!0,message:"排序号不能为空",trigger:"blur"},{type:"number",message:"必须为数字值",trigger:"blur"}],key:[{validator:t,trigger:"blur"}]}}},watch:{dataModel:{handler:function(e,t){var l=this;e.map((function(t,i){""!=t.value1&&l.selectChangeHandle(e)}))},deep:!0},heightItem:function(e){if(!this.timer){this.heightItem=e,this.timer=!0;var t=this;setTimeout((function(){t.timer=!1}),400)}}},computed:c({},Object(r["b"])({btns:function(e){return e.btns},userId:function(e){return e.user.userId}})),methods:{toggle:function(e){"Add"==e&&this.addTaskHandle()},addTaskHandle:function(){this.form={id:"",type:"#",key:"",value:"",sortNo:"",enabled:"1"},this.updateIndex="",this.dialogFormVisible=!0,this.dialogTitle="增加系统字典"},setTableHandle:function(e){return 1==e?"有效":0==e?"无效":void 0},setTable_TypeHandle:function(e){var t="";return this.typeSelectArr.map((function(l,i){e==l.key&&(t=l.value)})),t},selectChangeHandle:function(e){var t=this,l=this;e.map((function(e,t){switch(t){case 0:l.selectObj.type=e.value1;break}})),Object(o["w"])(this.selectObj.type).then((function(e){t.tableData=[],t.tableData=e.result}))},cancelHandel:function(){for(var e in this.dialogFormVisible=!1,this.$refs["dictionaryFormLog"].resetFields(),this.form)this.form[e]=this.oldform[e]},submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return t.$message({type:"error",message:"验证失败!"}),!1;t.updateIndex=t.updateIndex?t.updateIndex:"";var l={id:t.updateIndex,type:t.form.type,key:t.form.key,value:t.form.value,enabled:t.form.enabled,sortNo:t.form.sortNo,userId:t.userId};Object(o["b"])(l).then((function(e){e.success?(t.dialogFormVisible=!1,t.dataModel=[{value1:t.form.type}],Object(o["w"])(t.selectObj.type).then((function(e){t.tableData=[],t.tableData=e.result})),t.$message({type:"success",message:"成功!"})):(t.$message({type:"error",message:"失败!"}),t.dialogFormVisible=!1)}))}))},handleEdit:function(e,t){this.updateIndex=t.id,this.form=t,this.oldKey=t.key,this.oldform=c({},t),this.dialogTitle="修改系统字典",this.dialogFormVisible=!0},handleDelete:function(e,t){var l=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(o["h"])(t.id).then((function(e){e.success?(Object(o["w"])(l.selectObj.type).then((function(e){l.tableData=[],l.tableData=e.result})),l.$message({type:"success",message:"删除成功!"})):l.$message({type:"success",message:"删除失败!"})}))})).catch((function(){l.$message({type:"info",message:"已取消删除"})}))},getStyle:function(e){var t=null;return t=window.getComputedStyle?window.getComputedStyle(e,null):e.currentStyle,t}},created:function(){var e=this;this.btns.map((function(t,l){-1!=e.minBtns.indexOf(t.name)&&e.allBtns.push({name:t.name,value:t.value})})),Object(o["w"])("#").then((function(t){e.typeSelectArr=[{key:"#",value:"系统字典类型"}].concat(t.result),e.typeSelectArr.map((function(t,l){e.selectData[0].options.push({value:t.key,label:t.value})})),Object(o["w"])("").then((function(t){e.tableData=[],e.tableData=t.result,t.success&&(e.loading=!1),e.$nextTick((function(){var e=this;setTimeout((function(){var t=e.$el.querySelector(".el-table__body-wrapper"),l=e.$el.querySelector(".gutter"),i=e.getStyle(t);"auto"==i.overflowY?l.style.width="17px":l.style.width="0px"}))}),100)}))}));for(var t=0;t<this.selectData.length;t++){var l={value1:""};this.dataModel.push(l)}},mounted:function(){var e=this;window.onresize=function(){return function(){e.heightItem=window.innerHeight-160}()}}},d=u,p=(l("3144"),l("623f")),b=Object(p["a"])(d,i,a,!1,null,null,null);t["default"]=b.exports}}]);
//# sourceMappingURL=chunk-b4bbb7d0.68cd5eb5.js.map