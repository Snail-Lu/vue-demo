import{I as i,ai as a}from"./index.554256c3.js";const p=(e,t)=>{if(!i)return!1;const o={undefined:"overflow",true:"overflow-y",false:"overflow-x"}[String(t)],l=a(e,o);return["scroll","auto","overlay"].some(r=>l.includes(r))},w=(e,t)=>{if(!i)return;let o=e;for(;o;){if([window,document,document.documentElement].includes(o))return window;if(p(o,t))return o;o=o.parentNode}return o};let s;const m=()=>{var e;if(!i)return 0;if(s!==void 0)return s;const t=document.createElement("div");t.className="el-scrollbar__wrap",t.style.visibility="hidden",t.style.width="100px",t.style.position="absolute",t.style.top="-9999px",document.body.appendChild(t);const o=t.offsetWidth;t.style.overflow="scroll";const l=document.createElement("div");l.style.width="100%",t.appendChild(l);const r=l.offsetWidth;return(e=t.parentNode)==null||e.removeChild(t),s=o-r,s};function v(e,t){if(!i)return;if(!t){e.scrollTop=0;return}const o=[];let l=t.offsetParent;for(;l!==null&&e!==l&&e.contains(l);)o.push(l),l=l.offsetParent;const r=t.offsetTop+o.reduce((d,u)=>d+u.offsetTop,0),n=r+t.offsetHeight,c=e.scrollTop,f=c+e.clientHeight;r<c?e.scrollTop=r:n>f&&(e.scrollTop=n-e.clientHeight)}export{m as a,w as g,v as s};
