(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6202"],{"925j":function(t,e,i){},RN3X:function(t,e,i){"use strict";i.r(e);var n=i("X4fA"),s={components:{},props:{id:{type:Number,default:function(){return null}},chapterList:{type:Array,default:function(){return[]}},currentChapter:{type:Object,default:function(){return{}}}},data:function(){return{menu:1,bookmarksList:[],noteList:[]}},created:function(){this.getBookmarksList(),this.getNoteList()},methods:{toggleMenu:function(t){0===t&&this.$emit("closeDialog",null,!0)},goToChapter:function(t){var e=this;this.$emit("closeDialog",function(){e.$emit("goToChapter",t)},!0)},getBookmarksList:function(){this.bookmarksList=Object(n.a)(this.id)},delBookmarks:function(t){var e=this;Object(n.e)(this.id,t),this.getBookmarksList(),this.$emit("closeDialog",function(){e.$emit("bookmarksChange")},!0)},getoBookmarks:function(t){var e=this;this.$emit("closeDialog",function(){e.$emit("gotoBookmarks",t)},!0)},getNoteList:function(){this.noteList=Object(n.c)(this.id)},delNote:function(t){var e=this;Object(n.f)(this.id,t),this.getNoteList(),this.$emit("closeDialog",function(){e.$emit("noteChange",t)},!0)},getoNote:function(t){var e=this;this.$emit("closeDialog",function(){e.$emit("gotoNote",t)},!0)},parseTime:function(t){var e=new Date(t);return e.getMonth()+1+"-"+e.getDate()+" "+e.getHours()+":"+e.getMinutes()},init:function(){}},mounted:function(){this.$nextTick(function(){this.init()})}},o=(i("Zqx6"),i("fMmW"),i("KHd+")),a=Object(o.a)(s,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"mobileCatalog"}},[i("mu-bottom-nav",{attrs:{value:t.menu},on:{"update:value":function(e){t.menu=e},change:t.toggleMenu}},[i("mu-bottom-nav-item",{attrs:{value:0,icon:"close"}}),t._v(" "),i("mu-bottom-nav-item",{attrs:{value:1,title:"目录"}}),t._v(" "),i("mu-bottom-nav-item",{attrs:{value:2,title:"书签"}}),t._v(" "),i("mu-bottom-nav-item",{attrs:{value:3,title:"笔记"}})],1),t._v(" "),1===t.menu?i("div",{staticClass:"catalog-container"},[i("div",{staticClass:"list"},t._l(t.chapterList,function(e,n){return i("div",{key:n,class:!t.currentChapter.href||e.href!==t.currentChapter.href&&e.fristChapterHref!==t.currentChapter.href&&e.href!==(t.currentChapter.href?t.currentChapter.href.split("#")[0]:null)?e.isUnit?"chapter unit clearfix":"chapter clearfix":e.isUnit?"chapter active unit clearfix":"chapter active clearfix"},[i("p",{staticClass:"wordOverflow",on:{click:function(i){t.goToChapter(e)}}},[t._v(t._s(e.label))]),t._v(" "),i("span",[t._v(t._s(e.index))])])}))]):t._e(),t._v(" "),2===t.menu?i("div",{staticClass:"bookmark-container"},[t.bookmarksList.length>0?i("div",{staticClass:"list"},t._l(t.bookmarksList,function(e,n){return i("div",{key:n,staticClass:"bookmark clearfix"},[i("p",{staticClass:"clearfix"},[i("span",[t._v(t._s(t.parseTime(e.createTime)))]),t._v(" "),i("i",{staticClass:"iconfont icondelete",on:{click:function(i){t.delBookmarks(e.id)}}}),t._v(" "),i("span",[t._v("55")])]),t._v(" "),i("p",{staticClass:"content wordOverflow2",on:{click:function(i){t.getoBookmarks(e.startCfi)}}},[t._v(t._s(e.word))])])})):t._e(),t._v(" "),t.bookmarksList.length<=0?i("div",{staticClass:"noBookmark"},[i("p",[t._v("暂时没有书签")]),t._v(" "),t._m(0)]):t._e()]):t._e(),t._v(" "),3===t.menu?i("div",{staticClass:"note-container"},[t.noteList.length>0?i("div",{staticClass:"list"},t._l(t.noteList,function(e,n){return i("div",{key:n,staticClass:"note clearfix"},[i("p",{staticClass:"clearfix"},[i("span",[i("i",{class:e.underlineClass}),t._v(t._s(t.parseTime(e.createTime)))]),t._v(" "),i("i",{staticClass:"iconfont icondelete",on:{click:function(i){t.delNote(e.cfi)}}}),t._v(" "),i("span",[t._v("55")])]),t._v(" "),i("p",{staticClass:"content wordOverflow2",on:{click:function(i){t.getoNote(e.cfi)}}},[t._v(t._s(e.word))]),t._v(" "),"annotation"===e.type?i("div",{staticClass:"bottom clearfix"},[i("p",{staticClass:"tips"},[t._v("注")]),t._v(" "),i("p",{staticClass:"remarks wordOverflow2"},[t._v(t._s(e.annotation))])]):t._e()])})):t._e(),t._v(" "),t.noteList.length<=0?i("div",{staticClass:"noNote"},[i("p",[t._v("暂时没有笔记")]),t._v(" "),i("p",[t._v("在阅读时拖动鼠标选中文字添加笔记")])]):t._e()]):t._e()],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("在阅读时点击按钮"),e("i",{staticClass:"iconfont icontag"}),this._v("添加书签")])}],!1,null,"a0bbd03e",null);a.options.__file="index.vue";e.default=a.exports},Zqx6:function(t,e,i){"use strict";var n=i("925j");i.n(n).a},fMmW:function(t,e,i){"use strict";var n=i("yrJK");i.n(n).a},yrJK:function(t,e,i){}}]);