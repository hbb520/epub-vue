(window.webpackJsonp=window.webpackJsonp||[]).push([["app"],{"A0++":function(e,t,n){"use strict";var s=n("TOJS");n.n(s).a},Gl1J:function(e,t,n){var s={"./404.vue":["jNvO","chunk-f778"],"./Vtour.vue":["dWWE","chunk-70f2"],"./catalog/index.vue":["Jgs+","chunk-278d"],"./index/index.vue":["N/kD","chunk-9ac7"],"./list/index.vue":["9zZt","chunk-ba01"],"./login/index.vue":["ntYl","chunk-ed24"],"./mobile-catalog/index.vue":["RN3X","chunk-773a"],"./mobile-search/index.vue":["dSbz","chunk-178c"],"./mobile-theme/index.vue":["Q3gc","chunk-52fb"],"./mobile/index.vue":["zElz","chunk-cb06"],"./search/index.vue":["7+PR","chunk-e33b"],"./theme/index.vue":["1j7S","chunk-5c89"]};function o(e){var t=s[e];return t?n.e(t[1]).then(function(){var e=t[0];return n(e)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}o.keys=function(){return Object.keys(s)},o.id="Gl1J",e.exports=o},Q2AE:function(e,t,n){"use strict";var s=n("Kw5r"),o=n("L2JU"),r=n("p46w"),a=n.n(r),i={state:{sidebar:{opened:!+a.a.get("sidebarStatus"),withoutAnimation:!1},device:"desktop"},mutations:{TOGGLE_SIDEBAR:function(e){e.sidebar.opened?a.a.set("sidebarStatus",1):a.a.set("sidebarStatus",0),e.sidebar.opened=!e.sidebar.opened,e.sidebar.withoutAnimation=!1},CLOSE_SIDEBAR:function(e,t){a.a.set("sidebarStatus",1),e.sidebar.opened=!1,e.sidebar.withoutAnimation=t},TOGGLE_DEVICE:function(e,t){e.device=t}},actions:{ToggleSideBar:function(e){(0,e.commit)("TOGGLE_SIDEBAR")},CloseSideBar:function(e,t){(0,e.commit)("CLOSE_SIDEBAR",t.withoutAnimation)},ToggleDevice:function(e,t){(0,e.commit)("TOGGLE_DEVICE",t)}}},u=n("4d7F"),c=n.n(u),d=n("t3Un");var l=n("X4fA"),f={state:{token:Object(l.d)(),name:"",avatar:"",roles:[]},mutations:{SET_TOKEN:function(e,t){e.token=t},SET_NAME:function(e,t){e.name=t},SET_AVATAR:function(e,t){e.avatar=t},SET_ROLES:function(e,t){e.roles=t}},actions:{Login:function(e,t){var n=e.commit,s=t.username.trim();return new c.a(function(e,o){(function(e,t){return Object(d.a)({url:"/user/login",method:"post",data:{username:e,password:t}})})(s,t.password).then(function(t){var s=t.data;Object(l.k)(s.token),n("SET_TOKEN",s.token),e()}).catch(function(e){o(e)})})},GetInfo:function(e){var t=e.commit,n=e.state;return new c.a(function(e,s){(function(e){return Object(d.a)({url:"/user/info",method:"get",params:{token:e}})})(n.token).then(function(n){var o=n.data;o.roles&&o.roles.length>0?t("SET_ROLES",o.roles):s("getInfo: roles must be a non-null array !"),t("SET_NAME",o.name),t("SET_AVATAR",o.avatar),e(n)}).catch(function(e){s(e)})})},LogOut:function(e){var t=e.commit,n=e.state;return new c.a(function(e,s){(n.token,Object(d.a)({url:"/user/logout",method:"post"})).then(function(){t("SET_TOKEN",""),t("SET_ROLES",[]),Object(l.g)(),e()}).catch(function(e){s(e)})})},FedLogOut:function(e){var t=e.commit;return new c.a(function(e){t("SET_TOKEN",""),Object(l.g)(),e()})}}},j={sidebar:function(e){return e.app.sidebar},device:function(e){return e.app.device},token:function(e){return e.user.token},avatar:function(e){return e.user.avatar},name:function(e){return e.user.name},roles:function(e){return e.user.roles}};s.default.use(o.a);var m=new o.a.Store({modules:{app:i,user:f},getters:j});t.a=m},RnhZ:function(e,t,n){var s={"./af":"K/tc","./af.js":"K/tc","./ar":"jnO4","./ar-dz":"o1bE","./ar-dz.js":"o1bE","./ar-kw":"Qj4J","./ar-kw.js":"Qj4J","./ar-ly":"HP3h","./ar-ly.js":"HP3h","./ar-ma":"CoRJ","./ar-ma.js":"CoRJ","./ar-sa":"gjCT","./ar-sa.js":"gjCT","./ar-tn":"bYM6","./ar-tn.js":"bYM6","./ar.js":"jnO4","./az":"SFxW","./az.js":"SFxW","./be":"H8ED","./be.js":"H8ED","./bg":"hKrs","./bg.js":"hKrs","./bm":"p/rL","./bm.js":"p/rL","./bn":"kEOa","./bn.js":"kEOa","./bo":"0mo+","./bo.js":"0mo+","./br":"aIdf","./br.js":"aIdf","./bs":"JVSJ","./bs.js":"JVSJ","./ca":"1xZ4","./ca.js":"1xZ4","./cs":"PA2r","./cs.js":"PA2r","./cv":"A+xa","./cv.js":"A+xa","./cy":"l5ep","./cy.js":"l5ep","./da":"DxQv","./da.js":"DxQv","./de":"tGlX","./de-at":"s+uk","./de-at.js":"s+uk","./de-ch":"u3GI","./de-ch.js":"u3GI","./de.js":"tGlX","./dv":"WYrj","./dv.js":"WYrj","./el":"jUeY","./el.js":"jUeY","./en-SG":"zavE","./en-SG.js":"zavE","./en-au":"Dmvi","./en-au.js":"Dmvi","./en-ca":"OIYi","./en-ca.js":"OIYi","./en-gb":"Oaa7","./en-gb.js":"Oaa7","./en-ie":"4dOw","./en-ie.js":"4dOw","./en-il":"czMo","./en-il.js":"czMo","./en-nz":"b1Dy","./en-nz.js":"b1Dy","./eo":"Zduo","./eo.js":"Zduo","./es":"iYuL","./es-do":"CjzT","./es-do.js":"CjzT","./es-us":"Vclq","./es-us.js":"Vclq","./es.js":"iYuL","./et":"7BjC","./et.js":"7BjC","./eu":"D/JM","./eu.js":"D/JM","./fa":"jfSC","./fa.js":"jfSC","./fi":"gekB","./fi.js":"gekB","./fo":"ByF4","./fo.js":"ByF4","./fr":"nyYc","./fr-ca":"2fjn","./fr-ca.js":"2fjn","./fr-ch":"Dkky","./fr-ch.js":"Dkky","./fr.js":"nyYc","./fy":"cRix","./fy.js":"cRix","./ga":"USCx","./ga.js":"USCx","./gd":"9rRi","./gd.js":"9rRi","./gl":"iEDd","./gl.js":"iEDd","./gom-latn":"DKr+","./gom-latn.js":"DKr+","./gu":"4MV3","./gu.js":"4MV3","./he":"x6pH","./he.js":"x6pH","./hi":"3E1r","./hi.js":"3E1r","./hr":"S6ln","./hr.js":"S6ln","./hu":"WxRl","./hu.js":"WxRl","./hy-am":"1rYy","./hy-am.js":"1rYy","./id":"UDhR","./id.js":"UDhR","./is":"BVg3","./is.js":"BVg3","./it":"bpih","./it-ch":"bxKX","./it-ch.js":"bxKX","./it.js":"bpih","./ja":"B55N","./ja.js":"B55N","./jv":"tUCv","./jv.js":"tUCv","./ka":"IBtZ","./ka.js":"IBtZ","./kk":"bXm7","./kk.js":"bXm7","./km":"6B0Y","./km.js":"6B0Y","./kn":"PpIw","./kn.js":"PpIw","./ko":"Ivi+","./ko.js":"Ivi+","./ku":"JCF/","./ku.js":"JCF/","./ky":"lgnt","./ky.js":"lgnt","./lb":"RAwQ","./lb.js":"RAwQ","./lo":"sp3z","./lo.js":"sp3z","./lt":"JvlW","./lt.js":"JvlW","./lv":"uXwI","./lv.js":"uXwI","./me":"KTz0","./me.js":"KTz0","./mi":"aIsn","./mi.js":"aIsn","./mk":"aQkU","./mk.js":"aQkU","./ml":"AvvY","./ml.js":"AvvY","./mn":"lYtQ","./mn.js":"lYtQ","./mr":"Ob0Z","./mr.js":"Ob0Z","./ms":"6+QB","./ms-my":"ZAMP","./ms-my.js":"ZAMP","./ms.js":"6+QB","./mt":"G0Uy","./mt.js":"G0Uy","./my":"honF","./my.js":"honF","./nb":"bOMt","./nb.js":"bOMt","./ne":"OjkT","./ne.js":"OjkT","./nl":"+s0g","./nl-be":"2ykv","./nl-be.js":"2ykv","./nl.js":"+s0g","./nn":"uEye","./nn.js":"uEye","./pa-in":"8/+R","./pa-in.js":"8/+R","./pl":"jVdC","./pl.js":"jVdC","./pt":"8mBD","./pt-br":"0tRk","./pt-br.js":"0tRk","./pt.js":"8mBD","./ro":"lyxo","./ro.js":"lyxo","./ru":"lXzo","./ru.js":"lXzo","./sd":"Z4QM","./sd.js":"Z4QM","./se":"//9w","./se.js":"//9w","./si":"7aV9","./si.js":"7aV9","./sk":"e+ae","./sk.js":"e+ae","./sl":"gVVK","./sl.js":"gVVK","./sq":"yPMs","./sq.js":"yPMs","./sr":"zx6S","./sr-cyrl":"E+lV","./sr-cyrl.js":"E+lV","./sr.js":"zx6S","./ss":"Ur1D","./ss.js":"Ur1D","./sv":"X709","./sv.js":"X709","./sw":"dNwA","./sw.js":"dNwA","./ta":"PeUW","./ta.js":"PeUW","./te":"XLvN","./te.js":"XLvN","./tet":"V2x9","./tet.js":"V2x9","./tg":"Oxv6","./tg.js":"Oxv6","./th":"EOgW","./th.js":"EOgW","./tl-ph":"Dzi0","./tl-ph.js":"Dzi0","./tlh":"z3Vd","./tlh.js":"z3Vd","./tr":"DoHr","./tr.js":"DoHr","./tzl":"z1FC","./tzl.js":"z1FC","./tzm":"wQk9","./tzm-latn":"tT3J","./tzm-latn.js":"tT3J","./tzm.js":"wQk9","./ug-cn":"YRex","./ug-cn.js":"YRex","./uk":"raLr","./uk.js":"raLr","./ur":"UpQW","./ur.js":"UpQW","./uz":"Loxo","./uz-latn":"AQ68","./uz-latn.js":"AQ68","./uz.js":"Loxo","./vi":"KSF8","./vi.js":"KSF8","./x-pseudo":"/X5v","./x-pseudo.js":"/X5v","./yo":"fzPg","./yo.js":"fzPg","./zh-cn":"XDpg","./zh-cn.js":"XDpg","./zh-hk":"SatO","./zh-hk.js":"SatO","./zh-tw":"kOpN","./zh-tw.js":"kOpN"};function o(e){var t=r(e);return n(t)}function r(e){var t=s[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}o.keys=function(){return Object.keys(s)},o.resolve=r,e.exports=o,o.id="RnhZ"},TOJS:function(e,t,n){},Vtdi:function(e,t,n){"use strict";n.r(t);var s=n("Kw5r"),o=(n("YZs6"),n("9d8Q"),n("XJYT")),r=n.n(o),a=(n("D66Q"),n("stYL")),i=n.n(a),u=(n("sg+I"),n("vjVy"),n("wd/R")),c=n.n(u),d=n("p46w"),l=n.n(d),f={name:"App",data:function(){return{}},mounted:function(){},methods:{}},j=(n("A0++"),n("KHd+")),m=Object(j.a)(f,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},[],!1,null,null,null);m.options.__file="App.vue";var h=m.exports,p=n("Q2AE"),v=n("jE9Z"),k=n("aIC9"),b=n("cMMo");s.default.use(v.a);var g=[{path:"/",component:k.a,redirect:"/list",name:"Layout",children:[]},{path:"/index",name:"Index",component:b("index/index"),meta:{title:["书籍"]}},{path:"/mobileIndex",name:"mobileIndex",component:b("mobile/index"),meta:{title:["书籍"]}},{path:"/list",name:"List",component:b("list/index"),meta:{title:["书籍列表"]}},{path:"/login",component:function(){return n.e("chunk-ed24").then(n.bind(null,"ntYl"))},hidden:!0},{path:"/404",component:function(){return n.e("chunk-f778").then(n.bind(null,"jNvO"))},hidden:!0},{path:"*",redirect:"/404",hidden:!0}],w=new v.a({scrollBehavior:function(){return{y:0}},routes:g}),O=n("MPQu"),E=(n("1vaj"),n("76Y2")),y=n.n(E);s.default.use(O.a),y.a.add("teal",{primary:"#223FEE",secondary:"#ff4081",success:"#4caf50",warning:"#ffeb3b"},"light"),y.a.use("teal"),s.default.use(r.a,{size:"small",zIndex:3e3},{locale:i.a}),Object.defineProperty(s.default.prototype,"$moment",{value:c.a}),s.default.prototype.$Cookies=l.a,s.default.prototype.$goLink=function(e,t){this.$router.push({path:e,query:t||{}})},s.default.prototype.$goBack=function(e){this.$router.go(-1)},s.default.config.productionTip=!1,new s.default({el:"#app",router:w,store:p.a,render:function(e){return e(h)}})},X4fA:function(e,t,n){"use strict";n.d(t,"d",function(){return c}),n.d(t,"k",function(){return d}),n.d(t,"g",function(){return l}),n.d(t,"b",function(){return f}),n.d(t,"i",function(){return j}),n.d(t,"a",function(){return m}),n.d(t,"h",function(){return h}),n.d(t,"e",function(){return p}),n.d(t,"c",function(){return v}),n.d(t,"j",function(){return k}),n.d(t,"f",function(){return b});var s=n("gDS+"),o=n.n(s),r=n("p46w"),a=n.n(r),i="vue_admin_template_token",u=localStorage||window.localStorage;function c(){return a.a.get(i)}function d(e){return a.a.set(i,e)}function l(){return a.a.remove(i)}function f(e){return u.getItem(e)}function j(e,t){return u.setItem(e,t)}function m(e){var t="bookmarks-"+e;return JSON.parse(u.getItem(t))||[]}function h(e,t){var n="bookmarks-"+e,s=m(e)||[];return s.push(t),u.setItem(n,o()(s))}function p(e,t){var n="bookmarks-"+e,s=m(e)||[];return(s=s.filter(function(e){return e.id!==t})).length<=0?u.removeItem(n):u.setItem(n,o()(s))}function v(e){var t="note-"+e;return JSON.parse(u.getItem(t))||[]}function k(e,t){var n="note-"+e,s=v(e)||[];return s.push(t),u.setItem(n,o()(s))}function b(e,t){var n="note-"+e,s=v(e)||[];return(s=s.filter(function(e){return e.cfi!==t})).length<=0?u.removeItem(n):u.setItem(n,o()(s))}},aIC9:function(e,t,n){"use strict";var s=n("14Xm"),o=n.n(s),r=n("D3Ub"),a=n.n(r),i=n("t3Un");var u=window.ePub;t.a={data:function(){return{bookList:[],bookFile:null,uploadAction:"http://120.25.249.22:8094/book/uploadBook.json",uploadData:{fsize:1e5},uploadFileList:[],progress:0,isUploading:!1,isPhoneClient:!1}},created:function(){this.getBookList(),this.judgeClient()},methods:{getBookList:function(){var e=this;this.bookList=[],Object(i.a)({url:"/book/getList.json",method:"post"}).then(function(){var t=a()(o.a.mark(function t(n){var s,r,a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(n&&n.data&&Array.isArray(n.data))){t.next=13;break}s=0;case 2:if(!(s<n.data.length)){t.next=13;break}if(r=u("http://120.25.249.22:8094/"+n.data[s].path),a=void 0,!r.isOpen){t.next=9;break}return t.next=8,r.loaded.metadata;case 8:a=t.sent;case 9:e.bookList.push({id:n.data[s].id,title:a?a.title:n.data[s].name.split(".")[0],path:n.data[s].path,cover:r.cover});case 10:s++,t.next=2;break;case 13:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),function(t){e.$message.error(t)})},delBook:function(e){var t=this;this.$confirm("此操作将删除该图书, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){(function(e){return Object(i.a)({url:"/book/deleteBook.json",method:"post",params:e})})({bookId:e}).then(function(e){t.$message({type:"success",message:"删除成功!"}),t.getBookList()},function(e){t.$message.error(e)})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},uploading:function(e,t,n){this.isUploading=!0,this.progress=parseInt(t.percentage)},bookHandleChange:function(e,t){this.uploadFileList=t.slice()},bookHandleSuccess:function(e,t){this.isUploading=!1,this.$message({message:"图书上传成功",type:"success"}),this.getBookList()},beforeBookUpload:function(e){return e&&"application/epub+zip"===e.type?(this.uploadData.cmfile=e,!0):(this.$message.error("上传的图书必须为epub格式!"),!1)},handleError:function(){this.isUploading=!1,this.$message.error("上传出错")},delUploadingBook:function(){this.isUploading=!1,this.$refs.uploadBook.abort()},judgeClient:function(){var e=navigator.userAgent.toLowerCase(),t="ipad"==e.match(/ipad/i),n="iphone os"==e.match(/iphone os/i),s="midp"==e.match(/midp/i),o="rv:1.2.3.4"==e.match(/rv:1.2.3.4/i),r="ucweb"==e.match(/ucweb/i),a="android"==e.match(/android/i),i="windows ce"==e.match(/windows ce/i),u="windows mobile"==e.match(/windows mobile/i);this.isPhoneClient=!!(t||n||s||o||r||a||i||u)}}}},cMMo:function(e,t,n){e.exports=function(e){return function(){return n("Gl1J")("./"+e+".vue").then(function(e){return e.default})}}},"sg+I":function(e,t,n){},t3Un:function(e,t,n){"use strict";var s=n("4d7F"),o=n.n(s),r=n("vDqi"),a=n.n(r),i=n("XJYT"),u=(n("Q2AE"),n("X4fA"),a.a.create({baseURL:"http://120.25.249.22:8094",timeout:5e3}));u.interceptors.response.use(function(e){if(200===e.status)return e.data;Object(i.Message)({message:e.msg,type:"error",duration:5e3})},function(e){return console.log("err"+e),Object(i.Message)({message:e.message,type:"error",duration:5e3}),o.a.reject(e)}),t.a=u},vjVy:function(e,t,n){}},[["Vtdi","runtime","chunk-elementUI","chunk-libs"]]]);