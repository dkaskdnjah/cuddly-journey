<template>
	<view>
		<view class="cu-bar bg-white">
			<view class="action">
				<text class="cuIcon-location text-gray"></text> 重庆
			</view>
			<view class="content text-bold">
				MCAKE
			</view>
			<view class="action text-gray">
				<text class="cuIcon-search"></text>
				<u-line direction="col" length="30" color="#ccc" margin="20upx"></u-line>
				<text class="cuIcon-list"></text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"nav-custom",
		data() {
			return {
				
			};
		}
	}
</script>

<style>
.cu-bar{
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1;
}
</style>
