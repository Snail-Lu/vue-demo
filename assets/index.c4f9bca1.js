import{D as r}from"./index.09d4e7b2.js";import{_ as i,r as t,o as m,b as f,w as o,a as e,p as x,i as h,g as d,e as v}from"./index.554256c3.js";import"./isNil.98bb3b88.js";import"./index2.c8ea21e3.js";const b={components:{Demo:r},data(){return{demoInfo:{title:"\u5927\u6587\u4EF6\u4E0A\u4F20",url:""},options:{target:"//localhost:8000/upload",testChunks:!0},attrs:{accept:"image/*"}}},methods:{}},g=a=>(x("data-v-dbe00f5e"),a=a(),h(),a),w=g(()=>v("p",null,"Drop files here to upload or",-1)),I=d("select files"),y=d("select images"),k=d("select folder");function B(a,C,D,N,p,S){const n=t("uploader-unsupport"),s=t("uploader-btn"),l=t("uploader-drop"),_=t("uploader-list"),u=t("uploader"),c=r;return m(),f(c,{data:p.demoInfo},{default:o(()=>[e(u,{options:p.options,class:"uploader-example","auto-start":!1},{default:o(()=>[e(n),e(l,null,{default:o(()=>[w,e(s,null,{default:o(()=>[I]),_:1}),e(s,{attrs:p.attrs},{default:o(()=>[y]),_:1},8,["attrs"]),e(s,{directory:!0},{default:o(()=>[k]),_:1})]),_:1}),e(_)]),_:1},8,["options"])]),_:1},8,["data"])}var j=i(b,[["render",B],["__scopeId","data-v-dbe00f5e"]]);export{j as default};