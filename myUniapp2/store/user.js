import http  from '../utils/api.js'
const { $post } = http;
export default {
	state () {
		return {
			userInfo: null
		}
	},
	mutations: {
		SET_USERINFO (state, obj) {
			state.userInfo = obj;
		}
	},
	actions: {
		userInfoAct(context, obj) {
			$post('/1.1/login', obj).then( res => {
				
				if (res.statusCode !== 200) {
					const title = res.data.code === 211 ? '账号不存在' : res.data.code === 210?'密码错误': res.data.error
					uni.showToast({
						title,
						icon: 'none'
					})
					return
				}
				console.log(context);
				context.commit("SET_USERINFO", res.data);
				uni.setStorage({
					key: 'storage_key',
					data: 'hello',
					success: function () {
						console.log('success');
					}
				});
				console.log(res);
				uni.setStorage({
					key: 'userInfo',
					data: res.data
				})
				uni.navigateBack({
					delta: 1
				})
			})
		}
	}
}