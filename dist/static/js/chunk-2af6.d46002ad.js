(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2af6"],{FmrK:function(t,s,i){},"Jgs+":function(t,s,i){"use strict";i.r(s);var e=i("X4fA"),a={components:{},props:{id:{type:Number,default:function(){return null}},chapterList:{type:Array,default:function(){return[]}},currentChapter:{type:Object,default:function(){return{}}}},data:function(){return{menu:1,bookmarksList:[]}},created:function(){this.getBookmarksList()},methods:{toggleMenu:function(t){0===t&&this.$emit("closeDialog",null,!0)},goToChapter:function(t){var s=this;this.$emit("closeDialog",function(){s.$emit("goToChapter",t)},!0)},getBookmarksList:function(){this.bookmarksList=Object(e.a)(this.id)},delBookmarks:function(t){Object(e.d)(this.id,t),this.getBookmarksList()},getoBookmarks:function(t){var s=this;this.$emit("closeDialog",function(){s.$emit("gotoBookmarks",t)},!0)},parseTime:function(t){var s=new Date(t);return s.getMonth()+1+"-"+s.getDate()+" "+s.getHours()+":"+s.getMinutes()},init:function(){}},mounted:function(){this.$nextTick(function(){this.init()})}},n=(i("dtQi"),i("fHEz"),i("KHd+")),o=Object(n.a)(a,function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"catalog"}},[i("mu-bottom-nav",{attrs:{value:t.menu},on:{"update:value":function(s){t.menu=s},change:t.toggleMenu}},[i("mu-bottom-nav-item",{attrs:{value:0,icon:"close"}}),t._v(" "),i("mu-bottom-nav-item",{attrs:{value:1,title:"目录"}}),t._v(" "),i("mu-bottom-nav-item",{attrs:{value:2,title:"书签"}}),t._v(" "),i("mu-bottom-nav-item",{attrs:{value:3,title:"笔记"}})],1),t._v(" "),1===t.menu?i("div",{staticClass:"catalog-container"},[i("div",{staticClass:"list"},t._l(t.chapterList,function(s,e){return i("div",{key:e,class:s.href===t.currentChapter.href?"chapter active clearfix":"chapter clearfix"},[i("p",{staticClass:"wordOverflow",on:{click:function(i){t.goToChapter(s)}}},[t._v(t._s(s.label))]),t._v(" "),i("span",[t._v("1")])])}))]):t._e(),t._v(" "),2===t.menu?i("div",{staticClass:"bookmark-container"},[t.bookmarksList.length>0?i("div",{staticClass:"list"},t._l(t.bookmarksList,function(s,e){return i("div",{key:e,staticClass:"bookmark clearfix"},[i("p",{staticClass:"clearfix"},[i("span",[t._v(t._s(t.parseTime(s.createTime)))]),t._v(" "),i("i",{staticClass:"iconfont icondelete",on:{click:function(i){t.delBookmarks(s.id)}}}),t._v(" "),i("span",[t._v("55")])]),t._v(" "),i("p",{staticClass:"content wordOverflow2",on:{click:function(i){t.getoBookmarks(s.startCfi)}}},[t._v(t._s(s.word))])])})):t._e(),t._v(" "),t.bookmarksList.length<=0?i("div",{staticClass:"noBookmark"},[i("p",[t._v("暂时没有书签")]),t._v(" "),t._m(0)]):t._e()]):t._e(),t._v(" "),3===t.menu?i("div",{staticClass:"note-container"},[t._m(1)]):t._e(),t._v(" "),2===t.menu?i("div",{staticClass:"bookmark-container"},[t._m(2)]):t._e(),t._v(" "),3===t.menu?i("div",{staticClass:"note-container"},[t._m(3)]):t._e()],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在阅读时点击按钮"),s("i",{staticClass:"iconfont icontag"}),this._v("添加书签")])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"list"},[i("div",{staticClass:"note clearfix"},[i("p",{staticClass:"clearfix"},[i("span",[i("i",[t._v(".")]),t._v("11-16 10:30")]),t._v(" "),i("i",{staticClass:"iconfont icondelete"}),t._v(" "),i("span",[t._v("55")])]),t._v(" "),i("p",{staticClass:"content wordOverflow2"},[t._v("中亚细亚高原，它不但是中国的地理高度，也是中国的精神高度，每一个忙忙碌碌的现代人，他都有必要")]),t._v(" "),i("div",{staticClass:"bottom clearfix"},[i("p",{staticClass:"tips"},[t._v("注")]),t._v(" "),i("p",{staticClass:"remarks wordOverflow2"},[t._v("中国地理高度，也是中国精神高度，每一个忙忙碌碌的现代人。")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"list"},[s("div",{staticClass:"bookmark clearfix"},[s("p",{staticClass:"clearfix"},[s("span",[this._v("11-16 10:30")]),this._v(" "),s("i",{staticClass:"iconfont icondelete"}),this._v(" "),s("span",[this._v("55")])]),this._v(" "),s("p",{staticClass:"content wordOverflow2"},[this._v("中亚细亚高原，它不但是中国的地理高度，也是中国的精神高度，每一个忙忙碌碌的现代人，他都有必要")])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"list"},[i("div",{staticClass:"note clearfix"},[i("p",{staticClass:"clearfix"},[i("span",[i("i",[t._v(".")]),t._v("11-16 10:30")]),t._v(" "),i("i",{staticClass:"iconfont icondelete"}),t._v(" "),i("span",[t._v("55")])]),t._v(" "),i("p",{staticClass:"content wordOverflow2"},[t._v("中亚细亚高原，它不但是中国的地理高度，也是中国的精神高度，每一个忙忙碌碌的现代人，他都有必要")]),t._v(" "),i("div",{staticClass:"bottom clearfix"},[i("p",{staticClass:"tips"},[t._v("注")]),t._v(" "),i("p",{staticClass:"remarks wordOverflow2"},[t._v("中国地理高度，也是中国精神高度，每一个忙忙碌碌的现代人。")])])])])}],!1,null,"2e90d86e",null);o.options.__file="index.vue";s.default=o.exports},SlIV:function(t,s,i){},dtQi:function(t,s,i){"use strict";var e=i("FmrK");i.n(e).a},fHEz:function(t,s,i){"use strict";var e=i("SlIV");i.n(e).a}}]);