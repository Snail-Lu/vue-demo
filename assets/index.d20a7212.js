import{o as h,t as $,a as s,ac as w,k as y,K as C,a0 as z,ad as B,c as H,w as e,b as o,z as u,C as L,D as V}from"./elementPlus.dcd234af.js";import{_ as F,b as M}from"./index.04054941.js";/* empty css                    *//* empty css                  */import{D as S}from"./index.1b6bf51e.js";const D={viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},E=s("path",{fill:"currentColor",d:"M878.08 448H241.92l-96 384h636.16l96-384zM832 384v-64H485.76L357.504 192H128v448l57.92-231.744A32 32 0 0 1 216.96 384H832zm-24.96 512H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h287.872l128.384 128H864a32 32 0 0 1 32 32v96h23.04a32 32 0 0 1 31.04 39.744l-112 448A32 32 0 0 1 807.04 896z"},null,-1),T=[E];function N(l,d){return h(),$("svg",D,T)}var O={name:"ep-folder-opened",render:N};const q={viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},A=s("path",{fill:"currentColor",d:"M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm384-578.304V704h-64V247.296L237.248 490.048L192 444.8L508.8 128l316.8 316.8l-45.312 45.248L544 253.696z"},null,-1),K=[A];function j(l,d){return h(),$("svg",q,K)}var G={name:"ep-upload",render:j};const i=l=>(L("data-v-6453efaa"),l=l(),V(),l),J=i(()=>s("div",{class:"header"},"\u65B9\u5F0F1\uFF1A\u5373\u65F6\u4E0A\u4F20",-1)),P=u(" \u9009\u62E9\u6587\u4EF6\u5E76\u4E0A\u4F20"),Q=i(()=>s("div",{class:"el-upload__tip"},"\u5728action\u5C5E\u6027\u4E0A\u7ED1\u5B9A\u4E0A\u4F20\u63A5\u53E3\u5730\u5740\uFF0C\u5229\u7528on-success\u6216on-error\u76D1\u542C\u4E0A\u4F20\u7ED3\u679C",-1)),R=i(()=>s("div",{class:"header"},"\u65B9\u5F0F2\uFF1A\u5EF6\u65F6\u4E0A\u4F20",-1)),W=u("\u9009\u62E9\u6587\u4EF6"),X=u("\u4E0A\u4F20"),Y=i(()=>s("div",{class:"el-upload__tip"},"auto-upload\u8BBE\u4E3Afalse\uFF0C\u6587\u4EF6\u9009\u62E9\u540E\u4E0D\u4F1A\u7ACB\u5373\u4E0A\u4F20\uFF0C\u540E\u7EED\u53EF\u4EE5\u901A\u8FC7\u8C03\u7528el-upload\u7684submit()\u65B9\u6CD5\u4E0A\u4F20",-1)),Z=i(()=>s("div",{class:"header"},"\u4E0A\u4F20\u65B9\u5F0F3\uFF1A\u81EA\u5B9A\u4E49\u4E0A\u4F20",-1)),ee=u("\u9009\u62E9\u6587\u4EF6"),oe=u("\u4E0A\u4F20"),te=i(()=>s("div",{class:"el-upload__tip"}," action\u9700\u8981\u4F7F\u7528\u4EFB\u610F\u5B57\u6BB5\u586B\u5145\uFF0Chttp-request\u4E0A\u7ED1\u5B9A\u81EA\u5B9A\u4E49\u4E0A\u4F20\u65B9\u6CD5\uFF0C\u5982\u679C\u9700\u8981\u5EF6\u65F6\u4E0A\u4F20\uFF0C\u4EFF\u7167\u4E0A\u4F20\u65B9\u5F0F2\u8BBE\u7F6E ",-1)),se={__name:"index",setup(l){const d={importUrl:"/api/fileUpload"},b={title:"el-upload\u6587\u4EF6\u4E0A\u4F20\u7528\u4F8B",url:"https://github.com/Snail-Lu/portfolio-vue/blob/main/src/views/demo/elUpload/index.vue"},c=w(),f=t=>{t.status==="OK"?c.proxy.$message({type:"suceess",message:t.message}):c.proxy.$message({type:"error",message:t.message})},g=t=>{console.log(t,"error"),c.proxy.$message({type:"error",message:`\u4E0A\u4F20\u5931\u8D25${t}`})},U=t=>{const m=t.file,p=m.type,a=p.indexOf("image")!=-1,_=m.size/1024/1024<2;if(!a){c.proxy.$message.error("\u53EA\u80FD\u4E0A\u4F20\u56FE\u7247\u683C\u5F0Fpng\u3001jpg\u3001gif!");return}if(!_){c.proxy.$message.error("\u53EA\u80FD\u4E0A\u4F20\u56FE\u7247\u5927\u5C0F\u5C0F\u4E8E2M");return}const n=new FormData;n.append("file",m),M.post(d.importUrl,n,{headers:{"content-type":"multipart/form-data"}}).then(r=>{r&&parseInt(r.code,10)}).catch(r=>{c.proxy.$message.error(`\u4E0A\u4F20\u5931\u8D25${r}`)})},v=y(null),k=()=>{v.value.submit()},x=y(null),I=()=>{x.value.submit()};return(t,m)=>{const p=G,a=C,_=z,n=B,r=O;return h(),H(S,{data:b},{default:e(()=>[o(n,{class:"card-box"},{header:e(()=>[J]),default:e(()=>[o(_,{name:"importFile",action:d.importUrl,"on-error":g,"on-success":f},{tip:e(()=>[Q]),default:e(()=>[o(a,{type:"primary"},{default:e(()=>[o(p),P]),_:1})]),_:1},8,["action"])]),_:1}),o(n,{class:"card-box"},{header:e(()=>[R]),default:e(()=>[o(_,{name:"importFile",ref_key:"upload2",ref:v,action:d.importUrl,"on-error":g,"on-success":f,"auto-upload":!1},{trigger:e(()=>[o(a,{type:"primary"},{default:e(()=>[o(r),W]),_:1})]),tip:e(()=>[Y]),default:e(()=>[o(a,{type:"success",onClick:k,class:"ml-3"},{default:e(()=>[o(p),X]),_:1})]),_:1},8,["action"])]),_:1}),o(n,{class:"card-box"},{header:e(()=>[Z]),default:e(()=>[o(_,{class:"upload-add-demo",action:"#",ref_key:"upload3",ref:x,multiple:"",limit:3,"http-request":U,"auto-upload":!1},{trigger:e(()=>[o(a,{type:"primary"},{default:e(()=>[o(r),ee]),_:1})]),tip:e(()=>[te]),default:e(()=>[o(a,{type:"success",onClick:I,class:"ml-3"},{default:e(()=>[o(p),oe]),_:1})]),_:1},512)]),_:1})]),_:1})}}};var ie=F(se,[["__scopeId","data-v-6453efaa"]]);export{ie as default};
