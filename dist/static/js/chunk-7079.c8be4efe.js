(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-7079"],{"8JwK":function(t,o,i){"use strict";var s=i("YM1I");i.n(s).a},"9zZt":function(t,o,i){"use strict";i.r(o);var s=i("aIC9").a,a=(i("8JwK"),i("Z9t2"),i("KHd+")),n=Object(a.a)(s,function(){var t=this,o=t.$createElement,i=t._self._c||o;return i("div",{class:t.isPhoneClient?"mobileContainer":"pcContainer",attrs:{id:"book-list-container"}},[i("mu-appbar",{staticClass:"appbar-header",staticStyle:{width:"100%"},attrs:{color:"primary"}},[i("div",{staticStyle:{"max-width":"1540px",padding:"0 30px",margin:"0 auto"}},[i("mu-button",{attrs:{slot:"left",icon:""},slot:"left"},[i("i",{staticClass:"iconfont iconbook"})]),t._v("\n\t\t\t在线书城\n\t\t")],1)]),t._v(" "),i("div",{staticClass:"book-list-ul"},[i("ul",{staticClass:"clearfix"},[t._l(t.bookList,function(o,s){return i("li",{key:s,staticClass:"item"},[i("div",{staticClass:"img-box",on:{click:function(i){t.$goLink(t.isPhoneClient?"/mobileIndex":"/index",{id:o.id,path:o.path})}}},[i("div",{staticClass:"img",class:o.cover?"":"nocover",style:{backgroundImage:o.cover?"url("+o.cover+")":"none"}})]),t._v(" "),i("div",{staticClass:"book-name wordOverflow"},[t._v(t._s(o.title))]),t._v(" "),t.isPhoneClient?t._e():i("p",{staticClass:"delBtn",on:{click:function(i){t.delBook(o.id)}}},[t._v("删除")]),t._v(" "),t.isPhoneClient?i("p",{staticClass:"delBtn",on:{click:function(i){t.delBook(o.id)}}},[i("i",{staticClass:"iconfont iconclose"})]):t._e()])}),t._v(" "),t.isUploading?i("li",{staticClass:"item"},[i("div",{staticClass:"img-box"},[i("el-progress",{staticStyle:{"margin-top":"50px"},attrs:{type:"circle",percentage:t.progress}})],1),t._v(" "),i("div",{staticClass:"book-name wordOverflow"},[t._v(t._s(t.uploadFileList[0].name))]),t._v(" "),t.isPhoneClient?t._e():i("p",{staticClass:"delBtn",on:{click:function(o){t.delUploadingBook()}}},[t._v("删除")]),t._v(" "),t.isPhoneClient?i("p",{staticClass:"delBtn",on:{click:function(o){t.delUploadingBook()}}},[i("i",{staticClass:"iconfont iconclose"})]):t._e()]):t._e(),t._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:!t.isUploading,expression:"!isUploading"}],staticClass:"item"},[i("el-upload",{ref:"uploadBook",staticClass:"book-uploader",attrs:{action:t.uploadAction,"show-file-list":!1,data:t.uploadData,"on-progress":t.uploading,"on-change":t.bookHandleChange,"on-success":t.bookHandleSuccess,"on-error":t.handleError,"before-upload":t.beforeBookUpload}},[i("div",{staticClass:"upload-book",attrs:{slot:"trigger"},slot:"trigger"},[i("i",{staticClass:"iconfont iconadd"}),t._v(" "),i("span",[t._v("点击上传图书")])])])],1)],2)]),t._v(" "),i("mu-dialog",{attrs:{title:"提示","max-width":"80%","esc-press-close":!1,"overlay-close":!1,open:t.dialogStatus},on:{"update:open":function(o){t.dialogStatus=o}}},[t._v("\n\t\t此操作将删除该图书, 是否继续?\n\t\t"),i("mu-button",{attrs:{slot:"actions",flat:"",color:"primary"},on:{click:function(o){t.dialogStatus=!1}},slot:"actions"},[t._v("取消")]),t._v(" "),i("mu-button",{attrs:{slot:"actions",flat:"",color:"primary"},on:{click:function(o){t.agree()}},slot:"actions"},[t._v("确定")])],1)],1)},[],!1,null,"3eb9aea6",null);n.options.__file="index.vue";o.default=n.exports},YM1I:function(t,o,i){},Z9t2:function(t,o,i){"use strict";var s=i("ikwB");i.n(s).a},ikwB:function(t,o,i){}}]);