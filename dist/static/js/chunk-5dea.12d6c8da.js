(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5dea"],{"9zZt":function(t,i,o){"use strict";o.r(i);var s=o("aIC9").a,a=(o("IG6d"),o("Z9t2"),o("KHd+")),n=Object(a.a)(s,function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",{class:t.isPhoneClient?"mobileContainer":"pcContainer",attrs:{id:"book-list-container"}},[o("mu-appbar",{staticClass:"appbar-header",staticStyle:{width:"100%"},attrs:{color:"primary"}},[o("div",{staticStyle:{"max-width":"1540px",padding:"0 30px",margin:"0 auto"}},[o("mu-button",{attrs:{slot:"left",icon:""},slot:"left"},[o("i",{staticClass:"iconfont iconbook"})]),t._v("\n\t\t\t\t在线书城\n\t\t\t")],1)]),t._v(" "),o("div",{staticClass:"book-list-ul"},[o("ul",{staticClass:"clearfix"},[t._l(t.bookList,function(i,s){return o("li",{key:s,staticClass:"item"},[o("div",{staticClass:"img-box",on:{click:function(o){t.$goLink(t.isPhoneClient?"/mobileIndex":"/index",{id:i.id,path:i.path})}}},[o("div",{staticClass:"img",class:i.cover?"":"nocover",style:{backgroundImage:i.cover?"url("+i.cover+")":"none"}})]),t._v(" "),o("div",{staticClass:"book-name wordOverflow"},[t._v(t._s(i.title))]),t._v(" "),t.isPhoneClient?t._e():o("p",{staticClass:"delBtn",on:{click:function(o){t.delBook(i.id)}}},[t._v("删除")]),t._v(" "),t.isPhoneClient?o("p",{staticClass:"delBtn",on:{click:function(o){t.delBook(i.id)}}},[o("i",{staticClass:"iconfont iconclose"})]):t._e()])}),t._v(" "),t.isUploading?o("li",{staticClass:"item"},[o("div",{staticClass:"img-box"},[o("el-progress",{staticStyle:{"margin-top":"50px"},attrs:{type:"circle",percentage:t.progress}})],1),t._v(" "),o("div",{staticClass:"book-name wordOverflow"},[t._v(t._s(t.uploadFileList[0].name))]),t._v(" "),t.isPhoneClient?t._e():o("p",{staticClass:"delBtn",on:{click:function(i){t.delUploadingBook()}}},[t._v("删除")]),t._v(" "),t.isPhoneClient?o("p",{staticClass:"delBtn",on:{click:function(i){t.delUploadingBook()}}},[o("i",{staticClass:"iconfont iconclose"})]):t._e()]):t._e(),t._v(" "),o("li",{directives:[{name:"show",rawName:"v-show",value:!t.isUploading,expression:"!isUploading"}],staticClass:"item"},[o("el-upload",{ref:"uploadBook",staticClass:"book-uploader",attrs:{action:t.uploadAction,"show-file-list":!1,data:t.uploadData,"on-progress":t.uploading,"on-change":t.bookHandleChange,"on-success":t.bookHandleSuccess,"on-error":t.handleError,"before-upload":t.beforeBookUpload}},[o("div",{staticClass:"upload-book",attrs:{slot:"trigger"},slot:"trigger"},[o("i",{staticClass:"iconfont iconadd"}),t._v(" "),o("span",[t._v("点击上传图书")])])])],1)],2)])],1)},[],!1,null,"b093f972",null);n.options.__file="index.vue";i.default=n.exports},IG6d:function(t,i,o){"use strict";var s=o("t2TY");o.n(s).a},Z9t2:function(t,i,o){"use strict";var s=o("ikwB");o.n(s).a},ikwB:function(t,i,o){},t2TY:function(t,i,o){}}]);