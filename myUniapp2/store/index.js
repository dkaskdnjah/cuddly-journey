import Vue from "vue"
import Vuex from "vuex"
import condition from './condition.js'
import user from './user.js'
Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		condition,
		user,
	}
})

export default store