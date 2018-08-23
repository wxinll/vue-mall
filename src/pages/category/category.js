import 'css/common.css'
import './category.css'

import url from 'js/api.js'

import Vue from 'vue'
import axios from 'axios'
import Foot from 'components/Foot.vue'
import mixin from 'js/mixin.js'

new Vue({
	el: '#app',
	components: {
		Foot
	},
	data: {
		topLists: null,
		subData: null,
		rankData: null,
		activeIndex: 0
	},
	created(){
		this.getTopList()
		this.getSubData(0)
	},	
	methods: {
		getTopList(){
			axios.post(url.topList).then(res=> {
				this.topLists = res.data.lists
			})
		},
		getSubData(index,id){
			this.activeIndex = index
			if(index === 0){
				this.getRank()
			}else{
				axios.post(url.subList,{id}).then(res=> {
					this.subData = res.data.data
				})
			}
		},
		getRank(){
			axios.post(url.rank).then(res=> {
				this.rankData = res.data.data
			})
		}
	},
	mixins: [mixin]
})
