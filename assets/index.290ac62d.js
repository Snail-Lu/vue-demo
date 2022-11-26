import{_ as N}from"./index.32a02fb5.js";/* empty css                    */import{o as p,t as h,a as _,M,N as q,O as G,P as K,Q,k as g,i as O,e as A,u as y,L as J,K as Z,c as L,w as C,f as z,b,F as S,y as W,R as ee}from"./elementPlus.7f4dbe24.js";import{_ as te}from"./index.a33d9b26.js";const re={viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},ne=_("path",{fill:"currentColor",d:"M160 160v704h704V160H160zm-32-64h768a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H128a32 32 0 0 1-32-32V128a32 32 0 0 1 32-32z"},null,-1),ie=_("path",{fill:"currentColor",d:"M384 288q64 0 64 64t-64 64q-64 0-64-64t64-64zM185.408 876.992l-50.816-38.912L350.72 556.032a96 96 0 0 1 134.592-17.856l1.856 1.472l122.88 99.136a32 32 0 0 0 44.992-4.864l216-269.888l49.92 39.936l-215.808 269.824l-.256.32a96 96 0 0 1-135.04 14.464l-122.88-99.072l-.64-.512a32 32 0 0 0-44.8 5.952L185.408 876.992z"},null,-1),se=[ne,ie];function ae(t,e){return p(),h("svg",re,se)}var oe={name:"ep-picture",render:ae},H;const x=typeof window!="undefined",le=t=>typeof t=="string",$=()=>{};x&&((H=window==null?void 0:window.navigator)==null?void 0:H.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function R(t){return K()?(Q(t),!0):!1}var ue=Object.defineProperty,de=Object.defineProperties,ce=Object.getOwnPropertyDescriptors,T=Object.getOwnPropertySymbols,pe=Object.prototype.hasOwnProperty,_e=Object.prototype.propertyIsEnumerable,k=(t,e,r)=>e in t?ue(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,ve=(t,e)=>{for(var r in e||(e={}))pe.call(e,r)&&k(t,r,e[r]);if(T)for(var r of T(e))_e.call(e,r)&&k(t,r,e[r]);return t},fe=(t,e)=>de(t,ce(e));function he(t){if(!M(t))return q(t);const e=Array.isArray(t.value)?new Array(t.value.length):{};for(const r in t.value)e[r]=G(()=>({get(){return t.value[r]},set(n){if(Array.isArray(t.value)){const i=[...t.value];i[r]=n,t.value=i}else{const i=fe(ve({},t.value),{[r]:n});Object.setPrototypeOf(i,t.value),t.value=i}}}));return e}function U(t){var e;const r=y(t);return(e=r==null?void 0:r.$el)!=null?e:r}const I=x?window:void 0;x&&window.document;x&&window.navigator;x&&window.location;function P(...t){let e,r,n,i;if(le(t[0])?([r,n,i]=t,e=I):[e,r,n,i]=t,!e)return $;let o=$;const s=A(()=>U(e),d=>{o(),d&&(d.addEventListener(r,n,i),o=()=>{d.removeEventListener(r,n,i),o=$})},{immediate:!0,flush:"post"}),l=()=>{s(),o()};return R(l),l}const D=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},E="__vueuse_ssr_handlers__";D[E]=D[E]||{};D[E];var ge=Object.defineProperty,ye=Object.defineProperties,me=Object.getOwnPropertyDescriptors,B=Object.getOwnPropertySymbols,we=Object.prototype.hasOwnProperty,xe=Object.prototype.propertyIsEnumerable,V=(t,e,r)=>e in t?ge(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Oe=(t,e)=>{for(var r in e||(e={}))we.call(e,r)&&V(t,r,e[r]);if(B)for(var r of B(e))xe.call(e,r)&&V(t,r,e[r]);return t},be=(t,e)=>ye(t,me(e));function $e(t,e={}){var r,n;const i=(r=e.draggingElement)!=null?r:I,o=g((n=e.initialValue)!=null?n:{x:0,y:0}),s=g(),l=a=>e.pointerTypes?e.pointerTypes.includes(a.pointerType):!0,d=a=>{y(e.preventDefault)&&a.preventDefault(),y(e.stopPropagation)&&a.stopPropagation()},f=a=>{var c;if(!l(a)||y(e.exact)&&a.target!==y(t))return;const m=y(t).getBoundingClientRect(),w={x:a.pageX-m.left,y:a.pageY-m.top};((c=e.onStart)==null?void 0:c.call(e,w,a))!==!1&&(s.value=w,d(a))},u=a=>{var c;!l(a)||!s.value||(o.value={x:a.pageX-s.value.x,y:a.pageY-s.value.y},(c=e.onMove)==null||c.call(e,o.value,a),d(a))},v=a=>{var c;!l(a)||!s.value||(s.value=void 0,(c=e.onEnd)==null||c.call(e,o.value,a),d(a))};return x&&(P(t,"pointerdown",f,!0),P(i,"pointermove",u,!0),P(i,"pointerup",v,!0)),be(Oe({},he(o)),{position:o,isDragging:O(()=>!!s.value),style:O(()=>`left:${o.value.x}px;top:${o.value.y}px;`)})}var X=Object.getOwnPropertySymbols,Pe=Object.prototype.hasOwnProperty,Le=Object.prototype.propertyIsEnumerable,De=(t,e)=>{var r={};for(var n in t)Pe.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&X)for(var n of X(t))e.indexOf(n)<0&&Le.call(t,n)&&(r[n]=t[n]);return r};function Ee(t,e,r={}){const n=r,{window:i=I}=n,o=De(n,["window"]);let s;const l=i&&"ResizeObserver"in i,d=()=>{s&&(s.disconnect(),s=void 0)},f=A(()=>U(t),v=>{d(),l&&i&&v&&(s=new ResizeObserver(e),s.observe(v,o))},{immediate:!0,flush:"post"}),u=()=>{d(),f()};return R(u),{isSupported:l,stop:u}}var Y;(function(t){t.UP="UP",t.RIGHT="RIGHT",t.DOWN="DOWN",t.LEFT="LEFT",t.NONE="NONE"})(Y||(Y={}));const Ne={__name:"index",props:{w:{type:Number,default:200},h:{type:Number,default:200},x:{type:Number,default:0},y:{type:Number,default:0}},setup(t){const e=t,r=g(null),n=g(null),i=g(""),o=g(e.w),s=g(e.h),{x:l,y:d,style:f}=$e(r,{initialValue:{x:e.x,y:e.y}});Ee(n,a=>{const c=a[0],{width:m,height:w}=c.contentRect;m&&w&&(o.value=m,s.value=w),i.value=`width: ${m}, height: ${w}`});const u=O(()=>`width:${o.value-3}px;height:${s.value-3}px`),v=O(()=>`${f.value}${u.value}`);return(a,c)=>(p(),h("div",{style:Z(y(v)),class:"draggable-resizable-box"},[_("div",{ref_key:"dragger",ref:r,class:"dragger"},null,512),J(a.$slots,"default",{},void 0,!0),_("textarea",{ref_key:"resizer",ref:n,class:"resizer",disabled:""},null,512)],4))}};var F=N(Ne,[["__scopeId","data-v-0d88d262"]]);const Ie={components:{DraggableResizableBox:F},props:{src:{type:String,default:""},startX:{type:Number,default:0},startY:{type:Number,default:0},initialWidth:{type:Number,default:200},initialHeight:{type:Number,default:200}},data(){return{x:this.startX,y:this.startY,width:this.initialWidth,height:this.initialHeight}},methods:{onResize(t,e,r,n){this.x=t,this.y=e,this.width=r,this.height=n},onDrag(t,e){this.x=t,this.y=e},onDelete(){this.$emit("onDelete")},onImgLoad(t){console.log(t,"img data")}}},ze={class:"my-photo"},Se=["src"];function We(t,e,r,n,i,o){const s=F;return p(),L(s,{x:i.x,y:i.y,w:i.width,h:i.height},{default:C(()=>[_("div",ze,[_("div",{class:"close-icon",title:"\u5220\u9664",onClick:e[0]||(e[0]=(...l)=>o.onDelete&&o.onDelete(...l))},"\xD7"),_("img",{class:"pic",src:r.src,onLoad:e[1]||(e[1]=(...l)=>o.onImgLoad&&o.onImgLoad(...l)),draggable:"false"},null,40,Se)])]),_:1},8,["x","y","w","h"])}var j=N(Ie,[["render",We],["__scopeId","data-v-2b1bfc20"]]),He="/portfolio-vue/assets/photo-1.e11df314.jpg",Te="/portfolio-vue/assets/photo-2.ebdbf832.jpg",ke="/portfolio-vue/assets/photo-3.45cd3c2e.jpg";const Be={class:"photo-wall-container"},Ve={class:"btn-groups flex-box flex-h-center flex-v-center"},Xe={class:"btn"},Ye={key:0,class:"photo-list"},je={key:1,class:"photo-list"},Ae={__name:"index",setup(t){const e=z([]),r=z([{uid:1,src:He,initialWidth:577,initialHeight:346,startX:430,startY:330},{uid:2,src:Te,initialWidth:426,initialHeight:258,startX:830,startY:68},{uid:3,src:ke,initialWidth:403,initialHeight:231,startX:147,startY:88}]);function n(s,l){this.fileList=l}function i(s){let l=-1;this.fileList.length>0?(l=this.fileList.findIndex(d=>d.uid===s),this.fileList.splice(l,1)):(l=this.exampleList.findIndex(d=>d.uid===s),this.exampleList.splice(l,1))}function o(s){return URL.createObjectURL(s)}return(s,l)=>{const d=oe,f=ee;return p(),h("div",Be,[_("div",Ve,[b(f,{action:"#",multiple:"","auto-upload":!1,"on-change":n,"show-file-list":!1},{default:C(()=>[b(d,{class:"btn el-icon-picture-outline upload-btn",title:"\u6253\u5F00\u672C\u5730\u56FE\u7247"})]),_:1}),_("div",Xe,[b(te)])]),e.length==0?(p(),h("div",Ye,[(p(!0),h(S,null,W(r,u=>(p(),L(j,{src:u.src,key:u.uid,"start-x":u.startX,"start-y":u.startY,"initial-width":u.initialWidth,"initial-height":u.initialHeight,onOnDelete:v=>i(u.uid)},null,8,["src","start-x","start-y","initial-width","initial-height","onOnDelete"]))),128))])):(p(),h("div",je,[(p(!0),h(S,null,W(e,u=>(p(),L(j,{src:o(u.raw),key:u.uid,onOnDelete:v=>i(u.uid)},null,8,["src","onOnDelete"]))),128))]))])}}};var Me=N(Ae,[["__scopeId","data-v-434c62ac"]]);export{Me as default};
