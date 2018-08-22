// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
import 'css/common.css'
import './index.css'

import Vue from 'vue'
import router from './router'
import axios from 'axios'
import url from 'js/api.js'

let app = new Vue({
  el: '#app',
  data: {
  	lists: null
  },
  created(){
  	axios.post(url.hostLists,{
  		pageNum: 1,
  		pageSize: 6
  	}).then(res=> {
  		this.lists = res.data.lists 
  	})
  }
})
