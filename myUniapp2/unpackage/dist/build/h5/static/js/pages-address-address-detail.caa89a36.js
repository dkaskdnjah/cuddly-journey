(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-address-address-detail"],{"4ec0":function(t,e,i){"use strict";i.r(e);var a=i("6358"),n=i("fbbb");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("b0a0");var o,c=i("f0c5"),r=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"9dbdeefc",null,!1,a["a"],o);e["default"]=r.exports},6358:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-form",{on:{submit:function(e){arguments[0]=e=t.$handleEvent(e),t.handleSubmit.apply(void 0,arguments)}}},[i("v-uni-map",{staticClass:"myMap"}),i("v-uni-view",{staticClass:"cu-form-group margin-top"},[i("v-uni-view",{staticClass:"title"},[i("v-uni-text",{staticClass:"cuIcon-friendfill"})],1),i("v-uni-input",{staticClass:"text-right",attrs:{name:"name",placeholder:"请输入昵称"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),i("v-uni-view",{staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[i("v-uni-text",{staticClass:"cuIcon-mobilefill"})],1),i("v-uni-input",{staticClass:"text-right",attrs:{name:"phone",placeholder:"请输入号码"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),i("v-uni-view",{staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[i("v-uni-text",{staticClass:"cuIcon-locationfill"})],1),i("v-uni-picker",{attrs:{range:t.picker},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.pickerChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"picker"},[t._v(t._s(-1!=t.region?t.picker[t.region]:"请选择区域"))])],1)],1),i("v-uni-view",{staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[i("v-uni-text",{staticClass:"cuIcon-locationfill"})],1),i("v-uni-input",{staticClass:"text-right",attrs:{name:"detail",placeholder:"请输入详细地址"},model:{value:t.detail,callback:function(e){t.detail=e},expression:"detail"}})],1),i("v-uni-view",{staticClass:"margin-top"},[i("v-uni-button",{staticClass:"bg-brown",attrs:{"form-type":"submit"}},[t._v("确定")])],1)],1)],1)},s=[]},b0a0:function(t,e,i){"use strict";var a=i("e8ef"),n=i.n(a);n.a},cba7:function(t,e,i){"use strict";var a=i("4ea4");i("c975"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("5530")),s=i("26cb"),o={data:function(){return{name:"",phone:"",detail:"",region:-1,picker:["海珠区","荔湾区","天河区"],parseData:null}},computed:(0,n.default)({},(0,s.mapState)({userInfo:function(t){return t.user.userInfo}})),created:function(){var t=this.$route.query.detailData,e=JSON.parse(t);if(e.objectId){this.parseData=e;var i=e.name,a=e.phone,n=e.detail,s=e.region;this.name=i,this.phone=a,this.detail=n,this.region=this.picker.indexOf(s)}},methods:{handleSubmit:function(t){var e=t.detail.value;if(e.name)if(e.phone)if(-1!=this.region)if(e.detail){var i=this.region,a=this.picker,n=this.userInfo;e.region=a[i],e.city="重庆市",e.default=!1,e.userId=n.objectId,e.objectId=this.parseData?this.parseData.objectId:"",this.$store.dispatch("address/addAddressAct",e)}else uni.showToast({icon:"none",title:"请填写详细地址"});else uni.showToast({icon:"none",title:"请选择区域"});else uni.showToast({icon:"none",title:"请填写手机号码"});else uni.showToast({icon:"none",title:"请填写昵称"})},pickerChange:function(t){var e=t.detail.value;this.region=e}}};e.default=o},e0cc:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".myMap[data-v-9dbdeefc]{width:100%;height:%?400?%}",""]),t.exports=e},e8ef:function(t,e,i){var a=i("e0cc");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("c1c94f7e",a,!0,{sourceMap:!1,shadowMode:!1})},fbbb:function(t,e,i){"use strict";i.r(e);var a=i("cba7"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a}}]);