import{_ as f}from"./index.26c9bdd2.js";/* empty css               */import{_ as d}from"./index.33697b35.js";import{o as e,t as s,b as i,w as r,F as _,y as h,c as x,C as u,D as b,G as g,H as v,a,z as n}from"./elementPlus.e1b2604b.js";import"./index.accdd598.js";const k={components:{Card:d},data(){return{projectsList:[]}},created(){this.getProjectList()},methods:{pushUrl(t){this.$router.push({path:`/demo/${t}`})},async getProjectList(){let t=await this.req({url:"/project/list"});t.result&&t.result.list&&(this.projectsList=t.result.list)}}},w=t=>(u("data-v-9be0af2a"),t=t(),b(),t),y={class:"demo-list-container"},j=w(()=>a("div",{class:"footer"},[n(" Illustration by "),a("a",{class:"link",href:"https://icons8.com/illustrations/",target:"_blank"},"Icons 8"),n(" from "),a("a",{class:"link",href:"https://icons8.com/illustrations",target:"_blank"},"Ouch!")],-1));function z(t,I,L,$,l,B){const c=d,p=g,m=v;return e(),s("div",y,[i(m,{class:"demo-list",gutter:40},{default:r(()=>[(e(!0),s(_,null,h(l.projectsList,o=>(e(),x(p,{class:"demo-item",key:o.path,span:8},{default:r(()=>[i(c,{data:o},null,8,["data"])]),_:2},1024))),128))]),_:1}),j])}var F=f(k,[["render",z],["__scopeId","data-v-9be0af2a"]]);export{F as default};
