// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
import 'css/common.css'
import './index.css'
import 'mint-ui/lib/style.css'

import Vue from 'vue'
import router from './router'
import axios from 'axios'
import url from 'js/api.js'
import MintUI from 'mint-ui'

import InfiniteScroll  from 'mint-ui'
import Foot from 'components/Foot.vue'
import Swipe from 'components/Swipe.vue'

Vue.use(InfiniteScroll)

let app = new Vue({
  el: '#app',
  data: {
  	lists: null,
    pageNum: 1,
    pageSize: 6,
    loading: false,
    allLoaded: false,
    bannerLists: null
  },
  components: {
    Foot,Swipe
  }, 
  created(){
    this.getLists()
    this.getBanner()
  },
  methods: {
    getLists(){
      if(this.allLoaded)
        return
      this.loading = true
      axios.post(url.hotLists,{
        pageNum: this.pageNum,
        pageSize: this.pageSize
      }).then(res=> {
        let curLists = res.data.lists
        if(curLists.length < this.pageSize){
          this.allLoaded = true
        }
        if(this.lists){
          this.lists = this.lists.concat(curLists)
        }else{
          this.lists = curLists
        }
        this.pageNum++
        this.loading = false
      })
    },
    getBanner() {
      axios.get(url.banner).then(res => {
        this.bannerLists = res.data.lists
      })
    }
  }
})
