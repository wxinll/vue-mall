import Vue from 'vue'
import Router from 'vue-router'
import Member from './components/member.vue'

import './components/member_base.css'
import './components/member.css'


Vue.use(Router)

let routes = [{
	path: '/',
	component: Member
}]

let router = new Router({
	routes
})

new Vue({
	el: '#app',
	router
})