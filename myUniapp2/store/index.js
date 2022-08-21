import Vue from "vue"
import Vuex from "vuex"
import condition from './condition.js'
import user from './user.js'
import cart from './cart.js'
import address from './address'
Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		condition,
		user,
		cart,
		address,
	}
})

export default store