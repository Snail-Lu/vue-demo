import{_ as d}from"./index.3ed8dabc.js";import{o as e,m as s,D as t,I as i,N as n,H as r,Q as l}from"./elementPlus.e195b922.js";const f={key:0,class:"loading-container"},_=l('<div class="loading-icon" data-v-1ffc0979><div class="shape shape-1" data-v-1ffc0979></div><div class="shape shape-2" data-v-1ffc0979></div><div class="shape shape-3" data-v-1ffc0979></div><div class="shape shape-4" data-v-1ffc0979></div></div>',1),v={class:"loading-text"},p={key:1,class:"loading-error"},h={__name:"index",props:{loadingStatus:{type:String,default:"\u52A0\u8F7D\u4E2D"}},emits:["refresh"],setup(a,{emit:o}){function c(){o("refresh")}return(g,u)=>a.loadingStatus==="\u52A0\u8F7D\u4E2D"?(e(),s("div",f,[_,t("div",v,i(a.loadingStatus),1)])):a.loadingStatus==="\u52A0\u8F7D\u5931\u8D25"?(e(),s("div",p,[n(" \u52A0\u8F7D\u5931\u8D25\uFF0C"),t("span",{class:"refresh-btn",title:"\u5237\u65B0",onClick:c},"\u5237\u65B0\u91CD\u8BD5")])):r("",!0)}},S=d(h,[["__scopeId","data-v-1ffc0979"]]);export{S as L};