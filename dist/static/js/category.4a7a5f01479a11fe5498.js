webpackJsonp([5],{"035s":function(t,a){},"Ccv+":function(t,a){},Hwmd:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("035s"),s=(e.n(n),e("igmb")),i=(e.n(s),e("TFhR")),r=e("7+uW"),o=e("mtWM"),c=e.n(o),d=e("nq5D"),u=e("U/rD");new r.default({el:"#app",components:{Foot:d.a},data:{topLists:null,subData:null,rankData:null,activeIndex:0},created:function(){this.getTopList(),this.getSubData(0)},methods:{getTopList:function(){var t=this;c.a.post(i.a.topList).then(function(a){t.topLists=a.data.lists})},getSubData:function(t,a){var e=this;this.activeIndex=t,0===t?this.getRank():c.a.post(i.a.subList,{id:a}).then(function(t){e.subData=t.data.data})},getRank:function(){var t=this;c.a.post(i.a.rank).then(function(a){t.rankData=a.data.data})},toSearch:function(t){location.href="search.html?keyword="+t.name+"&id="+t.id}},mixins:[u.a]})},TFhR:function(t,a,e){"use strict";var n={hotLists:"/index/hotLists",banner:"/index/banner",topList:"/category/topList",subList:"/category/subList",rank:"/category/rank",searchList:"/search/list",details:"/goods/details",deal:"/goods/deal",cartAdd:"/cart/add",cartRemove:"/cart/remove",cartMremove:"/cart/mremove",cartReduce:"/cart/reduce",cartLists:"/cart/list",cartUpdate:"/cart/update",addressLists:"/address/list",addressAdd:"/address/add",addressRemove:"/address/remove",addressUpdate:"/address/update",addressSetDefault:"/address/setDefault"};for(var s in n)n.hasOwnProperty(s)&&(n[s]="http://rap2api.taobao.org/app/mock/7058"+n[s]);a.a=n},"U/rD":function(t,a,e){"use strict";a.a={filters:{formatPrice:function(t){var a=(t+"").split("");if(a.indexOf(".")>-1){var e=a.indexOf(".");(a=a.slice(0,e+2)).push("0")}else a.push(".00");return a.join("")}}}},igmb:function(t,a){},nq5D:function(t,a,e){"use strict";var n=e("mw3O"),s=e.n(n),i=[{name:"有赞",icon:"icon-home",href:"index.html"},{name:"分类",icon:"icon-category",href:"category.html"},{name:"购物车",icon:"icon-cart",href:"cart.html"},{name:"我",icon:"icon-user",href:"member.html"}],r={data:function(){return{navConfig:i,activeIndex:parseInt(s.a.parse(location.search.substr(1)).index)||0}},methods:{changeHref:function(t,a){location.href=t.href+"?index="+a}}},o={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"bottom-nav"},[e("ul",t._l(t.navConfig,function(a,n){return e("li",{class:{active:n===t.activeIndex},on:{click:function(e){t.changeHref(a,n)}}},[e("a",[e("i",{class:a.icon}),t._v(" "),e("div",[t._v(t._s(a.name))])])])}))])},staticRenderFns:[]};var c=e("VU/8")(r,o,!1,function(t){e("Ccv+")},null,null);a.a=c.exports}},["Hwmd"]);
//# sourceMappingURL=category.4a7a5f01479a11fe5498.js.map