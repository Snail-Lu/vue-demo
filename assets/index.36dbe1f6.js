import{_ as y}from"./index.26c9bdd2.js";/* empty css                    */import{o as s,t as p,a as r,k as u,Z as I,_ as R,i as z,N as B,V as W,u as Y,c as m,w as N,f as k,$ as j,b,F as L,y as $}from"./elementPlus.e1b2604b.js";import{_ as O}from"./index.085606a1.js";const V={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},X=r("path",{fill:"currentColor",d:"M160 160v704h704V160H160zm-32-64h768a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H128a32 32 0 0 1-32-32V128a32 32 0 0 1 32-32z"},null,-1),M=r("path",{fill:"currentColor",d:"M384 288q64 0 64 64t-64 64q-64 0-64-64t64-64zM185.408 876.992l-50.816-38.912L350.72 556.032a96 96 0 0 1 134.592-17.856l1.856 1.472l122.88 99.136a32 32 0 0 0 44.992-4.864l216-269.888l49.92 39.936l-215.808 269.824l-.256.32a96 96 0 0 1-135.04 14.464l-122.88-99.072l-.64-.512a32 32 0 0 0-44.8 5.952L185.408 876.992z"},null,-1),S=[X,M];function U(a,e){return s(),p("svg",V,S)}var C={name:"ep-picture",render:U};const F={__name:"index",props:{w:{type:Number,default:200},h:{type:Number,default:200},x:{type:Number,default:0},y:{type:Number,default:0}},setup(a){const e=a,d=u(null),c=u(null),n=u(""),l=u(e.w),o=u(e.h),{x:i,y:h,style:_}=I(d,{initialValue:{x:e.x,y:e.y}});R(c,f=>{const w=f[0],{width:x,height:v}=w.contentRect;x&&v&&(l.value=x,o.value=v),n.value=`width: ${x}, height: ${v}`});const t=z(()=>`width:${l.value-3}px;height:${o.value-3}px`),g=z(()=>`${_.value}${t.value}`);return(f,w)=>(s(),p("div",{style:W(Y(g)),class:"draggable-resizable-box"},[r("div",{ref_key:"dragger",ref:d,class:"dragger"},null,512),B(f.$slots,"default",{},void 0,!0),r("textarea",{ref_key:"resizer",ref:c,class:"resizer",disabled:""},null,512)],4))}};var H=y(F,[["__scopeId","data-v-5d4f1158"]]);const q={components:{DraggableResizableBox:H},props:{src:{type:String,default:""},startX:{type:Number,default:0},startY:{type:Number,default:0},initialWidth:{type:Number,default:200},initialHeight:{type:Number,default:200}},data(){return{x:this.startX,y:this.startY,width:this.initialWidth,height:this.initialHeight}},methods:{onResize(a,e,d,c){this.x=a,this.y=e,this.width=d,this.height=c},onDrag(a,e){this.x=a,this.y=e},onDelete(){this.$emit("onDelete")},onImgLoad(a){console.log(a,"img data")}}},E={class:"my-photo"},A=["src"];function P(a,e,d,c,n,l){const o=H;return s(),m(o,{x:n.x,y:n.y,w:n.width,h:n.height},{default:N(()=>[r("div",E,[r("div",{class:"close-icon",title:"\u5220\u9664",onClick:e[0]||(e[0]=(...i)=>l.onDelete&&l.onDelete(...i))},"\xD7"),r("img",{class:"pic",src:d.src,onLoad:e[1]||(e[1]=(...i)=>l.onImgLoad&&l.onImgLoad(...i)),draggable:"false"},null,40,A)])]),_:1},8,["x","y","w","h"])}var D=y(q,[["render",P],["__scopeId","data-v-776a8ef2"]]),Z="/portfolio-vue/assets/photo-1.e11df314.jpg",G="/portfolio-vue/assets/photo-2.ebdbf832.jpg",J="/portfolio-vue/assets/photo-3.45cd3c2e.jpg";const K={class:"photo-wall-container"},Q={class:"btn-groups flex-box flex-h-center flex-v-center"},T={class:"btn"},ee={key:0,class:"photo-list"},te={key:1,class:"photo-list"},ie={__name:"index",setup(a){const e=k([]),d=k([{uid:1,src:Z,initialWidth:577,initialHeight:346,startX:430,startY:330},{uid:2,src:G,initialWidth:426,initialHeight:258,startX:830,startY:68},{uid:3,src:J,initialWidth:403,initialHeight:231,startX:147,startY:88}]);function c(o,i){this.fileList=i}function n(o){let i=-1;this.fileList.length>0?(i=this.fileList.findIndex(h=>h.uid===o),this.fileList.splice(i,1)):(i=this.exampleList.findIndex(h=>h.uid===o),this.exampleList.splice(i,1))}function l(o){return URL.createObjectURL(o)}return(o,i)=>{const h=C,_=j;return s(),p("div",K,[r("div",Q,[b(_,{action:"#",multiple:"","auto-upload":!1,"on-change":c,"show-file-list":!1},{default:N(()=>[b(h,{class:"btn el-icon-picture-outline upload-btn",title:"\u6253\u5F00\u672C\u5730\u56FE\u7247"})]),_:1}),r("div",T,[b(O)])]),e.length==0?(s(),p("div",ee,[(s(!0),p(L,null,$(d,t=>(s(),m(D,{src:t.src,key:t.uid,"start-x":t.startX,"start-y":t.startY,"initial-width":t.initialWidth,"initial-height":t.initialHeight,onOnDelete:g=>n(t.uid)},null,8,["src","start-x","start-y","initial-width","initial-height","onOnDelete"]))),128))])):(s(),p("div",te,[(s(!0),p(L,null,$(e,t=>(s(),m(D,{src:l(t.raw),key:t.uid,onOnDelete:g=>n(t.uid)},null,8,["src","onOnDelete"]))),128))]))])}}};var le=y(ie,[["__scopeId","data-v-6e0e7588"]]);export{le as default};
