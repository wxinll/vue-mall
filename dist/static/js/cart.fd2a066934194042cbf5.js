webpackJsonp([6],{"0C+S":function(e,t){},NW8W:function(e,t){},TFhR:function(e,t,i){"use strict";var s={hotLists:"/index/hotLists",banner:"/index/banner",topList:"/category/topList",subList:"/category/subList",rank:"/category/rank",searchList:"/search/list",details:"/goods/details",deal:"/goods/deal",cartAdd:"/cart/add",cartRemove:"/cart/remove",cartMremove:"/cart/mremove",cartReduce:"/cart/reduce",cartLists:"/cart/list",cartUpdate:"/cart/update",addressLists:"/address/list",addressAdd:"/address/add",addressRemove:"/address/remove",addressUpdate:"/address/update",addressSetDefault:"/address/setDefault"};for(var o in s)s.hasOwnProperty(o)&&(s[o]="http://rap2api.taobao.org/app/mock/7058"+s[o]);t.a=s},"U/rD":function(e,t,i){"use strict";t.a={filters:{formatPrice:function(e){var t=(e+"").split("");if(t.indexOf(".")>-1){var i=t.indexOf(".");(t=t.slice(0,i+2)).push("0")}else t.push(".00");return t.join("")}}}},eC21:function(e,t){},gWPi:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("eC21"),o=(i.n(s),i("NW8W")),n=(i.n(o),i("0C+S")),d=(i.n(n),i("7+uW")),r=i("mtWM"),c=i.n(r),h=i("TFhR"),a=i("U/rD"),u=i("mw3O");i.n(u);new d.default({el:"#app",data:{list:null,isEditing:!1,editingMsg:"编辑",total:0,editingShop:null,editingShopIndex:-1,removePopup:!1,removeMsg:"x"},computed:{allSelected:{get:function(){return!(!this.list||!this.list.length)&&this.list.every(function(e){return e.checked})},set:function(e){this.list.forEach(function(t){t.checked=e,t.goodsList.forEach(function(t){t.checked=e})})}},allRemoveSelected:{get:function(){return!!this.editingShop&&this.editingShop.removeChecked},set:function(e){this.editingShop&&(this.editingShop.removeChecked=e,this.editingShop.goodsList.forEach(function(t){t.removeChecked=e}))}},selectLists:function(){if(this.list&&this.list.length){var e=[],t=0;return this.list.forEach(function(i){i.goodsList.forEach(function(i){i.checked&&(e.push(i),t+=i.price*i.number)})}),this.total=t,e}return[]},removeLists:function(){if(this.editingShop){var e=[];return this.editingShop.goodsList.forEach(function(t){t.removeChecked&&e.push(t)}),e}return[]}},created:function(){this.getlist()},methods:{getlist:function(){var e=this;c.a.post(h.a.cartLists).then(function(t){var i=t.data.cartList;i.forEach(function(e){e.checked=!0,e.removeChecked=!1,e.isEditing=!1,e.editingMsg="编辑",e.goodsList.forEach(function(e){e.checked=!0,e.removeChecked=!1})}),e.list=i})},editShop:function(e,t){e.isEditing=!e.isEditing,e.editingMsg=e.isEditing?"完成":"编辑",this.list.forEach(function(e,i){i!==t&&(e.isEditing=!1,e.editingMsg=e.isEditing?"":"编辑")}),this.editingShop=e.isEditing?e:null,this.editingShopIndex=e.isEditing?t:-1},selectGoods:function(e,t){var i=this.editingShop?"removeChecked":"checked";t[i]=!t[i],e[i]=e.goodsList.every(function(e){return e[i]})},selectShop:function(e){var t=this.editingShop?"removeChecked":"checked";e[t]=!e[t],e.goodsList.forEach(function(i){i[t]=e[t]})},selectAll:function(){var e=this.editingShop?"allRemoveSelected":"allSelected";this[e]=!this[e]},addGoods:function(e){c.a.post(h.a.cartAdd,{id:e.id,number:1}).then(function(t){e.number++})},reduceGoods:function(e){1!==e.number&&c.a.post(h.a.cartReduce,{id:e.id,number:1}).then(function(t){e.number--})},removeGoods:function(e,t,i,s){this.removePopup=!0,this.removeData={goods:e,goodsIndex:t,shop:i,shopIndex:s},this.removeMsg="确定移除该商品吗？"},removeList:function(){this.removePopup=!0,this.removeMsg="确定将所选 "+this.removeLists.length+" 个商品删除？"},removeConfirm:function(){var e=this;if("确定移除该商品吗？"===this.removeMsg){var t=this.removeData,i=t.goods,s=t.goodsIndex,o=t.shop,n=t.shopIndex;this.list[n].goodsList.splice(s,1),fetch(h.a.cartRemove,{id:i.id}).then(function(t){o.goodsList.splice(s,1),o.goodsList.length||(e.list.splice(n,1),e.removeShop()),e.removePopup=!1})}else{var d=[];this.removeLists.forEach(function(e){d.push(e.id)}),c.a.post(h.a.cartMremove,{ids:d}).then(function(t){e.removeLists.forEach(function(t){var i=e.editingShop.goodsList.findIndex(function(e){return e.id===t.id});e.editingShop.goodsList.splice(i,1)}),e.editingShop.goodsList.length||(e.list.splice(e.editingShopIndex,1),e.removeShop())})}this.removePopup=!1},removeShop:function(){this.editingShop=null,this.editingShopIndex=-1,this.lists.forEach(function(e){e.editing=!1,e.editingMsg="编辑"})}},mixins:[a.a]})}},["gWPi"]);
//# sourceMappingURL=cart.fd2a066934194042cbf5.js.map