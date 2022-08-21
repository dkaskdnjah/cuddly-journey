<script>
	export default {
		onLaunch: function() {
			const userInfo =  uni.getStorageSync("userInfo");
			this.$store.commit("SET_USERINFO", userInfo);
			this.$store.dispatch("address/getAddressAct", userInfo.objectId)
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import '@/uni_modules/uview-ui/index.scss';
	@import '@/colorui/icon.css';
	@import '@/colorui/main.css';
	@import '/static/iconfont/iconfont.css';
</style>
