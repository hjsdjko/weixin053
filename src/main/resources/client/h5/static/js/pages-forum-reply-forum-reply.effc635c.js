(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-forum-reply-forum-reply"],{"05f6":function(n,t,e){"use strict";var r={"xia-editor":e("064f").default},a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{style:{width:"100%",padding:"0 0 0 0",position:"relative",background:"#ffffff",height:"100%"}},[e("v-uni-form",{style:{width:"100%",padding:"24rpx 24rpx 24rpx 24rpx",background:"#ffffff",display:"block",height:"auto"}},[e("v-uni-view",{style:{padding:"0px 0 0px 48rpx",margin:"0 0 24rpx 0",borderColor:"#eeeeee",alignItems:"center",borderRadius:"0px 0 0 0px",borderWidth:"0px 0px 2rpx 0px",background:"none",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[e("xia-editor",{style:{minHeight:"300rpx",padding:"0 0 0 0",margin:"0 0 0 0",color:"#666666",flex:"1",background:"none",height:"auto"},attrs:{placeholder:"回复"},on:{editorChange:function(t){arguments[0]=t=n.$handleEvent(t),n.contentChange.apply(void 0,arguments)}},model:{value:n.content,callback:function(t){n.content=t},expression:"content"}})],1),e("v-uni-view",{style:{width:"100%",justifyContent:"center",display:"flex",height:"auto"}},[e("v-uni-button",{staticClass:"bg-red margin-tb-sm",style:{border:"0px solid #eeeeee",padding:"0 0 0 0",margin:"0 20rpx 0 20rpx",color:"#fff",borderRadius:"60rpx",background:"#d84fa9",width:"240rpx",lineHeight:"80rpx",fontSize:"28rpx",height:"80rpx"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.onReplyTap.apply(void 0,arguments)}}},[n._v("提交回复")])],1)],1)],1)],1)},i=[];e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return i})),e.d(t,"a",(function(){return r}))},"2a34":function(n,t,e){"use strict";var r=e("5f5c"),a=e.n(r);a.a},"3a86":function(n,t,e){"use strict";e.r(t);var r=e("a14c"),a=e.n(r);for(var i in r)"default"!==i&&function(n){e.d(t,n,(function(){return r[n]}))}(i);t["default"]=a.a},"5f5c":function(n,t,e){var r=e("fbd7");"string"===typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);var a=e("4f06").default;a("5faefa43",r,!0,{sourceMap:!1,shadowMode:!1})},a14c:function(n,t,e){"use strict";var r=e("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e("a481"),e("3b2b"),e("28a5"),e("96cf");var a=r(e("3b8d")),i=r(e("064f")),o={data:function(){return{pid:"",content:"",username:"",avatarurl:"",user:{}}},components:{xiaEditor:i.default},onLoad:function(){var n=(0,a.default)(regeneratorRuntime.mark((function n(t){var e,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return this.pid=t.pid,e=uni.getStorageSync("nowTable"),n.next=4,this.$api.session(e);case 4:r=n.sent,this.user=r.data;case 6:case"end":return n.stop()}}),n,this)})));function t(t){return n.apply(this,arguments)}return t}(),methods:{contentChange:function(n){this.content=n},onReplyTap:function(){var n=(0,a.default)(regeneratorRuntime.mark((function n(){var t,e,r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:for(this.avatarurl=uni.getStorageSync("headportrait")?uni.getStorageSync("headportrait"):"",t="",e=[],t&&(e=t.split(",")),r=0;r<e.length;r++)a=new RegExp(e[r],"g"),this.content.indexOf(e[r])>-1&&(this.content=this.content.replace(a,"**"));return n.next=7,this.$api.save("forum",{parentid:this.pid,content:this.content,avatarurl:this.avatarurl,username:this.username});case 7:this.$utils.msgBack("回复成功");case 8:case"end":return n.stop()}}),n,this)})));function t(){return n.apply(this,arguments)}return t}()}};t.default=o},fa73:function(n,t,e){"use strict";e.r(t);var r=e("05f6"),a=e("3a86");for(var i in a)"default"!==i&&function(n){e.d(t,n,(function(){return a[n]}))}(i);e("2a34");var o,u=e("f0c5"),s=Object(u["a"])(a["default"],r["b"],r["c"],!1,null,"12235bbe",null,!1,r["a"],o);t["default"]=s.exports},fbd7:function(n,t,e){var r=e("24fb");t=r(!1),t.push([n.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-12235bbe]{min-height:calc(100vh - 44px);box-sizing:border-box}',""]),n.exports=t}}]);