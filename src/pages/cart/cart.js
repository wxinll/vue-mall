import './cart.css'
import './cart_base.css'
import './cart_trade.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'
import mixin from 'js/mixin.js'
import qs from 'qs'

new Vue({
	el: '#app',
	data: {
		list: null,
		isEditing: false,
		editingMsg: '编辑',
		total: 0,
		editingShop: null,
		editingShopIndex: -1,
		removePopup: false,
		removeMsg: 'x'
	},
	computed: {
		allSelected: {
			get() {
				if (this.list && this.list.length) {
					return this.list.every(shop => {
						return shop.checked
					})
				}
				return false
			},
			set(newVal) {
				this.list.forEach(shop => {
					shop.checked = newVal
					shop.goodsList.forEach(good => {
						good.checked = newVal
					})
				})
			}
		},
		allRemoveSelected: {
			get() {
				if (this.editingShop) {
					return this.editingShop.removeChecked
				}
				return false
			},
			set(newVal) {
				if (this.editingShop) {
					this.editingShop.removeChecked = newVal
					this.editingShop.goodsList.forEach(good => {
						good.removeChecked = newVal
					})
				}
			}
		},
		selectLists() {
			if (this.list && this.list.length) {
				let arr = []
				let total = 0
				this.list.forEach(shop => {
					shop.goodsList.forEach(good => {
						if (good.checked) {
							arr.push(good)
							total += good.price * good.number
						}
					})
				})
				this.total = total
				return arr
			}
			return []
		},
		removeLists() {
			if (this.editingShop) {
				let arr = []
				this.editingShop.goodsList.forEach(good => {
					if (good.removeChecked) {
						arr.push(good)
					}
				})
				return arr
			}
			return []
		}
	},
	created() {
		this.getlist()
	},
	methods: {
		getlist() {
			axios.post(url.cartLists).then(res => {
				let list = res.data.cartList
				list.forEach(shop => {
					shop.checked = true
					shop.removeChecked = false
					shop.isEditing = false
					shop.editingMsg = '编辑'
					shop.goodsList.forEach(goods => {
						goods.checked = true
						goods.removeChecked = false
					})
				})
				this.list = list
			})
		},
		editShop(shop, shopIndex) {
			shop.isEditing = !shop.isEditing
			shop.editingMsg = shop.isEditing ? '完成' : '编辑'
			this.list.forEach((shop, index) => {
				if (index !== shopIndex) {
					shop.isEditing = false
					shop.editingMsg = shop.isEditing ? '' : '编辑'
				}
			})
			this.editingShop = shop.isEditing ? shop : null
			this.editingShopIndex = shop.isEditing ? shopIndex : -1
		},
		selectGoods(shop, goods) {
			let attr = this.editingShop ? 'removeChecked' : 'checked'
			goods[attr] = !goods[attr]
			shop[attr] = shop.goodsList.every(goods => {
				return goods[attr]
			})
		},
		selectShop(shop) {
			let attr = this.editingShop ? 'removeChecked' : 'checked'
			shop[attr] = !shop[attr]
			shop.goodsList.forEach(goods => {
				goods[attr] = shop[attr]
			})
		},
		selectAll() {
			let attr = this.editingShop ? 'allRemoveSelected' : 'allSelected'
			this[attr] = !this[attr]
		},
		addGoods(goods) {
			axios.post(url.cartAdd, {
				id: goods.id,
				number: 1
			}).then(res => {
				goods.number++
			})
		},
		reduceGoods(goods) {
			if (goods.number === 1) return
			axios.post(url.cartReduce, {
				id: goods.id,
				number: 1
			}).then(res => {
				goods.number--
			})
		},
		removeGoods(goods,goodsIndex,shop,shopIndex) {
			this.removePopup = true
			this.removeData = {goods,goodsIndex,shop,shopIndex}
			this.removeMsg = '确定移除该商品吗？'
		},
		removeList() {
			this.removePopup = true
			this.removeMsg = `确定将所选 ${this.removeLists.length} 个商品删除？`
		},
		removeConfirm(){
			if (this.removeMsg === '确定移除该商品吗？'){
				let {goods,goodsIndex,shop,shopIndex} = this.removeData
				this.list[shopIndex].goodsList.splice(goodsIndex,1)
				fetch(url.cartRemove, {id: goods.id})
				.then(res => {
					shop.goodsList.splice(goodsIndex, 1)
					if (!shop.goodsList.length) {
						this.list.splice(shopIndex, 1)
						this.removeShop()
					} //删除店铺
					this.removePopup = false
				})
			}else{
				let ids = []
				this.removeLists.forEach(goods=> {
					ids.push(goods.id)
				})
				axios.post(url.cartMremove, {ids})
				.then(res => {
					this.removeLists.forEach(goods => {
						let index = this.editingShop.goodsList.findIndex(item => {
							return item.id === goods.id
						})
						this.editingShop.goodsList.splice(index, 1)
					})
					if (!this.editingShop.goodsList.length) {
						this.list.splice(this.editingShopIndex, 1)
						this.removeShop()
					} //删除店铺
				})
			}
			this.removePopup = false
		},
		removeShop() {
			this.editingShop = null
			this.editingShopIndex = -1
			this.lists.forEach(shop => {
				shop.editing = false
				shop.editingMsg = '编辑'
			})
		},

	},
	mixins: [mixin]
})