<template>
	<view class="flex flex-wrap justify-between padding-sm
	
	">
		<view class="goodFood" v-for="item in goodFoodData">
			<image :src="item.img" mode=""></image>
			<view class="margin-xs">
				<view class="flex align-center justify-between margin-bottom-xs">
					<view class="">
						<view class="">
							{{item.name}}
						</view>
						<view class="">
							{{item.french}}
						</view>
					</view>
					<view class="gouwuche">
						<text class="iconfont icon-Smile"></text>
					</view>
				</view>
				<view class="">
					￥: {{item.price}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"good-food",
		props:['goodFoodData'],
		data() {
			return {
				
			};
		},
	}
</script>

<style lang="scss">
.goodFood{
	width: 350upx;
	image{
		width: 100%;
		height: 350upx;
	}
}
.gouwuche{
	flex: 0 0 60upx;
	height: 60upx;
	text-align: center;
	line-height: 60upx;
	border-radius: 50%;
	background-color: #FBBD08;
}
</style>
