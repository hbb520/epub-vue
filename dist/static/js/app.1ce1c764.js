(window.webpackJsonp=window.webpackJsonp||[]).push([["app"],{"A0++":function(t,e,n){"use strict";var o=n("TOJS");n.n(o).a},Gl1J:function(t,e,n){var o={"./404.vue":["jNvO","chunk-599a"],"./Vtour.vue":["dWWE","chunk-a9e0"],"./catalog/index.vue":["Jgs+","chunk-5b3a"],"./index/index.vue":["N/kD","chunk-5b3a","chunk-4a46"],"./list/index.vue":["9zZt","chunk-c0d5"],"./login/index.vue":["ntYl","chunk-4921"],"./mobile-catalog/index.vue":["RN3X","chunk-f9d6"],"./mobile-search/index.vue":["dSbz","chunk-5030"],"./mobile-theme/index.vue":["Q3gc","chunk-3c7b"],"./mobile/index.vue":["zElz","chunk-f9d6","chunk-2114"],"./search/index.vue":["7+PR","chunk-3a60"],"./theme/index.vue":["1j7S","chunk-6fc0"]};function s(t){var e=o[t];return e?Promise.all(e.slice(1).map(n.e)).then(function(){var t=e[0];return n(t)}):Promise.resolve().then(function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e})}s.keys=function(){return Object.keys(o)},s.id="Gl1J",t.exports=s},Q2AE:function(t,e,n){"use strict";var o=n("Kw5r"),s=n("L2JU"),r=n("p46w"),a=n.n(r),i={state:{sidebar:{opened:!+a.a.get("sidebarStatus"),withoutAnimation:!1},device:"desktop"},mutations:{TOGGLE_SIDEBAR:function(t){t.sidebar.opened?a.a.set("sidebarStatus",1):a.a.set("sidebarStatus",0),t.sidebar.opened=!t.sidebar.opened,t.sidebar.withoutAnimation=!1},CLOSE_SIDEBAR:function(t,e){a.a.set("sidebarStatus",1),t.sidebar.opened=!1,t.sidebar.withoutAnimation=e},TOGGLE_DEVICE:function(t,e){t.device=e}},actions:{ToggleSideBar:function(t){(0,t.commit)("TOGGLE_SIDEBAR")},CloseSideBar:function(t,e){(0,t.commit)("CLOSE_SIDEBAR",e.withoutAnimation)},ToggleDevice:function(t,e){(0,t.commit)("TOGGLE_DEVICE",e)}}},u=n("4d7F"),c=n.n(u),d=n("t3Un");var l=n("X4fA"),f={state:{token:Object(l.d)(),name:"",avatar:"",roles:[]},mutations:{SET_TOKEN:function(t,e){t.token=e},SET_NAME:function(t,e){t.name=e},SET_AVATAR:function(t,e){t.avatar=e},SET_ROLES:function(t,e){t.roles=e}},actions:{Login:function(t,e){var n=t.commit,o=e.username.trim();return new c.a(function(t,s){(function(t,e){return Object(d.a)({url:"/user/login",method:"post",data:{username:t,password:e}})})(o,e.password).then(function(e){var o=e.data;Object(l.k)(o.token),n("SET_TOKEN",o.token),t()}).catch(function(t){s(t)})})},GetInfo:function(t){var e=t.commit,n=t.state;return new c.a(function(t,o){(function(t){return Object(d.a)({url:"/user/info",method:"get",params:{token:t}})})(n.token).then(function(n){var s=n.data;s.roles&&s.roles.length>0?e("SET_ROLES",s.roles):o("getInfo: roles must be a non-null array !"),e("SET_NAME",s.name),e("SET_AVATAR",s.avatar),t(n)}).catch(function(t){o(t)})})},LogOut:function(t){var e=t.commit,n=t.state;return new c.a(function(t,o){(n.token,Object(d.a)({url:"/user/logout",method:"post"})).then(function(){e("SET_TOKEN",""),e("SET_ROLES",[]),Object(l.g)(),t()}).catch(function(t){o(t)})})},FedLogOut:function(t){var e=t.commit;return new c.a(function(t){e("SET_TOKEN",""),Object(l.g)(),t()})}}},j={sidebar:function(t){return t.app.sidebar},device:function(t){return t.app.device},token:function(t){return t.user.token},avatar:function(t){return t.user.avatar},name:function(t){return t.user.name},roles:function(t){return t.user.roles}};o.default.use(s.a);var m=new s.a.Store({modules:{app:i,user:f},getters:j});e.a=m},RnhZ:function(t,e,n){var o={"./af":"K/tc","./af.js":"K/tc","./ar":"jnO4","./ar-dz":"o1bE","./ar-dz.js":"o1bE","./ar-kw":"Qj4J","./ar-kw.js":"Qj4J","./ar-ly":"HP3h","./ar-ly.js":"HP3h","./ar-ma":"CoRJ","./ar-ma.js":"CoRJ","./ar-sa":"gjCT","./ar-sa.js":"gjCT","./ar-tn":"bYM6","./ar-tn.js":"bYM6","./ar.js":"jnO4","./az":"SFxW","./az.js":"SFxW","./be":"H8ED","./be.js":"H8ED","./bg":"hKrs","./bg.js":"hKrs","./bm":"p/rL","./bm.js":"p/rL","./bn":"kEOa","./bn.js":"kEOa","./bo":"0mo+","./bo.js":"0mo+","./br":"aIdf","./br.js":"aIdf","./bs":"JVSJ","./bs.js":"JVSJ","./ca":"1xZ4","./ca.js":"1xZ4","./cs":"PA2r","./cs.js":"PA2r","./cv":"A+xa","./cv.js":"A+xa","./cy":"l5ep","./cy.js":"l5ep","./da":"DxQv","./da.js":"DxQv","./de":"tGlX","./de-at":"s+uk","./de-at.js":"s+uk","./de-ch":"u3GI","./de-ch.js":"u3GI","./de.js":"tGlX","./dv":"WYrj","./dv.js":"WYrj","./el":"jUeY","./el.js":"jUeY","./en-SG":"zavE","./en-SG.js":"zavE","./en-au":"Dmvi","./en-au.js":"Dmvi","./en-ca":"OIYi","./en-ca.js":"OIYi","./en-gb":"Oaa7","./en-gb.js":"Oaa7","./en-ie":"4dOw","./en-ie.js":"4dOw","./en-il":"czMo","./en-il.js":"czMo","./en-nz":"b1Dy","./en-nz.js":"b1Dy","./eo":"Zduo","./eo.js":"Zduo","./es":"iYuL","./es-do":"CjzT","./es-do.js":"CjzT","./es-us":"Vclq","./es-us.js":"Vclq","./es.js":"iYuL","./et":"7BjC","./et.js":"7BjC","./eu":"D/JM","./eu.js":"D/JM","./fa":"jfSC","./fa.js":"jfSC","./fi":"gekB","./fi.js":"gekB","./fo":"ByF4","./fo.js":"ByF4","./fr":"nyYc","./fr-ca":"2fjn","./fr-ca.js":"2fjn","./fr-ch":"Dkky","./fr-ch.js":"Dkky","./fr.js":"nyYc","./fy":"cRix","./fy.js":"cRix","./ga":"USCx","./ga.js":"USCx","./gd":"9rRi","./gd.js":"9rRi","./gl":"iEDd","./gl.js":"iEDd","./gom-latn":"DKr+","./gom-latn.js":"DKr+","./gu":"4MV3","./gu.js":"4MV3","./he":"x6pH","./he.js":"x6pH","./hi":"3E1r","./hi.js":"3E1r","./hr":"S6ln","./hr.js":"S6ln","./hu":"WxRl","./hu.js":"WxRl","./hy-am":"1rYy","./hy-am.js":"1rYy","./id":"UDhR","./id.js":"UDhR","./is":"BVg3","./is.js":"BVg3","./it":"bpih","./it-ch":"bxKX","./it-ch.js":"bxKX","./it.js":"bpih","./ja":"B55N","./ja.js":"B55N","./jv":"tUCv","./jv.js":"tUCv","./ka":"IBtZ","./ka.js":"IBtZ","./kk":"bXm7","./kk.js":"bXm7","./km":"6B0Y","./km.js":"6B0Y","./kn":"PpIw","./kn.js":"PpIw","./ko":"Ivi+","./ko.js":"Ivi+","./ku":"JCF/","./ku.js":"JCF/","./ky":"lgnt","./ky.js":"lgnt","./lb":"RAwQ","./lb.js":"RAwQ","./lo":"sp3z","./lo.js":"sp3z","./lt":"JvlW","./lt.js":"JvlW","./lv":"uXwI","./lv.js":"uXwI","./me":"KTz0","./me.js":"KTz0","./mi":"aIsn","./mi.js":"aIsn","./mk":"aQkU","./mk.js":"aQkU","./ml":"AvvY","./ml.js":"AvvY","./mn":"lYtQ","./mn.js":"lYtQ","./mr":"Ob0Z","./mr.js":"Ob0Z","./ms":"6+QB","./ms-my":"ZAMP","./ms-my.js":"ZAMP","./ms.js":"6+QB","./mt":"G0Uy","./mt.js":"G0Uy","./my":"honF","./my.js":"honF","./nb":"bOMt","./nb.js":"bOMt","./ne":"OjkT","./ne.js":"OjkT","./nl":"+s0g","./nl-be":"2ykv","./nl-be.js":"2ykv","./nl.js":"+s0g","./nn":"uEye","./nn.js":"uEye","./pa-in":"8/+R","./pa-in.js":"8/+R","./pl":"jVdC","./pl.js":"jVdC","./pt":"8mBD","./pt-br":"0tRk","./pt-br.js":"0tRk","./pt.js":"8mBD","./ro":"lyxo","./ro.js":"lyxo","./ru":"lXzo","./ru.js":"lXzo","./sd":"Z4QM","./sd.js":"Z4QM","./se":"//9w","./se.js":"//9w","./si":"7aV9","./si.js":"7aV9","./sk":"e+ae","./sk.js":"e+ae","./sl":"gVVK","./sl.js":"gVVK","./sq":"yPMs","./sq.js":"yPMs","./sr":"zx6S","./sr-cyrl":"E+lV","./sr-cyrl.js":"E+lV","./sr.js":"zx6S","./ss":"Ur1D","./ss.js":"Ur1D","./sv":"X709","./sv.js":"X709","./sw":"dNwA","./sw.js":"dNwA","./ta":"PeUW","./ta.js":"PeUW","./te":"XLvN","./te.js":"XLvN","./tet":"V2x9","./tet.js":"V2x9","./tg":"Oxv6","./tg.js":"Oxv6","./th":"EOgW","./th.js":"EOgW","./tl-ph":"Dzi0","./tl-ph.js":"Dzi0","./tlh":"z3Vd","./tlh.js":"z3Vd","./tr":"DoHr","./tr.js":"DoHr","./tzl":"z1FC","./tzl.js":"z1FC","./tzm":"wQk9","./tzm-latn":"tT3J","./tzm-latn.js":"tT3J","./tzm.js":"wQk9","./ug-cn":"YRex","./ug-cn.js":"YRex","./uk":"raLr","./uk.js":"raLr","./ur":"UpQW","./ur.js":"UpQW","./uz":"Loxo","./uz-latn":"AQ68","./uz-latn.js":"AQ68","./uz.js":"Loxo","./vi":"KSF8","./vi.js":"KSF8","./x-pseudo":"/X5v","./x-pseudo.js":"/X5v","./yo":"fzPg","./yo.js":"fzPg","./zh-cn":"XDpg","./zh-cn.js":"XDpg","./zh-hk":"SatO","./zh-hk.js":"SatO","./zh-tw":"kOpN","./zh-tw.js":"kOpN"};function s(t){var e=r(t);return n(e)}function r(t){var e=o[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}s.keys=function(){return Object.keys(o)},s.resolve=r,t.exports=s,s.id="RnhZ"},TOJS:function(t,e,n){},Vtdi:function(t,e,n){"use strict";n.r(e);var o=n("Kw5r"),s=(n("YZs6"),n("9d8Q"),n("XJYT")),r=n.n(s),a=(n("D66Q"),n("stYL")),i=n.n(a),u=(n("sg+I"),n("vjVy"),n("wd/R")),c=n.n(u),d=n("p46w"),l=n.n(d),f={name:"App",data:function(){return{}},mounted:function(){},methods:{}},j=(n("A0++"),n("KHd+")),m=Object(j.a)(f,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},[],!1,null,null,null);m.options.__file="App.vue";var h=m.exports,p=n("Q2AE"),v=n("jE9Z"),k=n("aIC9"),g=n("cMMo");o.default.use(v.a);var b=[{path:"/",component:k.a,redirect:"/list",name:"Layout",children:[]},{path:"/index",name:"Index",component:g("index/index"),meta:{title:["书籍"]}},{path:"/mobileIndex",name:"mobileIndex",component:g("mobile/index"),meta:{title:["书籍"]}},{path:"/list",name:"List",component:g("list/index"),meta:{title:["书籍列表"]}},{path:"/login",component:function(){return n.e("chunk-4921").then(n.bind(null,"ntYl"))},hidden:!0},{path:"/404",component:function(){return n.e("chunk-599a").then(n.bind(null,"jNvO"))},hidden:!0},{path:"*",redirect:"/404",hidden:!0}],w=new v.a({scrollBehavior:function(){return{y:0}},routes:b}),y=n("MPQu"),E=(n("1vaj"),n("76Y2")),O=n.n(E);o.default.use(y.a),O.a.add("teal",{primary:"#223FEE",secondary:"#ff4081",success:"#4caf50",warning:"#ffeb3b"},"light"),O.a.use("teal"),o.default.use(r.a,{size:"small",zIndex:3e3},{locale:i.a}),Object.defineProperty(o.default.prototype,"$moment",{value:c.a}),o.default.prototype.$Cookies=l.a,o.default.prototype.$goLink=function(t,e){this.$router.push({path:t,query:e||{}})},o.default.prototype.$goBack=function(t){this.$router.go(-1)},o.default.config.productionTip=!1,new o.default({el:"#app",router:w,store:p.a,render:function(t){return t(h)}})},X4fA:function(t,e,n){"use strict";n.d(e,"d",function(){return c}),n.d(e,"k",function(){return d}),n.d(e,"g",function(){return l}),n.d(e,"b",function(){return f}),n.d(e,"i",function(){return j}),n.d(e,"a",function(){return m}),n.d(e,"h",function(){return h}),n.d(e,"e",function(){return p}),n.d(e,"c",function(){return v}),n.d(e,"j",function(){return k}),n.d(e,"f",function(){return g});var o=n("gDS+"),s=n.n(o),r=n("p46w"),a=n.n(r),i="vue_admin_template_token",u=localStorage||window.localStorage;function c(){return a.a.get(i)}function d(t){return a.a.set(i,t)}function l(){return a.a.remove(i)}function f(t){return u.getItem(t)}function j(t,e){return u.setItem(t,e)}function m(t){var e="bookmarks-"+t;return JSON.parse(u.getItem(e))||[]}function h(t,e){var n="bookmarks-"+t,o=m(t)||[];return o.some(function(t){return t.cfi===e.cfi})?o=o.map(function(t){return t.cfi===e.cfi?e:t}):o.push(e),u.setItem(n,s()(o))}function p(t,e){var n="bookmarks-"+t,o=m(t)||[];return(o=o.filter(function(t){return t.id!==e})).length<=0?u.removeItem(n):u.setItem(n,s()(o))}function v(t){var e="note-"+t;return JSON.parse(u.getItem(e))||[]}function k(t,e){var n="note-"+t,o=v(t)||[];return o.some(function(t){return t.cfi===e.cfi})?o=o.map(function(t){return t.cfi===e.cfi?e:t}):o.push(e),u.setItem(n,s()(o))}function g(t,e){var n="note-"+t,o=v(t)||[];return(o=o.filter(function(t){return t.cfi!==e})).length<=0?u.removeItem(n):u.setItem(n,s()(o))}},aIC9:function(t,e,n){"use strict";var o=n("14Xm"),s=n.n(o),r=n("D3Ub"),a=n.n(r),i=n("t3Un");var u=window.ePub;e.a={data:function(){return{bookList:[],bookFile:null,uploadAction:"http://huake.qanzone.com:8094/book/uploadBook.json",uploadData:{fsize:1e5},uploadFileList:[],progress:0,isUploading:!1,isPhoneClient:!1}},created:function(){this.getBookList(),this.judgeClient()},methods:{getBookList:function(){var t=this;this.bookList=[],Object(i.a)({url:"/book/getList.json",method:"post"}).then(function(){var e=a()(s.a.mark(function e(n){var o,r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n&&n.data&&Array.isArray(n.data))for(o=function(e){var o=u("http://huake.qanzone.com:8094/"+n.data[e].path);o.ready.then(function(s){o.archive.getBase64(o.cover).then(function(o){t.bookList.push({id:n.data[e].id,title:s[2].title,path:n.data[e].path,cover:o})})})},r=0;r<n.data.length;r++)o(r);case 1:case"end":return e.stop()}},e,t)}));return function(t){return e.apply(this,arguments)}}(),function(e){t.$message.error(e)})},delBook:function(t){var e=this;this.$confirm("此操作将删除该图书, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){(function(t){return Object(i.a)({url:"/book/deleteBook.json",method:"post",params:t})})({bookId:t}).then(function(t){e.$message({type:"success",message:"删除成功!"}),e.getBookList()},function(t){e.$message.error(t)})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})},uploading:function(t,e,n){this.isUploading=!0,this.progress=parseInt(e.percentage)},bookHandleChange:function(t,e){this.uploadFileList=e.slice()},bookHandleSuccess:function(t,e){this.isUploading=!1,this.$message({message:"图书上传成功",type:"success"}),this.getBookList()},beforeBookUpload:function(t){return t&&"application/epub+zip"===t.type?(this.uploadData.cmfile=t,!0):(this.$message.error("上传的图书必须为epub格式!"),!1)},handleError:function(){this.isUploading=!1,this.$message.error("上传出错")},delUploadingBook:function(){this.isUploading=!1,this.$refs.uploadBook.abort()},judgeClient:function(){var t=navigator.userAgent.toLowerCase(),e="ipad"==t.match(/ipad/i),n="iphone os"==t.match(/iphone os/i),o="midp"==t.match(/midp/i),s="rv:1.2.3.4"==t.match(/rv:1.2.3.4/i),r="ucweb"==t.match(/ucweb/i),a="android"==t.match(/android/i),i="windows ce"==t.match(/windows ce/i),u="windows mobile"==t.match(/windows mobile/i);this.isPhoneClient=!!(e||n||o||s||r||a||i||u)}}}},cMMo:function(t,e,n){t.exports=function(t){return function(){return n("Gl1J")("./"+t+".vue").then(function(t){return t.default})}}},"sg+I":function(t,e,n){},t3Un:function(t,e,n){"use strict";var o=n("4d7F"),s=n.n(o),r=n("vDqi"),a=n.n(r),i=n("XJYT"),u=(n("Q2AE"),n("X4fA"),a.a.create({baseURL:"",timeout:5e3}));u.interceptors.response.use(function(t){if(200===t.status)return t.data;Object(i.Message)({message:t.msg,type:"error",duration:5e3})},function(t){return console.log("err"+t),Object(i.Message)({message:t.message,type:"error",duration:5e3}),s.a.reject(t)}),e.a=u},vjVy:function(t,e,n){}},[["Vtdi","runtime","chunk-elementUI","chunk-libs"]]]);