import{_ as x}from"./index.26c9bdd2.js";import{D as d}from"./index.891a71a5.js";/* empty css                 *//* empty css                        *//* empty css                     *//* empty css                    *//* empty css                  */import{K as v,P as _,Q as f,R as w,S as k,o as s,c,w as p,b as a,t as z,A as y,B as C,U as G,a as S,z as E}from"./elementPlus.e1b2604b.js";const I={components:{Demo:d},name:"TableSelect",data(){return{demoInfo:{title:"\u8868\u683C\u5206\u9875\u591A\u9009",url:"https://snail-lu.vercel.app/2021-11-11-element-ui-zhong-el-table-fan-ye-duo-xuan-shi-xian.html"},tableData:[],goodsTotal:0,tableLoading:!1,selectedGoodsIds:[],selectedGoodsIdsOther:[],selectedGoodsIdsAll:[],showSelectedGoods:!1,goodsForm:{pageInfo:{pageNum:1,pageSize:5}}}},created(){this.onSearchGoods()},methods:{handleGoodsPageChange(e){this.getAllSelectedGoodsId(),this.goodsForm.pageInfo.pageNum=e,this.onSearchGoods()},handleGoodsSizeChange(e){this.getAllSelectedGoodsId(),this.goodsForm.pageInfo.pageSize=e,this.onSearchGoods()},onSearchGoods(){this.tableLoading=!0,this.queryGoods(this.goodsForm).then(e=>{this.tableData=e.list,this.toggleSelection(),this.goodsTotal=e.total,this.tableLoading=!1},()=>{this.tableLoading=!1})},toggleSelection(){const e=[],l=this.selectedGoodsIdsAll.slice();this.$nextTick(()=>{this.tableData.forEach(t=>{if(this.selectedGoodsIdsAll.includes(t.id)){this.$refs.multipleTable.toggleRowSelection(t,!0),e.push(t.id);const n=l.indexOf(t.id);l.splice(n,1)}}),this.selectedGoodsIds=e,this.selectedGoodsIdsOther=l})},handleSelectionChange(e){this.selectedGoodsIds=e.map(l=>l.id)},getAllSelectedGoodsId(){const{selectedGoodsIds:e,selectedGoodsIdsOther:l}=this;this.selectedGoodsIdsAll=[...l,...e]},onPrint(){this.showSelectedGoods=!0,this.getAllSelectedGoodsId()},queryGoods(e){const{pageInfo:l}=e,{pageNum:t,pageSize:n}=l,o=[{id:1,goodsName:"\u6D4B\u8BD5\u5546\u54C11",goodsCode:"000001",goodsPrice:101},{id:2,goodsName:"\u6D4B\u8BD5\u5546\u54C12",goodsCode:"000002",goodsPrice:102},{id:3,goodsName:"\u6D4B\u8BD5\u5546\u54C13",goodsCode:"000003",goodsPrice:103},{id:4,goodsName:"\u6D4B\u8BD5\u5546\u54C14",goodsCode:"000004",goodsPrice:104},{id:5,goodsName:"\u6D4B\u8BD5\u5546\u54C15",goodsCode:"000005",goodsPrice:105},{id:6,goodsName:"\u6D4B\u8BD5\u5546\u54C16",goodsCode:"000006",goodsPrice:106},{id:7,goodsName:"\u6D4B\u8BD5\u5546\u54C17",goodsCode:"000007",goodsPrice:107},{id:8,goodsName:"\u6D4B\u8BD5\u5546\u54C18",goodsCode:"000008",goodsPrice:108},{id:9,goodsName:"\u6D4B\u8BD5\u5546\u54C19",goodsCode:"000009",goodsPrice:109},{id:10,goodsName:"\u6D4B\u8BD5\u5546\u54C110",goodsCode:"0000010",goodsPrice:110}];return new Promise(i=>{setTimeout(()=>{i({list:o.slice((t-1)*n,t*n),total:o.length})},1e3)})}}},L=E("\u6253\u5370\u6240\u6709\u5DF2\u9009\u6570\u636EID"),N={key:0},P={class:"flex-box flex-h-end"};function A(e,l,t,n,o,i){const g=v,r=_,h=f,b=w,u=d,m=k;return s(),c(u,{data:o.demoInfo},{default:p(()=>[a(g,{onClick:i.onPrint,type:"primary",size:"mini",style:{"margin-bottom":"20px"}},{default:p(()=>[L]),_:1},8,["onClick"]),o.showSelectedGoods?(s(),z("span",N,y(o.selectedGoodsIdsAll.length?o.selectedGoodsIdsAll.join(" "):""),1)):C("",!0),G((s(),c(h,{ref:"multipleTable",data:o.tableData,border:"",height:"450","header-cell-style":{background:"#F5F7FA",color:"#606266",textAlign:"center"},"cell-style":{textAlign:"center"},onSelect:i.handleSelectionChange,onSelectAll:i.handleSelectionChange},{default:p(()=>[a(r,{type:"selection"}),a(r,{prop:"id",label:"ID"}),a(r,{prop:"goodsName",label:"\u5546\u54C1\u540D\u79F0"}),a(r,{prop:"goodsCode",label:"\u6B3E\u53F7"}),a(r,{prop:"goodsPrice",label:"\u540A\u724C\u4EF7\u683C\uFF08\u5143\uFF09"})]),_:1},8,["data","onSelect","onSelectAll"])),[[m,o.tableLoading]]),S("div",P,[a(b,{background:"",layout:"total,prev,sizes, pager, next",total:o.goodsTotal,"page-size":o.goodsForm.pageInfo.pageSize,"current-page":o.goodsForm.pageInfo.pageNum,onSizeChange:i.handleGoodsSizeChange,onCurrentChange:i.handleGoodsPageChange,"page-sizes":[5,10]},null,8,["total","page-size","current-page","onSizeChange","onCurrentChange"])])]),_:1},8,["data"])}var V=x(I,[["render",A],["__scopeId","data-v-5b6a64b8"]]);export{V as default};
