import{o as l,c,e as s,m as u,bw as r,_ as i,b as a}from"./index.554256c3.js";const o={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},m=s("path",{fill:"currentColor",d:"m160 96.064l192 .192a32 32 0 0 1 0 64l-192-.192V352a32 32 0 0 1-64 0V96h64v.064zm0 831.872V928H96V672a32 32 0 1 1 64 0v191.936l192-.192a32 32 0 1 1 0 64l-192 .192zM864 96.064V96h64v256a32 32 0 1 1-64 0V160.064l-192 .192a32 32 0 1 1 0-64l192-.192zm0 831.872l-192-.192a32 32 0 0 1 0-64l192 .192V672a32 32 0 1 1 64 0v256h-64v-.064z"},null,-1),d=[m];function _(e,n){return l(),c("svg",o,d)}var h={name:"ep-full-screen",render:_},f={computed:{...u(["isScreenFull"])},methods:{...r(["changeSetting"]),handleFullScreen(){let e=document.documentElement;this.isScreenFull?(document.exitFullscreen?document.exitFullscreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen(),this.changeSetting({key:"isScreenFull",value:!1}),window.removeEventListener("fullscreenchange",this.fullscreenchangeHandler)):(e.requestFullscreen?e.requestFullscreen():e.webkitRequestFullScreen?e.webkitRequestFullScreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.msRequestFullscreen&&e.msRequestFullscreen(),this.changeSetting({key:"isScreenFull",value:!0}),window.addEventListener("fullscreenchange",this.fullscreenchangeHandler))},fullscreenchangeHandler(){document.fullscreenElement||this.changeSetting({key:"isScreenFull",value:!1})}}};const F={name:"FullScreenButton",mixins:[f],mounted(){}};function p(e,n,S,v,g,k){const t=h;return l(),a(t,{title:e.isScreenFull?"\u9000\u51FA\u5168\u5C4F":"\u5168\u5C4F",onClick:e.handleFullScreen},null,8,["title","onClick"])}var w=i(F,[["render",p],["__scopeId","data-v-23d450c6"]]);export{w as _};
