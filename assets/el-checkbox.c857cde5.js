import{aM as O,q as I,aN as ae,av as ce,u as g,ab as N,x as D,ax as A,aH as R,N as L,aO as B,aP as ne,R as T,Q as U,ah as P,l as E,aQ as j,v as F,o as f,b as K,w as Q,e as M,a2 as C,aR as w,A as e,c as _,af as z,n as m,z as $,F as ie,g as Y,t as q,h as G,d as H,C as V,B as te,E as se,aF as de,D as be,aS as W}from"./index.554256c3.js";import{u as J}from"./index2.61e53243.js";import{U as S}from"./event2.de93cf03.js";import{d as X}from"./error2.0bf5905b.js";const ue={modelValue:{type:Array,default:()=>[]},disabled:Boolean,min:{type:Number,default:void 0},max:{type:Number,default:void 0},size:O,id:{type:String,default:void 0},label:{type:String,default:void 0},fill:{type:String,default:void 0},textColor:{type:String,default:void 0},tag:{type:String,default:"div"}},Z={modelValue:{type:[Number,String,Boolean],default:()=>{}},label:{type:[String,Boolean,Number,Object]},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},controls:{type:String,default:void 0},border:Boolean,size:O,tabindex:[String,Number]},y=()=>{const l=I(ae,{}),d=I(ce,{}),i=I("CheckboxGroup",{}),t=g(()=>i&&(i==null?void 0:i.name)==="ElCheckboxGroup"),b=g(()=>d.size);return{isGroup:t,checkboxGroup:i,elForm:l,elFormItemSize:b,elFormItem:d}},he=(l,{elFormItem:d})=>{const{inputId:i,isLabeledByFormItem:t}=J(l,{formItemContext:d});return{isLabeledByFormItem:t,groupId:i}},ke=l=>{const d=L(!1),{emit:i}=P(),{isGroup:t,checkboxGroup:b,elFormItem:h}=y(),u=L(!1);return{model:g({get(){var n,s;return t.value?(n=b.modelValue)==null?void 0:n.value:(s=l.modelValue)!=null?s:d.value},set(n){var s;t.value&&Array.isArray(n)?(u.value=b.max!==void 0&&n.length>b.max.value,u.value===!1&&((s=b==null?void 0:b.changeEvent)==null||s.call(b,n))):(i(S,n),d.value=n)}}),isGroup:t,isLimitExceeded:u,elFormItem:h}},xe=(l,d,{model:i})=>{const{isGroup:t,checkboxGroup:b}=y(),h=L(!1),u=B(b==null?void 0:b.checkboxGroupSize,{prop:!0}),x=g(()=>{const o=i.value;return ne(o)==="[object Boolean]"?o:Array.isArray(o)?o.includes(l.label):o!=null?o===l.trueLabel:!!o}),n=B(g(()=>{var o;return t.value?(o=b==null?void 0:b.checkboxGroupSize)==null?void 0:o.value:void 0})),s=g(()=>!!(d.default||l.label));return{isChecked:x,focus:h,size:u,checkboxSize:n,hasOwnLabel:s}},pe=(l,{model:d,isChecked:i})=>{const{elForm:t,isGroup:b,checkboxGroup:h}=y(),u=g(()=>{var n,s;const o=(n=h.max)==null?void 0:n.value,v=(s=h.min)==null?void 0:s.value;return!!(o||v)&&d.value.length>=o&&!i.value||d.value.length<=v&&i.value});return{isDisabled:g(()=>{var n,s;const o=l.disabled||(t==null?void 0:t.disabled);return(s=b.value?((n=h.disabled)==null?void 0:n.value)||o||u.value:o)!=null?s:!1}),isLimitDisabled:u}},ve=(l,{model:d})=>{function i(){Array.isArray(d.value)&&!d.value.includes(l.label)?d.value.push(l.label):d.value=l.trueLabel||!0}l.checked&&i()},me=(l,{model:d,isLimitExceeded:i,hasOwnLabel:t,isDisabled:b,isLabeledByFormItem:h})=>{const{elFormItem:u}=y(),{emit:x}=P();function n(c){var r,a;return c===l.trueLabel||c===!0?(r=l.trueLabel)!=null?r:!0:(a=l.falseLabel)!=null?a:!1}function s(c,r){x("change",n(c),r)}function o(c){if(i.value)return;const r=c.target;x("change",n(r.checked),c)}async function v(c){i.value||!t.value&&!b.value&&h.value&&(d.value=n([!1,l.falseLabel].includes(d.value)),await T(),s(d.value,c))}return U(()=>l.modelValue,()=>{var c;(c=u==null?void 0:u.validate)==null||c.call(u,"change").catch(r=>X())}),{handleChange:o,onClickRoot:v}},ee={[S]:l=>N(l)||D(l)||A(l),change:l=>N(l)||D(l)||A(l)},fe={[S]:l=>R(l),change:l=>R(l)},oe=(l,d)=>{const{model:i,isGroup:t,isLimitExceeded:b,elFormItem:h}=ke(l),{focus:u,size:x,isChecked:n,checkboxSize:s,hasOwnLabel:o}=xe(l,d,{model:i}),{isDisabled:v}=pe(l,{model:i,isChecked:n}),{inputId:c,isLabeledByFormItem:r}=J(l,{formItemContext:h,disableIdGeneration:o,disableIdManagement:t}),{handleChange:a,onClickRoot:k}=me(l,{model:i,isLimitExceeded:b,hasOwnLabel:o,isDisabled:v,isLabeledByFormItem:r});return ve(l,{model:i}),{elFormItem:h,inputId:c,isLabeledByFormItem:r,isChecked:n,isDisabled:v,isGroup:t,checkboxSize:s,hasOwnLabel:o,model:i,handleChange:a,onClickRoot:k,focus:u,size:x}},ge=["tabindex","role","aria-checked"],_e=["id","aria-hidden","name","tabindex","disabled","true-value","false-value"],ye=["id","aria-hidden","disabled","value","name","tabindex"],Ce={name:"ElCheckbox"},we=E({...Ce,props:Z,emits:ee,setup(l){const d=l,i=j(),{inputId:t,isLabeledByFormItem:b,isChecked:h,isDisabled:u,checkboxSize:x,hasOwnLabel:n,model:s,handleChange:o,onClickRoot:v,focus:c}=oe(d,i),r=F("checkbox");return(a,k)=>(f(),K(H(!e(n)&&e(b)?"span":"label"),{class:m([e(r).b(),e(r).m(e(x)),e(r).is("disabled",e(u)),e(r).is("bordered",a.border),e(r).is("checked",e(h))]),"aria-controls":a.indeterminate?a.controls:null,onClick:e(v)},{default:Q(()=>[M("span",{class:m([e(r).e("input"),e(r).is("disabled",e(u)),e(r).is("checked",e(h)),e(r).is("indeterminate",a.indeterminate),e(r).is("focus",e(c))]),tabindex:a.indeterminate?0:void 0,role:a.indeterminate?"checkbox":void 0,"aria-checked":a.indeterminate?"mixed":void 0},[a.trueLabel||a.falseLabel?C((f(),_("input",{key:0,id:e(t),"onUpdate:modelValue":k[0]||(k[0]=p=>z(s)?s.value=p:null),class:m(e(r).e("original")),type:"checkbox","aria-hidden":a.indeterminate?"true":"false",name:a.name,tabindex:a.tabindex,disabled:e(u),"true-value":a.trueLabel,"false-value":a.falseLabel,onChange:k[1]||(k[1]=(...p)=>e(o)&&e(o)(...p)),onFocus:k[2]||(k[2]=p=>c.value=!0),onBlur:k[3]||(k[3]=p=>c.value=!1)},null,42,_e)),[[w,e(s)]]):C((f(),_("input",{key:1,id:e(t),"onUpdate:modelValue":k[4]||(k[4]=p=>z(s)?s.value=p:null),class:m(e(r).e("original")),type:"checkbox","aria-hidden":a.indeterminate?"true":"false",disabled:e(u),value:a.label,name:a.name,tabindex:a.tabindex,onChange:k[5]||(k[5]=(...p)=>e(o)&&e(o)(...p)),onFocus:k[6]||(k[6]=p=>c.value=!0),onBlur:k[7]||(k[7]=p=>c.value=!1)},null,42,ye)),[[w,e(s)]]),M("span",{class:m(e(r).e("inner"))},null,2)],10,ge),e(n)?(f(),_("span",{key:0,class:m(e(r).e("label"))},[$(a.$slots,"default"),a.$slots.default?G("v-if",!0):(f(),_(ie,{key:0},[Y(q(a.label),1)],64))],2)):G("v-if",!0)]),_:3},8,["class","aria-controls","onClick"]))}});var ze=V(we,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);const Se=["name","tabindex","disabled","true-value","false-value"],Ie=["name","tabindex","disabled","value"],Le={name:"ElCheckboxButton"},Be=E({...Le,props:Z,emits:ee,setup(l){const d=l,i=j(),{focus:t,isChecked:b,isDisabled:h,size:u,model:x,handleChange:n}=oe(d,i),{checkboxGroup:s}=y(),o=F("checkbox"),v=g(()=>{var c,r,a,k;const p=(r=(c=s==null?void 0:s.fill)==null?void 0:c.value)!=null?r:"";return{backgroundColor:p,borderColor:p,color:(k=(a=s==null?void 0:s.textColor)==null?void 0:a.value)!=null?k:"",boxShadow:p?`-1px 0 0 0 ${p}`:void 0}});return(c,r)=>(f(),_("label",{class:m([e(o).b("button"),e(o).bm("button",e(u)),e(o).is("disabled",e(h)),e(o).is("checked",e(b)),e(o).is("focus",e(t))])},[c.trueLabel||c.falseLabel?C((f(),_("input",{key:0,"onUpdate:modelValue":r[0]||(r[0]=a=>z(x)?x.value=a:null),class:m(e(o).be("button","original")),type:"checkbox",name:c.name,tabindex:c.tabindex,disabled:e(h),"true-value":c.trueLabel,"false-value":c.falseLabel,onChange:r[1]||(r[1]=(...a)=>e(n)&&e(n)(...a)),onFocus:r[2]||(r[2]=a=>t.value=!0),onBlur:r[3]||(r[3]=a=>t.value=!1)},null,42,Se)),[[w,e(x)]]):C((f(),_("input",{key:1,"onUpdate:modelValue":r[4]||(r[4]=a=>z(x)?x.value=a:null),class:m(e(o).be("button","original")),type:"checkbox",name:c.name,tabindex:c.tabindex,disabled:e(h),value:c.label,onChange:r[5]||(r[5]=(...a)=>e(n)&&e(n)(...a)),onFocus:r[6]||(r[6]=a=>t.value=!0),onBlur:r[7]||(r[7]=a=>t.value=!1)},null,42,Ie)),[[w,e(x)]]),c.$slots.default||c.label?(f(),_("span",{key:2,class:m(e(o).be("button","inner")),style:te(e(b)?e(v):void 0)},[$(c.$slots,"default",{},()=>[Y(q(c.label),1)])],6)):G("v-if",!0)],2))}});var le=V(Be,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);const Ge={name:"ElCheckboxGroup"},Ee=E({...Ge,props:ue,emits:fe,setup(l,{emit:d}){const i=l,{elFormItem:t}=y(),{groupId:b,isLabeledByFormItem:h}=he(i,{elFormItem:t}),u=B(),x=F("checkbox"),n=o=>{d(S,o),T(()=>{d("change",o)})},s=g({get(){return i.modelValue},set(o){n(o)}});return se("CheckboxGroup",{name:"ElCheckboxGroup",modelValue:s,...de(i),checkboxGroupSize:u,changeEvent:n}),U(()=>i.modelValue,()=>{var o;(o=t.validate)==null||o.call(t,"change").catch(v=>X())}),(o,v)=>(f(),K(H(o.tag),{id:e(b),class:m(e(x).b("group")),role:"group","aria-label":e(h)?void 0:o.label||"checkbox-group","aria-labelledby":e(h)?e(t).labelId:void 0},{default:Q(()=>[$(o.$slots,"default")]),_:3},8,["id","class","aria-label","aria-labelledby"]))}});var re=V(Ee,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);const De=be(ze,{CheckboxButton:le,CheckboxGroup:re});W(le);W(re);export{De as E};
