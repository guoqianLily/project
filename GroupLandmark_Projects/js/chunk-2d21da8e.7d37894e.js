(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21da8e"],{d1f1:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{width:"100%",height:"100%"}},[a("div",{staticClass:"manageTree"},[a("ManageTree",{attrs:{treeName:e.manageTreeName,treeData:e.treeData,firstId:e.firstId}})],1),a("div",{staticClass:"manage_bmTable"},[a("header",[e._v("用户列表")]),a("div",{staticStyle:{"border-left":"1px solid #EBEEF5",height:"calc(100% - 30px)"}},[a("router-view")],1)])])},r=[],i=a("6e72"),s={data:function(){return{manageTreeName:"部门组织树",id:"",key:"",type:"",enabled:"",treeData:[],firstId:""}},methods:{offxxxListener:function(){this.$center.$off("user-event")}},created:function(){var e=this;setTimeout((function(){-1!=window.location.hash.indexOf("userManage")&&Object(i["r"])(e.id,e.key,e.type,e.enabled).then((function(t){t.result.length>0&&(e.firstId=t.result[0].id,e.$center.$emit("user-event",e.firstId)),e.treeData=t.result}))}),100)},beforeDestroy:function(){this.offxxxListener()}},d=s,c=a("623f"),f=Object(c["a"])(d,n,r,!1,null,null,null);t["default"]=f.exports}}]);
//# sourceMappingURL=chunk-2d21da8e.7d37894e.js.map