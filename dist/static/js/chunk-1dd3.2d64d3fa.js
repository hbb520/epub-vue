(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1dd3"],{"/fRz":function(e,t,n){},akBH:function(e,t,n){"use strict";var a=n("/fRz");n.n(a).a},gbZG:function(e,t,n){"use strict";n.r(t);var a=n("shDw"),l={data:function(){return{listLoading:!1,id:null,detail:{},formInline:{username:null,phone:null,startTime:null,memberType:null,memberSource:null,tag:null,status:null,endTime:null},ruleForm:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""},rules:{name:[{required:!1,message:"请输入活动名称",trigger:"blur"}],region:[{required:!0,message:"请选择活动区域",trigger:"change"}],date1:[{type:"date",required:!0,message:"请选择日期",trigger:"change"}],date2:[{type:"date",required:!0,message:"请选择时间",trigger:"change"}],type:[{type:"array",required:!0,message:"请至少选择一个活动性质",trigger:"change"}],resource:[{required:!0,message:"请选择活动资源",trigger:"change"}],desc:[{required:!0,message:"请填写活动形式",trigger:"blur"}]},pickerOptions:{shortcuts:[{text:"今天",onClick:function(e){e.$emit("pick",new Date)}},{text:"明天",onClick:function(e){var t=new Date;t.setTime(t.getTime()+864e5),e.$emit("pick",t)}},{text:"一周后",onClick:function(e){var t=new Date;t.setTime(t.getTime()+6048e5),e.$emit("pick",t)}}]},allSelection:[],list:[],currentPage:1,listQuery:{pageNumber:1,pageSize:10,total:0}}},created:function(){this.$route.params.id?(this.id=this.$route.params.id,this.getData(this.$route.params.id)):this.$router.push({path:"/users/user-list"}),this.getList(1)},methods:{getData:function(e){var t=this;this.listLoading=!0;var n={id:e};Object(a.a)(n).then(function(e){console.log(e.data.items),t.detail=e.data.items,t.listLoading=!1}).catch(function(e){t.listLoading=!1})},getList:function(e){var t=this;this.listLoading=!0,this.currentPage=e;var n={pageNum:e,pageSize:this.listQuery.pageSize,phone:this.formInline.phone,startTime:this.formInline.startTime};Object(a.b)(n).then(function(e){console.log(e),t.list=e.data.items,t.listQuery.total=e.total,t.listLoading=!1}).catch(function(e){t.listLoading=!1})},handleSizeChange:function(e){this.listQuery.pageSize=e,this.getData(1)},handleCurrentChange:function(e){this.getData(e)},toggleAllSelection:function(e){var t=this;e?e.forEach(function(e){t.$refs.multipleTable.toggleAllSelection(e)}):this.$refs.multipleTable.clearSelection()},handleSelectionChange:function(e){for(var t=[],n=0;n<e.length;n++)t.push(e[n]);this.multipleSelection=t}}},i=(n("akBH"),n("KHd+")),r=Object(i.a)(l,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container table-detail-container"},[n("el-card",{staticClass:"box-card search-card",staticStyle:{"margin-bottom":"24px"},attrs:{shadow:"never"}},[n("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{"label-width":"50%"}},[n("el-form-item",{attrs:{label:"消息标题:"}},[e._v("\n        "+e._s(e.detail.nickname)+"\n      ")]),e._v(" "),n("el-form-item",{attrs:{label:"消息内容:"}},[e._v("\n        "+e._s(e.detail.nickname)+"\n      ")]),e._v(" "),n("el-form-item",{attrs:{label:"跳转地址:"}},[e._v("\n        "+e._s(e.detail.nickname)+"\n      ")]),e._v(" "),n("el-form-item",{attrs:{label:"发送设备:"}},[n("span",{staticClass:"m-r-32",staticStyle:{display:"inline-block"}},[e._v("Ios设备")]),e._v(" Android设备\n      ")]),e._v(" "),n("el-form-item",{attrs:{label:"发送方式:"}},[e._v("\n        立即发送\n      ")]),e._v(" "),n("el-form-item",{attrs:{label:"发送范围:"}},[e._v("\n        全部用户\n      ")]),e._v(" "),n("div",{staticStyle:{"border-top":"1px solid #E9E9E9","padding-top":"24px"}},[n("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{size:"medium",data:e.list,"element-loading-text":"加载中..","element-loading-spinner":"el-icon-loading",stripe:!0,"header-align":"center",fit:"","highlight-current-row":""},on:{"selection-change":e.handleSelectionChange}},[n("el-table-column",{attrs:{label:"手机号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n              "+e._s(t.row.phone)+"\n            ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"累计充值",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n              ￥10.0\n            ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"充值时间",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n              "+e._s(t.row.create_time)+"\n            ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"累计消费",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n              ￥10.0\n            ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"消费时间",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n              "+e._s(t.row.create_time)+"\n            ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"会员来源",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.role_type?n("span",[e._v("赠送会员")]):e._e(),e._v(" "),2==t.row.role_type?n("span",[e._v("全额购买")]):e._e(),e._v(" "),t.row.role_type>2?n("span",[e._v("全额购买")]):e._e()]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"会员类型",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.role_type?n("span",[e._v("科普会员")]):e._e(),e._v(" "),2==t.row.role_type?n("span",[e._v("会员活动")]):e._e(),e._v(" "),t.row.role_type>2?n("span",[e._v("会员活动")]):e._e()]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"注册时间",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n              "+e._s(t.row.create_time)+"\n            ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"登录时间",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n              "+e._s(t.row.create_time)+"\n            ")]}}])})],1)],1),e._v(" "),n("div",{staticClass:"text-center page-btn-bottom-box"},[n("el-button",{staticClass:"width-120 border-none ",attrs:{type:"info",round:""},on:{click:function(t){e.$goLink("/operations-management/message")}}},[e._v("返回\n        ")])],1)],1)],1)],1)},[],!1,null,null,null);r.options.__file="detail.vue";t.default=r.exports},shDw:function(e,t,n){"use strict";n.d(t,"b",function(){return l}),n.d(t,"a",function(){return i});var a=n("t3Un");function l(e){return Object(a.a)({url:"/systemSettings/list",method:"get",params:e})}function i(e){return Object(a.a)({url:"/systemSettings/detail",method:"get",params:e})}}}]);