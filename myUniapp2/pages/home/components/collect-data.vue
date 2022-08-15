<template>
	<view>
		<!-- 重第三方线上接口数据 转录到leancloud 减少请求第三方频率而被封 -->
		<button type="default" @click="handleBanner">转录轮播</button>
		<button type="default" @click="handleGoods">转录商品</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			handleBanner() {
				uni.request({
					url: 'https://h5.mcake.com/api/5e90690f0e270d04?cityId=110',
					method: 'GET',
					header: {
						"access-token": "e74782b8402e586ab738e5efd0d4fc97",
						"version": "v1.0"
					},
					success: ({
						data
					}) => {
						let requests = [];
						data.data.forEach(item => {
							requests.push({
								"method": "POST",
								"path": "/1.1/classes/banner",
								"body": item
							})

						})
						this.$post('/1.1/batch', {
							requests
						})
					},
				})
			},
			handleGoods() {
				uni.request({
					url: 'https://h5.mcake.com/api/0434b49d1ac28f9d?cityId=110&page=2&bid=6',
					method: 'GET',
					header: {
						"access-token": "e74782b8402e586ab738e5efd0d4fc97",
						"version": "v1.0"
					},
					success: ({
						data
					}) => {
						let requests = [];
						const { list } = data.data;
						list.forEach(item => {
							requests.push({
								"method": "POST",
								"path": "/1.1/classes/goods",
								"body": item
							})

						})
						this.$post('/1.1/batch', {
							requests
						})
					},
				})
			},
		}
	}
</script>

<style>

</style>
