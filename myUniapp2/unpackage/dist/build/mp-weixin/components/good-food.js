(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/good-food"],{"2e57":function(t,n,a){},"42b5":function(t,n,a){"use strict";var o=a("2e57"),e=a.n(o);e.a},"4aa5":function(t,n,a){"use strict";a.r(n);var o=a("baa1"),e=a.n(o);for(var u in o)"default"!==u&&function(t){a.d(n,t,(function(){return o[t]}))}(u);n["default"]=e.a},"56bd":function(t,n,a){"use strict";var o;a.d(n,"b",(function(){return e})),a.d(n,"c",(function(){return u})),a.d(n,"a",(function(){return o}));var e=function(){var t=this,n=t.$createElement;t._self._c},u=[]},baa1:function(t,n,a){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={name:"good-food",props:["goodFoodData"],data:function(){return{}},methods:{toDetail:function(n){console.log(n),t.navigateTo({url:"/sub_packages/detail/detail?detailData="+JSON.stringify(n)})},handleAdd:function(t){this.$store.commit("cart/SET_ADDCARTLIST",{allObj:t,idx:0})}}};n.default=a}).call(this,a("543d")["default"])},bce0:function(t,n,a){"use strict";a.r(n);var o=a("56bd"),e=a("4aa5");for(var u in e)"default"!==u&&function(t){a.d(n,t,(function(){return e[t]}))}(u);a("42b5");var r,c=a("f0c5"),i=Object(c["a"])(e["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);n["default"]=i.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/good-food-create-component',
    {
        'components/good-food-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("bce0"))
        })
    },
    [['components/good-food-create-component']]
]);
