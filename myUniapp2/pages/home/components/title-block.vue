<template>
	<view class="padding flex justify-between align-center margin-xs">
		<view class="flex align-center">
			<text class="iconfont icon-cangpeitubiao_xiayi margin-right"></text>
			<view class="fs-28">
				{{titleData.title}}
				<view class="fs-14">
					{{titleData.smTitle}}
				</view>
			</view>
		</view>
		<view class="">
			{{titleData.sdTitle}}
		</view>
	</view>
</template>

<script>
	export default {
		props:['titleData'],
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
.icon-notConnected{
	font-size: 60upx;
}
</style>
