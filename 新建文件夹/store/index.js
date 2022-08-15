import Vue from "vue"
import Vuex from "vuex"
import condition from './condition.js'
Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		condition
	}
})

export default store