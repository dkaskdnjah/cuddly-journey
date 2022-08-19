export default { 
	namespaced: true,
	state() {
		return {
			cartList: [{
				bcid: 1,
				bcname: "蛋糕",
				id: 10096,
				img: "https://static.mcake.com/new_goods/heisenlinnapolun/N0605/list/1.jpg",
				list: [],
				name: "黑森林拿破仑",
				num: "1",
				pprice: "198.00",
				weight: "454g",
				french: "La Forêt noir",
				price: "198.00",
				spec: "1磅",
				list: [{
					id: 10096,
					ahead: "提前5小时预定",
					edible: "2-3人食",
					name: "蓝莓轻乳拿破仑",
					pprice: "198.00",
					price: "198.00",
					spec: "1磅",
					weight: "454g"
				}, {
					id: 10097,
					ahead: "提前5小时预定",
					edible: "4-7人食",
					name: "蓝莓轻乳拿破仑",
					pprice: "298.00",
					price: "298.00",
					spec: "2磅",
					weight: "454g"
				}, {
					id: 10098,
					ahead: "提前5小时预定",
					edible: "8-12人食",
					name: "蓝莓轻乳拿破仑",
					pprice: "428.00",
					price: "428.00",
					spec: "3磅",
					weight: "454g"
				}, {
					id: 10099,
					ahead: "提前5小时预定",
					edible: "12-20人食",
					name: "蓝莓轻乳拿破仑",
					pprice: "728.00",
					price: "728.00",
					spec: "5磅",
					weight: "454g"
				}],
				check: false,
			}, {
				bcid: 1,
				bcname: "蛋糕",
				img: "https://static.mcake.com/new_goods/lanmeiqingrunapolun/N0301/list/1.jpg",
				list: [{
					id: 10096,
					ahead: "提前5小时预定",
					edible: "2-3人食",
					name: "蓝莓轻乳拿破仑",
					pprice: "198.00",
					price: "198.00",
					spec: "1磅",
					weight: "454g"
				}, {
					id: 10097,
					ahead: "提前5小时预定",
					edible: "4-7人食",
					name: "蓝莓轻乳拿破仑",
					pprice: "298.00",
					price: "298.00",
					spec: "2磅",
					weight: "454g"
				}, {
					id: 10098,
					ahead: "提前5小时预定",
					edible: "8-12人食",
					name: "蓝莓轻乳拿破仑",
					pprice: "428.00",
					price: "428.00",
					spec: "3磅",
					weight: "454g"
				}, {
					id: 10099,
					ahead: "提前5小时预定",
					edible: "12-20人食",
					name: "蓝莓轻乳拿破仑",
					pprice: "728.00",
					price: "728.00",
					spec: "5磅",
					weight: "454g"
				}],
				id: 10097,
				num: "1",
				french: "Napoléon aux myrtilles",
				name: "蓝莓轻乳拿破仑",
				pprice: "298.00",
				price: "298.00",
				spec: "2磅",
				weight: "454g",
				check: false,
			}]
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
		}
	}
}
