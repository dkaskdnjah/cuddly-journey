import api from '@/utils/api.js'
const {
	$post,
	$get,
	$put,
	$delete,
} = api
export default {
	namespaced: true,
	state() {
		return {
			addressList: [],
			checkAddressId: 1,
		}
	},
	getters: {
		getCheckAddress(state) {
			return state.addressList.find(v => v.objectId == state.checkAddressId);
		}
	},
	mutations: {
		SET_ARRRESSDEFAULT(state, obj) {
			state.addressList.forEach(item => {
				item.default = item.objectId === obj.objectId;
			})
			state.checkAddressId = obj.objectId;
		},
		SET_CHECKADRESS(state, obj) {
			state.checkAddressId = obj.objectId;
			uni.navigateBack({
				delta: 1,
			})
		},
		SET_ADDADDRESSLIST(state, { addressObj, objectId }) {
			if (!addressObj.objectId) {
				addressObj.objectId = objectId;
				console.log(addressObj);
				state.addressList.push(addressObj);
				return
			}
			const editObjIndex = state.addressList.findIndex(v => v.objectId == addressObj.objectId);
			for (let var1 in addressObj) {
				state.addressList[editObjIndex][var1] = addressObj[var1]
			}
		},
		SET_DELADDRESSLIST(state, obj) {
			const delObjIndex = state.addressList.findIndex(v => v.objectId == obj.objectId);
			state.addressList.splice(delObjIndex, 1)
		},
		SET_INITADDADDRESSLIST(state, data) {
			state.addressList = data
		},
	},
	actions: {
		addAddressAct(context, addressObj) {
			if (!addressObj.objectId) {
				$post('/1.1/classes/address', addressObj).then(res => {
					if (res.statusCode == 201) {
						console.log(res);
						uni.showToast({
							icon: 'none',
							title: '保存成功',
							success() {
								setTimeout(() => {
									context.commit("SET_ADDADDRESSLIST", { addressObj, objectId: res.data.objectId })
									uni.navigateBack({
										delta: 1,
									})
								}, 2000)
							}
						})
					}
				})
				return
			}
			$put(`/1.1/classes/address/${addressObj.objectId}`, addressObj).then(res => {
				if (res.statusCode == 200) {
					uni.showToast({
						icon: 'none',
						title: '修改成功',
						success() {
							setTimeout(() => {
								context.commit("SET_ADDADDRESSLIST", { addressObj })
								uni.navigateBack({
									delta: 1,
								})
							}, 2000)
						}
					})
				}
			})
		},
		getAddressAct(context, userId) {
			const getAddressSql = `/1.1/classes/address?where={"userId": "${userId}"}`
			$get(getAddressSql).then(res => {
				if (res.statusCode == 200) {
					context.commit("SET_INITADDADDRESSLIST", res.data.results)
				}
			})
		},
		updateAddressDefault({
			commit,
			state
		}, obj) {
			const data = state.addressList.reduce((pe, el) => {
				pe.push({
					"method": "PUT",
					"path": `/1.1/classes/address/${el.objectId}`,
					"body": {
						"default": el.objectId == obj.objectId,
					}
				}, )
				return pe
			}, [])
			$post('/1.1/batch', {
				"requests": data
			}).then(res => {
				if (res.statusCode == 200) {
					commit("SET_ARRRESSDEFAULT", obj)
				}
			})
		},
		deleteAddressAct(context, addressObj) {
			console.log(addressObj);
			$delete(`/1.1/classes/address/${addressObj.objectId}`).then(res => {
				if (res.statusCode == 200) {
					uni.showToast({
						icon: 'none',
						title: '删除成功'
					})
					context.commit("SET_DELADDRESSLIST", addressObj)
				}
			})
		}
	}
}
