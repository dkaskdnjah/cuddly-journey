export default { 
	namespaced: true,
	state() {
		return {
			cartList: []
		}
	},
	mutations: {
		SET_CARTCHECK(state, idx) {
			state.cartList[idx].check = !state.cartList[idx].check;
		},
		SET_CARTAllCHECK(state, check) {
			console.log(check);
			state.cartList.forEach(Element => {
				Element.check = !check;
			})
		},
		SET_CARTLIST(state, { currentCart, num, specData }) {
			const cartIndex = state.cartList.findIndex(v=> v.id === currentCart.id);
			let obj = {
				num,
				spec: specData.spec,
				id: specData.id,
				price: specData.price,
			}
			Object.assign(state.cartList[cartIndex], obj)
		},
		SET_ADDCARTLIST(state, { allObj, idx} ) {
			
			const { id, spec, price } = allObj.list[idx];
			const isExistIdx = state.cartList.findIndex(v=> v.id == id);
			if (isExistIdx > -1) {
				state.cartList[isExistIdx].num++;
				return
			}
			const newObj = {
				...allObj,
				id,
				spec,
				price,
				num: 1,
				check: false,
			}
			state.cartList.push(newObj);
			uni.showToast({
				icon:"success",
				title: '加入购物车成功'
			})
		}
	}
}
