(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-7138"],{"/lFH":function(t,i,e){},"1j7S":function(t,i,e){"use strict";e.r(i);var n=e("X4fA"),s={components:{},data:function(){return{fontType:"MicrosoftYaHei",fontsize:16,lineHeight:1.2,background:"default",fontTypeList:[{label:"微软雅黑",value:"MicrosoftYaHei"},{label:"黑体",value:"Microsoft Yahei, Heiti SC, Heiti TC"},{label:"宋体",value:"SimSun, Songti SC, Songti TC"},{label:"楷体",value:"KaiTi, Kaiti SC, Kaiti TC"},{label:"圆体",value:"YouYuan, Yuanti SC, Yuanti TC"},{label:"方体",value:"PingFang SC, PingFang TC"}],backgroundList:[{value:{}}]}},created:function(){this.getTheme()},methods:{close:function(){this.$emit("closeDialog",null,!0)},getTheme:function(){this.fontType=Object(n.b)("fontFamily"),this.fontsize=Object(n.b)("fontSize"),this.lineHeight=Object(n.b)("lineHeight"),this.background=Object(n.b)("background")},setFont:function(t){console.log(t),this.$emit("setFont",t)},sub:function(){this.fontsize>12&&(this.fontsize--,this.$emit("setFontSize",this.fontsize))},add:function(){this.fontsize<50&&(this.fontsize++,this.$emit("setFontSize",this.fontsize))},setLineHeight:function(t){this.lineHeight=t,this.$emit("setLineHeight",this.lineHeight,this.background)},setBackground:function(t){this.background=t,this.$emit("setBackground",this.background)},init:function(){}},mounted:function(){this.$nextTick(function(){this.init()})}},a=(e("hqTf"),e("rJzI"),e("KHd+")),o=Object(a.a)(s,function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{attrs:{id:"theme"}},[n("mu-bottom-nav",[n("div",{staticClass:"title clearfix"},[n("i",{staticClass:"iconfont iconclose",on:{click:function(i){t.close()}}}),t._v(" "),n("p",[t._v("选项")])])]),t._v(" "),n("div",{staticClass:"theme-container"},[n("el-form",{ref:"form",staticClass:"themeBox",attrs:{"label-position":"top"}},[n("el-form-item",{attrs:{label:"字体"}},[n("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择"},on:{change:t.setFont},model:{value:t.fontType,callback:function(i){t.fontType=i},expression:"fontType"}},t._l(t.fontTypeList,function(t,i){return n("el-option",{key:i,attrs:{label:t.label,value:t.value}})}))],1),t._v(" "),n("el-form-item",{attrs:{label:"字号"}},[n("div",{staticClass:"setFontSize clearfix"},[n("p",{on:{click:function(i){t.sub()}}},[t._v("小")]),t._v(" "),n("span",[t._v(t._s(t.fontsize))]),t._v(" "),n("p",{on:{click:function(i){t.add()}}},[t._v("大")])])]),t._v(" "),n("el-form-item",{attrs:{label:"排版"}},[n("div",{staticClass:"selectBox clearfix"},[n("p",{class:1.2==t.lineHeight?"active":"",on:{click:function(i){t.setLineHeight(1.2)}}},[n("img",{attrs:{src:e("KFHA"),alt:""}})]),t._v(" "),n("p",{class:1.6==t.lineHeight?"active":"",on:{click:function(i){t.setLineHeight(1.6)}}},[n("img",{attrs:{src:e("KFHA"),alt:""}})]),t._v(" "),n("p",{class:2==t.lineHeight?"active":"",on:{click:function(i){t.setLineHeight(2)}}},[n("img",{attrs:{src:e("KFHA"),alt:""}})]),t._v(" "),n("p",{class:2.4==t.lineHeight?"active":"",on:{click:function(i){t.setLineHeight(2.4)}}},[n("img",{attrs:{src:e("KFHA"),alt:""}})])])]),t._v(" "),n("el-form-item",{attrs:{label:"主题"}},[n("div",{staticClass:"selectBox clearfix"},[n("p",{class:"default"===t.background?"active":"",on:{click:function(i){t.setBackground("default")}}},[n("span",{staticStyle:{background:"#FFFFFF"}})]),t._v(" "),n("p",{class:"bright"===t.background?"active":"",on:{click:function(i){t.setBackground("bright")}}},[n("span",{staticStyle:{background:"#FFDDAA"}})]),t._v(" "),n("p",{class:"eyeProtection"===t.background?"active":"",on:{click:function(i){t.setBackground("eyeProtection")}}},[n("span",{staticStyle:{background:"#BFE2CB"}})]),t._v(" "),n("p",{class:"night"===t.background?"active":"",on:{click:function(i){t.setBackground("night")}}},[n("span",{staticStyle:{background:"#141414"}})])])])],1)],1)],1)},[],!1,null,"2afde134",null);o.options.__file="index.vue";i.default=o.exports},"2Nos":function(t,i,e){},KFHA:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAwCAYAAABe6Vn9AAABC0lEQVRoQ+2aPQ5BQRSFv1dYAIWaBQgbQCJeYRkqrV6rFa3WBixAZSuWwArkJk8hqhuZE+/mTn/nzDnf/GQyUwET4AAsaG97AhdgXQEnYNNeLx8jH5mhK1AHMVSboS1wDGKoa4asTYEZ0GmpsUezhu5vQy318T3sNPTvKJNQEhInkFNOHLhbLgm5IxMXJCFx4G65JOSOTFwQklC/uYJHuA+djdAe2IlnRim5gRm6AfNSCuJ+V9EIDc1QuDUknhVl5UJu22UjE/eehMSBu+WSkDsycUESEgfulktC7sjEBUlIHLhbLgm5IxMXhHxjjfQK3ov2T2EZ7SfJ2AyF++sj3ofKyuU5VDbf33t/AT57HLoa+tkTAAAAAElFTkSuQmCC"},hqTf:function(t,i,e){"use strict";var n=e("2Nos");e.n(n).a},rJzI:function(t,i,e){"use strict";var n=e("/lFH");e.n(n).a}}]);