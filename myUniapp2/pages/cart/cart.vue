<template>
	<view>
		<view class="cartList">
			<view class="bg-fff flex padding-sm" v-for="item in 10">
				<view>
					<text class="iconfont icon-iccheckboxture"></text>
					<image class="imgSize margin-lr-sm" src="../../static/logo.png" mode="widthFix"></image>
				</view>
				<view class="rightInfo">
					<view class="flex justify-between">
						<view class="">
							草莓蛋糕
							<view class="margin-tb-xs">
								CAOMEI
							</view>
							
						</view>
						<text class="iconfont icon-bianji edit"></text>
					</view>
					<view class="flex justify-between">
						￥147.0
						<view class="">
							1磅(454g) x 1
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<view class="flex fixed justify-between bg-fff">
			<view class="padding">
				<text class="iconfont icon-iccheckboxture"></text>
				<text class="margin-left-xs margin-right-lg">全选</text> 
				共计:100
			</view>
			<view class="padding bg-yellow color-fff">
				立即結算
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
page{
	padding-bottom: 100upx;
}
.imgSize {
	width: 150upx;
	vertical-align: middle;
}

.rightInfo {
	width: 70%;
	.edit {
		background-color: #d8d8d8;
		width: 80upx;
		height: 80upx;
		text-align: center;
		line-height: 80upx;
		border-radius: 50%;
	}
}
.fixed {
	width: 100%;
	position: fixed;
	bottom: 0;
	left: 0;
}
</style>
