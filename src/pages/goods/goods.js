import './goods.css'
import './goods_base.css'
import './goods_common.css'
import './goods_custom.css'
import './goods_mars.css'
import './goods_sku.css'
import './goods_theme.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'
import mixin from 'js/mixin.js'
import qs from 'qs'
import Swipe from 'components/Swipe.vue'

let {id} = qs.parse(location.href.substr(1))

new Vue({
	el: '#app',
	data: {
		details: null,
		tabIndex: 0,
		dealLists: null,
		dealLock: false,
		swipeLists: [],
		showSku: false,
		skuType: 1,
	    skuNum: 1,
	    isAddCart: false,
	    showAddMessage: false

	},
	components: {
		Swipe
	},	
	created(){
		this.getDetails()
	},
	watch: {
		// 弹出层后内容层禁止滑动
		showSku(val) {
		  document.body.style.overflow = val ? 'hidden' : 'auto'
		  document.body.style.height = val ? '100%' : 'auto'
		  document.querySelector('html').style.overflow = val ? 'hidden' : 'auto'
		  document.querySelector('html').style.height = val ? '100%' : 'auto'
		}
  	},
	methods: {
		getDetails(){
			axios.post(url.details,{id}).then(res=> {
				console.log(res.data.data)
				let data = res.data.data
				this.details = data

				data.imgs.forEach(item=> {
					this.swipeLists.push({
						clickUrl: '',
						img: item
					})
				})
			})
		},
		changeTabIndex(index){
			this.tabIndex = index
			if (index) {
				this.getDeal()
				this.dealLock = true
			}else{
				this.dealLock = false
			}
		},
		getDeal(){
			if(!this.dealLock){
				axios.post(url.deal, { id }).then(res => {
					let data = res.data.data
					this.dealLists = data.lists
				})
			}
		},
		chooseSku(index){
			this.showSku = true
			this.skuType = index
		},
		changeSkuNum(num) {
		  if (num < 0 && this.skuNum === 1) return
		  this.skuNum += num
		},
		addCart() {
		  axios(url.cartAdd, {id, number: this.skuNum}).then(res => {
		    if(res.data.status === 200 ){
		      this.isAddCart = true
		      this.showSku = false
		      this.showAddMessage = true
		      setTimeout(() => {
		        this.showAddMessage = false
		      },1000)
		    }
		  })
		}		
	},
	mixins: [mixin]
})
