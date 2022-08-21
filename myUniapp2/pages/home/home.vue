<template>
	<view>
		<scroll-view scroll-with-animation class="scrollCont" scroll-y="true" @scroll="scrollChange" :scroll-into-view="intoView">
			<view id="scrollView"></view>
			
			<!-- 头部导航 -->
			<nav-custom></nav-custom>
			
			<!-- 轮播区域 -->
			<swiper class="banner" :indicator-dots="true" :autoplay="true" indicator-active-color="yellow">
				<swiper-item v-for="item in 3">
					<!-- link 使用欣纬前端启的2.7H5项目地址 -->
					<view class="swiper-item" @click="bannerHandle(item.link)">
						<!-- img 使用node启的 express.static 访问静态资源  -->
						<image src="http://lc-B0CeFVGF.cn-n1.lcfile.com/LXNAkEQfNCwLXbhCugfVqrYA2jpfTwf6/banner.jpg" mode=""></image>
					</view>
				</swiper-item>
			</swiper>
			
			<title-block :title-data="titleData"></title-block>
			
			<!-- 滑动区域 -->
			<scroll-view scroll-x="true" class="scrollImage">
				<image src="http://lc-B0CeFVGF.cn-n1.lcfile.com/Jq7Bhm1xlDUFukMV8tEiO2AF9RrJkY20/recommend1.jpeg" mode="heightFix"></image>
				<image src="http://lc-B0CeFVGF.cn-n1.lcfile.com/0irvWDkzBntf6algvwdBlDakBsR74Qkw/recommend2.jpg" mode="heightFix"></image>
				<image src="http://lc-B0CeFVGF.cn-n1.lcfile.com/xJEV4aFD9oTsiVJi5NHpdLYS6f3zKSNz/recommend3.jpg" mode="heightFix"></image>
			</scroll-view>
			
			<title-block :title-data="titleData1"></title-block>
			
			<image style="width: 100%;height: 400upx" src="http://lc-B0CeFVGF.cn-n1.lcfile.com/spBcUT8HvagECQvgH9G6w2L9WHJatFAt/french.jpg" mode=""></image>
			
			<!-- 商品列表 -->
			<good-food :good-food-data="goodFoodData"></good-food>
			
			<view class="scrollTop" v-if="isShow" @click="scrollTopHandle">
				<text class="iconfont icon-bianji"></text>
			</view>
			<tab-custom></tab-custom>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				titleData: {
					title: '本季',
					smTitle: '推荐',
					sdTitle: 'Seasonal Recommend',
				},
				titleData1: {
					title: '法式',
					smTitle: '经典',
					sdTitle: 'French Classics',
				},
				isShow: false,
				intoView: '',
				bannerData: [],
				goodFoodData: [],
				page: 0,
				bcid: 1, 
				sceneShow: false,
			}
		},
		computed: {
			condition() {
				return this.$store.state.condition.cond; 
			}
		},
		methods: {
			scrollChange(ev) {
				const { scrollTop } = ev.detail;
				this.isShow = scrollTop>500;
				this.intoView = '';
			},
			scrollTopHandle(){
				this.intoView = 'scrollView';
			},
			bannerHandle(link) {
				uni.navigateTo({
					url:`./components/banner-ad?link=${link}`
				})
			},
			reLoadData() {
				this.goodFoodData = [];
				this.page = 0;
				this.getData();
			},
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
			handleGood(item) {
				const { bcid, target } = item;
				if (bcid) {
					this.$store.commit('SET_COND', {
						bcid: Number(bcid)
					})
					uni.navigateTo({
						url: target
					})
				}
				if (!bcid && !target) {
					this.popupShow = true;
				}
				
				if (!bcid && target) {
					uni.navigateTo({
						url: target
					})
				}
			},
			getClassifyData() {
				this.$get(`/1.1/classes/banner`).then(res => {
					this.classifyList = res.data.results;
				})
			},
			handleItem({bid, tid}, type) {
				const obj = type === 1 ? {fid :tid} : {sid :tid}
				this.$store.commit('SET_COND', {
					bcid: bid,
					...obj
				})
				this.reLoadData();
			}
		},
		onLoad() {
			this.getData();
			this.getClassifyData();
		},
		// scroll-view 组件会影响触底
		onReachBottom() {
			this.getData();
		},
		onPullDownRefresh() {
			this.reLoadData();
		}
	}
</script>

<style lang="scss">
	page {
			height: initial;
			overflow-y: initial;
			min-height: 100vh;
			padding: 100upx 0 70upx;
			background-color: white;
		}
.scrollCont{
	height: 100vh;
	.banner{
		height: 1000upx;
		swiper-item{
			height: 1000upx;
			image{
				width: 100%;
				height: 1000upx;
			}
		}
		
	}
	.scrollImage{
		white-space: nowrap;
		image{
			width: 200upx;
			height: 290upx;
		}
	}
	.scrollTop{
		width: 80upx;
		height: 80upx;
		text-align: center;
		line-height: 80upx;
		background-color: white;
		border-radius: 50%;
		box-shadow: 0 0 20upx 4upx rgba(0, 0, 0, .5);
		position: fixed;
		right: 20upx;
		bottom: 100upx;
	}
	
	.footer{
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
	}
}
.popupStyle {
	width: 400upx;
	margin-top: 100upx;
}
</style>
