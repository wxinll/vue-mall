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

let {id} = qs.parse(location.href.substr(1))

new Vue({
	el: '#app',
	data: {
		details: null
	},
	created(){
		this.getData()
	},
	methods: {
		getData(){
			axios.post(url.details,{id}).then(res=> {
				console.log(res.data.data)
				this.details = res.data.data
			})
		}
	},
	mixins: [mixin]
})
