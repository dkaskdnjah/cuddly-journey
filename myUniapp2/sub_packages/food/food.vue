<template>
	<view>
		<!-- 商品列表 -->
		<good-food :good-food-data="goodFoodData"></good-food>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				page: 0,
				goodFoodData: [],
			}
		},
		computed: {
			condition() {
				return this.$store.state.condition.cond; 
			}
		},
		methods: {
			getData() {
				const skip = this.page*8;
				const condition = JSON.stringify(this.condition);
				const url = `/1.1/classes/goods?where=${condition}&limit=8&skip=${skip}`
				this.$get(url).then(res => {
					uni.stopPullDownRefresh();
					const { results } = res.data;
					if (results.length) {
						this.page++;
						this.goodFoodData = [...this.goodFoodData, ...results];
						
						return
					}
					
					uni.showToast({
						title: "暂无更多数据",
						icon:'none'
					})
				})
			},
		},
		onLoad() {
			this.getData();
		},
		onPullDownRefresh() {
			this.reLoadData();
		},
		// scroll-view 组件会影响触底
		onReachBottom() {
			this.getData();
		},
	}
</script>

<style>

</style>
