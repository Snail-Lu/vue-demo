(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21a7d8"],{bc78:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tree-container"},[n("el-button",{attrs:{type:"primary"},on:{click:e.onExpand}},[e._v(e._s(this.expandAll?"收缩":"展开")+"所有节点")]),e._v(" "),n("el-tree",{ref:"tree",attrs:{data:e.data}})],1)},r=[],l=(n("96cf"),n("1da1")),c={data:function(){return{expandAll:!1,data:[{label:"一级 1",children:[{label:"二级 1-1",children:[{label:"三级 1-1-1"}]}]},{label:"一级 2",children:[{label:"二级 2-1",children:[{label:"三级 2-1-1"}]},{label:"二级 2-2",children:[{label:"三级 2-2-1"}]}]}]}},methods:{onExpand:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$confirm("确认要展开所有节点?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"});case 3:this.expandAll=!this.expandAll,this.changeTreeNodeStatus(this.$refs.tree.store.root),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),this.$message({type:"info",message:"cancel"===e.t0?"取消操作":"操作失败"});case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));function t(){return e.apply(this,arguments)}return t}(),changeTreeNodeStatus:function(e){e.expanded=this.expandAll;for(var t=0;t<e.childNodes.length;t++)e.childNodes[t].expanded=this.expandAll,e.childNodes[t].childNodes.length>0&&this.changeTreeNodeStatus(e.childNodes[t])}}},s=c,i=n("2877"),d=Object(i["a"])(s,a,r,!1,null,null,null);t["default"]=d.exports}}]);