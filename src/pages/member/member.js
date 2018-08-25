import Vue from 'vue'
import Router from 'vue-router'
import Member from './components/member.vue'
import Address from './components/Address.vue'
import All from './components/All.vue'
import Form from './components/Form.vue'

Vue.use(Router)

let routes = [{
	path: '/',
	component: Member
},{
	path: '/address',
	component: Address,
	children: [
		{
			path: '',
			redirect: 'all'
		},
		{
			path: 'all',
			component: All
		},
		{
			path: 'form',
			component: Form
		}
	]
}]

let router = new Router({
	routes
})

new Vue({
	el: '#app',
	router
})