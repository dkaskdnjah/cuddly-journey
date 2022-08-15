export default {
	state () {
		return {
			cond: {
				bcid: 1,
			}
		}
	},
	mutations: {
		SET_COND (state, obj) {
			state.cond = obj;
		}
	}
}