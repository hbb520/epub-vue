(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6cc8","chunk-2af6","chunk-81f9","chunk-254e"],{"+iQk":function(t,e,o){"use strict";var n=o("5XNF");o.n(n).a},"/lFH":function(t,e,o){},"1j7S":function(t,e,o){"use strict";o.r(e);var n=o("X4fA"),i={components:{},data:function(){return{fontType:"MicrosoftYaHei",fontsize:16,lineHeight:1.2,background:"default",fontTypeList:[{label:"微软雅黑",value:"MicrosoftYaHei"},{label:"黑体",value:"Microsoft Yahei, Heiti SC, Heiti TC"},{label:"宋体",value:"SimSun, Songti SC, Songti TC"},{label:"楷体",value:"KaiTi, Kaiti SC, Kaiti TC"},{label:"圆体",value:"YouYuan, Yuanti SC, Yuanti TC"},{label:"方体",value:"PingFang SC, PingFang TC"}],backgroundList:[{value:{}}]}},created:function(){this.getTheme()},methods:{close:function(){this.$emit("closeDialog",null,!0)},getTheme:function(){this.fontType=Object(n.b)("fontFamily"),this.fontsize=Object(n.b)("fontSize"),this.lineHeight=Object(n.b)("lineHeight"),this.background=Object(n.b)("background"),console.log(this.fontType),console.log(this.fontsize),console.log(this.lineHeight),console.log(this.background)},setFont:function(t){console.log(t),this.$emit("setFont",t)},sub:function(){this.fontsize>12&&(this.fontsize--,this.$emit("setFontSize",this.fontsize))},add:function(){this.fontsize<50&&(this.fontsize++,this.$emit("setFontSize",this.fontsize))},setLineHeight:function(t){this.lineHeight=t,this.$emit("setLineHeight",this.lineHeight,this.background)},setBackground:function(t){this.background=t,this.$emit("setBackground",this.background)},init:function(){}},mounted:function(){this.$nextTick(function(){this.init()})}},s=(o("hqTf"),o("rJzI"),o("KHd+")),a=Object(s.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"theme"}},[n("mu-bottom-nav",[n("div",{staticClass:"title clearfix"},[n("i",{staticClass:"iconfont iconclose",on:{click:function(e){t.close()}}}),t._v(" "),n("p",[t._v("选项")])])]),t._v(" "),n("div",{staticClass:"theme-container"},[n("el-form",{ref:"form",staticClass:"themeBox",attrs:{"label-position":"top"}},[n("el-form-item",{attrs:{label:"字体"}},[n("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择"},on:{change:t.setFont},model:{value:t.fontType,callback:function(e){t.fontType=e},expression:"fontType"}},t._l(t.fontTypeList,function(t,e){return n("el-option",{key:e,attrs:{label:t.label,value:t.value}})}))],1),t._v(" "),n("el-form-item",{attrs:{label:"字号"}},[n("div",{staticClass:"setFontSize clearfix"},[n("p",{on:{click:function(e){t.sub()}}},[t._v("小")]),t._v(" "),n("span",[t._v(t._s(t.fontsize))]),t._v(" "),n("p",{on:{click:function(e){t.add()}}},[t._v("大")])])]),t._v(" "),n("el-form-item",{attrs:{label:"排版"}},[n("div",{staticClass:"selectBox clearfix"},[n("p",{class:1.2==t.lineHeight?"active":"",on:{click:function(e){t.setLineHeight(1.2)}}},[n("img",{attrs:{src:o("KFHA"),alt:""}})]),t._v(" "),n("p",{class:1.6==t.lineHeight?"active":"",on:{click:function(e){t.setLineHeight(1.6)}}},[n("img",{attrs:{src:o("KFHA"),alt:""}})]),t._v(" "),n("p",{class:2==t.lineHeight?"active":"",on:{click:function(e){t.setLineHeight(2)}}},[n("img",{attrs:{src:o("KFHA"),alt:""}})]),t._v(" "),n("p",{class:2.4==t.lineHeight?"active":"",on:{click:function(e){t.setLineHeight(2.4)}}},[n("img",{attrs:{src:o("KFHA"),alt:""}})])])]),t._v(" "),n("el-form-item",{attrs:{label:"主题"}},[n("div",{staticClass:"selectBox clearfix"},[n("p",{class:"default"===t.background?"active":"",on:{click:function(e){t.setBackground("default")}}},[n("span",{staticStyle:{background:"#FFFFFF"}})]),t._v(" "),n("p",{class:"bright"===t.background?"active":"",on:{click:function(e){t.setBackground("bright")}}},[n("span",{staticStyle:{background:"#FFDDAA"}})]),t._v(" "),n("p",{class:"eyeProtection"===t.background?"active":"",on:{click:function(e){t.setBackground("eyeProtection")}}},[n("span",{staticStyle:{background:"#BFE2CB"}})]),t._v(" "),n("p",{class:"night"===t.background?"active":"",on:{click:function(e){t.setBackground("night")}}},[n("span",{staticStyle:{background:"#141414"}})])])])],1)],1)],1)},[],!1,null,"2afde134",null);a.options.__file="index.vue";e.default=a.exports},"2Nos":function(t,e,o){},"5XNF":function(t,e,o){},"7+PR":function(t,e,o){"use strict";o.r(e);var n=o("QbLZ"),i=o.n(n),s={components:{},props:{list:{type:Array,default:function(){return[]}}},data:function(){return{keyword:null,loading:!1}},computed:{result:function(){var t=this;return this.list.length>0?this.list.map(function(e){var o=e.excerpt.split(t.keyword).join('<span style="color: #048D01">'+t.keyword+"</span>");return i()({html:o},e)}):[]}},created:function(){},methods:{close:function(){this.$emit("closeDialog",null,!0)},search:function(){var t=this;this.keyword&&(this.loading=!0,this.$emit("search",this.keyword,function(){t.loading=!1}))},gotoResult:function(t){this.$emit("gotoResult",t)},init:function(){}},mounted:function(){this.$nextTick(function(){this.init()})}},a=(o("O8AW"),o("qYU2"),o("KHd+")),c=Object(a.a)(s,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"search"}},[o("mu-bottom-nav",[o("div",{staticClass:"title clearfix"},[o("i",{staticClass:"iconfont iconclose",on:{click:function(e){t.close()}}}),t._v(" "),o("p",[t._v("搜索")])])]),t._v(" "),o("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"search-container"},[o("div",{staticClass:"box"},[o("mu-text-field",{staticStyle:{width:"100%"},attrs:{placeholder:"全文搜索","action-icon":"search","action-click":t.search},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}})],1),t._v(" "),t.result.length>0?o("div",{staticClass:"list"},t._l(t.result,function(e,n){return o("div",{key:n,staticClass:"result clearfix"},[o("p",{staticClass:"wordOverflow3",domProps:{innerHTML:t._s(e.html)},on:{click:function(o){t.gotoResult(e.cfi)}}})])})):t._e(),t._v(" "),0===t.result.length&&null===t.keyword?o("div",{staticClass:"noContent"},[o("p",[t._v("请输入搜索内容")])]):t._e(),t._v(" "),0===t.result.length&&null!==t.keyword?o("div",{staticClass:"noContent"},[o("p",[t._v("没有搜索到结果")])]):t._e()])],1)},[],!1,null,"3168d088",null);c.options.__file="index.vue";e.default=c.exports},FmrK:function(t,e,o){},G4om:function(t,e,o){},"Jgs+":function(t,e,o){"use strict";o.r(e);var n=o("X4fA"),i={components:{},props:{id:{type:Number,default:function(){return null}},chapterList:{type:Array,default:function(){return[]}},currentChapter:{type:Object,default:function(){return{}}}},data:function(){return{menu:1,bookmarksList:[]}},created:function(){this.getBookmarksList()},methods:{toggleMenu:function(t){0===t&&this.$emit("closeDialog",null,!0)},goToChapter:function(t){var e=this;this.$emit("closeDialog",function(){e.$emit("goToChapter",t)},!0)},getBookmarksList:function(){this.bookmarksList=Object(n.a)(this.id)},delBookmarks:function(t){Object(n.d)(this.id,t),this.getBookmarksList()},getoBookmarks:function(t){var e=this;this.$emit("closeDialog",function(){e.$emit("gotoBookmarks",t)},!0)},parseTime:function(t){var e=new Date(t);return e.getMonth()+1+"-"+e.getDate()+" "+e.getHours()+":"+e.getMinutes()},init:function(){}},mounted:function(){this.$nextTick(function(){this.init()})}},s=(o("dtQi"),o("fHEz"),o("KHd+")),a=Object(s.a)(i,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"catalog"}},[o("mu-bottom-nav",{attrs:{value:t.menu},on:{"update:value":function(e){t.menu=e},change:t.toggleMenu}},[o("mu-bottom-nav-item",{attrs:{value:0,icon:"close"}}),t._v(" "),o("mu-bottom-nav-item",{attrs:{value:1,title:"目录"}}),t._v(" "),o("mu-bottom-nav-item",{attrs:{value:2,title:"书签"}}),t._v(" "),o("mu-bottom-nav-item",{attrs:{value:3,title:"笔记"}})],1),t._v(" "),1===t.menu?o("div",{staticClass:"catalog-container"},[o("div",{staticClass:"list"},t._l(t.chapterList,function(e,n){return o("div",{key:n,class:e.href===t.currentChapter.href?"chapter active clearfix":"chapter clearfix"},[o("p",{staticClass:"wordOverflow",on:{click:function(o){t.goToChapter(e)}}},[t._v(t._s(e.label))]),t._v(" "),o("span",[t._v("1")])])}))]):t._e(),t._v(" "),2===t.menu?o("div",{staticClass:"bookmark-container"},[t.bookmarksList.length>0?o("div",{staticClass:"list"},t._l(t.bookmarksList,function(e,n){return o("div",{key:n,staticClass:"bookmark clearfix"},[o("p",{staticClass:"clearfix"},[o("span",[t._v(t._s(t.parseTime(e.createTime)))]),t._v(" "),o("i",{staticClass:"iconfont icondelete",on:{click:function(o){t.delBookmarks(e.id)}}}),t._v(" "),o("span",[t._v("55")])]),t._v(" "),o("p",{staticClass:"content wordOverflow2",on:{click:function(o){t.getoBookmarks(e.startCfi)}}},[t._v(t._s(e.word))])])})):t._e(),t._v(" "),t.bookmarksList.length<=0?o("div",{staticClass:"noBookmark"},[o("p",[t._v("暂时没有书签")]),t._v(" "),t._m(0)]):t._e()]):t._e(),t._v(" "),3===t.menu?o("div",{staticClass:"note-container"},[t._m(1)]):t._e(),t._v(" "),2===t.menu?o("div",{staticClass:"bookmark-container"},[t._m(2)]):t._e(),t._v(" "),3===t.menu?o("div",{staticClass:"note-container"},[t._m(3)]):t._e()],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("在阅读时点击按钮"),e("i",{staticClass:"iconfont icontag"}),this._v("添加书签")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"list"},[o("div",{staticClass:"note clearfix"},[o("p",{staticClass:"clearfix"},[o("span",[o("i",[t._v(".")]),t._v("11-16 10:30")]),t._v(" "),o("i",{staticClass:"iconfont icondelete"}),t._v(" "),o("span",[t._v("55")])]),t._v(" "),o("p",{staticClass:"content wordOverflow2"},[t._v("中亚细亚高原，它不但是中国的地理高度，也是中国的精神高度，每一个忙忙碌碌的现代人，他都有必要")]),t._v(" "),o("div",{staticClass:"bottom clearfix"},[o("p",{staticClass:"tips"},[t._v("注")]),t._v(" "),o("p",{staticClass:"remarks wordOverflow2"},[t._v("中国地理高度，也是中国精神高度，每一个忙忙碌碌的现代人。")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"list"},[e("div",{staticClass:"bookmark clearfix"},[e("p",{staticClass:"clearfix"},[e("span",[this._v("11-16 10:30")]),this._v(" "),e("i",{staticClass:"iconfont icondelete"}),this._v(" "),e("span",[this._v("55")])]),this._v(" "),e("p",{staticClass:"content wordOverflow2"},[this._v("中亚细亚高原，它不但是中国的地理高度，也是中国的精神高度，每一个忙忙碌碌的现代人，他都有必要")])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"list"},[o("div",{staticClass:"note clearfix"},[o("p",{staticClass:"clearfix"},[o("span",[o("i",[t._v(".")]),t._v("11-16 10:30")]),t._v(" "),o("i",{staticClass:"iconfont icondelete"}),t._v(" "),o("span",[t._v("55")])]),t._v(" "),o("p",{staticClass:"content wordOverflow2"},[t._v("中亚细亚高原，它不但是中国的地理高度，也是中国的精神高度，每一个忙忙碌碌的现代人，他都有必要")]),t._v(" "),o("div",{staticClass:"bottom clearfix"},[o("p",{staticClass:"tips"},[t._v("注")]),t._v(" "),o("p",{staticClass:"remarks wordOverflow2"},[t._v("中国地理高度，也是中国精神高度，每一个忙忙碌碌的现代人。")])])])])}],!1,null,"2e90d86e",null);a.options.__file="index.vue";e.default=a.exports},KFHA:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAwCAYAAABe6Vn9AAABC0lEQVRoQ+2aPQ5BQRSFv1dYAIWaBQgbQCJeYRkqrV6rFa3WBixAZSuWwArkJk8hqhuZE+/mTn/nzDnf/GQyUwET4AAsaG97AhdgXQEnYNNeLx8jH5mhK1AHMVSboS1wDGKoa4asTYEZ0GmpsUezhu5vQy318T3sNPTvKJNQEhInkFNOHLhbLgm5IxMXJCFx4G65JOSOTFwQklC/uYJHuA+djdAe2IlnRim5gRm6AfNSCuJ+V9EIDc1QuDUknhVl5UJu22UjE/eehMSBu+WSkDsycUESEgfulktC7sjEBUlIHLhbLgm5IxMXhHxjjfQK3ov2T2EZ7SfJ2AyF++sj3ofKyuU5VDbf33t/AT57HLoa+tkTAAAAAElFTkSuQmCC"},"N/kD":function(t,e,o){"use strict";o.r(e);var n=o("4d7F"),i=o.n(n),s=o("QbLZ"),a=o.n(s);o("t3Un");var c={name:"slider",props:{progress:{type:Number,default:function(){return 0}},tips:{type:String,default:function(){return null}}},data:function(){return{width:document.body.clientWidth,height:document.body.clientHeight,moveStatus:!1,tipStatus:!1,tipTop:0}},computed:{value:{get:function(){var t=Math.round(this.progress);return this.setTipTop(t),t},set:function(t){this.$emit("update:progress",t),this.setTipTop(t)}},top:{get:function(){var t=this.width<600?56:64;return this.progress*(this.height-t-36)/100},set:function(t){}}},methods:{setTipTop:function(t){var e=this.width<600?56:64;this.tipTop=e+t*(this.height-80-e)/100},init:function(){var t=this,e=document.getElementById("sliderBtn");this.moveStatus=!1;var o=e.offsetParent.offsetTop,n=e.offsetParent.offsetHeight;e.addEventListener("mousedown",function(n){t.moveStatus=!0,o=n.pageY-e.offsetTop}),document.addEventListener("mousemove",function(e){if(t.moveStatus){var i=e.pageY-o;if(i>=0&&i<=n-36){var s=parseInt(i/(n-36)*100);t.value=s,t.top=i}}}),document.addEventListener("mouseup",function(e){t.moveStatus&&(t.$emit("change",t.value),t.moveStatus=!1)})}},mounted:function(){this.$nextTick(function(){this.init()})}},l=(o("e3Rt"),o("KHd+")),r=Object(l.a)(c,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"sliderContainer"}},[o("div",{attrs:{id:"sliderBox"}},[o("div",{class:t.tipStatus||t.moveStatus?"arise":"",style:{top:t.top+"px"},attrs:{id:"sliderBtn"},on:{mouseover:function(e){t.tipStatus=!0},mouseout:function(e){t.tipStatus=!1}}},[t.tipStatus||t.moveStatus?o("div",{style:{top:t.tipTop+"px"},attrs:{id:"sliderTip"}},[o("p",{staticClass:"wordOverflow2",attrs:{id:"word"}},[t._v(t._s(t.tips))]),t._v(" "),o("span",[t._v(t._s((null===t.value?0:t.value)+"%"))])]):t._e()])])])},[],!1,null,"15d0db1c",null);r.options.__file="slider.vue";var u=r.exports,d=o("Jgs+"),h=o("1j7S"),f=o("7+PR"),g=o("X4fA"),v=window.ePub,m={data:function(){return{id:null,bookLoading:!1,file:null,book:null,bookUrl:null,bookRendition:null,displayed:null,locations:null,drawer_open:!1,progress:null,progressTips:null,bookInfo:{title:null,currentPage:null,totalPage:null,currentChapter:null},prevStatus:!0,nextStatus:!0,catalogStatus:!1,currentChapter:null,bookmarksStatus:!1,bookWidth:0,singlePageStatus:!1,themeStatus:!1,theme:null,searchStatus:!1,searchResult:[],fullScreenStatus:!1}},components:{ProgressSlider:u,Catalog:d.default,Theme:h.default,Search:f.default},mounted:function(){this.$route.query&&this.$route.query.id&&(this.id=parseInt(this.$route.query.id),this.getBookUrl(this.$route.query.id))},created:function(){},methods:{getBookUrl:function(t){this.bookUrl="https://img1.yunser.com/epub/test.epub",this.bookInit(this.bookUrl)},bookInit:function(t){this.bookLoading=!0,this.book=v(t),this.bookRendition=this.book.renderTo("book",{width:"100%",height:"100%",spread:"always",ignoreClass:"annotator-hl"}),this.display=this.bookRendition.display(),this.bookWidth=document.getElementById("book").clientWidth,this.screenWidthChange(),this.renderInit()},renderInit:function(){var t=this;this.book.ready.then(function(){return t.book.locations.generate()}).then(function(e){t.bookLoading=!1,console.log(111111),console.log(t.book),t.getBookInfo(),t.setBookTheme(),t.progress=0}),this.bookRendition.on("rendered",function(e){console.log(22222);var o=t.book.navigation&&t.book.navigation.toc.filter(function(t){return t.href===e.href})[0];t.currentChapter=e,t.bookInfo.currentChapter=o&&o.label,t.progressTips=o&&o.label}),this.bookRendition.on("relocated",function(e){console.log(333333),t.locations=e,t.bookInfo.totalPage=t.book.navigation.toc.length;var o=t.book.navigation.toc.map(function(t,e){return a()({index:e},t)}).filter(function(e,o){return e.href===t.locations.start.href})[0];t.bookInfo.currentPage=o&&o.index+1,t.progress=e.start&&100*e.start.percentage,t.nextStatus=!e.atEnd,t.prevStatus=!e.atStart,t.bookmarksStatus=!1,i.a.all(Object(g.a)(t.id).map(function(e){return new i.a(function(o,n){t.search(e.word,function(t){o(t)})})})).then(function(o){var n=o.reduce(function(t,e){return t.concat(e)},[]);if(1===n.length){var i=t.book.locations.locationFromCfi(n[0].cfi),s=t.book.locations.locationFromCfi(e.start.cfi),a=t.book.locations.locationFromCfi(e.end.cfi);i>=s&&i<a&&(t.bookmarksStatus=!0)}})}),this.bookRendition.on("layout",function(t){console.log(44444444)});var e=null;this.bookRendition.on("selected",function(o,n){clearTimeout(e),console.log(5555),e=setTimeout(function(){console.log(9999),t.bookRendition.annotations.add("underline",o,{},function(t){console.log(101010),console.log(t.target.querySelector("line").style),t.target.querySelector("line").style.stroke="red",t.target.querySelector("line").style.strokeOpacity="1",t.target.querySelector("rect").style.stroke="none"},"hl",{"fill-opacity":"1","mix-blend-mode":"multiply",line:{stroke:"red"}})},100)}),this.bookRendition.on("markClicked",function(t,e,o){console.log(66666)})},getBookInfo:function(){this.bookInfo.title=this.book.package.metadata.title},setBookTheme:function(){var t=this;this.themes=this.bookRendition.themes,this.setStyle("fontFamily","MicrosoftYaHei",function(e){t.themes.font(e)}),this.setStyle("fontSize",16,function(e){t.themes.fontSize(e+"px")}),this.setStyle("lineHeight",1.2,function(e){t.registerTheme(e),t.setStyle("background","default",function(e){t.theme=e,t.themes.select(e)})})},setStyle:function(t,e,o){Object(g.b)(t)?o(Object(g.b)(t)):(Object(g.g)(t,e),o(e))},setFont:function(t){this.themes.font(t),Object(g.g)("fontFamily",t)},setFontSize:function(t){this.themes.fontSize(t+"px"),Object(g.g)("fontSize",t)},setLineHeight:function(t,e){this.registerTheme(t),this.themes.select(e),Object(g.g)("lineHeight",t)},setBackground:function(t){this.themes.select(t),this.theme=t,Object(g.g)("background",t)},registerTheme:function(t){this.themes.register({default:{body:{background:"#ffffff",color:"#666666"},"*":{"line-height":t+"!important"}},bright:{body:{background:"#FFDDAA",color:"#666666","line-height":2},"*":{"line-height":t+"!important"}},eyeProtection:{body:{background:"#BFE2CB",color:"#666666","line-height":2},"*":{"line-height":t+"!important"}},night:{body:{background:"#141414",color:"#FFFFFF","line-height":2},"*":{"line-height":t+"!important"}},underline:{"::selection":{background:"red"},svg:{background:"red!important"},".annotation":{fill:"yellow!important","fill-opacity":"0.3","mix-blend-mode":"multiply"}}})},onProgressChange:function(t){var e=t/100,o=t>0?this.book.locations.cfiFromPercentage(e):0;this.bookRendition.display(o)},prev:function(){"rtl"===this.book.package.metadata.direction?this.bookRendition.next():this.bookRendition.prev()},next:function(){"rtl"===this.book.package.metadata.direction?this.bookRendition.prev():this.bookRendition.next()},menu_click:function(){var t=this;this.drawer_open=!0,this.dialogHandle(function(){t.catalogStatus=!0})},goToChapter:function(t){this.bookRendition.display(t.href)},setBookmarks:function(){if(this.bookmarksStatus)return!0;var t=this.locations&&this.locations.start,e=this.locations&&this.locations.end,o=this.bookRendition.getRange(t.cfi)&&this.bookRendition.getRange(t.cfi).commonAncestorContainer,n=o&&o.data;n.split(" ").some(function(t){return"\n"===t})||(Object(g.f)(this.id,{id:this.id+(new Date).getTime(),bookId:this.id,startCfi:t.cfi,endCfi:e.cfi,href:t.href,word:n,createTime:(new Date).getTime()}),this.bookmarksStatus=!0)},gotoBookmarks:function(t){this.bookRendition.display(t),this.dialogHandle(null,!0)},spellcheck_click:function(){var t=this;this.drawer_open=!0,this.dialogHandle(function(){t.themeStatus=!0})},search_click:function(){var t=this;this.drawer_open=!0,this.searchResult=[],this.dialogHandle(function(){t.searchStatus=!0})},search:function(t,e){var o=this,n=this.book;i.a.all(n.spine.spineItems.map(function(e){return new i.a(function(o,i){e.load(n.load.bind(n)).then(function(n){o(e.find.bind(e,t))}).catch(function(t){e.unload.bind(e)})})})).then(function(t){i.a.all(t).then(function(t){o.searchResult=t.map(function(t){return t()}).reduce(function(t,e){return t.concat(e)},[]),e&&e(o.searchResult)})})},setPageType:function(){document.body.clientWidth>1133&&(this.singlePageStatus?this.bookRendition.resize(this.bookWidth):this.bookRendition.resize(640),this.singlePageStatus=!this.singlePageStatus)},screenWidthChange:function(){var t=this;window.onresize=function(){t.bookWidth=document.getElementById("book").clientWidth,t.bookRendition.resize(t.bookWidth),t.singlePageStatus=!(t.bookWidth<800)&&t.singlePageStatus}},setFullscreen:function(){this.fullScreenStatus?(document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen(),this.fullScreenStatus=!1):(document.documentElement.requestFullscreen?document.documentElement.requestFullscreen():document.documentElement.mozRequestFullScreen?document.documentElement.mozRequestFullScreen():document.documentElement.webkitRequestFullScreen&&document.documentElement.webkitRequestFullScreen(),this.fullScreenStatus=!0)},dialogHandle:function(t,e){this.catalogStatus=!1,this.themeStatus=!1,this.searchStatus=!1,t&&"function"==typeof t&&t(),e&&(this.drawer_open=!1)}}},k=(o("Og0a"),o("+iQk"),Object(l.a)(m,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"app-container",attrs:{id:"index-container"}},[o("mu-appbar",{staticClass:"appbar-header",staticStyle:{width:"100%"},attrs:{color:"primary"}},[o("mu-button",{attrs:{slot:"left",icon:""},on:{click:function(e){t.$goLink("/list")}},slot:"left"},[o("mu-icon",{attrs:{value:"navigate_before"}})],1),t._v(" "),o("mu-button",{attrs:{slot:"right",flat:""},on:{click:t.menu_click},slot:"right"},[o("mu-icon",{attrs:{value:"menu"}})],1),t._v(" "),o("mu-button",{attrs:{slot:"right",flat:""},on:{click:t.spellcheck_click},slot:"right"},[o("mu-icon",{attrs:{value:"spellcheck"}})],1),t._v(" "),o("mu-button",{attrs:{slot:"right",flat:""},on:{click:t.setPageType},slot:"right"},[o("mu-icon",{attrs:{value:"library_books"}})],1),t._v(" "),o("mu-button",{attrs:{slot:"right",flat:""},on:{click:t.search_click},slot:"right"},[o("mu-icon",{attrs:{value:"search"}})],1),t._v(" "),o("mu-button",{attrs:{slot:"right",flat:""},on:{click:t.setBookmarks},slot:"right"},[o("mu-icon",{attrs:{value:"bookmark_border"}})],1),t._v(" "),o("mu-button",{attrs:{slot:"right",flat:""},on:{click:t.setFullscreen},slot:"right"},[o("mu-icon",{attrs:{value:"crop_free"}})],1)],1),t._v(" "),o("div",{attrs:{id:"wrapper"}},[o("div",{staticClass:"title clearfix"},[o("span",[t._v("当前位置：")]),t._v(" "),o("span",{on:{click:function(e){t.$goLink("/list")}}},[t._v("首页")]),t._v(" "),t.bookInfo.title?o("span",[t._v(">")]):t._e(),t._v(" "),t.bookInfo.title?o("span",[t._v(t._s(t.bookInfo.title))]):t._e(),t._v(" "),t.bookInfo.currentChapter?o("span",[t._v(">")]):t._e(),t._v(" "),t.bookInfo.currentChapter?o("span",{staticClass:"last"},[t._v(t._s(t.bookInfo.currentChapter))]):t._e()]),t._v(" "),o("div",{staticClass:"book-container clearfix"},[t.prevStatus?o("div",{staticClass:"prev",on:{click:t.prev}},[o("i",{staticClass:"iconfont iconleft"})]):t._e(),t._v(" "),o("div",{class:t.singlePageStatus?"bookBox singlePage "+t.theme:"bookBox "+t.theme},[o("div",{staticClass:"top clearfix"},[o("span",[t._v(t._s(t.bookInfo.title))]),t._v(" "),t.bookmarksStatus?o("i",{staticClass:"iconfont iconsign"}):t._e(),t._v(" "),o("span",[t._v(t._s(t.bookInfo.currentChapter))])]),t._v(" "),o("div",{directives:[{name:"loading",rawName:"v-loading",value:t.bookLoading,expression:"bookLoading"}],attrs:{id:"book"}}),t._v(" "),o("div",{staticClass:"bottom"},[t.bookInfo.currentPage&&t.bookInfo.totalPage&&!t.singlePageStatus?o("span",[t._v("\n\t\t\t\t\t\t"+t._s(this.bookInfo.currentPage)+"/"+t._s(this.bookInfo.totalPage))]):t._e(),t._v(" "),t.bookInfo.currentPage&&t.bookInfo.totalPage?o("span",[t._v("\n\t\t\t\t\t\t"+t._s(this.bookInfo.currentPage)+"/"+t._s(this.bookInfo.totalPage))]):t._e()])]),t._v(" "),t.nextStatus?o("div",{staticClass:"next",on:{click:t.next}},[o("i",{staticClass:"iconfont iconright"})]):t._e()])]),t._v(" "),null!==t.progress?o("progress-slider",{attrs:{progress:t.progress,tips:t.progressTips},on:{"update:progress":function(e){t.progress=e},change:t.onProgressChange}}):t._e(),t._v(" "),o("mu-drawer",{staticClass:"drawer-container",attrs:{open:t.drawer_open,docked:!1,right:!0},on:{"update:open":function(e){t.drawer_open=e},close:t.dialogHandle}},[t.catalogStatus?o("catalog",{attrs:{id:t.id,chapterList:t.book.navigation.toc,currentChapter:t.currentChapter},on:{closeDialog:t.dialogHandle,goToChapter:t.goToChapter,gotoBookmarks:t.gotoBookmarks}}):t._e(),t._v(" "),t.themeStatus?o("theme",{on:{closeDialog:t.dialogHandle,setFont:t.setFont,setFontSize:t.setFontSize,setLineHeight:t.setLineHeight,setBackground:t.setBackground}}):t._e(),t._v(" "),t.searchStatus?o("search",{attrs:{list:t.searchResult},on:{closeDialog:t.dialogHandle,"update:list":function(e){t.searchResult=e},search:t.search,gotoResult:t.gotoBookmarks}}):t._e()],1)],1)},[],!1,null,"0508e7ed",null));k.options.__file="index.vue";e.default=k.exports},O8AW:function(t,e,o){"use strict";var n=o("G4om");o.n(n).a},Og0a:function(t,e,o){"use strict";var n=o("pXWW");o.n(n).a},P1Yp:function(t,e,o){},SlIV:function(t,e,o){},dtQi:function(t,e,o){"use strict";var n=o("FmrK");o.n(n).a},e3Rt:function(t,e,o){"use strict";var n=o("P1Yp");o.n(n).a},fHEz:function(t,e,o){"use strict";var n=o("SlIV");o.n(n).a},hqTf:function(t,e,o){"use strict";var n=o("2Nos");o.n(n).a},pXWW:function(t,e,o){},qYU2:function(t,e,o){"use strict";var n=o("vZJr");o.n(n).a},rJzI:function(t,e,o){"use strict";var n=o("/lFH");o.n(n).a},vZJr:function(t,e,o){}}]);