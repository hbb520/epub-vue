(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-4b76","chunk-fe5d"],{"/5yg":function(t,e,o){"use strict";var i=o("zU2W");o.n(i).a},"2Q83":function(t,e,o){"use strict";var i=o("n4Zp");o.n(i).a},"6Lyv":function(t,e,o){},DMGl:function(t,e,o){"use strict";var i=o("L8d4");o.n(i).a},J0AY:function(t,e,o){"use strict";var i=o("mp+L");o.n(i).a},JUT9:function(t,e,o){},L8d4:function(t,e,o){},Q3gc:function(t,e,o){"use strict";o.r(e);var i=o("X4fA"),n={components:{},data:function(){return{fontType:"MicrosoftYaHei",fontsize:16,lineHeight:1.2,background:"default",fontTypeList:[{label:"微软雅黑",value:"MicrosoftYaHei"},{label:"黑体",value:"SimHei"},{label:"宋体",value:"SimSun, Songti SC, Songti TC"},{label:"楷体",value:"KaiTi, Kaiti SC, Kaiti TC"},{label:"圆体",value:"YouYuan, Yuanti SC, Yuanti TC"},{label:"方体",value:"PingFangSC-Regular, sans-serif"}],backgroundList:[{value:{}}]}},created:function(){this.getTheme()},methods:{close:function(){this.$emit("closeDialog",null,!0)},getTheme:function(){this.fontType=Object(i.b)("fontFamily"),this.fontsize=Object(i.b)("fontSize"),this.lineHeight=Object(i.b)("lineHeight"),this.background=Object(i.b)("background")},setFont:function(t){this.$emit("setFont",t)},sub:function(){this.fontsize>12&&(this.fontsize--,this.$emit("setFontSize",this.fontsize))},add:function(){this.fontsize<30&&(this.fontsize++,this.$emit("setFontSize",this.fontsize))},setLineHeight:function(t){this.lineHeight=t,this.$emit("setLineHeight",this.lineHeight,this.background)},setBackground:function(t){this.background=t,this.$emit("setBackground",this.background)},init:function(){}},mounted:function(){this.$nextTick(function(){this.init()})}},s=(o("ZPAd"),o("oYRX"),o("KHd+")),a=Object(s.a)(n,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"mobileTheme"}},[i("mu-bottom-nav",[i("div",{staticClass:"title clearfix"},[i("i",{staticClass:"iconfont iconclose",on:{click:function(e){t.close()}}}),t._v(" "),i("p",[t._v("选项")])])]),t._v(" "),i("div",{staticClass:"theme-container"},[i("el-form",{ref:"form",staticClass:"themeBox",attrs:{"label-position":"top"}},[i("el-form-item",{attrs:{label:"字体"}},[i("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择"},on:{change:t.setFont},model:{value:t.fontType,callback:function(e){t.fontType=e},expression:"fontType"}},t._l(t.fontTypeList,function(t,e){return i("el-option",{key:e,attrs:{label:t.label,value:t.value}})}))],1),t._v(" "),i("el-form-item",{attrs:{label:"字号"}},[i("div",{staticClass:"setFontSize clearfix"},[i("p",{on:{click:function(e){t.sub()}}},[t._v("小")]),t._v(" "),i("span",[t._v(t._s(t.fontsize))]),t._v(" "),i("p",{on:{click:function(e){t.add()}}},[t._v("大")])])]),t._v(" "),i("el-form-item",{attrs:{label:"排版"}},[i("div",{staticClass:"selectBox clearfix"},[i("p",{class:1.2==t.lineHeight?"active":"",on:{click:function(e){t.setLineHeight(1.2)}}},[i("img",{attrs:{src:o("KFHA"),alt:""}})]),t._v(" "),i("p",{class:1.6==t.lineHeight?"active":"",on:{click:function(e){t.setLineHeight(1.6)}}},[i("img",{attrs:{src:o("KFHA"),alt:""}})]),t._v(" "),i("p",{class:2==t.lineHeight?"active":"",on:{click:function(e){t.setLineHeight(2)}}},[i("img",{attrs:{src:o("KFHA"),alt:""}})]),t._v(" "),i("p",{class:2.4==t.lineHeight?"active":"",on:{click:function(e){t.setLineHeight(2.4)}}},[i("img",{attrs:{src:o("KFHA"),alt:""}})])])]),t._v(" "),i("el-form-item",{attrs:{label:"主题"}},[i("div",{staticClass:"selectBox clearfix"},[i("p",{class:"default"===t.background?"active":"",on:{click:function(e){t.setBackground("default")}}},[i("span",{staticStyle:{background:"#FFFFFF"}})]),t._v(" "),i("p",{class:"bright"===t.background?"active":"",on:{click:function(e){t.setBackground("bright")}}},[i("span",{staticStyle:{background:"#FFDDAA"}})]),t._v(" "),i("p",{class:"eyeProtection"===t.background?"active":"",on:{click:function(e){t.setBackground("eyeProtection")}}},[i("span",{staticStyle:{background:"#BFE2CB"}})]),t._v(" "),i("p",{class:"night"===t.background?"active":"",on:{click:function(e){t.setBackground("night")}}},[i("span",{staticStyle:{background:"#141414"}})])])])],1)],1)],1)},[],!1,null,"0b5fdfd8",null);a.options.__file="index.vue";e.default=a.exports},ZPAd:function(t,e,o){"use strict";var i=o("6Lyv");o.n(i).a},dSbz:function(t,e,o){"use strict";o.r(e);var i=o("QbLZ"),n=o.n(i),s={components:{},props:{list:{type:Array,default:function(){return[]}}},data:function(){return{keyword:null,loading:!1}},computed:{result:function(){var t=this;return this.list.length>0?this.list.map(function(e){var o=e.excerpt.split(t.keyword);o[0]="...";var i=o.join('<span style="color: #048D01">'+t.keyword+"</span>");return n()({html:i},e)}):[]}},created:function(){},methods:{close:function(){this.$emit("closeDialog",null,!0)},search:function(){var t=this;this.keyword&&(this.loading=!0,this.$emit("search",this.keyword,function(){t.loading=!1}))},gotoResult:function(t){this.$emit("gotoResult",t)},init:function(){}},mounted:function(){this.$nextTick(function(){this.init()})}},a=(o("/5yg"),o("2Q83"),o("KHd+")),l=Object(a.a)(s,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"mobileSearch"}},[o("mu-bottom-nav",[o("div",{staticClass:"title clearfix"},[o("i",{staticClass:"iconfont iconclose",on:{click:function(e){t.close()}}}),t._v(" "),o("p",[t._v("搜索")])])]),t._v(" "),o("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"search-container"},[o("div",{staticClass:"box"},[o("mu-text-field",{staticStyle:{width:"100%"},attrs:{placeholder:"全文搜索","action-icon":"search","action-click":t.search},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.search(e):null}},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}})],1),t._v(" "),t.result.length>0?o("div",{staticClass:"list"},t._l(t.result,function(e,i){return o("div",{key:i,staticClass:"result clearfix"},[o("p",{staticClass:"wordOverflow3",domProps:{innerHTML:t._s(e.html)},on:{click:function(o){t.gotoResult(e.cfi)}}})])})):t._e(),t._v(" "),0===t.result.length&&null===t.keyword?o("div",{staticClass:"noContent"},[o("p",[t._v("请输入搜索内容")])]):t._e(),t._v(" "),0===t.result.length&&null!==t.keyword?o("div",{staticClass:"noContent"},[o("p",[t._v("没有搜索到结果")])]):t._e()])],1)},[],!1,null,"664cae6f",null);l.options.__file="index.vue";e.default=l.exports},"mp+L":function(t,e,o){},n4Zp:function(t,e,o){},oYRX:function(t,e,o){"use strict";var i=o("JUT9");o.n(i).a},zElz:function(t,e,o){"use strict";o.r(e);var i=o("14Xm"),n=o.n(i),s=o("4d7F"),a=o.n(s),l=o("QbLZ"),r=o.n(l),c=o("D3Ub"),u=o.n(c),h=o("4+mZ"),d=o("RN3X"),f=o("Q3gc"),p=o("dSbz"),g=o("X4fA"),m=window.ePub,b={data:function(){return{id:null,bookLoading:!1,showLoadingTip:!1,file:null,book:null,bookUrl:null,bookRendition:null,displayed:null,locations:null,drawer_open:!1,progress:null,progressTips:null,bookInfo:{title:null,currentPage:null,totalPage:null,totalChapter:null,currentChapter:null},prevStatus:!0,nextStatus:!0,catalogStatus:!1,currentChapter:{},chapterDetailList:[],bookmarksStatus:!1,bookmarksId:null,bookFrame:null,singlePageStatus:!1,themeStatus:!1,theme:null,fs:Object(g.b)("fontSize"),lh:Object(g.b)("lineHeight"),searchStatus:!1,searchResult:[],fullScreenStatus:!1,toolTipsStatus:!1,toolTipsMode:"add",toolTipsTop:0,toolTipsLeft:0,selectedInfo:{},selectedCfi:null,selectedLocation:null,selectedColorClassName:null,currentHandleWord:null,currentHandleAnnotateWrod:null,annotateStatus:!1,annotateShowAtTheBottom:!0,annotateTop:0,annotateLeft:0,annotateWord:null,toolTipsList:[],noteTipsList:[],screenIsChange:!1,imgDialogStatus:!1,imgSrc:null,messageStatus:!1,messageContent:null,surplusTop:21,menuDialogStatus:!1,mouseSelectStatus:!1}},components:{ProgressSlider:h.a,MobileCatalog:d.default,MobileTheme:f.default,MobileSearch:p.default},mounted:function(){this.$route.query&&this.$route.query.id&&this.$route.query.path&&(this.id=parseInt(this.$route.query.id),this.bookUrl="http://120.25.249.22:8094/"+this.$route.query.path,this.getBookUrl(this.bookUrl))},created:function(){},methods:{getBookUrl:function(t){this.bookInit(t)},bookInit:function(t){this.bookLoading=!0,this.book=m(t),this.bookRendition=this.book.renderTo("book",{width:"100%",height:"100%",spread:"always",ignoreClass:"annotator-hl"}),this.display=this.bookRendition.display(),this.bookFrame=document.getElementById("book").getBoundingClientRect(),this.screenWidthChange(),this.renderInit()},renderInit:function(){var t=this;this.book.ready.then(u()(n.a.mark(function e(){var o;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.bookLoading=!1,console.log("图书加载完成"),console.log(t.book),t.getBookInfo(),t.setBookTheme(),t.progress=0,t.chapterDetailList=[],o=1,t.book.navigation.toc.map(function(e){t.chapterDetailList.push(r()({index:o},e)),e.subitems.length>0&&o--,t.chapterDetailList=t.chapterDetailList.concat(e.subitems.map(function(t){return o++,r()({isUnit:!0,index:o,parentChapterHref:e.href,parentChapterLabel:e.label,fristChapterHref:t.href.split("#")[0]},t)})),o++}),t.bookInfo.totalChapter=t.chapterDetailList.slice(-1)[0].index,e.next=12,a.a.all(t.chapterDetailList.map(function(){var e=u()(n.a.mark(function e(o){var i;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.searchChapter(o.href);case 2:return i=e.sent,e.abrupt("return",r()({cfi:i},o));case 4:case"end":return e.stop()}},e,t)}));return function(t){return e.apply(this,arguments)}}()));case 12:t.chapterDetailList=e.sent,t.bookRendition.on("rendered",function(e){console.log("章节变化"),t.noteChange(null,e.href)}),t.bookRendition.on("relocated",function(e){console.log("页码变化"),t.locations=e,t.progress=e.start&&100*e.start.percentage,t.nextStatus=!e.atEnd,t.prevStatus=!e.atStart;var o=t.chapterDetailList.filter(function(t,o){return t.href.split("#")[0]===e.start.href.split("#")[0]}).slice(-1)[0];if(o){var i=r()({},o);i.index=o.index,t.currentChapter=i,t.bookInfo.currentChapter=o.parentChapterLabel?o.parentChapterLabel+" - "+o.label:o.label,t.progressTips=t.bookInfo.currentChapter}t.bookmarksChange(),t.toolTipsStatus=!1,t.annotateStatus=!1,t.clearSelectInfo()}),t.bookRendition.on("layout",function(t){console.log("布局变化")}),t.bookRendition.on("selected",function(e,o){var i,n=void 0,s=parseInt(Object(g.b)("fontSize")),a=parseInt(10*Object(g.b)("lineHeight"))/10;i=(n=t.bookRendition.getRange(e)).getBoundingClientRect(),t.mouseSelectStatus=!0,t.selectedCfi=e,t.selectedInfo=i,t.toolTipsTop=i.top+t.bookFrame.top-90-.5*s*a-10-t.surplusTop,t.toolTipsLeft=i.left%t.bookFrame.width+t.bookFrame.left+i.width/2-150,t.toolTipsStatus=!0,t.toolTipsMode="add",t.currentHandleWord=n.toString()}),t.bookRendition.on("mousedown",function(e,o){t.mouseSelectStatus=!1}),t.bookRendition.on("mouseup",function(e,o){t.mouseSelectStatus||((t.toolTipsStatus||t.annotateStatus)&&(t.toolTipsStatus=!1,t.annotateStatus=!1,t.clearSelectInfo()),t.noteTipsList.map(function(t){return t.isShowed=!1,t})),t.mouseSelectStatus=!1}),t.bookRendition.on("click",function(e){t.menuDialogStatus?t.menuDialogStatus=!1:e.pageX%t.bookFrame.width<.3*t.bookFrame.width?(t.menuDialogStatus=!1,t.prevStatus&&t.prev()):e.pageX%t.bookFrame.width>=.3*t.bookFrame.width&&e.pageX%t.bookFrame.width<=.7*t.bookFrame.width?t.menuDialogStatus=!t.menuDialogStatus:e.pageX%t.bookFrame.width>.7*t.bookFrame.width&&(t.menuDialogStatus=!1,t.nextStatus&&t.next())}),t.bookRendition.on("markClicked",function(e,o,i){var n,s=void 0,a=parseInt(Object(g.b)("fontSize")),l=parseInt(10*Object(g.b)("lineHeight"))/10,r=t.singlePageStatus?t.bookFrame.width:.42*t.bookFrame.width;if(n=(s=t.bookRendition.getRange(e)).getBoundingClientRect(),t.selectedCfi=e,t.selectedInfo=n,t.selectedColorClassName=o&&o.className,t.currentHandleAnnotateWrod=o.annotation?o.annotation:null,n.width>r){var c=e.split(",/1:")[0]+",/1:"+e.split(",/1:")[1]+",/1:"+(parseInt(e.split(",/1:")[1])+1)+")",u=t.getRangeRect(c);t.toolTipsTop=u.top+t.bookFrame.top-90-.5*a*l-10-t.surplusTop,t.toolTipsLeft=n.left%t.bookFrame.width+t.bookFrame.left-150}else t.toolTipsTop=n.top+t.bookFrame.top-90-.5*a*l-10-t.surplusTop,t.toolTipsLeft=n.left%t.bookFrame.width+t.bookFrame.left+n.width/2-150;t.noteTipsList.map(function(t){return t.isShowed=!1,t}),t.annotateStatus=!1,t.toolTipsStatus=!0,t.toolTipsMode="edit",t.currentHandleWord=s.toString()});case 21:case"end":return e.stop()}},e,t)})))},copyWord:function(){var t=document.createElement("input");t.value=this.currentHandleWord,document.body.appendChild(t),t.select(),document.execCommand("Copy"),t.style.display="none",document.body.removeChild(t),this.bookRendition.getContents(this.selectedCfi)[0].document.getSelection().empty(),(this.toolTipsStatus||this.annotateStatus)&&(this.toolTipsStatus=!1,this.annotateStatus=!1,this.clearSelectInfo()),this.message("内容已成功复制到粘贴板")},share:function(){this.bookRendition.getContents(this.selectedCfi)[0].document.getSelection().empty(),(this.toolTipsStatus||this.annotateStatus)&&(this.toolTipsStatus=!1,this.annotateStatus=!1,this.clearSelectInfo()),this.message("分享成功！")},createUnderline:function(){this.bookRendition.annotations.add("underline",this.selectedCfi,{cfiRange:this.selectedCfi,className:"default",annotation:""},function(){},"default",{}),Object(g.j)(this.id,{id:this.id+(new Date).getTime(),bookId:this.id,cfi:this.selectedCfi,href:this.currentChapter.href,word:this.currentHandleWord,index:this.currentChapter?this.currentChapter.index:null,type:"underline",underlineClass:"default",annotation:"",createTime:(new Date).getTime()}),this.bookRendition.getContents(this.selectedCfi)[0].document.getSelection().empty(),this.noteChange(),(this.toolTipsStatus||this.annotateStatus)&&(this.toolTipsStatus=!1,this.annotateStatus=!1,this.clearSelectInfo())},changeUnderlineColor:function(t){var e=this;this.bookRendition.annotations.remove(this.selectedCfi,"underline"),this.bookRendition.annotations.add("underline",this.selectedCfi,{cfiRange:this.selectedCfi,className:t,annotation:this.currentHandleAnnotateWrod},function(){},t,{}),Object(g.f)(this.id,this.selectedCfi),Object(g.j)(this.id,{id:this.id+(new Date).getTime(),bookId:this.id,cfi:this.selectedCfi,href:this.currentChapter.href,word:this.currentHandleWord,index:this.currentChapter?this.currentChapter.index:null,type:this.currentHandleAnnotateWrod?"annotation":"underline",underlineClass:t,annotation:this.currentHandleAnnotateWrod,createTime:(new Date).getTime()}),this.noteTipsList.map(function(o){return o.cfi===e.selectedCfi&&(o.underlineClass=t),o}),this.noteChange(),(this.toolTipsStatus||this.annotateStatus)&&(this.toolTipsStatus=!1,this.annotateStatus=!1,this.clearSelectInfo())},clearUnderline:function(){var t=this;this.bookRendition.annotations.remove(this.selectedCfi,"underline"),Object(g.f)(this.id,this.selectedCfi),this.noteTipsList=this.noteTipsList.filter(function(e){return!(e.cfi===t.selectedCfi)}),this.noteChange(),(this.toolTipsStatus||this.annotateStatus)&&(this.toolTipsStatus=!1,this.annotateStatus=!1,this.clearSelectInfo())},openAnnotateDialog:function(){var t=this.selectedInfo.top+195+this.selectedInfo.height;this.toolTipsStatus=!1,this.noteTipsList.map(function(t){return t.isShowed=!1,t}),"add"===this.toolTipsMode&&this.createUnderline(),t+270>document.body.clientHeight?(this.annotateShowAtTheBottom=!1,this.selectedInfo.height+this.bookFrame.bottom+270>document.body.clientHeight?(this.annotateTop=document.body.clientHeight-270,this.annotateLeft=document.body.clientWidth-500-41):(this.annotateTop=t-270-this.selectedInfo.height-20,this.annotateLeft=(this.selectedInfo.left-0)%this.bookFrame.width+this.bookFrame.left+this.selectedInfo.width/2-250)):(this.annotateShowAtTheBottom=!0,this.annotateTop=t,this.annotateLeft=(this.selectedInfo.left-0)%this.bookFrame.width+this.bookFrame.left+this.selectedInfo.width/2-250),this.annotateStatus=!0,this.annotateWord=this.currentHandleAnnotateWrod},closeAnnotateDialog:function(){"add"===this.toolTipsMode&&(this.bookRendition.annotations.remove(this.selectedCfi,"underline"),Object(g.f)(this.id,this.selectedCfi)),this.annotateStatus=!1,this.clearSelectInfo()},editAnnotate:function(t){this.bookRendition.emit("markClicked",t.cfi,{cfiRange:t.cfi,className:t.underlineClass,annotation:t.annotation}),this.openAnnotateDialog()},createAnnotate:function(){var t=this;if(null===this.annotateWord)return this.message("批注内容不能为空!"),this.closeAnnotateDialog(),!0;""===this.annotateWord&&"edit"===this.toolTipsMode?(this.noteTipsList=this.noteTipsList.filter(function(e){return!(e.cfi===t.selectedCfi)}),Object(g.j)(this.id,{id:this.id+(new Date).getTime(),bookId:this.id,cfi:this.selectedCfi,href:this.currentChapter.href,word:this.currentHandleWord,index:this.currentChapter?this.currentChapter.index:null,type:"underline",underlineClass:this.selectedColorClassName?this.selectedColorClassName:"default",annotation:null,createTime:(new Date).getTime()})):(this.bookRendition.annotations.remove(this.selectedCfi,"underline"),Object(g.f)(this.id,this.selectedCfi),this.bookRendition.annotations.add("underline",this.selectedCfi,{cfiRange:this.selectedCfi,className:this.selectedColorClassName?this.selectedColorClassName:"default",annotation:this.annotateWord},function(){},this.selectedColorClassName?this.selectedColorClassName:"default",{}),Object(g.j)(this.id,{id:this.id+(new Date).getTime(),bookId:this.id,cfi:this.selectedCfi,href:this.currentChapter.href,word:this.currentHandleWord,index:this.currentChapter?this.currentChapter.index:null,type:"annotation",underlineClass:this.selectedColorClassName?this.selectedColorClassName:"default",annotation:this.annotateWord,createTime:(new Date).getTime()}),this.noteChange()),(this.toolTipsStatus||this.annotateStatus)&&(this.toolTipsStatus=!1,this.annotateStatus=!1,this.clearSelectInfo())},getNoteTipsPosition:function(t){var e,o,i=void 0,n=void 0,s=void 0,a=void 0,l=parseInt(Object(g.b)("fontSize")),r=parseInt(10*Object(g.b)("lineHeight"))/10;if(!(s=this.getRange(t)))return!0;(a=s.cloneRange()).collapse(!1),e=s.getBoundingClientRect(),n=(o=a.getBoundingClientRect()).top+this.bookFrame.top+1.2*l+11-this.surplusTop,i=o.left%this.bookFrame.width+this.bookFrame.left,this.singlePageStatus?Math.abs(o.left%this.bookFrame.width-.04*this.bookFrame.width)<10&&(o.top<=3*r/.4+l-6?(n=e.top+this.bookFrame.top+1.2*l+11-this.surplusTop+e.height-l*r-2,i=i+.92*this.bookFrame.width-5):(n-=l*r,i=i+.92*this.bookFrame.width-5)):(Math.abs(o.left%this.bookFrame.width-.04*this.bookFrame.width)<10||Math.abs(o.left%this.bookFrame.width-.54*this.bookFrame.width)<10)&&(o.top<=3*r/.4+l-6?Math.abs(o.left%this.bookFrame.width-.04*this.bookFrame.width)<10?(n=e.top+this.bookFrame.top+1.2*l+11-this.surplusTop+e.height-l*r-2,i=i+.92*this.bookFrame.width-5):(n=e.top+this.bookFrame.top+1.2*l+11-this.surplusTop+e.height-l*r-2,i=i-.08*this.bookFrame.width-3):(n-=l*r,i=i+.42*this.bookFrame.width-3));return{top:n+("MicrosoftYaHei"===Object(g.b)("fontFamily")||"PingFang SC, PingFang TC"===Object(g.b)("fontFamily")?0:-5),left:i}},clearSelectInfo:function(){this.noteTipsList.map(function(t){return t.isShowed=!1,t}),this.toolTipsMode="add",this.selectedCfi=null,this.selectedColorClassName=null,this.currentHandleWord=null,this.currentHandleAnnotateWrod=null,this.annotateWord=null},bookmarksChange:function(){var t=this;this.bookmarksStatus=!1,this.bookmarksId=null;var e,o,i=this.locations.start.displayed.page;e=this.bookFrame.width*(i-1)+.04*this.bookFrame.width,o=e+.92*this.bookFrame.width,this.bookmarksStatus=Object(g.a)(this.id).some(function(i){if(!t.getRangeRect(i.startCfi))return!1;var n=t.getRangeRect(i.startCfi).left;return n>=e&&n<=o&&(t.bookmarksId=i.id,!0)})},noteChange:function(t,e){var o=this,i=Object(g.c)(this.id),n=e||this.currentChapter.href;t&&this.bookRendition.annotations.remove(t,"underline"),i.map(function(t){o.bookRendition.annotations.remove(t.cfi,"underline")}),this.noteTipsList=[],this.toolTipsList=[],i.filter(function(t,e){return t.href.split("#")[0]===n.split("#")[0]}).map(function(t,e){o.toolTipsList.push(t.cfi),o.bookRendition.annotations.add("underline",t.cfi,{cfiRange:t.cfi,className:t.underlineClass,annotation:t.annotation},function(){},t.underlineClass,{}),o.createAnnotationDom()})},createAnnotationDom:function(){var t=this,e=document.querySelector("svg"),o=document.querySelectorAll("svg g"),i=document.querySelector(".epub-view");this.$refs.note.style=e.style.cssText,Object(g.c)(this.id).map(function(e,i){o.forEach(function(o){if("annotation"===e.type&&e.cfi===o.dataset.cfiRange){var i=o.querySelectorAll("line")[o.querySelectorAll("line").length-1],n=i.x2.baseVal.value,s=i.y2.baseVal.value;t.noteTipsList.push(r()({isShowed:!1,top:s-10,left:n,cTop:s-10-70+t.bookFrame.top,cLeft:n%t.bookFrame.width+t.bookFrame.left-140+10},e))}})}),i.appendChild(this.$refs.note)},getBookInfo:function(){this.bookInfo.title=this.book.package.metadata.title},setBookTheme:function(){var t=this;this.themes=this.bookRendition.themes,this.setStyle("fontFamily","MicrosoftYaHei",function(e){t.themes.font(e)}),this.setStyle("fontSize",16,function(e){t.themes.fontSize(e+"px")}),this.setStyle("lineHeight",1.2,function(e){t.registerTheme(e),t.setStyle("background","default",function(e){t.theme=e,t.themes.select(e)})})},setStyle:function(t,e,o){Object(g.b)(t)?o(Object(g.b)(t)):(Object(g.i)(t,e),o(e))},setFont:function(t){this.themes.font(t),Object(g.i)("fontFamily",t),this.bookmarksChange(),this.noteChange(),this.bookRendition.display(this.locations.start.cfi)},setFontSize:function(t){this.themes.fontSize(t+"px"),Object(g.i)("fontSize",t),this.bookmarksChange(),this.noteChange(),this.bookRendition.display(this.locations.start.cfi)},setLineHeight:function(t,e){this.registerTheme(t),this.themes.select(e),Object(g.i)("lineHeight",t),this.bookmarksChange(),this.noteChange(),this.bookRendition.display(this.locations.start.cfi)},setBackground:function(t){this.themes.select(t),this.theme=t,Object(g.i)("background",t)},registerTheme:function(t){this.themes.register({default:{body:{background:"#ffffff",color:"#666666"},"::selection":{background:"rgba(250,205,137,0.3)"},"*":{"line-height":t+"!important"}},bright:{body:{background:"#FFDDAA",color:"#666666","line-height":2},"::selection":{background:"rgba(250,205,137,0.3)"},"*":{"line-height":t+"!important"}},eyeProtection:{body:{background:"#BFE2CB",color:"#666666","line-height":2},"::selection":{background:"rgba(250,205,137,0.3)"},"*":{"line-height":t+"!important"}},night:{body:{background:"#141414",color:"#FFFFFF","line-height":2},"::selection":{background:"rgba(250,205,137,0.3)"},"*":{"line-height":t+"!important"}}})},onProgressChange:function(t){var e=t/100,o=t>0?this.book.locations.cfiFromPercentage(e):0;this.bookRendition.display(o)},prev:function(){"rtl"===this.book.package.metadata.direction?this.bookRendition.next():this.bookRendition.prev()},next:function(){"rtl"===this.book.package.metadata.direction?this.bookRendition.prev():this.bookRendition.next()},progressPrev:function(){this.progress>1&&(this.progress--,this.onProgressChange(this.progress))},progressNext:function(){this.progress<99&&(this.progress++,this.onProgressChange(this.progress))},menu_click:function(){var t=this;this.drawer_open=!0,this.dialogHandle(function(){t.catalogStatus=!0})},goToChapter:function(t){this.bookRendition.display(t.href)},setBookmarks:function(){if(this.bookmarksStatus)Object(g.e)(this.id,this.bookmarksId),this.bookmarksStatus=!1;else{var t=this.locations&&this.locations.start,e=this.locations&&this.locations.end,o=this.getRange(t.cfi)&&this.getRange(t.cfi).commonAncestorContainer,i=o&&o.data,n=i.split(" ").some(function(t){return"\n"===t});t.cfi.split("!")[0],t.cfi.split("!")[1].split("/");n||(Object(g.h)(this.id,{id:this.id+(new Date).getTime(),bookId:this.id,startCfi:t.cfi,endCfi:e.cfi,href:t.href,word:i,index:this.currentChapter?this.currentChapter.index:null,createTime:(new Date).getTime()}),this.bookmarksId=this.id+(new Date).getTime(),this.bookmarksStatus=!0)}},gotoBookmarks:function(t){this.bookRendition.display(t),this.dialogHandle(null,!0)},spellcheck_click:function(){var t=this;this.drawer_open=!0,this.dialogHandle(function(){t.themeStatus=!0})},search_click:function(){var t=this;this.drawer_open=!0,this.searchResult=[],this.dialogHandle(function(){t.searchStatus=!0})},search:function(t,e){var o=this,i=this.book;a.a.all(i.spine.spineItems.map(function(e){return new a.a(function(o,n){e.load(i.load.bind(i)).then(function(i){o(e.find.bind(e,t))}).catch(function(t){e.unload.bind(e)})})})).then(function(t){a.a.all(t).then(function(t){o.searchResult=t.map(function(t){return t()}).reduce(function(t,e){return t.concat(e)},[]),e&&e(o.searchResult)})})},searchChapter:function(t){var e=this;return u()(n.a.mark(function o(){var i,s,a,l;return n.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return i=e.book,s=t.split("#")[1],a=i.spine.get(t),o.next=5,a.load(i.load.bind(i));case 5:return l=s?a.document.getElementById(s):a.document.body,o.abrupt("return",a.cfiFromElement(l));case 7:case"end":return o.stop()}},o,e)}))()},setPageType:function(){var t=this,e=this.locations.start.cfi;this.screenIsChange=!0,this.singlePageStatus=!this.singlePageStatus,this.surplusTop=21,setTimeout(function(){t.bookFrame=document.getElementById("book").getBoundingClientRect(),t.singlePageStatus?t.bookRendition.resize(630):t.bookRendition.resize(t.bookFrame.width),t.bookRendition.display(e),t.toolTipsStatus=!1,t.annotateStatus=!1},100)},screenWidthChange:function(){var t=this;window.onresize=function(){t.screenIsChange=!0,t.surplusTop=21,document.body.clientWidth>=1200&&setTimeout(function(){t.bookFrame=document.getElementById("book").getBoundingClientRect(),t.bookRendition.resize(t.bookFrame.width),t.toolTipsStatus=!1,t.annotateStatus=!1},100)}},setFullscreen:function(){this.fullScreenStatus?(document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen(),this.fullScreenStatus=!1):(document.documentElement.requestFullscreen?document.documentElement.requestFullscreen():document.documentElement.mozRequestFullScreen?document.documentElement.mozRequestFullScreen():document.documentElement.webkitRequestFullScreen&&document.documentElement.webkitRequestFullScreen(),this.fullScreenStatus=!0)},dialogHandle:function(t,e){this.catalogStatus=!1,this.themeStatus=!1,this.searchStatus=!1,t&&"function"==typeof t&&t(),e&&(this.drawer_open=!1,this.menuDialogStatus=!1)},message:function(t){var e=this;this.messageStatus=!0,this.messageContent=t,setTimeout(function(){e.messageStatus=!1,e.messageContent=null},3e3)},getRange:function(t){return!!this.bookRendition.getRange(t)&&this.bookRendition.getRange(t)},getRangeRect:function(t){var e=void 0;return!!this.bookRendition.getRange(t)&&((e=this.bookRendition.getRange(t))&&e.getBoundingClientRect())}}},k=(o("DMGl"),o("J0AY"),o("KHd+")),v=Object(k.a)(b,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container",attrs:{id:"mobile-container"}},[i("transition",{attrs:{name:"el-zoom-in-top"}},[t.menuDialogStatus?i("mu-appbar",{class:t.bookmarksStatus?"otherHeader appbar-header":"appbar-header",staticStyle:{width:"100%"},attrs:{color:"primary"}},[i("mu-button",{attrs:{slot:"left",icon:""},on:{click:function(e){t.book.destroy(),t.$goLink("/list")}},slot:"left"},[i("img",{staticStyle:{width:"30px"},attrs:{src:o("xWuU"),alt:""}})]),t._v(" "),i("mu-button",{attrs:{slot:"right",flat:""},on:{click:t.menu_click},slot:"right"},[i("img",{staticStyle:{width:"30px",height:"24px"},attrs:{src:o("KFHA"),alt:""}})]),t._v(" "),i("mu-button",{attrs:{slot:"right",flat:""},on:{click:t.spellcheck_click},slot:"right"},[i("img",{staticStyle:{width:"30px"},attrs:{src:o("DiXf"),alt:""}})]),t._v(" "),i("mu-button",{attrs:{slot:"right",flat:""},on:{click:t.search_click},slot:"right"},[i("img",{staticStyle:{width:"30px"},attrs:{src:o("FQzh"),alt:""}})]),t._v(" "),i("mu-button",{attrs:{slot:"right",flat:""},on:{click:t.setBookmarks},slot:"right"},[t.bookmarksStatus?t._e():i("img",{staticStyle:{width:"30px"},attrs:{src:o("np8K"),alt:""}}),t._v(" "),t.bookmarksStatus?i("img",{staticStyle:{width:"30px"},attrs:{src:o("PhfJ"),alt:""}}):t._e()])],1):t._e()],1),t._v(" "),i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.bookLoading,expression:"bookLoading"}],attrs:{id:"wrapper","element-loading-text":"图书加载中, 请耐心等待...","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.6)"}},[i("div",{class:"bookBox "+t.theme},[i("div",{staticClass:"top clearfix"},[i("span",{staticClass:"wordOverflow",staticStyle:{width:"80%"}},[t._v(t._s(t.bookInfo.currentChapter))]),t._v(" "),t.bookmarksStatus?i("i",{staticClass:"iconfont iconsign"}):t._e()]),t._v(" "),i("div",{attrs:{id:"book"}}),t._v(" "),i("div",{staticClass:"bottom"},[this.showLoadingTip?i("p",[i("i",{staticClass:"el-icon-loading"}),t._v("\n\t\t\t\t\t\t功能加载中...\n\t\t\t\t\t")]):t._e(),t._v(" "),t.currentChapter.index&&t.bookInfo?i("span",[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.currentChapter.index)+"/"+t._s(t.bookInfo.totalChapter))]):t._e()])])]),t._v(" "),i("mu-drawer",{staticClass:"drawer-container",attrs:{open:t.drawer_open,docked:!1,right:!0},on:{"update:open":function(e){t.drawer_open=e},close:t.dialogHandle}},[t.catalogStatus?i("mobile-catalog",{attrs:{id:t.id,chapterList:t.chapterDetailList,currentChapter:t.currentChapter},on:{closeDialog:t.dialogHandle,goToChapter:t.goToChapter,gotoBookmarks:t.gotoBookmarks,gotoNote:t.gotoBookmarks,bookmarksChange:t.bookmarksChange,noteChange:t.noteChange}}):t._e(),t._v(" "),t.themeStatus?i("mobile-theme",{on:{closeDialog:t.dialogHandle,setFont:t.setFont,setFontSize:t.setFontSize,setLineHeight:t.setLineHeight,setBackground:t.setBackground}}):t._e(),t._v(" "),t.searchStatus?i("mobile-search",{attrs:{list:t.searchResult},on:{closeDialog:t.dialogHandle,"update:list":function(e){t.searchResult=e},search:t.search,gotoResult:t.gotoBookmarks}}):t._e()],1),t._v(" "),t.toolTipsStatus?i("div",{style:{top:"add"===t.toolTipsMode?t.toolTipsTop+60+"px":t.toolTipsTop+"px",left:t.toolTipsLeft+"px",height:"add"===t.toolTipsMode?"60px":"120px"},attrs:{id:"toolTips"}},["edit"===t.toolTipsMode?i("div",{staticClass:"colorList clearfix"},[i("p",{class:"green"===t.selectedColorClassName?"active":""},[i("span",{staticStyle:{background:"#1CB555"},on:{click:function(e){t.changeUnderlineColor("green")}}})]),t._v(" "),i("p",{class:"orange"===t.selectedColorClassName?"active":""},[i("span",{staticStyle:{background:"#F19149"},on:{click:function(e){t.changeUnderlineColor("orange")}}})]),t._v(" "),i("p",{class:"blue"===t.selectedColorClassName?"active":""},[i("span",{staticStyle:{background:"#00A0E9"},on:{click:function(e){t.changeUnderlineColor("blue")}}})]),t._v(" "),i("p",{class:"violet"===t.selectedColorClassName?"active":""},[i("span",{staticStyle:{background:"#C490BF"},on:{click:function(e){t.changeUnderlineColor("violet")}}})])]):t._e(),t._v(" "),i("div",{staticClass:"tool clearfix"},[i("p",{on:{click:function(e){t.copyWord()}}},[t._v("复制")]),t._v(" "),i("p",{on:{click:function(e){t.share()}}},[t._v("分享")]),t._v(" "),"add"===t.toolTipsMode?i("p",{on:{click:function(e){t.createUnderline()}}},[t._v("划线")]):t._e(),t._v(" "),"edit"===t.toolTipsMode?i("p",{on:{click:function(e){t.clearUnderline()}}},[t._v("清除")]):t._e(),t._v(" "),i("p",{on:{click:function(e){t.openAnnotateDialog()}}},[t._v("批注")])])]):t._e(),t._v(" "),t.annotateStatus?i("div",{class:t.annotateShowAtTheBottom?"":"top",style:{top:t.annotateTop+"px",left:t.annotateLeft+"px"},attrs:{id:"annotate"}},[i("p",[t._v("批注")]),t._v(" "),i("span",{staticClass:"wordOverflow"},[t._v(t._s(t.currentHandleWord))]),t._v(" "),i("el-input",{attrs:{type:"textarea",rows:5},model:{value:t.annotateWord,callback:function(e){t.annotateWord=e},expression:"annotateWord"}}),t._v(" "),i("p",{staticClass:"complete",on:{click:function(e){t.createAnnotate()}}},[t._v("完 成")])],1):t._e(),t._v(" "),i("div",{ref:"note",attrs:{id:"noteTipsList"}},t._l(t.noteTipsList,function(e,o){return i("div",{key:o,class:e.underlineClass,style:{top:e.top+"px",left:e.left+"px"},attrs:{id:"noteTips"},on:{click:function(t){e.isShowed=!e.isShowed}}},[i("span"),t._v(" "),i("span"),t._v(" "),i("span"),t._v(" "),e.isShowed?i("div",{style:{top:e.cTop+"px",left:e.cLeft+"px"}},[i("p",{staticClass:"wordOverflow"},[t._v(t._s(e.annotation))])]):t._e()])})),t._v(" "),t.imgDialogStatus?i("div",{attrs:{id:"imgDialog"},on:{click:function(e){t.imgDialogStatus=!1}}},[i("img",{attrs:{src:t.imgSrc,alt:""}})]):t._e(),t._v(" "),t.messageStatus?i("div",{attrs:{id:"message"}},[i("p",{staticClass:"wordOverflow"},[t._v(t._s(t.messageContent))])]):t._e()],1)},[],!1,null,"3add2c8a",null);v.options.__file="index.vue";e.default=v.exports},zU2W:function(t,e,o){}}]);