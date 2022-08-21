<template>
	<view>
		<!-- 底部跳转区域 -->
		<view class="fixed flex padding-xm bg-cyan justify-center align-center">
			<view class="flex align-center" @click="handleGood(item)" v-for="(item, index) in tabArr">
				{{item.name}}
				<u-line v-if="index !== tabArr.length - 1" direction="col" length="20" color="#ccc" margin="30upx"></u-line>
			</view>
		</view>
		<u-popup :show="popupShow" mode="left"  @close="popupShow = false">
		    <view class="popupStyle">
		        <view :class="['padding-top', {'u-border-bottom': index!==0 }]" v-for="(item, index) in classifyList">
					<view @click="handleItem(item, 0)" class="padding-bottom padding-left">{{item.bname}}</view> 
					<view class="u-border-top" v-if="index === 0">
							<view @click="listShow = !listShow" :class="['padding-tb-sm', 'padding-left', {'u-border-bottom': !listShow }]">口味筛选</view> 
							<u-cell-group v-if="listShow" class="padding-left">
								<u-cell @click="handleItem(kouwei, 1)" v-for="kouwei in item.list" icon="setting-fill" :title="kouwei.tname" isLink></u-cell>
							</u-cell-group>
							<view @click="sceneShow = !sceneShow" :class="['padding-tb-sm', 'padding-left', {'u-border-bottom': !sceneShow }]">场景筛选</view> 
							<u-cell-group v-if="sceneShow" class="padding-left">
								<u-cell @click="handleItem(changjing, 2)" v-for="changjing in item.scene" icon="setting-fill" :title="changjing.tname" isLink></u-cell>
							</u-cell-group>
					</view>
		        </view>
		    </view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		name:"tab-custom",
		data() {
			return {
				tabArr: [{
					name: '分类',
					bcid: '',
					target: '',
				},{
					name: '面包',
					bcid: '11',
					target: '/sub_packages/bread/bread',
				},{
					name: '小食',
					bcid: '6',
					target: '/sub_packages/food/food',
				},{
					name: '蛋糕',
					bcid: '1',
					target: '/sub_packages/cake/cake',
				},{
					name: '购物车',
					bcid: '',
					target: '/sub_packages/cart/cart',
				}],
				bcid: 1, 
				popupShow: false,
				classifyList: [],
				listShow: false,
				sceneShow: false,
			};
		},
		created() {
			this.getClassifyData();
		},
		methods: {
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
				const obj = type === 1 ? {fid :tid} : type === 2 ?{sid :tid}: {}
				this.$store.commit('SET_COND', {
					bcid: bid,
					...obj
				})
				uni.navigateTo({
					url: '/sub_packages/cake/cake'
				})
			}
		}
	}
</script>

<style>
.popupStyle {
	width: 400upx;
	margin-top: 100upx;
}
</style>