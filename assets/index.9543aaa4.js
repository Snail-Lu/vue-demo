import{o as l,m as c,z as s,c as u}from"./elementPlus.8845be7b.js";import{m as i,c as o,_ as r}from"./index.9d8d7e21.js";const a={viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},m=s("path",{fill:"currentColor",d:"m160 96.064l192 .192a32 32 0 0 1 0 64l-192-.192V352a32 32 0 0 1-64 0V96h64v.064zm0 831.872V928H96V672a32 32 0 1 1 64 0v191.936l192-.192a32 32 0 1 1 0 64l-192 .192zM864 96.064V96h64v256a32 32 0 1 1-64 0V160.064l-192 .192a32 32 0 1 1 0-64l192-.192zm0 831.872l-192-.192a32 32 0 0 1 0-64l192 .192V672a32 32 0 1 1 64 0v256h-64v-.064z"},null,-1),_=[m];function d(e,n){return l(),c("svg",a,_)}const h={name:"ep-full-screen",render:d},f={computed:{...i(["isScreenFull"])},methods:{...o(["changeSetting"]),handleFullScreen(){let e=document.documentElement;this.isScreenFull?(document.exitFullscreen?document.exitFullscreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen(),this.changeSetting({key:"isScreenFull",value:!1}),window.removeEventListener("fullscreenchange",this.fullscreenchangeHandler)):(e.requestFullscreen?e.requestFullscreen():e.webkitRequestFullScreen?e.webkitRequestFullScreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.msRequestFullscreen&&e.msRequestFullscreen(),this.changeSetting({key:"isScreenFull",value:!0}),window.addEventListener("fullscreenchange",this.fullscreenchangeHandler))},fullscreenchangeHandler(){document.fullscreenElement||this.changeSetting({key:"isScreenFull",value:!1})}}};const F={name:"FullScreenButton",mixins:[f],mounted(){}};function p(e,n,S,g,v,k){const t=h;return l(),u(t,{title:e.isScreenFull?"\u9000\u51FA\u5168\u5C4F":"\u5168\u5C4F",onClick:e.handleFullScreen},null,8,["title","onClick"])}const z=r(F,[["render",p],["__scopeId","data-v-59ac28c7"]]);export{z as _};