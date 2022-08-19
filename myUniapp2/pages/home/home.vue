<template>
	<view>
		<scroll-view scroll-with-animation class="scrollCont" scroll-y="true" @scroll="scrollChange" :scroll-into-view="intoView">
			<view id="scrollView"></view>
			
			<!-- 头部导航 -->
			<nav-custom></nav-custom>
			
			<!-- 轮播区域 -->
			<swiper class="banner" :indicator-dots="true" :autoplay="true" indicator-active-color="yellow">
				<swiper-item v-for="item in bannerData" :key="item.objectId">
					<!-- link 使用欣纬前端启的2.7H5项目地址 -->
					<view class="swiper-item" @click="bannerHandle(item.link)">
						<!-- img 使用node启的 express.static 访问静态资源  -->
						<image :src="item.img" mode=""></image>
					</view>
				</swiper-item>
			</swiper>
			
			<title-block :title-data="titleData"></title-block>
			
			<!-- 滑动区域 -->
			<scroll-view scroll-x="true" class="scrollImage">
				<image src="../../static/logo.png" mode="heightFix"></image>
				<image src="../../static/logo.png" mode="heightFix"></image>
				<image src="../../static/logo.png" mode="heightFix"></image>
			</scroll-view>
			
			<title-block :title-data="titleData1"></title-block>
			
			<!-- 商品列表 -->
			<good-food :good-food-data="goodFoodData"></good-food>
			
			<view class="scrollTop" v-if="isShow" @click="scrollTopHandle">
				<text class="iconfont icon-bianji"></text>
			</view>
			
			<!-- 底部跳转区域 -->
			<view class="footer flex padding-xm bg-cyan justify-center align-center">
				<view class="flex align-center" @click="handleGood(item)" v-for="(item, index) in tabArr">
					{{item.name}}
					<u-line v-if="index !== tabArr.length - 1" direction="col" length="20" color="#ccc" margin="30upx"></u-line>
				</view>
			</view>
		</scroll-view>
		
		<u-popup :show="popupShow" mode="left"  @close="popupShow = false">
		    <view class="popupStyle">
		        <view :class="['padding-top', {'u-border-bottom': index!==0 }]" v-for="(item, index) in classifyList">
					<view class="padding-bottom padding-left">{{item.bname}}</view> 
					<view class="u-border-top" v-if="index === 0">
							<view @click="listShow = !listShow" :class="['padding-tb-sm', 'padding-left', {'u-border-bottom': !listShow }]">口味筛选</view> 
							<u-cell-group v-if="listShow" class="padding-left">
								<u-cell @click="handleItem(kouwei, 1)" v-for="(kouwei,index) in item.list" icon="setting-fill" :title="kouwei.tname" isLink></u-cell>
							</u-cell-group>
							<view @click="sceneShow = !sceneShow" :class="['padding-tb-sm', 'padding-left', {'u-border-bottom': !sceneShow }]">场景筛选</view> 
							<u-cell-group v-if="sceneShow" class="padding-left">
								<u-cell @click="handleItem(changjing, 2)" v-for="(changjing,index) in item.scene" icon="setting-fill" :title="changjing.tname" isLink></u-cell>
							</u-cell-group>
					</view>
		        </view>
		    </view>
		</u-popup>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				titleData: {
					title: '早上好啊',
					smTitle: 'good morning',
					sdTitle: 'morning',
				},
				titleData1: {
					title: '下午好啊',
					smTitle: 'good afternoon',
					sdTitle: 'afternoon',
				},
				isShow: false,
				intoView: '',
				bannerData: [],
				goodFoodData: [],
				page: 0,
				tabArr: [{
					name: '分类',
					bcid: '',
					target: '',
				},{
					name: '面包',
					bcid: '11',
					target: '',
				},{
					name: '小食',
					bcid: '6',
					target: '',
				},{
					name: '蛋糕',
					bcid: '1',
					target: '',
				},{
					name: '购物车',
					bcid: '',
					target: '/pages/cart/cart',
				}],
				bcid: 1, 
				popupShow: false,
				classifyList: [],
				listShow: false,
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
					this.reLoadData();
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
