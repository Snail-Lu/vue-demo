import{D as M}from"./index.1b6bf51e.js";import{_ as w}from"./index.04054941.js";/* empty css                   *//* empty css                  *//* empty css                     *//* empty css                       *//* empty css                 *//* empty css                     */import{r as P,d as v,a as $,b as E,c as I}from"./date.9a6a4d57.js";import{o as m,t as u,a as f,F as C,y as b,A as k,x,W as F,V as B,b as h,X as R,a9 as A,aa as L,ab as N,K as q,a1 as U,c as z,w as D,z as T}from"./elementPlus.dcd234af.js";const Y={props:{date:Date,schedule:Array},inject:["Calendar"],data(){return{weekDays:["\u5468\u4E00","\u5468\u4E8C","\u5468\u4E09","\u5468\u56DB","\u5468\u4E94","\u5468\u516D","\u5468\u65E5"]}},methods:{getFormateDate(e,t){let a=this.curMonthDatePrefix;return t==="prev"?a=this.prevMonthDatePrefix:t==="next"&&(a=this.nextMonthDatePrefix),e=`0${e}`.slice(-2),`${a}-${e}`},getFormateDateTimestamp(e){const t=e.split("-");return new Date(t[0],t[1]-1,t[2]).getTime()},getCellClass({type:e,formatedDate:t}){const a=[e];return e==="current"&&t===this.formatedToday&&a.push("is-today"),a},transformMonthDays(e,t){return e.map(a=>{const o=this.getFormateDate(a,t),r=this.getFormateDateTimestamp(o);return{formatedDate:o,timestamp:r,text:a,type:t}})},toNestedArr(e){return P(e.length/7).map((t,a)=>{const o=a*7;return e.slice(o,o+7)})},getInsertRow(e,t,a){if(e.length===0)return 0;const o=t+a>7?7:t+a+1;let r=-1;for(let s=0,l=e.length;s<l;s++)if(e[s].slice(t,o).every(i=>i.isPlaceholder)){r=s;break}return r},onPickDay(e){this.Calendar.pickDay(e)},onPickSchedule(e){this.Calendar.pickSchedule(e)}},computed:{prevMonthDatePrefix(){const e=new Date(this.date.getTime());return e.setDate(0),v(e,"yyyy-mm")},curMonthDatePrefix(){return v(this.date,"yyyy-mm")},nextMonthDatePrefix(){const e=new Date(this.date.getFullYear(),this.date.getMonth()+1,1);return v(e,"yyyy-mm")},formatedToday(){return this.Calendar.formatedToday},rows(){const{date:e}=this;let t=[],a=$(e);a=a===0?7:a;const o=this.transformMonthDays(E(e,a-1),"prev"),r=this.transformMonthDays(I(e),"current");t=[...o,...r];const s=this.transformMonthDays(P(42-t.length),"next");return t=t.concat(s),this.toNestedArr(t)},scheduleList(){const e=[[],[],[],[],[],[]],{rows:t,schedule:a}=this,o=["#99CCCC","#99CCFF","#FF99CC","#FF9999","#99CC66","#FF9900","#666699","#FF6666"];return a.map((s,l)=>{const i=this.getFormateDateTimestamp(s.startDate),c=this.getFormateDateTimestamp(s.endDate),n=(c-i)/(24*60*60*1e3);return{...s,startTimestamp:i,endTimestamp:c,bgColor:o[l%8],durationDays:n}}).forEach(s=>{t.forEach((l,i)=>{const c=[{isPlaceholder:!0},{isPlaceholder:!0},{isPlaceholder:!0},{isPlaceholder:!0},{isPlaceholder:!0},{isPlaceholder:!0},{isPlaceholder:!0}];let n=0;l.forEach((d,p)=>{if(d.timestamp>=s.startTimestamp&&d.timestamp<=s.endTimestamp){const g=d.timestamp===s.startTimestamp,y=e[i];if(g)n=this.getInsertRow(y,p,s.durationDays);else if(p===0){const _=(s.endTimestamp-d.timestamp)/864e5;n=this.getInsertRow(y,p,_)}y.length==0?y.push(c):n===-1&&(y.push(c),n=y.length-1),y[n][p]={isStart:g,showTitle:g||p===0,title:s.title||"",id:s.id,bgColor:s.bgColor}}})})}),e}}},j={class:"calendar-table",cellspacing:0,cellpadding:0},K={class:"calendar-table-head"},O=["onClick"],W={key:0,class:"schedule-placeholder"},X=["onClick"];function G(e,t,a,o,r,s){return m(),u("table",j,[f("thead",K,[(m(!0),u(C,null,b(r.weekDays,l=>(m(),u("th",{key:l},k(l),1))),128))]),f("tbody",null,[(m(!0),u(C,null,b(s.rows,(l,i)=>(m(),u("tr",{key:i,class:x({"calendar-table__row":!0})},[(m(!0),u(C,null,b(l,(c,n)=>(m(),u("td",{key:n,class:x(s.getCellClass(c))},[f("div",{class:"calendar-day",onClick:F(d=>s.onPickDay(c),["stop"])},[f("span",null,k(c.text),1),(m(!0),u(C,null,b(s.scheduleList[i],(d,p)=>(m(),u("div",{key:p},[d[n].isPlaceholder?(m(),u("div",W)):(m(),u("div",{key:1,class:x(["schedule-item",{"is-start":d[n].isStart}]),style:B({"background-color":d[n].bgColor}),onClick:F(g=>s.onPickSchedule(d[n]),["stop"])},k(d[n].showTitle?d[n].title:""),15,X))]))),128))],8,O)],2))),128))]))),128))])])}var V=w(Y,[["render",G],["__scopeId","data-v-316c852a"]]);const H={name:"Calendar",components:{DateTable:V},props:{schedule:Array},provide(){return{Calendar:this}},data(){return{selectedDay:"",now:new Date}},methods:{selectDate(e){let t="";e==="prev-month"?t=`${this.prevMonthDatePrefix}-01`:e==="next-month"?t=`${this.nextMonthDatePrefix}-01`:t=this.formatedToday,this.selectedDay=t},pickDay(e){this.$emit("pick-day",e)},pickSchedule(e){const{id:t,title:a}=e;this.$emit("pick-schedule",{id:t,title:a})}},computed:{prevMonthDatePrefix(){const e=new Date(this.date.getTime());return e.setDate(0),v(e,"yyyy-mm")},nextMonthDatePrefix(){const e=new Date(this.date.getFullYear(),this.date.getMonth()+1,1);return v(e,"yyyy-mm")},currentDate(){const e=this.date.getFullYear(),t=this.date.getMonth()+1;return`${e} \u5E74 ${t} \u6708`},formatedToday(){return v(this.now,"yyyy-mm-dd")},date(){if(this.selectedDay){const e=this.selectedDay.split("-");return new Date(e[0],e[1]-1,e[2])}return this.now}}},J={class:"calendar"},Q={class:"calendar__header"},Z={class:"calendar__title"},ee={class:"calendar__button-group"},te={class:"calendar__body"};function se(e,t,a,o,r,s){const l=V;return m(),u("div",J,[f("div",Q,[f("div",Z,k(s.currentDate),1),f("div",ee,[f("button",{class:"btn",onClick:t[0]||(t[0]=i=>s.selectDate("prev-month"))},"\u4E0A\u4E2A\u6708"),f("button",{class:"btn",onClick:t[1]||(t[1]=i=>s.selectDate("today"))},"\u4ECA\u5929"),f("button",{class:"btn",onClick:t[2]||(t[2]=i=>s.selectDate("next-month"))},"\u4E0B\u4E2A\u6708")])]),f("div",te,[h(l,{date:s.date,schedule:a.schedule},null,8,["date","schedule"])])])}var S=w(H,[["render",se],["__scopeId","data-v-11d123d3"]]);const ae={components:{Demo:M,Calendar:S},name:"PromotionCalendar",data(){return{demoInfo:{title:"\u4FC3\u9500\u65E5\u5386",url:""},schedule:[],dialogFormVisible:!1,form:{title:"",startDate:"",endDate:""},formRules:{title:[{required:!0,message:"\u8BF7\u8F93\u5165\u6D3B\u52A8\u540D\u79F0",trigger:"blur"}],startDate:[{required:!0,message:"\u8BF7\u9009\u62E9\u65E5\u671F",trigger:"change"}],endDate:[{required:!0,message:"\u8BF7\u9009\u62E9\u65E5\u671F",trigger:"change"}]}}},created(){this.getScheduleList()},methods:{async getScheduleList(){let e=await this.req({url:"/demo/calendar"});e.result&&e.result.list&&(this.schedule=e.result.list)},onPickDay(e){const{formatedDate:t}=e;this.dialogFormVisible=!0,this.form.startDate=t},onPickSchedule(e){const{id:t}=e,a=this.schedule.find(o=>o.id===t);a&&(this.form={...a},this.dialogFormVisible=!0)},onDialogBtnClick(e){e==="cancel"?(this.dialogFormVisible=!1,this.$refs.form.resetFields(),this.form={title:"",startDate:"",endDate:""}):e==="confirm"&&this.$refs.form.validate(async t=>{if(t){const{schedule:a,form:o}=this;if(o.id){const r=this.schedule.findIndex(s=>s.id===o.id);this.$set(this.schedule,r,o)}else{const r=a[a.length-1].id+1,s={...o,id:r};this.schedule.push(s)}this.dialogFormVisible=!1}})}}},re=T("\u53D6 \u6D88"),oe=T("\u786E \u5B9A");function ne(e,t,a,o,r,s){const l=S,i=R,c=A,n=L,d=N,p=q,g=U,y=M;return m(),z(y,{data:r.demoInfo},{default:D(()=>[h(l,{schedule:r.schedule,onPickDay:s.onPickDay,onPickSchedule:s.onPickSchedule},null,8,["schedule","onPickDay","onPickSchedule"]),h(g,{title:"\u65B0\u589E\u4FC3\u9500\u6D3B\u52A8",modelValue:r.dialogFormVisible,"onUpdate:modelValue":t[5]||(t[5]=_=>r.dialogFormVisible=_),width:"500px"},{footer:D(()=>[h(p,{onClick:t[3]||(t[3]=_=>s.onDialogBtnClick("cancel"))},{default:D(()=>[re]),_:1}),h(p,{type:"primary",onClick:t[4]||(t[4]=_=>s.onDialogBtnClick("confirm"))},{default:D(()=>[oe]),_:1})]),default:D(()=>[h(d,{model:r.form,rules:r.formRules,"label-width":"100px",ref:"form"},{default:D(()=>[h(c,{label:"\u6D3B\u52A8\u540D\u79F0:",prop:"title"},{default:D(()=>[h(i,{modelValue:r.form.title,"onUpdate:modelValue":t[0]||(t[0]=_=>r.form.title=_),autocomplete:"off",style:{width:"300px"}},null,8,["modelValue"])]),_:1}),h(c,{label:"\u5F00\u59CB\u65E5\u671F\uFF1A",prop:"startDate"},{default:D(()=>[h(n,{modelValue:r.form.startDate,"onUpdate:modelValue":t[1]||(t[1]=_=>r.form.startDate=_),type:"date",style:{width:"300px"},"value-format":"yyyy-MM-dd"},null,8,["modelValue"])]),_:1}),h(c,{label:"\u7ED3\u675F\u65E5\u671F\uFF1A",prop:"endDate"},{default:D(()=>[h(n,{modelValue:r.form.endDate,"onUpdate:modelValue":t[2]||(t[2]=_=>r.form.endDate=_),type:"date",style:{width:"300px"},"value-format":"yyyy-MM-dd"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"])]),_:1},8,["data"])}var ye=w(ae,[["render",ne],["__scopeId","data-v-50ad4e0a"]]);export{ye as default};
