(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-chongzhixinxi-add-or-update"],{"34ff":function(e,t,r){var n=r("b952");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=r("4f06").default;i("8aa7e57c",n,!0,{sourceMap:!1,shadowMode:!1})},"8e9c":function(e,t,r){"use strict";var n=r("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r("a481"),r("c5f6"),r("f559"),r("456d"),r("ac6a"),r("96cf");var i=n(r("3b8d")),o=n(r("e2b1")),a=n(r("064f")),s=n(r("bd56")),u={data:function(){return{cross:"",ruleForm:{yonghuzhanghao:"",yonghuxingming:"",yue:"",chongzhishijian:"",ispay:"未支付"},user:{},ro:{yonghuzhanghao:!1,yonghuxingming:!1,yue:!1,chongzhishijian:!1,ispay:!1}}},components:{wPicker:o.default,xiaEditor:a.default,multipleSelect:s.default},watch:{},onLoad:function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(t){var r,n,i,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.ruleForm.chongzhishijian=this.$utils.getCurDateTime(),r=uni.getStorageSync("nowTable"),e.next=4,this.$api.session(r);case 4:if(n=e.sent,this.user=n.data,this.ruleForm.yonghuzhanghao=this.user.yonghuzhanghao,this.ro.yonghuzhanghao=!0,this.ruleForm.yonghuxingming=this.user.yonghuxingming,this.ro.yonghuxingming=!0,this.ruleForm.userid=uni.getStorageSync("userid"),t.refid&&(this.ruleForm.refid=t.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!t.id){e.next=18;break}return this.ruleForm.id=t.id,e.next=16,this.$api.info("chongzhixinxi",this.ruleForm.id);case 16:n=e.sent,this.ruleForm=n.data;case 18:if(this.cross=t.cross,!t.cross){e.next=42;break}i=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(i);case 22:if((e.t1=e.t0()).done){e.next=42;break}if(o=e.t1.value,"yonghuzhanghao"!=o){e.next=28;break}return this.ruleForm.yonghuzhanghao=i[o],this.ro.yonghuzhanghao=!0,e.abrupt("continue",22);case 28:if("yonghuxingming"!=o){e.next=32;break}return this.ruleForm.yonghuxingming=i[o],this.ro.yonghuxingming=!0,e.abrupt("continue",22);case 32:if("yue"!=o){e.next=36;break}return this.ruleForm.yue=i[o],this.ro.yue=!0,e.abrupt("continue",22);case 36:if("chongzhishijian"!=o){e.next=40;break}return this.ruleForm.chongzhishijian=i[o],this.ro.chongzhishijian=!0,e.abrupt("continue",22);case 40:e.next=22;break;case 42:this.styleChange(),this.$forceUpdate();case 44:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),methods:{styleChange:function(){this.$nextTick((function(){document.querySelectorAll(".radioText").forEach((function(e){e.removeAttribute("style");var t={color:"#666666"};Object.keys(t).forEach((function(r){e.style[r]=t[r]}))})),document.querySelectorAll(".radioTextActive").forEach((function(e){e.removeAttribute("style");var t={color:"#666"};Object.keys(t).forEach((function(r){e.style[r]=t[r]}))})),document.querySelectorAll(".checkText").forEach((function(e){e.removeAttribute("style");var t={color:"#666666"};Object.keys(t).forEach((function(r){e.style[r]=t[r]}))})),document.querySelectorAll(".checkTextActive").forEach((function(e){e.removeAttribute("style");var t={color:"#666"};Object.keys(t).forEach((function(r){e.style[r]=t[r]}))})),document.querySelectorAll(".uni-radio-input").forEach((function(e){e.removeAttribute("style");var t={border:"2rpx solid #999999",borderRadius:"0",background:"#ffffff"};Object.keys(t).forEach((function(r){e.style[r]=t[r]}))})),document.querySelectorAll(".uni-radio-input-checked").forEach((function(e){e.removeAttribute("style");var t={border:"2rpx solid #5fb959",borderRadius:"0",color:"#fff",background:"#5fb959"};Object.keys(t).forEach((function(r){e.style[r]=t[r]}))})),document.querySelectorAll(".uni-checkbox-input").forEach((function(e){e.removeAttribute("style");var t={border:"2rpx solid #999999",borderRadius:"0",background:"#ffffff"};Object.keys(t).forEach((function(r){e.style[r]=t[r]}))})),document.querySelectorAll(".uni-checkbox-input-checked").forEach((function(e){e.removeAttribute("style");var t={border:"2rpx solid #5fb959",color:"#fff",borderRadius:"0",background:"#5fb959"};Object.keys(t).forEach((function(r){e.style[r]=t[r]}))}))}))},chongzhishijianConfirm:function(e){console.log(e),this.ruleForm.chongzhishijian=e.result,this.$forceUpdate()},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(){var t,r,n,i,o,a,s,u,c,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.cross){e.next=17;break}if(uni.setStorageSync("crossCleanType",!0),o=uni.getStorageSync("statusColumnName"),a=uni.getStorageSync("statusColumnValue"),""==o){e.next=17;break}if(t||(t=uni.getStorageSync("crossObj")),o.startsWith("[")){e.next=13;break}for(s in t)s==o&&(t[s]=a);return u=uni.getStorageSync("crossTable"),e.next=11,this.$api.update("".concat(u),t);case 11:e.next=17;break;case 13:r=Number(uni.getStorageSync("userid")),n=t["id"],i=uni.getStorageSync("statusColumnName"),i=i.replace(/\[/,"").replace(/\]/,"");case 17:if(!n||!r){e.next=44;break}return this.ruleForm.crossuserid=r,this.ruleForm.crossrefid=n,c={page:1,limit:10,crossuserid:r,crossrefid:n},e.next=23,this.$api.list("chongzhixinxi",c);case 23:if(l=e.sent,!(l.data.total>=i)){e.next=30;break}return this.$utils.msg(uni.getStorageSync("tips")),uni.removeStorageSync("crossCleanType"),e.abrupt("return",!1);case 30:if(!this.ruleForm.id){e.next=35;break}return e.next=33,this.$api.update("chongzhixinxi",this.ruleForm);case 33:e.next=41;break;case 35:return e.next=37,this.$api.add("chongzhixinxi",this.ruleForm);case 37:if(!(this.user.yue>=0)){e.next=41;break}return this.user.yue=parseFloat(this.user.yue)+parseFloat(this.ruleForm.yue),e.next=41,this.$api.update(uni.getStorageSync("nowTable"),this.user);case 41:this.$utils.msgBack("提交成功");case 42:e.next=56;break;case 44:if(!this.ruleForm.id){e.next=49;break}return e.next=47,this.$api.update("chongzhixinxi",this.ruleForm);case 47:e.next=55;break;case 49:return e.next=51,this.$api.add("chongzhixinxi",this.ruleForm);case 51:if(!(this.user.yue>=0)){e.next=55;break}return this.user.yue=parseFloat(this.user.yue)+parseFloat(this.ruleForm.yue),e.next=55,this.$api.update(uni.getStorageSync("nowTable"),this.user);case 55:this.$utils.msgBack("提交成功");case 56:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,r=t.getFullYear(),n=t.getMonth()+1,i=t.getDate();return"start"===e?r-=60:"end"===e&&(r+=2),n=n>9?n:"0"+n,i=i>9?i:"0"+i,"".concat(r,"-").concat(n,"-").concat(i)},toggleTab:function(e){this.$refs[e].show()}}};t.default=u},a3f2:function(e,t,r){"use strict";r.r(t);var n=r("8e9c"),i=r.n(n);for(var o in n)"default"!==o&&function(e){r.d(t,e,(function(){return n[e]}))}(o);t["default"]=i.a},a52c:function(e,t,r){"use strict";var n={"w-picker":r("e2b1").default},i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-uni-view",{staticClass:"content"},[r("v-uni-view",{style:{width:"100%",padding:"0 0 0 0",position:"relative",background:"#ffffff",height:"100%"}},[r("v-uni-form",{staticClass:"app-update-pv",style:{width:"100%",padding:"24rpx 24rpx 24rpx 24rpx",background:"#ffffff",display:"block",height:"auto"}},[r("v-uni-view",{style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#eeeeee",alignItems:"center",borderWidth:"0px 0px 2rpx 0px",background:"none",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("用户账号")]),r("v-uni-input",{style:{border:"0px solid #eeeeee",padding:"0px 24rpx 0px 24rpx",margin:"0 0 0 0",color:"#666666",borderRadius:"8rpx",flex:"1",background:"#ffffff00",fontSize:"28rpx",lineHeight:"80rpx",height:"80rpx"},attrs:{disabled:e.ro.yonghuzhanghao,placeholder:"用户账号"},model:{value:e.ruleForm.yonghuzhanghao,callback:function(t){e.$set(e.ruleForm,"yonghuzhanghao",t)},expression:"ruleForm.yonghuzhanghao"}})],1),r("v-uni-view",{style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#eeeeee",alignItems:"center",borderWidth:"0px 0px 2rpx 0px",background:"none",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("用户姓名")]),r("v-uni-input",{style:{border:"0px solid #eeeeee",padding:"0px 24rpx 0px 24rpx",margin:"0 0 0 0",color:"#666666",borderRadius:"8rpx",flex:"1",background:"#ffffff00",fontSize:"28rpx",lineHeight:"80rpx",height:"80rpx"},attrs:{disabled:e.ro.yonghuxingming,placeholder:"用户姓名"},model:{value:e.ruleForm.yonghuxingming,callback:function(t){e.$set(e.ruleForm,"yonghuxingming",t)},expression:"ruleForm.yonghuxingming"}})],1),r("v-uni-view",{style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#eeeeee",alignItems:"center",borderWidth:"0px 0px 2rpx 0px",background:"none",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("充值金额")]),r("v-uni-input",{style:{border:"0px solid #eeeeee",padding:"0px 24rpx 0px 24rpx",margin:"0 0 0 0",color:"#666666",borderRadius:"8rpx",flex:"1",background:"#ffffff00",fontSize:"28rpx",lineHeight:"80rpx",height:"80rpx"},attrs:{disabled:e.ro.yue,placeholder:"充值金额"},model:{value:e.ruleForm.yue,callback:function(t){e.$set(e.ruleForm,"yue",t)},expression:"ruleForm.yue"}})],1),r("v-uni-view",{style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#eeeeee",alignItems:"center",borderWidth:"0px 0px 2rpx 0px",background:"none",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("充值时间")]),r("v-uni-input",{style:{border:"0px solid #eeeeee",padding:"0px 24rpx 0px 24rpx",margin:"0 0 0 0",color:"#666666",borderRadius:"8rpx",flex:"1",background:"#ffffff00",fontSize:"28rpx",lineHeight:"80rpx",height:"80rpx"},attrs:{placeholder:"充值时间"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toggleTab("chongzhishijian")}},model:{value:e.ruleForm.chongzhishijian,callback:function(t){e.$set(e.ruleForm,"chongzhishijian",t)},expression:"ruleForm.chongzhishijian"}})],1),r("v-uni-view",{staticClass:"btn",style:{width:"100%",justifyContent:"center",display:"flex",height:"auto"}},[r("v-uni-button",{staticClass:"bg-red",style:{border:"0px solid #eeeeee",padding:"0 0 0 0",margin:"0 4% 0 0",color:"#fff",borderRadius:"60rpx",background:"#d84fa9",width:"30%",lineHeight:"80rpx",fontSize:"28rpx",height:"80rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1),r("w-picker",{ref:"chongzhishijian",attrs:{mode:"dateTime",step:"1",current:!1,hasSecond:!1,themeColor:"#333333"},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.chongzhishijianConfirm.apply(void 0,arguments)}}})],1)],1)},o=[];r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return o})),r.d(t,"a",(function(){return n}))},b952:function(e,t,r){var n=r("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-a8ae0196]{min-height:calc(100vh - 44px);box-sizing:border-box}',""]),e.exports=t},e777:function(e,t,r){"use strict";r.r(t);var n=r("a52c"),i=r("a3f2");for(var o in i)"default"!==o&&function(e){r.d(t,e,(function(){return i[e]}))}(o);r("f5c3");var a,s=r("f0c5"),u=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"a8ae0196",null,!1,n["a"],a);t["default"]=u.exports},f5c3:function(e,t,r){"use strict";var n=r("34ff"),i=r.n(n);i.a}}]);