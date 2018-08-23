import 'css/common.css'
import './search.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'
import mixin from 'js/mixin.js'
import qs from 'qs'
import Velocity from 'velocity-animate'

import Foot from 'components/Foot.vue'

let {keyword, id} = qs.parse(location.search.substr(1))

new Vue({
	el: '#app',
	data: {
		keyword,
		id,
		isShow: false,
		searchList: null
	},
	created(){
		this.getLists()
	},
	methods: {
		getLists(){
			axios.post(url.searchList,{keyword,id}).then(res=> {
				this.searchList = res.data.lists
			})
		},
		move(){
			if(document.documentElement.scrollTop > 100){
				this.isShow = true
			}else{
				this.isShow = false
			}
		},
		toTop(){
			Velocity(document.documentElement, {scrollTop: "0px"}, { duration: 200 })
		}
	},
	mixins: [mixin]
})
