(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-27331059"],{"3d82":function(t,e,n){"use strict";n("53c4")},"53c4":function(t,e,n){},b402:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demo-container"},[n("div",{staticClass:"phone-wrap"},[n("div",{staticClass:"phone-box"},[t._m(0),n("div",{staticClass:"phone-button"}),n("div",{staticClass:"phone-tool-bar"},[n("span",{staticClass:"time"},[t._v(t._s(t.time))]),t._m(1)]),n("div",{staticClass:"phone-content",style:{background:t.background},on:{touch:t.onTouch}},[n("img",{staticClass:"phone-content-img",attrs:{src:"https://cdn.jsdelivr.net/gh/Snail-Lu/imageGalleries/gh-pages/2021-12/3820f11f44f6ba81.jpg"}})])])])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"phone-receiver-wrap"},[n("i",{staticClass:"phone-camera"}),n("div",{staticClass:"phone-receiver"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"network"},[t._v("5G "),n("i",{staticClass:"power"})])}],a={name:"v-phone",props:{type:{default:"i5",type:String},background:{default:"",type:String}},data:function(){return{time:":"}},methods:{onTouch:function(t){console.log(t)},checkTime:function(t){return t<10&&(t="0"+t),t},timer:function(){var t=this,e=new Date,n=this.checkTime(e.getHours()),s=this.checkTime(e.getMinutes());this.time=n+":"+s,setTimeout((function(){t.timer()}),1e3)}},created:function(){this.timer()}},c=a,o=(n("3d82"),n("2877")),r=Object(o["a"])(c,s,i,!1,null,null,null);e["default"]=r.exports}}]);