(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-ba01"],{"9zZt":function(t,a,s){"use strict";s.r(a);var i=s("aIC9").a,o=(s("QHSw"),s("KHd+")),e=Object(o.a)(i,function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"app-container",attrs:{id:"book-list-container"}},[s("mu-appbar",{staticClass:"appbar-header",staticStyle:{width:"100%"},attrs:{color:"primary"}},[s("div",{staticStyle:{"max-width":"1540px",margin:"0 auto"}},[s("mu-button",{attrs:{slot:"left",icon:""},slot:"left"},[s("i",{staticClass:"iconfont iconbook"})]),t._v("\n\t\t\t\t在线书城\n\t\t\t")],1)]),t._v(" "),s("ul",{staticClass:"book-list-ul clearfix"},[t._l(t.bookList,function(a,i){return s("li",{key:i,staticClass:"item"},[s("div",{staticClass:"img-box",on:{click:function(s){t.$goLink(t.isPhoneClient?"/mobileIndex":"/index",{id:a.id,path:a.path})}}},[s("div",{staticClass:"img",style:{backgroundImage:"url("+a.cover+")"}})]),t._v(" "),s("div",{staticClass:"book-name"},[t._v(t._s(a.title))]),t._v(" "),s("p",{staticClass:"delBtn",on:{click:function(s){t.delBook(a.id)}}},[t._v("删除")])])}),t._v(" "),t.isUploading?s("li",{staticClass:"item"},[s("div",{staticClass:"img-box"},[s("el-progress",{staticStyle:{"margin-top":"50px"},attrs:{type:"circle",percentage:t.progress}})],1),t._v(" "),s("div",{staticClass:"book-name"},[t._v(t._s(t.uploadFileList[0].name))]),t._v(" "),s("p",{staticClass:"delBtn",on:{click:function(a){t.delUploadingBook()}}},[t._v("删除")])]):t._e(),t._v(" "),s("li",{directives:[{name:"show",rawName:"v-show",value:!t.isUploading,expression:"!isUploading"}],staticClass:"item"},[s("el-upload",{ref:"uploadBook",staticClass:"book-uploader",attrs:{action:t.uploadAction,"show-file-list":!1,data:t.uploadData,"on-progress":t.uploading,"on-change":t.bookHandleChange,"on-success":t.bookHandleSuccess,"on-error":t.handleError,"before-upload":t.beforeBookUpload}},[s("div",{staticClass:"upload-book",attrs:{slot:"trigger"},slot:"trigger"},[s("i",{staticClass:"iconfont iconadd"}),t._v(" "),s("span",[t._v("点击上传图书")])])])],1)],2)],1)},[],!1,null,null,null);e.options.__file="index.vue";a.default=e.exports},QHSw:function(t,a,s){"use strict";var i=s("XPLH");s.n(i).a},XPLH:function(t,a,s){}}]);